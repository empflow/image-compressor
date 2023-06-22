import fs from "fs";
import { NeededPaths } from "./types";

export default function createResultsDir(paths: NeededPaths) {
  fs.mkdirSync(paths.pathToResultsDir);
}
