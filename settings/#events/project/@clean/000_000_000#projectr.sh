#!/usr/bin/env bash

# detach this (behaves like unlink)
@ file_system/delete "$PROJECTR_HOME/.cache/nix"

# the usual things
@ file_system/delete "$PROJECTR_TEMPORARY_FOLDER"
find "$PROJECTR_FOLDER" ! -path . -iregex '.*\.cleanable(\..*)?' -print0 2>/dev/null | sort -z | while read -d "$(printf '\0')" each
do
    @ file_system/delete "$each"
done
# restore the keep file
mkdir -p "$PROJECTR_TEMPORARY_FOLDER" && touch "$PROJECTR_TEMPORARY_FOLDER/.keep"
