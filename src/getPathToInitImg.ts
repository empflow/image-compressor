import path from "path";
import getEnvVar from "./getEnvVar";

const initFilesDir = getEnvVar("INIT_DIR_PATH");

export default function getPathToInitImg(initImgFileName: string) {
  return path.join(__dirname, "../", initFilesDir, initImgFileName);
}
