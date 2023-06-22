import path from "path";
import getEnvVar from "./getEnvVar";
import getFileNameWithoutExt from "./getFileNameWithoutExt";

export default function getPathToResultsDir(initImgFileName: string) {
  const resultsFilesDir = getEnvVar("RESULTS_DIR_PATH");
  return path.join(
    __dirname,
    "../",
    resultsFilesDir,
    getFileNameWithoutExt(initImgFileName)
  );
}
