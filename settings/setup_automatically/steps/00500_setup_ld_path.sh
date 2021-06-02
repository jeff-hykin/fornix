# prevents the libstdc++.so.6 errors 
export LD_LIBRARY_PATH="$NIX_CC_PATH/lib/:$LD_LIBRARY_PATH"