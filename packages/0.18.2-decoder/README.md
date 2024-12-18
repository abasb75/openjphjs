## openjphjs HTJ2K Decoder/Encoder
JS/WebAssembly build of [OpenJPH](https://github.com/aous72/OpenJPH)

## Description
`OpenJPH` is a decoder/ecoder for `HTJ2K` image.
alternative : <a href="https://www.npmjs.com/package/@abasb75/openjpeg">OpenJPEG</a>

## Try It Out!
Try it in your browser [here](https://chafey.github.io/openjphjs/test/browser/index.html)

## Using generated Javascript File:
1. install From `npm`:

```bash
npm i --save @abasb75/htj2k-decoder
```

2. import `@abasb75/htj2k-decoder`:

```js
import OpenJPEG from '@abasb75/htj2k-decoder'

...
let decoder;
OpenJPHWASM().then((openjph)=> {
    decoder = new openjph.HTJ2KDecoder();
});
...

```

## Decode

```javascript

import {decode} from "@abasb75/openjph";

const decoded = await decode(arrayBuffer); // ArrayBuffer
console.log('decoded',decoded);


```

For see example you can use <a href="https://github.com/abasb75/openjphjs/blob/master/test/browser/index.html">this link</a>

## only decoder versions:
<a href="https://www.npmjs.com/package/@abasb75/htj2k-decoder">@abasb75/htj2k-decoder</a>
