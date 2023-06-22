import { resultsDirName } from "..";
import path from "path";

export default function getPathToResultsDir() {
  return path.join(__dirname, "../../", resultsDirName);
}
