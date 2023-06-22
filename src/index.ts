import dotenv from "dotenv";
dotenv.config();
import fs from "fs";
import getEnvVar from "./getEnvVar";
import getNeededPaths from "./pathGetters/getNeededPaths";
import rmRfDir from "./rmRfDir";
import populateResultsDir from "./populateResultsDir";

// 'result' is a directory with an 'init' image and a 'result' image

export const previewMode = getEnvVar("MODE") === "preview";
export const initFilesDirName = getEnvVar("INIT_DIR_NAME");
export const resultsDirName = getEnvVar("RESULTS_DIR_NAME");

(async () => {
  const initImgsFileNames = fs.readdirSync(initFilesDirName);
  rmRfDir(resultsDirName);
  fs.mkdirSync(resultsDirName);

  initImgsFileNames.forEach((initImgFileName) => {
    const paths = getNeededPaths(initImgFileName);
    if (previewMode) fs.mkdirSync(paths.pathToResultSubdir as string);
    return populateResultsDir(paths);
  });
})();
