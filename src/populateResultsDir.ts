import fs from "fs";
import { previewMode } from ".";
import getCompressionQuality from "./getCompressionQuality";
import getImgDimensions from "./getImgDimensions";
import handleImgProcessing from "./handleImgProcessing";
import { NeededPaths } from "./types";

/**
 *
 * if the preview mode is on, populates the results dir with directories containing the initial and the result images
 * if the preview mode is off, populates the results dir only with the result images
 */
export default async function populateResultsDir({
  pathToInitImg,
  pathToInitImgInResultSubdir,
  pathToResultImgInResultSubdir,
}: NeededPaths) {
  if (previewMode)
    fs.copyFileSync(pathToInitImg, pathToInitImgInResultSubdir as string);

  const buffer = fs.readFileSync(pathToInitImg);
  const quality = getCompressionQuality(buffer.byteLength);
  const dimensions = await getImgDimensions(pathToInitImg);
  await handleImgProcessing({
    dimensions,
    pathToInitImg,
    pathToResultImgInResultSubdir,
    qualityPercentage: quality,
  });
}
