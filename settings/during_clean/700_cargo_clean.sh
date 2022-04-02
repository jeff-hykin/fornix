# the usual things
cargo clean 2>/dev/null
if [ -n "$FORNIX_HOME" ]
then
    "$FORNIX_FOLDER/settings/extensions/#standard/commands/tools/file_system/remove" "$FORNIX_HOME/.cargo/"
fi