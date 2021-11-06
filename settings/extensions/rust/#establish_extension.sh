# this is a helper
relatively_link="$FORNIX_FOLDER/settings/extensions/#standard/commands/tools/file_system/relative_link"

# 
# connect during_purge
# 
"$relatively_link" "$__THIS_FORNIX_EXTENSION_FOLDERPATH__/during_purge.sh" "$FORNIX_FOLDER/settings/during_purge/591_rust.sh"

# 
# connect during_start
# 
"$relatively_link" "$__THIS_FORNIX_EXTENSION_FOLDERPATH__/during_start.sh" "$FORNIX_FOLDER/settings/during_start/059_000_rustup_stable.sh"


unset relatively_link