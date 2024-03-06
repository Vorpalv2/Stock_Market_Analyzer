import path from "path";
import fs from "fs/promises";
import fsync from "fs";
import os from "os";

const rootDir = os.homedir();
const DownloadsDir = path.join(rootDir, "Downloads");
const StorageDir = path.join(DownloadsDir, "Storage");

async function checkDirectory(format) {
  if (!fsync.existsSync(StorageDir)) {
    await fs.mkdir(StorageDir);
  } else {
    const result = await format.map(async (element) => {
      let childDir = path.join(StorageDir, element);
      if (!fsync.existsSync(childDir)) {
        await fs.mkdir(childDir);
        return childDir;
      }
      return null;
    });
    return Promise.all(result);
  }
}

// (async () => {
//   let result = await checkDirectory(["PDF", "PNG", "JPG", "TXT", "PPT"]);
//   console.log(result);
// })();

export { checkDirectory };
