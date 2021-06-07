SPACESHIP_CHAR_SYMBOL="∫ " # ☣ ⁂ ⌘ ∴ ∮ ֎ Ͽ ♫ ⛬ ⚿ ♦ ♢ ⛶ ✾ ❒ ⟩ ⟡ ⟜ ⟦ ⦊ ⦒ ⪢ ⪾ ∫ ∬ ∭
SPACESHIP_VENV_SYMBOL="🐍$(python -V 2>&1 | sed -E 's/Python//g' )"
SPACESHIP_VENV_PREFIX=""
SPACESHIP_VENV_GENERIC_NAMES="."
SPACESHIP_VENV_COLOR="green"
SPACESHIP_NODE_COLOR="yellow"

# Set Spaceship ZSH as a prompt
autoload -U promptinit; promptinit
prompt spaceship