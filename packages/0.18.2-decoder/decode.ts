import OpenJPHWASM from "./index"
import { DecodedOpenJPH } from "./interface";

let openjphjs:any;

interface DecodeOptions{
  iterations?:number;
  decodeLevel?:number;
}

async function decode(pixelBuffer:ArrayBuffer,options?:DecodeOptions):Promise<DecodedOpenJPH>{
  const uint8Array = new Uint8Array(pixelBuffer);
  const iterations = options?.iterations || 1;
  const decodeLevel = options?.iterations || 0;

  if(!openjphjs){
    openjphjs = await OpenJPHWASM();
  }

  const decoder = new openjphjs.HTJ2KDecoder();

  const encodedBuffer = decoder.getEncodedBuffer(uint8Array.length);
  encodedBuffer.set(uint8Array);

  decoder.readHeader();
  const resolutionAtLevel = decoder.calculateSizeAtDecompositionLevel(decodeLevel);
  const numDecompositions = decoder.getNumDecompositions();

  for (let i = 0; i < iterations; i++) {
    decoder.decodeSubResolution(decodeLevel);
  }

  const frameInfo = decoder.getFrameInfo();

  const blockDimensions = decoder.getBlockDimensions();
  const isReversible = decoder.getIsReversible()

  const progressionOrder = decoder.getProgressionOrder();

  const decodedBuffer = decoder.getDecodedBuffer();

  return {
    frameInfo,
    decodedBuffer,
    progressionOrder,
    blockDimensions,
    isReversible,
    numDecompositions,
    resolutionAtLevel,
  }

}


export default decode;