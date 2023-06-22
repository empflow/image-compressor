import dotenv from "dotenv";
dotenv.config();
import fs from "fs";
import getEnvVar from "./getEnvVar";
import getNeededPaths from "./getNeededPaths";
import rmRfDir from "./rmRfDir";
import createResultsDir from "./createResultsDir";
import populateResultsDir from "./populateResultsDir";

// 'result' is a directory with an 'init' image and a 'result' image

console.log(getEnvVar("MODE"));

(async () => {
  const initFilesDir = getEnvVar("INIT_DIR_PATH");
  const resultsFilesDir = getEnvVar("RESULTS_DIR_PATH");
  const initImgsFileNames = fs.readdirSync(initFilesDir);
  rmRfDir(resultsFilesDir);

  initImgsFileNames.forEach((initImgFileName) => {
    const paths = getNeededPaths(initImgFileName);
    createResultsDir(paths);
    return populateResultsDir(paths);
  });
})();
