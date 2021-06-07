# if atom exists
if [ -n "$(command -v "atom")" ]
then
    @ projectr/add_external_command "atom"
fi