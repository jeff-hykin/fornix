#!/usr/bin/env bash

# the mac library cache
if [[ -d "$PROJECTR_FOLDER" ]]
then
    @ file_system/delete "$PROJECTR_HOME/Library/Caches"
fi