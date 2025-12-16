
decode(pixelData) {
        if(!openjphDecoder ){
            const wasmUrl = new URL("@abasb75/openjph/htj2k_es6_decoder.wasm?url", import.meta.url).href;
            openjphDecoder = await OpenJPHDecoder();
            
        }

        const uint8Array = pixelData;
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