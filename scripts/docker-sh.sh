docker run -it --rm \
  --user $(id -u):$(id -g) \
  -v "$(pwd)":/openjphjs -w /openjphjs \
  openjphjs bash -login