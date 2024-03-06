import Puppeteer from "puppeteer";
import { join } from "path";

//@parameter type name : string,format : string||'pdf' by default and url : string
//@return type promise
//export scrapper function

async function scrapper(name, format = "pdf", url) {
  try {
    const browser = await Puppeteer.launch();
    const page = await browser.newPage();
    // console.log("value :");
    // console.log(`${url}/company/${name}`);
    await page.goto(join(url, "company", name));
    await page.emulateMediaType("screen");
    await page.pdf({ path: `${name}.${format}` });
    await browser.close();
  } catch (error) {
    console.log("something went wrong : ", error);
  }
}

export { scrapper };
