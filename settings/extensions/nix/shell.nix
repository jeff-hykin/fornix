# 
# how to add packages?
# 
    # you can search for them here: https://search.nixos.org/packages
    # to find them in the commandline use:
    #     nix-env -qP --available PACKAGE_NAME_HERE | cat
    # ex:
    #     nix-env -qP --available opencv
    #
    # NOTE: some things (like setuptools) just don't show up in the 
    # search results for some reason, and you just have to guess and check 🙃 

# Lets setup some definitions
let        
    # 
    # load most things from the nix.toml
    # 
    main = (builtins.import
        (builtins.getEnv
            ("__FORNIX_NIX_MAIN_CODE_PATH")
        )
    );
    
    salt = (builtins.import
        (./nixpkgs/salt.nix)
        main
    );
    
    rustInfo = {
        version = "nightly-2021-09-19";
        channel = "stable"; # probably bad that this conflict with whats said in the version
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
    
    # just a helper
    emptyOptions = ({
        buildInputs = [];
        nativeBuildInputs = [];
        shellCode = "";
        envVars = {};
    });
    
    # 
    # Linux Only
    #
    rustLinuxSetup = rec {
        version = rustInfo.version;
        
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
        rustChannel = mainPackagesIncludingRust.rustChannelOf {
            channel = rustInfo.channel;
        };
        rust = (rustChannel.rust.override {
            targets = rustInfo.targets;
        });
        
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
        
        nativeBuildInputs = [];
        
        shellCode = ''
            export PATH="$PATH:$HOME/.cargo/bin"
            if [[ "$OSTYPE" == "linux-gnu" ]] 
            then
                export PATH="$PATH:$HOME/.rustup/toolchains/$RUSTC_VERSION-x86_64-unknown-linux-gnu/bin/"
            fi
        '';
        
        envVars = {
            # according to: https://nixos.wiki/wiki/Rust
            # Certain Rust tools won't work without this
            # This can also be fixed by using oxalica/rust-overlay and specifying the rust-src extension
            # See https://discourse.nixos.org/t/rust-src-not-found-and-other-misadventures-of-developing-rust-on-nixos/11570/3?u=samuela. for more details.
            RUST_SRC_PATH = "${main.packages.rust.packages.stable.rustPlatform.rustLibSrc}";
            RUSTC_VERSION = version;
            # https://github.com/rust-lang/rust-bindgen#environment-variables
            LIBCLANG_PATH = main.packages.lib.makeLibraryPath [ main.packages.llvmPackages_latest.libclang.lib ];
            # Add libvmi precompiled library to rustc search path
            RUSTFLAGS = (builtins.map
                (each: ''-L ${each}/lib'')
                [
                    main.packages.libvmi
                ]
            );
            
            # Add libvmi, glibc, clang, glib headers to bindgen search path
            BINDGEN_EXTRA_CLANG_ARGS = [] ++ normalIncludes ++ specialIncludes;
        };
    };
    linuxOnly = if main.stdenv.isLinux then ({
        buildInputs = [] ++ rustLinuxSetup.buildInputs;
        nativeBuildInputs = [] ++ rustLinuxSetup.nativeBuildInputs;
        shellCode = ''
            if [[ "$OSTYPE" == "linux-gnu" ]] 
            then
                true # add important (LD_LIBRARY_PATH, PATH, etc) nix-Linux code here
                # export EXTRA_CCFLAGS="$EXTRA_CCFLAGS:-I/usr/include"
            fi
            ${rustLinuxSetup.shellCode}
        '';
        envVars = {} // rustLinuxSetup.envVars;
    }) else emptyOptions;
    
    # 
    # Mac Only
    # 
    rustMacSetup = rec {
        version = rustInfo.version;
        
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
        rustChannel = mainPackagesIncludingRust.rustChannelOf {
            channel = rustInfo.channel;
        };
        rust = (rustChannel.rust.override {
            targets = rustInfo.targets;
        });
        
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
        
        nativeBuildInputs = [];
        
        shellCode = ''
            export PATH="$PATH:$HOME/.cargo/bin"
            if [[ "$OSTYPE" == "linux-gnu" ]] 
            then
                export PATH="$PATH:$HOME/.rustup/toolchains/$RUSTC_VERSION-x86_64-unknown-linux-gnu/bin/"
            fi
        '';
        
        envVars = {
            # according to: https://nixos.wiki/wiki/Rust
            # Certain Rust tools won't work without this
            # This can also be fixed by using oxalica/rust-overlay and specifying the rust-src extension
            # See https://discourse.nixos.org/t/rust-src-not-found-and-other-misadventures-of-developing-rust-on-nixos/11570/3?u=samuela. for more details.
            RUST_SRC_PATH = "${main.packages.rust.packages.stable.rustPlatform.rustLibSrc}";
            RUSTC_VERSION = version;
            # https://github.com/rust-lang/rust-bindgen#environment-variables
            LIBCLANG_PATH = main.packages.lib.makeLibraryPath [ main.packages.llvmPackages_latest.libclang.lib ];
            # Add libvmi precompiled library to rustc search path
            RUSTFLAGS = (builtins.map
                (each: ''-L ${each}/lib'')
                [
                ]
            );
            
            # Add libvmi, glibc, clang, glib headers to bindgen search path
            BINDGEN_EXTRA_CLANG_ARGS = [] ++ normalIncludes ++ specialIncludes;
        };
    };
    macOnly = if main.stdenv.isDarwin then ({
        buildInputs = [] ++ rustMacSetup.buildInputs;
        nativeBuildInputs = [] ++ rustMacSetup.nativeBuildInputs;
        shellCode = ''
            if [[ "$OSTYPE" = "darwin"* ]] 
            then
                true # add important nix-MacOS code here
                export EXTRA_CCFLAGS="$EXTRA_CCFLAGS:-I/usr/include:${main.packages.darwin.apple_sdk.frameworks.CoreServices}/Library/Frameworks/CoreServices.framework/Headers/"
            fi
            ${rustMacSetup.shellCode}
        '';
        envVars = {} // rustMacSetup.envVars;
    }) else emptyOptions;
    
# using the above definitions
in
    # 
    # create a shell
    # 
    (main.packages.mkShell
        (
            ({
                # inside that shell, make sure to use these packages
                buildInputs =  main.project.buildInputs ++ macOnly.buildInputs ++ linuxOnly.buildInputs ++ [ salt ];
                
                nativeBuildInputs =  main.project.nativeBuildInputs ++ macOnly.nativeBuildInputs ++ linuxOnly.nativeBuildInputs;
                
                # run some bash code before starting up the shell
                shellHook = ''
                    ${main.project.protectHomeShellCode}
                    if [ "$FORNIX_DEBUG" = "true" ]; then
                        echo "starting: 'shellHook' inside the 'settings/extensions/nix/shell.nix' file"
                    fi
                    ${linuxOnly.shellCode}
                    ${macOnly.shellCode}
                    # provide access to ncurses for nice terminal interactions
                    export LD_LIBRARY_PATH="$LD_LIBRARY_PATH:${main.packages.ncurses5}/lib"
                    export LD_LIBRARY_PATH="${main.makeLibraryPath [ main.packages.glib ] }:$LD_LIBRARY_PATH"
                    
                    if [ "$FORNIX_DEBUG" = "true" ]; then
                        echo "finished: 'shellHook' inside the 'settings/extensions/nix/shell.nix' file"
                        echo ""
                        echo "Tools/Commands mentioned in 'settings/extensions/nix/nix.toml' are now available/installed"
                    fi
                '';
            })
            // macOnly.envVars
            // linuxOnly.envVars
        )
    )
