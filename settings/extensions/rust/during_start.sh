# 
# cargo target dir
# 
export CARGO_TARGET_DIR="$FORNIX_FOLDER/target.ignore"

# 
# rustup 
# 
if ! rustup default 2>/dev/null 1>/dev/null
then
    rustup install stable
    rustup default stable
fi