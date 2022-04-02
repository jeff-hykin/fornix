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
    
    # just a helper
    emptyOptions = ({
        buildInputs = [];
        nativeBuildInputs = [];
        shellHook = "";
    });
    
    # 
    # Linux Only
    #
    linuxOnly = if main.stdenv.isLinux then ({
        buildInputs = [];
        nativeBuildInputs = [];
        shellHook = ''
            if [[ "$OSTYPE" == "linux-gnu" ]] 
            then
                true # add important (LD_LIBRARY_PATH, PATH, etc) nix-Linux code here
                # export EXTRA_CCFLAGS="$EXTRA_CCFLAGS:-I/usr/include"
                export PATH="${main.packages.llvmPackages_latest.bintools}/bin/:$PATH"
            fi
        '';
    }) else emptyOptions;
    
    # 
    # Mac Only
    # 
    macOnly = if main.stdenv.isDarwin then ({
        buildInputs = [];
        nativeBuildInputs = [];
        shellHook = ''
            if [[ "$OSTYPE" = "darwin"* ]] 
            then
                true # add important nix-MacOS code here
                export EXTRA_CCFLAGS="$EXTRA_CCFLAGS:-I/usr/include:${main.packages.darwin.apple_sdk.frameworks.CoreServices}/Library/Frameworks/CoreServices.framework/Headers/:${main.packages.darwin.apple_sdk.frameworks.Security}/Library/Frameworks/Security.framework/Headers/"
                export CPATH="$CPATH:${main.packages.darwin.apple_sdk.frameworks.Security}/Library/Frameworks/Security.framework/Headers/"
            fi
        '';
    }) else emptyOptions;
    
# using the above definitions
in
    # 
    # create a shell
    # 
    (main.packages.mkShell
        (main.mergeMixins
            [
                main.project
                linuxOnly
                macOnly
                (main.importMixin 
                    "salt.nix"
                )
                (main.importMixin 
                    "rust.nix"
                )
                # an "inline" mixin (this is what each mixin looks like)
                ({
                    # inside that shell, make sure to use these packages
                    buildInputs = [
                        main.packages.llvmPackages_latest.bintools
                    ];
                    
                    nativeBuildInputs = [];
                    
                    # run some bash code before starting up the shell
                        # export LD_LIBRARY_PATH="$LD_LIBRARY_PATH:${main.packages.ncurses5}/lib"
                        # export LD_LIBRARY_PATH="${main.makeLibraryPath [ main.packages.glib ] }:$LD_LIBRARY_PATH"
                    shellHook = ''
                        # provide access to ncurses for nice terminal interactions
                        if [ "$FORNIX_DEBUG" = "true" ]; then
                            echo "finished: 'shellHook' inside the 'settings/extensions/nix/shell.nix' file"
                            echo ""
                            echo "Tools/Commands mentioned in 'settings/extensions/nix/nix.toml' are now available/installed"
                        fi
                    '';
                })
            ]
        )
    )
