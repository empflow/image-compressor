import dotenv from "dotenv";
dotenv.config();
import fs from "fs";
import getEnvVar from "./getEnvVar";
import getNeededPaths from "./getNeededPaths";
import rmRfDir from "./rmRfDir";
import createResultsDir from "./createResultsDir";
import populateResultsDir from "./populateResultsDir";

// 'result' is a directory with an 'init' image and a 'result' image
const initFilesDir = getEnvVar("INIT_DIR_PATH");
const resultsFilesDir = getEnvVar("RESULTS_DIR_PATH");

const initImgsFileNames = fs.readdirSync(initFilesDir);
rmRfDir(resultsFilesDir);

console.time("timer");
(async () => {
  const promises = initImgsFileNames.map((initImgFileName) => {
    const paths = getNeededPaths(initImgFileName);
    createResultsDir(paths);
    return populateResultsDir(paths);
  });

  const result = await Promise.all(promises);
  console.log(result);
})();
console.timeEnd("timer");
