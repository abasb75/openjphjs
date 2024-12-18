import { DecodedOpenJPH } from "./interface";
interface DecodeOptions {
    iterations?: number;
    decodeLevel?: number;
}
declare function decode(pixelBuffer: ArrayBuffer, options?: DecodeOptions): Promise<DecodedOpenJPH>;
export default decode;
