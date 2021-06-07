#!/usr/bin/env bash

# remove git's hooks
find "$PROJECTR_FOLDER/.git/hooks" -maxdepth 1 ! -path . -print0 2>/dev/null | sort -z | while read -d "$(printf '\0')" each
do
    # check if file exists
    if [ -f "$each" ]
    then
        @ file_system/delete "$each"
    fi
done