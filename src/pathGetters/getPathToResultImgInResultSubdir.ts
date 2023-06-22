import path from "path";
import { previewMode } from "..";

export default function getPathToResultImgInResultSubdir(
  pathToResultsDir: string | null
) {
  if (!previewMode) return null;
  return path.join(pathToResultsDir as string, `result.webp`);
}
