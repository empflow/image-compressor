import path from "path";
import getEnvVar from "../getEnvVar";
import { initFilesDirName } from "..";

export default function getPathToInitImg(initImgFileName: string) {
  return path.join(process.cwd(), initFilesDirName, initImgFileName);
}
