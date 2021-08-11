#!/usr/bin/env bash

# 
# connect when_cleaning
# 
# unlink existing
rm -f "$PROJECTR_FOLDER/settings/when_cleaning/811_java.sh" 2>/dev/null
rm -rf "$PROJECTR_FOLDER/settings/when_cleaning/811_java.sh" 2>/dev/null
# syslink when_cleaning
ln -s "../extensions/java/when_cleaning.sh" "$PROJECTR_FOLDER/settings/when_cleaning/811_java.sh"


# 
# connect when_purging
# 
# unlink existing
rm -f "$PROJECTR_FOLDER/settings/when_purging/812_purge_java.sh" 2>/dev/null
rm -rf "$PROJECTR_FOLDER/settings/when_purging/812_purge_java.sh" 2>/dev/null
# syslink when_purging
ln -s "../extensions/java/when_purging.sh" "$PROJECTR_FOLDER/settings/when_purging/812_purge_java.sh"


# 
# connect commands
# 
# unlink existing
rm -f "$PROJECTR_FOLDER/commands/tools/java" 2>/dev/null
rm -rf "$PROJECTR_FOLDER/commands/tools/java" 2>/dev/null
# syslink local tools
ln -s "../../settings/extensions/java/commands" "$PROJECTR_FOLDER/commands/tools/java"


# 
# add to git ignore
# 
if [ -f "$PROJECTR_FOLDER/settings/extensions/git/commands/ignore" ]
then
    "$PROJECTR_FOLDER/settings/extensions/git/commands/ignore" "**/*.class"
fi