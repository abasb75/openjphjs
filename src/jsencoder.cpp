// Copyright (c) Chris Hafey.
// SPDX-License-Identifier: MIT

#include "HTJ2KDecoder.hpp"
#include "HTJ2KEncoder.hpp"

#include <emscripten.h>
#include <emscripten/bind.h>

using namespace emscripten;

char buf[] = ""
  OJPH_INT_TO_STRING(OPENJPH_VERSION_MAJOR) "."
  OJPH_INT_TO_STRING(OPENJPH_VERSION_MINOR) "."
  OJPH_INT_TO_STRING(OPENJPH_VERSION_PATCH);

namespace ojph {
  bool init_cpu_ext_level(int& level);
}

static std::string getVersion() {
  std::string version = buf;
  return version;
}

static unsigned int getSIMDLevel() {
  int level = 0;
  ojph::init_cpu_ext_level(level);
  return level;
}


EMSCRIPTEN_BINDINGS(charlsjs) {
    function("getVersion", &getVersion);
    function("getSIMDLevel", &getSIMDLevel);
}

EMSCRIPTEN_BINDINGS(FrameInfo) {
  value_object<FrameInfo>("FrameInfo")
    .field("width", &FrameInfo::width)
    .field("height", &FrameInfo::height)
    .field("bitsPerSample", &FrameInfo::bitsPerSample)
    .field("componentCount", &FrameInfo::componentCount)
    .field("isSigned", &FrameInfo::isSigned)
    .field("isUsingColorTransform", &FrameInfo::isUsingColorTransform)
       ;
}

EMSCRIPTEN_BINDINGS(Point) {
  value_object<Point>("Point")
    .field("x", &Point::x)
    .field("y", &Point::y)
       ;
}

EMSCRIPTEN_BINDINGS(Size) {
  value_object<Size>("Size")
    .field("width", &Size::width)
    .field("height", &Size::height)
       ;
}

EMSCRIPTEN_BINDINGS(HTJ2KEncoder) {
  class_<HTJ2KEncoder>("HTJ2KEncoder")
    .constructor<>()
    .function("getDecodedBuffer", &HTJ2KEncoder::getDecodedBuffer)
    .function("getEncodedBuffer", &HTJ2KEncoder::getEncodedBuffer)
    .function("encode", &HTJ2KEncoder::encode)
    .function("setDecompositions", &HTJ2KEncoder::setDecompositions)
    .function("setTLMMarker", &HTJ2KEncoder::setTLMMarker)
    .function("setTilePartDivisionsAtResolutions", &HTJ2KEncoder::setTilePartDivisionsAtResolutions)
    .function("setTilePartDivisionsAtComponents", &HTJ2KEncoder::setTilePartDivisionsAtComponents)
    .function("setQuality", &HTJ2KEncoder::setQuality)
    .function("setProgressionOrder", &HTJ2KEncoder::setProgressionOrder)
    .function("setDownSample", &HTJ2KEncoder::setDownSample)
    .function("setImageOffset", &HTJ2KEncoder::setImageOffset)
    .function("setTileSize", &HTJ2KEncoder::setTileSize)
    .function("setTileOffset", &HTJ2KEncoder::setTileOffset)
    .function("setBlockDimensions", &HTJ2KEncoder::setBlockDimensions)
    .function("setNumPrecincts", &HTJ2KEncoder::setNumPrecincts)
    .function("setPrecinct", &HTJ2KEncoder::setPrecinct)
   ;
}