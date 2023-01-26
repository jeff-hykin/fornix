if [ "$(uname)" = "Darwin" ] 
then
    cd "$FORNIX_FOLDER"
    temp_folder="$FORNIX_FOLDER/settings/home/temp.cleanable/docker_home/"  ; mkdir -p "$temp_folder"
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
        
        export NIX_STORE_DIR="/nix/store"
        export NIX_IGNORE_SYMLINK_STORE="1"
        
        # copy everything into volume-mounted real store
        line_count="$(ls -la "/nix" | wc -l)"
        if [ "$line_count" = "3" ] # empty folder
        then
            # transfer over all the files
            echo "Hang tight, I need to build the cache"
            sudo cp -r /fornix/* /nix
            chown -R fornix /nix
        fi
        alias ll="ls -lA"
    ' > "$temp_folder/.bashrc"
    echo '
[safe]
    directory = /home/fornix/project
    ' > "$temp_folder/.gitconfig"
    
    docker build -t "fornix:Dockerfile" . && docker run \
        --volume "$PWD":/home/fornix/project \
        --volume "$temp_folder":/home/fornix \
        --volume "$fornix_storage":/nix \
        --volume "$fornix_cache":/home/fornix/.cache/nix \
        -i --tty=true 'docker.io/library/fornix:Dockerfile' 
    exit
fi