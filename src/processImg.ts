import sharp from "sharp";
import { ImgDimensions } from "./types";

interface ProcessImgParams {
  pathToInitImg: string;
  pathToResultImgInResultsDir: string;
  qualityPercentage: number;
  dimensions: ImgDimensions;
}

export default async function processImg({
  pathToInitImg,
  pathToResultImgInResultsDir,
  qualityPercentage,
  dimensions: { width, height },
}: ProcessImgParams) {
  await sharp(pathToInitImg)
    .webp({ quality: qualityPercentage, alphaQuality: 75 })
    .resize({
      fit: "inside",
      width,
      height,
    })
    .toFile(pathToResultImgInResultsDir);
}
