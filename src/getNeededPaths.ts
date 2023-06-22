import getPathToInitImg from "./getPathToInitImg";
import getPathToInitImgInResultsDir from "./getPathToInitImgInResultsDir";
import getPathToResultImgInResultsDir from "./getPathToResultImgInResultsDir";
import getPathToResultsDir from "./getPathToResultsDir";
import { NeededPaths } from "./types";

export default function getNeededPaths(initImgFileName: string): NeededPaths {
  const pathToInitImg = getPathToInitImg(initImgFileName);
  const pathToResultsDir = getPathToResultsDir(initImgFileName);
  const pathToInitImgInResultsDir = getPathToInitImgInResultsDir(
    pathToResultsDir,
    initImgFileName
  );
  const pathToResultImgInResultsDir =
    getPathToResultImgInResultsDir(pathToResultsDir);

  return {
    pathToInitImg,
    pathToResultsDir,
    pathToInitImgInResultsDir,
    pathToResultImgInResultsDir,
  };
}
