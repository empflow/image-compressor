import processImg from "./processImg";
import getImgDimensions from "./getImgDimensions";
import path from "path";
import { ImgDimensions } from "./types";

interface HandleImgProcessingParams {
  pathToInitImg: string;
  pathToResultImgInResultSubdir: string | null;
  qualityPercentage: number;
  dimensions: ImgDimensions;
}

export default async function handleImgProcessing({
  pathToInitImg,
  pathToResultImgInResultSubdir,
  qualityPercentage,
  dimensions,
}: HandleImgProcessingParams) {
  try {
    processImg({
      dimensions,
      pathToInitImg,
      pathToResultImgInResultSubdir,
      qualityPercentage,
    });
  } catch (err) {
    console.log(`error while processing image ${path.basename(pathToInitImg)}`);
    console.error(err);
  }
}
