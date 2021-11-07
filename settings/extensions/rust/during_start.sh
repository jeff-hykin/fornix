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
    # rustup target add wasm32-unknown-unknown    # wasm
    # rustup target add aarch64-unknown-linux-gnu # ARM64 Linux (kernel 4.2, glibc 2.17+) 1
    # rustup target add i686-pc-windows-gnu       # 32-bit MinGW (Windows 7+)
    # rustup target add i686-pc-windows-msvc      # 32-bit MSVC (Windows 7+)
    # rustup target add i686-unknown-linux-gnu    # 32-bit Linux (kernel 2.6.32+, glibc 2.11+)
    # rustup target add x86_64-apple-darwin	      # 64-bit macOS (10.7+, Lion+)
    # rustup target add x86_64-pc-windows-gnu     # 64-bit MinGW (Windows 7+)
    # rustup target add x86_64-pc-windows-msvc    # 64-bit MSVC (Windows 7+)
    # rustup target add x86_64-unknown-linux-gnu  # 64-bit Linux (kernel 2.6.32+, glibc 2.11+)
fi