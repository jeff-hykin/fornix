# fix SSL issues
export SSL_CERT_FILE="$(python -c 'import ssl; print(ssl.get_default_verify_paths().openssl_cafile)')"  
export GIT_SSL_CAINFO="$SSL_CERT_FILE"