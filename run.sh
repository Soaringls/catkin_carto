if [ $1 == "r" ]; then
    catkin_make_isolated --install --use-ninja -DCMAKE_BUILD_TYPE=RelWithDebInfo
fi
source install_isolated/setup.bash
roslaunch cartographer_ros demo_backpack_2d.launch bag_filename:=/home/lyu/data/cartographer_paper_deutsches_museum.bag