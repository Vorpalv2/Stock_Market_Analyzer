import Puppeteer from "puppeteer";
import dirName from "path";

async function scrapper(name, format = "pdf", url) {
  try {
    const browser = await Puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(`${url}/company/${name}`);
    // console.log(dirName.join(dirName.dirname()));
    await page.emulateMediaType("screen");
    await page.pdf({ path: "example.pdf" });
    await browser.close();
  } catch (error) {
    console.log("something went wrong : ", error);
  }
}

export { scrapper };
