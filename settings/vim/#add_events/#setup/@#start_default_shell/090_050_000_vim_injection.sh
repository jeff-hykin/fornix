# if vim exists
if [ -n "$(command -v "vim")" ]
then
    @ projectr/add_external_command "vim"
fi

# if vi exists
if [ -n "$(command -v "vi")" ]
then
    @ projectr/add_external_command "vi"
fi