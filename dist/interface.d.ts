// TypeScript bindings for emscripten-generated code.  Automatically generated at compile time.
declare namespace RuntimeExports {
    /**
     * @param {string|null=} returnType
     * @param {Array=} argTypes
     * @param {Array=} args
     * @param {Object=} opts
     */
    function ccall(ident: any, returnType?: (string | null) | undefined, argTypes?: any[] | undefined, args?: any[] | undefined, opts?: any | undefined): any;
}
interface WasmModule {
}

export interface ClassHandle {
  isAliasOf(other: ClassHandle): boolean;
  delete(): void;
  deleteLater(): this;
  isDeleted(): boolean;
  // @ts-ignore - If targeting lower than ESNext, this symbol might not exist.
  [Symbol.dispose](): void;
  clone(): this;
}
export type FrameInfo = {
  width: number,
  height: number,
  bitsPerSample: number,
  componentCount: number,
  isSigned: boolean,
  isUsingColorTransform: boolean
};

export type Point = {
  x: number,
  y: number
};

export type Size = {
  width: number,
  height: number
};

export interface HTJ2KEncoder extends ClassHandle {
  getDecodedBuffer(_0: FrameInfo): any;
  getEncodedBuffer(): any;
  encode(): void;
  setDecompositions(_0: number): void;
  setTLMMarker(_0: boolean): void;
  setTilePartDivisionsAtResolutions(_0: boolean): void;
  setTilePartDivisionsAtComponents(_0: boolean): void;
  setQuality(_0: boolean, _1: number): void;
  setProgressionOrder(_0: number): void;
  setDownSample(_0: number, _1: Point): void;
  setImageOffset(_0: Point): void;
  setTileSize(_0: Size): void;
  setTileOffset(_0: Point): void;
  setBlockDimensions(_0: Size): void;
  setNumPrecincts(_0: number): void;
  setPrecinct(_0: number, _1: Size): void;
}

interface EmbindModule {
  getVersion(): string;
  getSIMDLevel(): number;
  HTJ2KEncoder: {
    new(): HTJ2KEncoder;
  };
}

export type MainModule = WasmModule & typeof RuntimeExports & EmbindModule;
export default function MainModuleFactory (options?: unknown): Promise<MainModule>;
