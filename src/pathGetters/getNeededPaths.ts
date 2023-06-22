import getPathToInitImg from "./getPathToInitImg";
import getPathToInitImgInResultSubdir from "./getPathToInitImgInResultSubdir";
import getPathToResultImgInResultSubdir from "./getPathToResultImgInResultSubdir";
import getPathToResultSubdir from "./getPathToResultSubdir";
import { NeededPaths } from "../types";

export default function getNeededPaths(initImgFileName: string): NeededPaths {
  const pathToInitImg = getPathToInitImg(initImgFileName);
  const pathToResultSubdir = getPathToResultSubdir(initImgFileName);
  const pathToInitImgInResultSubdir = getPathToInitImgInResultSubdir(
    pathToResultSubdir,
    initImgFileName
  );
  const pathToResultImgInResultSubdir =
    getPathToResultImgInResultSubdir(pathToResultSubdir);

  return {
    pathToInitImg,
    pathToResultSubdir,
    pathToInitImgInResultSubdir,
    pathToResultImgInResultSubdir,
  };
}
