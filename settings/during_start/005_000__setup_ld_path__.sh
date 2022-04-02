# add the path to the c lib, which prevents the libstdc++.so.6 errors 
# export LD_LIBRARY_PATH="$("$__FORNIX_NIX_COMMANDS/lib_path_for" "cc"):$LD_LIBRARY_PATH"


# export original="/nix/store/54klr10i53jdfgn7322mzgza6wsai0q8-gcc-10.3.0-lib/lib:/nix/store/l7kxwgayg8f7i8v4swg1zsawb4h3yvzm-glib-2.70.1-bin/lib::/nix/store/77xh2kn0ywyh4cskvfnzw38xz4hqvxz1-ncurses-6.2-abi5-compat/lib"

# export LD_LIBRARY_PATH="$original"
# export LD_LIBRARY_PATH="/nix/store/9bh3986bpragfjmr32gay8p95k91q4gy-glibc-2.33-47/lib:$original"
# export LD_LIBRARY_PATH="/nix/store/ikl21vjfq900ccbqg1xasp83kadw6q8y-glibc-2.32-46/lib/:/nix/store/9bh3986bpragfjmr32gay8p95k91q4gy-glibc-2.33-47/lib:$original"
# export LD_LIBRARY_PATH="/nix/store/ikl21vjfq900ccbqg1xasp83kadw6q8y-glibc-2.32-46/lib/"
# export LD_LIBRARY_PATH="$("$__FORNIX_NIX_COMMANDS/lib_path_for" "cc"):$LD_LIBRARY_PATH"
# export LD_LIBRARY_PATH="/nix/store/54klr10i53jdfgn7322mzgza6wsai0q8-gcc-10.3.0-lib/lib:"/nix/store/wl60dr9p15rwf53gxz61ijgisc1zdjc7-glibc-2.33-59/lib/
# export LD_PRELOAD="/nix/store/54klr10i53jdfgn7322mzgza6wsai0q8-gcc-10.3.0-lib/lib"/nix/store/wl60dr9p15rwf53gxz61ijgisc1zdjc7-glibc-2.33-59/lib/
# export LD_LIBRARY_PATH=/nix/store/wl60dr9p15rwf53gxz61ijgisc1zdjc7-glibc-2.33-59/lib/
# export LD_LIBRARY_PATH="/nix/store/n8k71gd1a759s9mmi85iinfdb0ckkzkv-glibc-2.33-108/lib/"
# export LD_LIBRARY_PATH="/nix/store/23ijjiv0ax0d7ymv35bbfm16mka7jimm-rust-1.61.0-nightly-2022-03-30-c5cf08d37/lib:/nix/store/54klr10i53jdfgn7322mzgza6wsai0q8-gcc-10.3.0-lib/lib"
# export LD_PRELOAD=""
# /nix/store/9bh3986bpragfjmr32gay8p95k91q4gy-glibc-2.33-47/lib/
# /nix/store/wl60dr9p15rwf53gxz61ijgisc1zdjc7-glibc-2.33-59/lib/
# /nix/store/mh78fk3x12q2a77srgkzv16h0irl8r61-glibc-2.31/lib/
# /nix/store/9df65igwjmf2wbw0gbrrgair6piqjgmi-glibc-2.31/lib/
# /nix/store/gafigwfaimlziam6qhw1m8dz4h952g1n-glibc-2.32-35/lib/
# /nix/store/cvr0kjg2q7z2wwhjblx6c73rv422k8cm-glibc-2.33-47/lib/
# /nix/store/nwsn18fysga1n5s0bj4jp4wfwvlbx8b1-glibc-2.30/lib/
# /nix/store/rqrklqsvw4ydpcg5kdcvn506fhcbqxk2-glibc-2.32-10/lib/
# /nix/store/vcdbwr6kjbny8khx3h9fvagkwdpc87ky-glibc-2.32-46/lib/
# /nix/store/n8k71gd1a759s9mmi85iinfdb0ckkzkv-glibc-2.33-108/lib/
# /nix/store/ikl21vjfq900ccbqg1xasp83kadw6q8y-glibc-2.32-46/lib/
# /nix/store/adxc893j47gxx3xjw403zdf0liiddvw2-glibc-2.32-48/lib/
# /nix/store/4s21k8k7p1mfik0b33r2spq5hq7774k1-glibc-2.33-108/lib/
# /nix/store/bdf8iipzya03h2amgfncqpclf6bmy3a1-glibc-2.32/lib/
# /nix/store/sbbifs2ykc05inws26203h0xwcadnf0l-glibc-2.32-46/lib/
# /nix/store/5v4wms4d70w5cjiwxmsbpzgg8sfs2wmp-glibc-2.33-59/lib/
# /nix/store/p4s4jf7aq6v6z9iazll1aiqwb34aqxq9-bootstrap-tools/lib/
# /nix/store/mij848h2x5wiqkwhg027byvmf9x3gx7y-glibc-2.33-50/lib/
# /nix/store/ff88p8pnhdmf8bflzbxldys21djw9dp0-glibc-2.33-56/lib/
# /nix/store/hp8wcylqr14hrrpqap4wdrwzq092wfln-glibc-2.32-37/lib/
# cd

