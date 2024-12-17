#!/bin/sh
#rm -rf build
#!/bin/sh
mkdir -p build
mkdir -p dist
#(cd build && emcmake cmake -DCMAKE_BUILD_TYPE=Debug ..)
(cd build && CXXFLAGS=-msimd128 emcmake cmake ..) &&
(cd build && emmake make VERBOSE=1 -j) &&
cp ./build/src/openjphjs.js ./dist &&
cp ./build/src/interface.d.ts ./dist
#(cd test/node; npm run test)
