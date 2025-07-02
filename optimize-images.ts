import fs from "fs/promises";
import path from "path";
import imagemin from "imagemin";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminPngquant from "imagemin-pngquant";

const DOCS_DIR = "docs";

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

  return files.flat().filter((file) => /\.(jpe?g|png)$/i.test(file));
}

async function optimizeAndReplaceImages(files: string[]) {
  for (const filePath of files) {
    const originalBuffer = await fs.readFile(filePath);

    const optimized = await imagemin.buffer(originalBuffer, {
      plugins: [
        imageminMozjpeg({ quality: 75 }),
        imageminPngquant({ quality: [0.6, 0.8] }),
      ],
    });

    await fs.writeFile(filePath, optimized);
    console.log(`Optimized: ${filePath}`);
  }
}

async function run() {
  const images = await getImagesRecursively(DOCS_DIR);

  if (images.length === 0) {
    console.log(`No images to optimize in ${DOCS_DIR}`);
    return;
  }

  await optimizeAndReplaceImages(images);

  console.log(
    `✅ Optimized ${images.length} image(s) in-place under ${DOCS_DIR}/`
  );
}

run().catch(console.error);
