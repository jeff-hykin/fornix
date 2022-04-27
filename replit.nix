{ pkgs }:
    let 
        main = (builtins.import (./settings/extensions/nix/parse_dependencies.nix));
        # nixpkgs = (builtins.import 
        #     (builtins.fetchTarball
        #         ({url="https://github.com/NixOS/nixpkgs/archive/a7ecde854aee5c4c7cd6177f54a99d2c1ff28a31.tar.gz";})
        #     )
        #     ({})
        # );
    in
        {
            deps = main.project.buildInputs;
            # deps = [
            #     nixpkgs.zsh
            #     nixpkgs.zsh-syntax-highlighting
            #     nixpkgs.oh-my-zsh
            #     nixpkgs.zsh-autosuggestions
            #     nixpkgs.spaceship-prompt
            #     nixpkgs.jq
            #     nixpkgs.man
            #     nixpkgs.coreutils
            #     nixpkgs.which
            #     nixpkgs.git
            # ];
        }