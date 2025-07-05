import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOCS_DIR = __dirname + "/docs";

async function getImagesRecursively(dir: string): Promise<string[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);
      return entry.isDirectory()
        ? await getImagesRecursively(fullPath)
        : fullPath;
    })
  );

  return files.flat().filter((file) => /\.(jpe?g|png|JPG)$/i.test(file));
}

async function optimizeAndReplaceImages(files: string[]) {
  for (const filePath of files) {
    const originalBuffer = await fs.readFile(filePath);
    const optimized = await optimizeImageWithSharp(originalBuffer, filePath);
    if (!optimized || !Buffer.isBuffer(optimized)) {
      console.error(`Optimization failed for ${path.basename(filePath)}`);
      continue;
    }
    const tempPath = filePath + ".tmp";
    await fs.writeFile(tempPath, optimized);
    await fs.rename(tempPath, filePath);
    console.log(`Optimized: ${path.basename(filePath)}`);
  }
}

async function optimizeImageWithSharp(
  buffer: Buffer,
  filePath: string
): Promise<Buffer> {
  const ext = path.extname(filePath).toLowerCase();

  if (ext === ".jpg" || ext === ".jpeg") {
    return await sharp(buffer).jpeg({ quality: 75 }).toBuffer();
  }

  if (ext === ".png") {
    return await sharp(buffer)
      .png({ quality: 80, compressionLevel: 9 })
      .toBuffer();
  }

  return buffer; // Return unmodified if format not recognized
}

async function run() {
  const images = await getImagesRecursively(DOCS_DIR);

  if (images.length === 0) {
    console.log(`No images to optimize in ${DOCS_DIR}`);
    return;
  }

  await optimizeAndReplaceImages(images);
}

run().catch(console.error);
