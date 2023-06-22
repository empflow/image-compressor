import path from "path";

export default function getPathToResultImgInResultsDir(
  pathToResultsDir: string
) {
  return path.join(pathToResultsDir, `result.webp`);
}
