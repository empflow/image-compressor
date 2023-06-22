import fs from "fs";
import getCompressionQuality from "./getCompressionQuality";
import getImgDimensions from "./getImgDimensions";
import handleImgProcessing from "./handleImgProcessing";
import { NeededPaths } from "./types";

export default async function populateResultsDir({
  pathToInitImg,
  pathToInitImgInResultsDir,
  pathToResultImgInResultsDir,
}: NeededPaths) {
  fs.copyFileSync(pathToInitImg, pathToInitImgInResultsDir);

  const buffer = fs.readFileSync(pathToInitImg);
  const quality = getCompressionQuality(buffer.byteLength);
  const dimensions = await getImgDimensions(pathToInitImg);
  await handleImgProcessing({
    dimensions,
    pathToInitImg,
    pathToResultImgInResultsDir,
    qualityPercentage: quality,
  });
  return "done!!!";
}
