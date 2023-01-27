# FROM ubuntu:jammy-20220801

# # setup timezone
# RUN echo 'Etc/UTC' > /etc/timezone && \
#     ln -s /usr/share/zoneinfo/Etc/UTC /etc/localtime && \
#     apt-get update && \
#     apt-get install -q -y --no-install-recommends tzdata && \
#     rm -rf /var/lib/apt/lists/*

# # install packages
# RUN apt-get update && apt-get install -q -y --no-install-recommends \
#     bash-completion \
#     dirmngr \
#     gnupg2 \
#     lsb-release \
#     python3-flake8 \
#     python3-flake8-blind-except \
#     python3-flake8-builtins \
#     python3-flake8-class-newline \
#     python3-flake8-comprehensions \
#     python3-flake8-deprecated \
#     python3-flake8-docstrings \
#     python3-flake8-import-order \
#     python3-flake8-quotes \
#     python3-pip \
#     python3-pytest-repeat \
#     python3-pytest-rerunfailures \
#     && rm -rf /var/lib/apt/lists/*

# # setup sources.list
# RUN echo "deb http://packages.ros.org/ros2/ubuntu jammy main" > /etc/apt/sources.list.d/ros2-latest.list

# # setup keys
# RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys C1CF6E31E6BADE8868B172B4F42ED6FBAB17C654

# # setup environment
# ENV LANG C.UTF-8
# ENV LC_ALL C.UTF-8

# # install bootstrap tools
# RUN apt-get update && apt-get install --no-install-recommends -y \
#     build-essential \
#     git \
#     python3-colcon-common-extensions \
#     python3-colcon-mixin \
#     python3-rosdep \
#     python3-setuptools \
#     python3-vcstool \
#     && rm -rf /var/lib/apt/lists/*

# # install python packages
# RUN pip3 install -U \
#     argcomplete
# # This is a workaround for pytest not found causing builds to fail
# # Following RUN statements tests for regression of https://github.com/ros2/ros2/issues/722
# RUN pip3 freeze | grep pytest \
#     && python3 -m pytest --version

# # bootstrap rosdep
# RUN rosdep init \
#     && rosdep update

# # setup colcon mixin and metadata
# RUN colcon mixin add default \
#       https://raw.githubusercontent.com/colcon/colcon-mixin-repository/master/index.yaml && \
#     colcon mixin update && \
#     colcon metadata add default \
#       https://raw.githubusercontent.com/colcon/colcon-metadata-repository/master/index.yaml && \
#     colcon metadata update

# # clone source
# ENV ROS2_WS /opt/ros2_ws
# RUN mkdir -p $ROS2_WS/src
# WORKDIR $ROS2_WS

# # build source
# RUN colcon \
#     build \
#     --cmake-args \
#       -DSECURITY=ON --no-warn-unused-cli \
#     --symlink-install

# # setup bashrc
# RUN cp /etc/skel/.bashrc ~/

# RUN echo '#!/bin/bash'                             >> /ros_entrypoint.sh && \
#     echo 'set -e'                                  >> /ros_entrypoint.sh && \
#     echo '# setup ros2 environment'                >> /ros_entrypoint.sh && \
#     echo 'source "$ROS2_WS/install/setup.bash" --' >> /ros_entrypoint.sh && \
#     echo '"$@"'                                    >> /ros_entrypoint.sh

# # set environment
# ARG ROS_DISTRO=rolling
# ENV ROS_DISTRO=$ROS_DISTRO
# ENV ROS_VERSION=2 \
#     ROS_PYTHON_VERSION=3

# # clone source
# ARG ROS2_BRANCH=$ROS_DISTRO
# ARG ROS2_REPO=https://github.com/ros2/ros2.git
# RUN git clone $ROS2_REPO -b $ROS2_BRANCH \
#     && vcs import src < ros2/ros2.repos

# # install dependencies
# RUN apt-get update && rosdep install -y \
#     --from-paths src \
#     --ignore-src \
#     --skip-keys " \
#         fastcdr \
#         rti-connext-dds-6.0.1 \
#         urdfdom_headers" \
#     && rm -rf /var/lib/apt/lists/*

# # build source
# RUN colcon \
#     build \
#     --symlink-install \
#     --mixin build-testing-on release \
#     --cmake-args --no-warn-unused-cli

# # test build
# ARG RUN_TESTS
# ARG FAIL_ON_TEST_FAILURE
# RUN if [ ! -z "$RUN_TESTS" ]; then \
#         colcon test; \
#         if [ ! -z "$FAIL_ON_TEST_FAILURE" ]; then \
#             colcon test-result; \
#         else \
#             colcon test-result || true; \
#         fi \
#     fi

FROM docker.io/library/ros:latest@sha256:187938e57357e2e1180ada88ddeb89bd54c156e444d09a1d92442c804c1cdf96

# setup a normal user
RUN useradd --create-home "fornix" --password "fornix" --groups sudo && \
    echo 'fornix ALL = NOPASSWD : ALL' >> /etc/sudoers

# install nix
ENV NIX_IGNORE_SYMLINK_STORE "1"
# RUN mkdir -p /fornix/store     && \
#     chown fornix /fornix       && \
#     chown fornix /fornix/store && \
#     ln -s /fornix /nix         && \
#     chown fornix /nix          && \
#     curl -Lk https://releases.nixos.org/nix/nix-2.12.0/install | NIX_IGNORE_SYMLINK_STORE="1" sudo -u fornix --preserve-env="NIX_IGNORE_SYMLINK_STORE" sh -s 
RUN  sudo apt-get update && sudo apt-get install -q -y --no-install-recommends \
    curl \
    rsync \
    lsof
RUN    curl -Lk https://releases.nixos.org/nix/nix-2.12.0/install | sudo -u fornix sh -s 

# RUN rm /nix
COPY ./commands /home/fornix/project/commands
COPY ./settings/fornix_core         /home/fornix/project/settings/fornix_core
COPY ./settings/during_clean        /home/fornix/project/settings/during_clean
COPY ./settings/during_manual_start /home/fornix/project/settings/during_manual_start
COPY ./settings/during_purge        /home/fornix/project/settings/during_purge
COPY ./settings/extensions          /home/fornix/project/settings/extensions
COPY ./settings/requirements        /home/fornix/project/settings/requirements
COPY ./settings/during_start        /home/fornix/project/settings/during_start
COPY ./settings/home                /home/fornix/project/settings/home
COPY ./settings/during_start_prep   /home/fornix/project/settings/during_start_prep
RUN cd /home/fornix/project/  && echo "exit" | sudo -u fornix commands/start

RUN echo '#!/bin/bash'                                        >  /root/.bash_profile && \
    echo 'echo "$@"                                              ' >> /root/.bash_profile && \
    echo 'if [ "$@" = "bash" ]                                   ' >> /root/.bash_profile && \
    echo 'then                                                   ' >> /root/.bash_profile && \
    echo '    cd /home/fornix/project; sudo -u fornix bash; exit ' >> /root/.bash_profile && \
    echo 'else                                                   ' >> /root/.bash_profile && \
    echo '    args="$@"                                          ' >> /root/.bash_profile && \
    echo '    bash -c "$args"                                    ' >> /root/.bash_profile && \
    echo 'fi                                                     ' >> /root/.bash_profile && \
    echo
RUN chmod 777 /root/.bash_profile

RUN  sudo apt-get update && sudo apt-get install -q -y --no-install-recommends \
    curl \
    tree
    
ENTRYPOINT ["/root/.bash_profile"]
CMD ["bash"]