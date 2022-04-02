__temp_filepath="$HOME/.deno/bin/packup"
if [ ! -f "$__temp_filepath" ] || [ ! -r "$__temp_filepath" ] && [ ! -x "$__temp_filepath" ]
then
    deno run -A https://deno.land/x/packup@v0.1.12/install.ts
fi
unset __temp_filepath