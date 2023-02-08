export PATH="$path_for_ros_packages_turtlesim/bin:$PATH"
export QT_QPA_PLATFORM=offscreen
roscore &
__fornix_roscore_pid="$!" # PID of backgrounded-task above

# make exit function auto-kill this background task
function exit {
    emulate -L zsh
    kill "$__fornix_roscore_pid" || kill -9 "$__fornix_roscore_pid"
    builtin exit "$@"
}
# test command: rosrun turtlesim turtlesim_node