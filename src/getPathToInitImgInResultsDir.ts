import path from "path";

export default function getPathToInitImgInResultsDir(
  resultDirPath: string,
  initImgFileName: string
) {
  return path.join(resultDirPath, `init${path.extname(initImgFileName)}`);
}
