docker build \
  --build-arg USER_UID=$(id -u) --build-arg USER_GID=$(id -g) --build-arg USERNAME=$(whoami) \
  -t openjphjs .