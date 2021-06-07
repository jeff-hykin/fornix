# if sudo exists
if [ -n "$(command -v "sudo")" ]
then
    @ projectr/add_external_command "sudo"
fi