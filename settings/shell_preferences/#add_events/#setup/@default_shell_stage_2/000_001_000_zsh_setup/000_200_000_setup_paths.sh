# 
# import paths from nix
# 
alias nix_path_for="$PROJECTR_COMMANDS_FOLDER/tools/nix/path_for"
zsh_syntax_highlighting__path="$(nix_path_for zsh-syntax-highlighting)"
zsh_auto_suggest__path="$(nix_path_for zsh-autosuggestions)"
spaceship_prompt__path="$(nix_path_for spaceship-prompt)"
oh_my_zsh__path="$(nix_path_for oh-my-zsh)"
zsh__path="$(nix_path_for zsh)"


# 
# set fpath for zsh
# 
local_zsh="$PWD/settings/zsh.ignore/site-functions/"
mkdir -p "$local_zsh"
# export fpath=""
export fpath=("$local_zsh")
export fpath=("$oh_my_zsh__path"/share/oh-my-zsh/functions $fpath)
export fpath=("$oh_my_zsh__path"/share/oh-my-zsh/completions $fpath)
export fpath=("$zsh__path"/share/zsh/site-functions $fpath)
export fpath=("$zsh__path"/share/zsh/*/functions $fpath)
