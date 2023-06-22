export interface NeededPaths {
  pathToInitImg: string;
  pathToResultSubdir: string | null;
  pathToInitImgInResultSubdir: string | null;
  pathToResultImgInResultSubdir: string | null;
}

export interface ImgDimensions {
  width: number | undefined;
  height: number | undefined;
}
