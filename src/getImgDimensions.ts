import sharp from "sharp";

export default async function getImgDimensions(pathToImg: string) {
  const img = sharp(pathToImg);
  const metadata = await img.metadata();
  const width = getImgWidthBasedOnLimit(metadata, 1920);
  const height = getImgHeightBasedOnLimit(metadata, 1080);
  return { width, height };
}

function getImgWidthBasedOnLimit(metadata: sharp.Metadata, limit: number) {
  return (metadata.width as number) > limit ? limit : undefined;
}

function getImgHeightBasedOnLimit(metadata: sharp.Metadata, limit: number) {
  return (metadata.height as number) > limit ? limit : undefined;
}
