{ main }:
    let
        # 
        # config
        # 
        rustInfo = {
            date = "2022-06-28";
            channel = "nightly";
            targets = [
                "wasm32-unknown-unknown"
                "x86_64-unknown-linux-gnu"
                # wasm32-unknown-unknown    # wasm
                # aarch64-unknown-linux-gnu # ARM64 Linux (kernel 4.2, glibc 2.17+) 1
                # i686-pc-windows-gnu       # 32-bit MinGW (Windows 7+)
                # i686-pc-windows-msvc      # 32-bit MSVC (Windows 7+)
                # i686-unknown-linux-gnu    # 32-bit Linux (kernel 2.6.32+, glibc 2.11+)
                # x86_64-apple-darwin	    # 64-bit macOS (10.7+, Lion+)
                # x86_64-pc-windows-gnu     # 64-bit MinGW (Windows 7+)
                # x86_64-pc-windows-msvc    # 64-bit MSVC (Windows 7+)
                # x86_64-unknown-linux-gnu  # 64-bit Linux (kernel 2.6.32+, glibc 2.11+)
            ];
            mozOverlayImportUrl = "https://github.com/mozilla/nixpkgs-mozilla/archive/7c1e8b1dd6ed0043fb4ee0b12b815256b0b9de6f.tar.gz";
        };
        
        # 
        # 
        # boilerplate
        # 
        # 
        mozOverlay = (main.import
            (main.fetchTarball
                ({url=rustInfo.mozOverlayImportUrl;})
            )
        );
        mainPackagesIncludingRust = (main.import
            # <nixpkgs> but pinned
            (main.fetchTarball
                ({url="https://github.com/NixOS/nixpkgs/archive/c82b46413401efa740a0b994f52e9903a4f6dcd5.tar.gz";})
            )
            ({
                config = {};
                overlays = [ mozOverlay ];
            })
        );
        rustChannel = (mainPackagesIncludingRust.rustChannelOf 
            {
                date = rustInfo.date;
                channel = rustInfo.channel;
            }
        );
        rust = (rustChannel.rust.override
            {
                targets = rustInfo.targets;
            }
        );
        
        # 
        # linux
        # 
        linuxOnly = (
            if 
                main.stdenv.isLinux
            then
                {
                    
                    normalIncludes = (builtins.map
                        (each: ''-I"${each}/include"'')
                        [
                            main.packages.libvmi
                            main.packages.glibc.dev
                        ]
                    );
                    specialIncludes = [
                        ''-I"${main.packages.llvmPackages_latest.libclang.lib}/lib/clang/${main.packages.llvmPackages_latest.libclang.version}/include"''
                        ''-I"${main.packages.glib.dev}/include/glib-2.0"''
                        ''-I${main.packages.glib.out}/lib/glib-2.0/include/''
                    ];
                    
                    rustLibPaths = (builtins.map
                        (each: ''-L ${each}/lib'')
                        [
                            main.packages.libvmi
                        ]
                    );
                    
                    buildInputs = [
                        rust
                        main.packages.rustup
                        main.packages.llvmPackages_latest.llvm
                        main.packages.llvmPackages_latest.bintools
                        main.packages.llvmPackages_latest.lld
                        main.packages.zlib.out
                        main.packages.xorriso
                        main.packages.grub2
                        main.packages.qemu
                        main.packages.python3
                    ];
                }
            else
                {}
        );
        
        # 
        # mac
        # 
        macOnly = (
            if
                main.stdenv.isDarwin
            then
                {
                    normalIncludes = (builtins.map
                        (each: ''-I"${each}/include"'')
                        [
                        ]
                    );
                    
                    specialIncludes = [
                        ''-I"${main.packages.llvmPackages_latest.libclang.lib}/lib/clang/${main.packages.llvmPackages_latest.libclang.version}/include"''
                        ''-I"${main.packages.glib.dev}/include/glib-2.0"''
                        ''-I${main.packages.glib.out}/lib/glib-2.0/include/''
                    ];
                    
                    rustLibPaths = (builtins.map
                        (each: ''-L ${each}/lib'')
                        [
                        ]
                    );
                    
                    buildInputs = [
                        main.packages.darwin.apple_sdk.frameworks.Security
                        main.packages.libiconv
                        rust
                        main.packages.rustup
                        main.packages.llvmPackages_latest.llvm
                        main.packages.llvmPackages_latest.bintools
                        main.packages.llvmPackages_latest.lld
                        main.packages.zlib.out
                        main.packages.xorriso
                        main.packages.qemu
                        main.packages.python3
                    ];
                }
            else
                {}
        );
        
        system = linuxOnly // macOnly; # merge
            
    in
        {
            buildInputs = system.buildInputs;
            
            nativeBuildInputs = [];
            
            shellHook = ''
                export PATH="$PATH:$HOME/.cargo/bin"
                if [[ "$OSTYPE" == "linux-gnu" ]] 
                then
                    export PATH="$PATH:$HOME/.rustup/toolchains/${rustInfo.channel}-x86_64-unknown-linux-gnu/bin/"
                fi
            '';
            
            # 
            # env vars
            # 
            
            # according to: https://nixos.wiki/wiki/Rust
            # Certain Rust tools won't work without this
            # This can also be fixed by using oxalica/rust-overlay and specifying the rust-src extension
            # See https://discourse.nixos.org/t/rust-src-not-found-and-other-misadventures-of-developing-rust-on-nixos/11570/3?u=samuela. for more details.
            RUST_SRC_PATH = "${main.packages.rust.packages.stable.rustPlatform.rustLibSrc}";
            RUSTC_VERSION = "${rustInfo.channel}-${rustInfo.date}";
            # https://github.com/rust-lang/rust-bindgen#environment-variables
            LIBCLANG_PATH = main.packages.lib.makeLibraryPath [ main.packages.llvmPackages_latest.libclang.lib ];
            # Add libvmi precompiled library to rustc search path
            RUSTFLAGS = system.rustLibPaths;
            
            # Add libvmi, glibc, clang, glib headers to bindgen search path
            BINDGEN_EXTRA_CLANG_ARGS = [] ++ system.normalIncludes ++ system.specialIncludes;
        }