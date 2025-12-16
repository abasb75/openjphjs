# openjphjs

```bash
npm i @abasb75/openjph
```


# Example

```typescript

import OpenJPHDecoder from "@abasb75/openjph/decode";


var openjphDecoder:any = null;

class HTJ2K{

    static async decode(pixelData: DataView) {
        if(!openjphDecoder ){
            const wasmUrl = new URL("@abasb75/openjph/htj2k_es6_decoder.wasm?url", import.meta.url).href;
            openjphDecoder = await OpenJPHDecoder({
                locateFile: () => wasmUrl
            });
            
        }

        const uint8Array = new Uint8Array(pixelData.buffer);
        const iterations = 1;
        const decodeLevel = 0;


        const decoder = new openjphDecoder.HTJ2KDecoder();

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

        

    }


}


export default HTJ2K;