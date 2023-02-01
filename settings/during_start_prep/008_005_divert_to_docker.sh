if [ "$(uname)" = "Darwin" ] 
then
    # docker cleaning:
    #     # prune dangling volumes (basically always safe)
    #     docker volume rm `docker volume ls -q -f dangling=true`
    #     # remove images not used by any container
    #     docker rmi $(docker images -q)
    #     # ! prune containers
    #     docker container prune
    #     # (VERY AGRESSIVE) remove images not being used by any ACTIVE container
    #     docker rmi -f $(docker images -q)
    
    cd "$FORNIX_FOLDER"
    system_tools_hash_file="$FORNIX_FOLDER/settings/home/temp.cleanable/system_tools_hash.txt"
    docker_home="$FORNIX_FOLDER/settings/home/temp.cleanable/docker_home/"  ; mkdir -p "$docker_home"
    fornix_storage="$FORNIX_FOLDER/settings/home/temp.cleanable/fornix_storage/"; mkdir -p "$fornix_storage"
    fornix_cache="$FORNIX_FOLDER/settings/home/temp.cleanable/fornix_cache/"; mkdir -p "$fornix_cache"
    echo '
        if [ -f "/nix/var/nix/profiles/default/etc/profile.d/nix-daemon.sh" ]; then                                  
            . "/nix/var/nix/profiles/default/etc/profile.d/nix-daemon.sh"                                            
        fi                                                                                                           
        if [ -f "$HOME/.nix-profile/etc/profile.d/nix.sh" ]; then                                                    
            . "$HOME/.nix-profile/etc/profile.d/nix.sh"                                                              
        fi                                                                                                           
        export PATH="$PATH:/nix/var/nix/profiles/default/bin/:/nix/var/nix/profiles/per-user/$(whoami)/profile/bin/" 
        export NIXPKGS_ALLOW_UNFREE=1
        
        # # Dont link it, mv to a volume dir, then mount the sub-volume as /nix
        # if ! [ -d "/external/nix/store" ] || ! [ -d "/external/nix/var" ]
        # then
        #     if [ -e "/external/nix" ]; then
        #         echo "removing /external/nix, which can take a while"
        #         while ! { sudo chown -R $(whoami) /external/nix && sudo chmod -R 777 /external/nix && sudo rm -rf /external/nix; } ; do
        #             echo "was unable to remove /external/nix for some reason, sleeping then trying again"
        #             ll /external/
        #             ll /external/nix
        #             sleep 10
        #         done
        #     fi
        #     echo "moving /nix to /external/nix"
        #     sudo bash -c '"'"'
        #         total="$(tree /nix | wc -l)"
        #         remaining="$(tree /external/nix | wc -l)"
                
        #         still_running () {
        #             # /dev/null, however, so we dont actually have to look at it. We just want
        #             # the return code, `$?`, which will be 0 if the process exists and some other
        #             # number if not.
        #             ps --pid "$1" 1>/dev/null 2>/dev/null
        #             if [ "$?" -eq 0 ]; then
        #                 return 0
        #             else
        #                 return 1
        #             fi
        #         }
                
        #         mv /nix /external/ &
        #         move_pid="$!"
        #         echo "pid=$move_pid"
        #         {
        #             while still_running "$move_pid" && [ "$total" != "$remaining" ]; do
        #                 sleep 0.4
        #                 remaining="$(tree /external/nix | wc -l)"
        #                 echo -e "\r\033[1A\033[0K$remaining of $total"
        #             done
        #         } &
        #         wait $(jobs -p)
        #     '"'"'
        #     # sudo rsync -rltgoD --info=progress2 /nix /external/ # fails with certain folders; "mkdir operation not permitted"
        #     echo "done moving /nix to /external/nix"
        # fi
        
        alias ll="ls -lA" # just for debugging, should be deleted
    ' > "$docker_home/.bashrc"
    echo '
[safe]
    directory = /home/fornix/project
    ' > "$docker_home/.gitconfig"
    
    build_docker() {
        outcome="bad"
        set -o pipefail
        { docker build -t "fornix:Dockerfile" . 2>&1 | tee -a "$TMPDIR/docker_log"; } && outcome="good"
        set +o pipefail
        # clear space
        cat "$TMPDIR/docker_log" | grep 'no space left on device.' && docker volume rm `docker volume ls -q -f dangling=true`
        if [ "$outcome" = "good" ]
        then
            return 0
        else
            return 1
        fi
    }
    
    system_tools_hash="$(
        nix --extra-experimental-features nix-command hash path \
            "$FORNIX_FOLDER/settings/extensions/nix/nix.toml"                  \
            "$FORNIX_FOLDER/settings/extensions/nix/parse_dependencies.nix"    \
            "$FORNIX_FOLDER/settings/extensions/nix/settings.toml"             \
            "$FORNIX_FOLDER/settings/extensions/nix/shell.nix"                 \
            "$FORNIX_FOLDER/Dockerfile"                                        \
    )"
    # build the image if needed
    if ! [ -f "$system_tools_hash_file" ] || ! [ "$(cat "$system_tools_hash_file")" = "$system_tools_hash" ]
    then
        # save the hash
        build_docker && echo "$system_tools_hash" > "$system_tools_hash_file"
    fi
    
    # get docker space:
    #    docker container prune
    #    docker volume rm `docker volume ls -q -f dangling=true`
    
    run_docker() {
        # # 
        # # extract the nix store
        # # 
        # if ! [ -d "$fornix_storage/nix/store" ] || ! [ -d "$fornix_storage/nix/var" ]
        # then
        #     rm -rf "$fornix_storage/nix"
        #     echo "    DOCKER: setting up store"
        #     docker run \
        #         --rm \
        #         --volume "$PWD":/home/fornix/project \
        #         --volume "$docker_home":/home/fornix \
        #         --volume "$fornix_storage":/external \
        #         --volume "$fornix_cache":/home/fornix/.cache/nix \
        #         -it 'fornix:Dockerfile' \
        #         "cd /home/fornix/project; sudo -u fornix bash -c '. /home/fornix/.bashrc'; exit"
        # fi
        
        # 
        # run interactively 
        # 
        echo "    DOCKER: run interactively"
        docker run \
            --rm \
            --volume "$fornix_cache":/home/fornix/.cache/nix \
            --volume "$PWD":/home/fornix/project \
            --volume "$docker_home":/home/fornix \
            -i --tty=true 'fornix:Dockerfile' \
            "cd /home/fornix/project; sudo -u fornix bash -c 'commands/start'; exit"
            # --volume "$fornix_storage":/external \
            # --volume "$fornix_storage/nix":/nix \
        echo 
        echo DOCKER END
        echo 
        exit
    }
    
    run_docker || build_docker && run_docker
    exit
fi