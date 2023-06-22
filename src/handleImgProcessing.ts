import processImg from "./processImg";
import getImgDimensions from "./getImgDimensions";
import path from "path";
import { ImgDimensions } from "./types";

interface HandleImgProcessingParams {
  pathToInitImg: string;
  pathToResultImgInResultsDir: string;
  qualityPercentage: number;
  dimensions: ImgDimensions;
}

export default async function handleImgProcessing({
  pathToInitImg,
  pathToResultImgInResultsDir,
  qualityPercentage,
  dimensions,
}: HandleImgProcessingParams) {
  try {
    processImg({
      dimensions,
      pathToInitImg,
      pathToResultImgInResultsDir,
      qualityPercentage,
    });
  } catch (err) {
    console.log(`error while processing image ${path.basename(pathToInitImg)}`);
    console.error(err);
  }
}
