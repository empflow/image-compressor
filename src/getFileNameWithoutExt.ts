import path from "path";

export default function getFileNameWithoutExt(filePath: string) {
  const originalName = path.basename(filePath);
  const ext = path.extname(filePath);
  return originalName.replace(ext, "");
}