# /nix/store/9bh3986bpragfjmr32gay8p95k91q4gy-glibc-2.33-47/lib/
# /nix/store/9bh3986bpragfjmr32gay8p95k91q4gy-glibc-2.33-47/lib/ld-linux-x86-64.so.2

# patchelf --set-interpreter /path/to/newglibc/ld-linux.so.2 --set-rpath /path/to/newglibc/ myapp
# patchelf --set-interpreter /nix/store/9bh3986bpragfjmr32gay8p95k91q4gy-glibc-2.33-47/lib/ld-linux-x86-64.so.2 --set-rpath /nix/store/9bh3986bpragfjmr32gay8p95k91q4gy-glibc-2.33-47/lib/ 
# ldd /home/jeffhykin/repos/fornix/target.ignore/release/build/mime_guess-807eb715223629ff/build-script-build
#     /home/jeffhykin/repos/fornix/target.ignore/release/build/mime_guess-807eb715223629ff/build-script-build
# patchelf --set-interpreter /nix/store/9bh3986bpragfjmr32gay8p95k91q4gy-glibc-2.33-47/lib/ld-linux-x86-64.so.2 --set-rpath /nix/store/9bh3986bpragfjmr32gay8p95k91q4gy-glibc-2.33-47/lib/ /home/jeffhykin/repos/fornix/target.ignore/release/build/mime_guess-807eb715223629ff/build-script-build
# patchelf --set-interpreter /nix/store/9bh3986bpragfjmr32gay8p95k91q4gy-glibc-2.33-47/lib/ld-linux-x86-64.so.2 --set-rpath /nix/store/9bh3986bpragfjmr32gay8p95k91q4gy-glibc-2.33-47/lib/ /home/jeffhykin/repos/fornix/target.ignore/release/build/mime_guess-807eb715223629ff/build-script-build
# patchelf --set-interpreter /nix/store/9bh3986bpragfjmr32gay8p95k91q4gy-glibc-2.33-47/lib/ld-linux-x86-64.so.2 --set-rpath /nix/store/9bh3986bpragfjmr32gay8p95k91q4gy-glibc-2.33-47/lib/ /home/jeffhykin/repos/fornix/target.ignore/release/build/*/build-script-main
# patchelf --set-interpreter /nix/store/9bh3986bpragfjmr32gay8p95k91q4gy-glibc-2.33-47/lib/ld-linux-x86-64.so.2 --set-rpath /nix/store/9bh3986bpragfjmr32gay8p95k91q4gy-glibc-2.33-47/lib/ /home/jeffhykin/repos/fornix/target.ignore/release/build/*/build-script-build
# patchelf --set-interpreter /nix/store/9bh3986bpragfjmr32gay8p95k91q4gy-glibc-2.33-47/lib/ld-linux-x86-64.so.2 --set-rpath /nix/store/9bh3986bpragfjmr32gay8p95k91q4gy-glibc-2.33-47/lib/ /home/jeffhykin/repos/fornix/target.ignore/release/build/crossbeam-utils-b66fdd53251d474d/build-script-build
# patchelf --set-interpreter /nix/store/9bh3986bpragfjmr32gay8p95k91q4gy-glibc-2.33-47/lib/ld-linux-x86-64.so.2 --set-rpath /nix/store/9bh3986bpragfjmr32gay8p95k91q4gy-glibc-2.33-47/lib/ /home/jeffhykin/repos/fornix/target.ignore/release/build/futures-core-f037c03711feef70/build-script-build
# patchelf --set-interpreter /nix/store/9bh3986bpragfjmr32gay8p95k91q4gy-glibc-2.33-47/lib/ld-linux-x86-64.so.2 --set-rpath /nix/store/9bh3986bpragfjmr32gay8p95k91q4gy-glibc-2.33-47/lib/ /home/jeffhykin/repos/fornix/target.ignore/release/build/getrandom-6d9989d058400435/build-script-build
# patchelf --set-interpreter /nix/store/9bh3986bpragfjmr32gay8p95k91q4gy-glibc-2.33-47/lib/ld-linux-x86-64.so.2 --set-rpath /nix/store/9bh3986bpragfjmr32gay8p95k91q4gy-glibc-2.33-47/lib/ /home/jeffhykin/repos/fornix/target.ignore/release/build/memchr-fb5921d5e2971969/build-script-build
# patchelf --set-interpreter /nix/store/9bh3986bpragfjmr32gay8p95k91q4gy-glibc-2.33-47/lib/ld-linux-x86-64.so.2 --set-rpath /nix/store/9bh3986bpragfjmr32gay8p95k91q4gy-glibc-2.33-47/lib/ /home/jeffhykin/repos/fornix/target.ignore/release/build/log-9e8e43096e776907/build-script-build
# patchelf --set-interpreter /nix/store/9bh3986bpragfjmr32gay8p95k91q4gy-glibc-2.33-47/lib/ld-linux-x86-64.so.2 --set-rpath /nix/store/9bh3986bpragfjmr32gay8p95k91q4gy-glibc-2.33-47/lib/ /home/jeffhykin/repos/fornix/target.ignore/release/build/serde-ff3124194f6fc816/build-script-build
# patchelf --set-interpreter /nix/store/9bh3986bpragfjmr32gay8p95k91q4gy-glibc-2.33-47/lib/ld-linux-x86-64.so.2 --set-rpath /nix/store/9bh3986bpragfjmr32gay8p95k91q4gy-glibc-2.33-47/lib/  /home/jeffhykin/repos/fornix/target.ignore/release/build/syn-07e6b5e0e8b78ed5/build-script-build
# patchelf --set-interpreter /nix/store/9bh3986bpragfjmr32gay8p95k91q4gy-glibc-2.33-47/lib/ld-linux-x86-64.so.2 --set-rpath /nix/store/9bh3986bpragfjmr32gay8p95k91q4gy-glibc-2.33-47/lib/  /home/jeffhykin/repos/fornix/target.ignore/release/build/libc-68f948d361d9a15d/build-script-build
# patchelf --set-interpreter /nix/store/9bh3986bpragfjmr32gay8p95k91q4gy-glibc-2.33-47/lib/ld-linux-x86-64.so.2 --set-rpath /nix/store/9bh3986bpragfjmr32gay8p95k91q4gy-glibc-2.33-47/lib/  /home/jeffhykin/repos/fornix/target.ignore/release/build/proc-macro2-5fe77d198486d64b/build-script-build
# patchelf --set-interpreter /nix/store/9bh3986bpragfjmr32gay8p95k91q4gy-glibc-2.33-47/lib/ld-linux-x86-64.so.2 --set-rpath /nix/store/9bh3986bpragfjmr32gay8p95k91q4gy-glibc-2.33-47/lib/  /home/jeffhykin/repos/fornix/target.ignore/release/build/serde_derive-e6b8246daed67608/build-script-build
# patchelf --set-interpreter /nix/store/9bh3986bpragfjmr32gay8p95k91q4gy-glibc-2.33-47/lib/ld-linux-x86-64.so.2 --set-rpath /nix/store/9bh3986bpragfjmr32gay8p95k91q4gy-glibc-2.33-47/lib/ /home/jeffhykin/repos/fornix/target.ignore/release/build/serde-ff3124194f6fc816/build-script-build

