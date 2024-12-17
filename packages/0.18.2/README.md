## openjphjs
JS/WebAssembly build of [OpenJPH](https://github.com/aous72/OpenJPH)

## Try It Out!
Try it in your browser [here](https://chafey.github.io/openjphjs/test/browser/index.html)

## Using generated Javascript File:
1. install From `npm`:

```bash
npm i --save @abasb75/openjph
```

2. import `@abasb75/openjph`:

```js
import OpenJPEG from '@abasb75/openjph'

...
let decoder,encoder;
OpenJPHWASM().then((openjph)=> {
    decoder = new openjph.HTJ2KDecoder();
    encoder = new openjph.HTJ2KEncoder();
});
...

```

# Decode

```javascript

import {decode} from "@abasb75/openjph";

const decoded = await decode(arrayBuffer); // ArrayBuffer
console.log('decoded',decoded);


```

For see example you can use <a href="https://github.com/abasb75/openjphjs/blob/master/test/browser/index.html">this link</a>

## only decoder versions:
