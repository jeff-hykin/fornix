{ pkgs }:
    let 
        main = (builtins.import (./settings/extensions/nix/parse_dependencies.nix));
    in
        {
            deps = main.project.buildInputs;
        }