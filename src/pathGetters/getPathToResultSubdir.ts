import path from "path";
import getFileNameWithoutExt from "../getFileNameWithoutExt";
import { previewMode } from "..";
import { resultsDirName } from "..";

export default function getPathToResultSubdir(initImgFileName: string) {
  if (!previewMode) return null;

  return path.join(
    process.cwd(),
    resultsDirName,
    getFileNameWithoutExt(initImgFileName)
  );
}
