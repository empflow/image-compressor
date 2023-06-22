import sharp from "sharp";
import { ImgDimensions } from "./types";
import getPathToResultImgInResultsDir from "./pathGetters/getPathToResultImgInResultsDir";

interface ProcessImgParams {
  pathToInitImg: string;
  pathToResultImgInResultSubdir: string | null;
  qualityPercentage: number;
  dimensions: ImgDimensions;
}

export default async function processImg({
  pathToInitImg,
  pathToResultImgInResultSubdir,
  qualityPercentage,
  dimensions: { width, height },
}: ProcessImgParams) {
  let pathToSaveTo: string;
  if (!pathToResultImgInResultSubdir) {
    pathToSaveTo = getPathToResultImgInResultsDir(pathToInitImg);
  } else pathToSaveTo = pathToResultImgInResultSubdir;

  await sharp(pathToInitImg)
    .webp({ quality: qualityPercentage, alphaQuality: 75 })
    .resize({
      fit: "inside",
      width,
      height,
    })
    .toFile(pathToSaveTo);
}
