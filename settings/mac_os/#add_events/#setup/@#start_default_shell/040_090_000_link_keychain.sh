# keychain is mac-os specific, just FYI
__temp_var_path_to_keychain="$HOME/Library/Keychains/"
if [ -d "$__temp_var_path_to_keychain" ]
then
    mkdir -p "$PROJECTR_HOME/Library/"
    # link all the keys
    ln -sf "$__temp_var_path_to_keychain" "$PROJECTR_HOME/Library/"
fi
unset __temp_var_path_to_keychain

# Make sure the user doesn't accidentally commit their keys/passwords!!
@ git/ignore "$PROJECTR_HOME/Library/Keychains"