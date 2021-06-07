# select zsh as the shell that will be started at the end
export NIX_PROJECTR_START_COMMAND="zsh"

# 
# create the zsh setup
# 

# setup the config for the shell (needs to re-find the entrypoint since nix will remove all env vars)
cat > __temp_var__zsh_content <<'HEREDOC_NAME'
    # 
    # find projectr entrypoint
    # 
    # (thanks to bash/shells theres no reliable way for a file to get a path to itself)
    # (see http://mywiki.wooledge.org/BashFAQ/028)
    # REF: fj3508ht32vlr58 # for searchability since this code must be copied-pasted multiple places
    key_path='settings/#system/#@'
    projectr_entrypoint="$PWD"
    search_path="$PWD"
    while true
    do
        # check if file exists
        if [ -f "$search_path/$key_path" ]
        then
            # if so, then thats what needs to be loaded
            projectr_entrypoint="$search_path/$key_path"
            break
        else
            # if not, and we have nowhere else to go, then we didn't find the project
            next_search_path="$(dirname "$search_path")"
            if [ "$next_search_path" = "$search_path" ]
            then
                echo "" 1>&2
                echo "I started at: $PWD" 1>&2
                echo "I looked for ./$key_path" 1>&2
                echo "I went up a folder and repeated the process" 1>&2
                echo "But I was unable to find the project at any level" 1>&2
                exit 1
            # otherwise just go up a folder
            else
                search_path="$next_search_path"
            fi
        fi
    done
    source "$projectr_entrypoint" # sets up @ and PROJECTR_FOLDER
    unset projectr_entrypoint
    
    
    #
    # run shell stage 2 (configures zsh)
    #
    @ file_system/source_all "$PROJECTR_FOLDER/#events/#setup/@default_shell_stage_2"
HEREDOC_NAME

# overwrite any existing zshenv (home folder is temporary anyways)
printf '%0' "$__temp_var__zsh_content" > "$PROJECTR_HOME/.zshenv"