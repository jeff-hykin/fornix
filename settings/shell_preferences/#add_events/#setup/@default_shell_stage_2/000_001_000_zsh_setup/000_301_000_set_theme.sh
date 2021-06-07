# See https://github.com/ohmyzsh/ohmyzsh/wiki/Themes
ZSH_THEME="robbyrussell" # default

# 
# add spaceship-prompt theme
# 
ln -fs "$spaceship_prompt__path/lib/spaceship-prompt/spaceship.zsh" "$local_zsh"prompt_spaceship_setup
export ZSH="$oh_my_zsh__path/share/oh-my-zsh"
source "$ZSH/oh-my-zsh.sh"