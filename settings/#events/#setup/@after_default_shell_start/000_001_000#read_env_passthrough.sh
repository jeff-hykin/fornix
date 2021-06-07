if [ -n "$NIX_PROJECTR_ENV_PASSTHROUGH" ]
then
    if [ -d "$NIX_PROJECTR_ENV_PASSTHROUGH" ]
    then
        find "$NIX_PROJECTR_ENV_PASSTHROUGH" -maxdepth 1 ! -path . -print0 2>/dev/null | sort -z | while read -d "$(printf '\0')" each
        do
            __temp_var__name="$(basename "$each")"
            __temp_var__value="$(@ string/escape_shell_argument "$(cat "$each")")"
            # recreate the env var
            eval "export $__temp_var__name=$__temp_var__value"
        done
        unset __temp_var__name
        unset __temp_var__value
    fi
fi