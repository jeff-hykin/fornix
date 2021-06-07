export NIX_PROJECTR_SHELL_LOCATION="$PROJECTR_FOLDER/settings/requirements/shell.nix"
export NIX_PROJECTR_TEMP_SHELL_HOME="$PROJECTR_TEMPORARY_FOLDER/temp_home/"
export NIX_PROJECTR_ENV_PASSTHROUGH="$PROJECTR_TEMPORARY_FOLDER/nix_env_passthrough/"
export NIX_PROJECTR_CONFIG_SOURCE="$PROJECTR_FOLDER/settings/requirements/nix.json"

# 
# temp home
# 
# create a temp home folder just for nix
rm -rf "$PROJECTR_NIX_TEMP_SHELL_HOME" > /dev/null
mkdir -p "$PROJECTR_NIX_TEMP_SHELL_HOME/.cache/"
# connect the nix cache to prevent duplicates
# make sure it exists though
if ! [ -d "$PROJECTR_NIX_TEMP_SHELL_HOME/.cache/nix" ]
then
    ln -s "$HOME/.cache/nix" "$PROJECTR_NIX_TEMP_SHELL_HOME/.cache/nix" 
fi

# 
# create nix passthrough
# 
mkdir -p "$NIX_PROJECTR_ENV_PASSTHROUGH"

# save nix path
printf '%s' '$NIX_PATH' > "$NIX_PROJECTR_ENV_PASSTHROUGH/NIX_PATH"