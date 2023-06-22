import path from "path";
import { previewMode } from "..";

export default function getPathToInitImgInResultSubdir(
  resultDirPath: string | null,
  initImgFileName: string
) {
  if (!previewMode) return null;
  return path.join(
    resultDirPath as string,
    `init${path.extname(initImgFileName)}`
  );
}
