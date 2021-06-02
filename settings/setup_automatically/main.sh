# enable globbing for zsh
setopt extended_glob &>/dev/null
# enable globbing for bash
shopt -s globstar &>/dev/null
shopt -s dotglob &>/dev/null

# 
# find and run all the startup scripts in alphabetical order
# 
find "$PROJECTR_FOLDER/settings/setup_automatically/steps/" -maxdepth 1 ! -path . -print0 | sort -z | while read -d $'\0' each
do
    # make sure its a file
    if [[ -f "$each" ]]; then
        source "$each"
    fi
done