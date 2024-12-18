var __awaiter=this&&this.__awaiter||function(thisArg,_arguments,P,generator){function adopt(value){return value instanceof P?value:new P((function(resolve){resolve(value)}))}return new(P||(P=Promise))((function(resolve,reject){function fulfilled(value){try{step(generator.next(value))}catch(e){reject(e)}}function rejected(value){try{step(generator.throw(value))}catch(e){reject(e)}}function step(result){result.done?resolve(result.value):adopt(result.value).then(fulfilled,rejected)}step((generator=generator.apply(thisArg,_arguments||[])).next())}))};import OpenJPHWASM from"./index";let openjphjs;function decode(pixelBuffer,options){return __awaiter(this,void 0,void 0,(function*(){const uint8Array=new Uint8Array(pixelBuffer),iterations=(null==options?void 0:options.iterations)||1,decodeLevel=(null==options?void 0:options.iterations)||0;openjphjs||(openjphjs=yield OpenJPHWASM());const decoder=new openjphjs.HTJ2KDecoder,encodedBuffer=decoder.getEncodedBuffer(uint8Array.length);encodedBuffer.set(uint8Array),decoder.readHeader();const resolutionAtLevel=decoder.calculateSizeAtDecompositionLevel(decodeLevel),numDecompositions=decoder.getNumDecompositions();for(let i=0;i<iterations;i++)decoder.decodeSubResolution(decodeLevel);const frameInfo=decoder.getFrameInfo(),blockDimensions=decoder.getBlockDimensions(),isReversible=decoder.getIsReversible(),progressionOrder=decoder.getProgressionOrder(),decodedBuffer=decoder.getDecodedBuffer();return{frameInfo:frameInfo,decodedBuffer:decodedBuffer,progressionOrder:progressionOrder,blockDimensions:blockDimensions,isReversible:isReversible,numDecompositions:numDecompositions,resolutionAtLevel:resolutionAtLevel}}))}export default decode;