import { resultsDirName } from "..";
import path from "path";
import getFileNameWithoutExt from "../getFileNameWithoutExt";

export default function getPathToResultImgInResultsDir(pathToInitFile: string) {
  const resultFileName = path.basename(pathToInitFile);
  return path.join(process.cwd(), resultsDirName, resultFileName);
}
