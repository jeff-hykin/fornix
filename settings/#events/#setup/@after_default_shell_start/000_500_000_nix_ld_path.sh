# find the path to the c lib
# the NIX_CPP_LIB_PATH is created inside the `shell.nix` file
# this prevents the libstdc++.so.6 errors
export LD_LIBRARY_PATH="$NIX_CPP_LIB_PATH/lib/:$LD_LIBRARY_PATH"