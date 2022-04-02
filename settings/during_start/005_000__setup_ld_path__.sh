# add the path to the c lib, which prevents the libstdc++.so.6 errors 
if [ "$(uname)" = "Darwin" ] 
then
    export LD_LIBRARY_PATH="$("$__FORNIX_NIX_COMMANDS/lib_path_for" "cc"):$LD_LIBRARY_PATH"
fi