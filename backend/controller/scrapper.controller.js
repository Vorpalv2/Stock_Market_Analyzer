import Puppeteer from "puppeteer";
import { join } from "path";
import { customCSS } from "../constants/customcss.constants.js";
import os from "os";

//@parameter type name : string,format : string||'pdf' by default and url : string
//@return type promise
//export scrapper function

async function scrapper(name, format = "pdf", url) {
  try {
    const browser = await Puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(join(url, "company", name));
    await page.emulateMediaType("screen");
    await page.addStyleTag({ content: customCSS });
    if (format == "pdf") {
      await page.pdf({
        path: join(
          os.homedir(),
          "Downloads",
          "Storage",
          format,
          `${name}.${format}`
        ),
        format: "A4",
        displayHeaderFooter: false,
        landscape: true,
      });
    } else if (format == "png") {
      await page.screenshot({
        path: join(
          os.homedir(),
          "Downloads",
          "Storage",
          format,
          `${name}.${format}`
        ),
        fullPage: true,
      });
    }
    await browser.close();
  } catch (error) {
    console.log("something went wrong : ", error);
  }
}

export { scrapper };
