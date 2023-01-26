# if [ "$(uname)" = "Darwin" ] 
# then
#     deno eval '
#         const { FileSystem } = await import(`https://deno.land/x/quickr@0.6.15/main/file_system.js`)
#         const dockerSettingsPath = `${FileSystem.home}/Library/Group Containers/group.com.docker/settings.json`
#         let dockerSettingsString = await FileSystem.read(dockerSettingsPath)
#         if (!dockerSettingsString) {
#             dockerSettingsString = "{}"
#         }
#         const dockerSettings = JSON.parse(dockerSettingsString)
#         dockerSettings.filesharingDirectories = [...dockerSettings.filesharingDirectories]
#         if (!dockerSettings.filesharingDirectories.includes("/nix/store")) {
#             dockerSettings.filesharingDirectories.push("/nix/store")
#             await FileSystem.write({
#                 path: dockerSettingsPath,
#                 data: JSON.stringify(dockerSettings,0,2),
#             })
#         }
#     '
# fi