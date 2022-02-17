if [ "$(uname)" = "Darwin" ] 
then
    # needed for creating dmg files
    "$FORNIX_FOLDER/settings/extensions/#standard/commands/tools/fornix/inject_into_path" "SetFile"
fi