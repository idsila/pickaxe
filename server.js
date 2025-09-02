const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
const express = require("express");
const cors = require("cors");
const app = express();
const gadget = require("./use.js");

puppeteer.use(StealthPlugin());
app.use(cors({ methods: ["GET", "POST"] }));
app.use(express.json());
app.use(express.static("public"));



const delay = (ms) => new Promise((r) => setTimeout(r, ms * 1000));

async function start() {
  console.log("STARTED BOT");
  const device = gadget;

  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: {
      width: device.windowWidth,
      height: device.windowHeight
    },
    args: [
      `--window-size=${device.width},${device.height}`,
      "--enable-notifications",
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-accelerated-2d-canvas",
      "--no-first-run",
      "--no-zygote",
      "--single-process",
      "--disable-gpu",
      "--disable-blink-features=AutomationControlled",
      "--disable-infobars",

      "--disable-breakpad",
      "--disable-software-rasterizer",
      "--force-device-scale-factor=1",
      "--lang=en-US",



      `--user-agent=${device.userAgent}`,
    ],
  });
  const page = await browser.newPage();
  const client = await page.target().createCDPSession();

  
  await client.send('Network.setUserAgentOverride', device.setUserAgentOverride);

  async function navigatorUpdate(currnetPage, device) {
    await currnetPage.evaluateOnNewDocument((profile) => {
      Object.defineProperty(navigator, "webdriver", {
        get: () => false,
      });

      window.chrome = {
        runtime: {},
      };

      const originalQuery = window.navigator.permissions.query;
      window.navigator.permissions.query = (parameters) =>
        parameters.name === "notifications"
          ? Promise.resolve({ state: Notification.permission })
          : originalQuery(parameters);

      Object.defineProperty(navigator, "languages", {
        get: () => ["en-US", "en"],
      });

      const fakePlugins = [
        {
          name: "Chrome PDF Plugin",
          filename: "internal-pdf-viewer",
          description: "Portable Document Format",
        },
        {
          name: "Chrome PDF Viewer",
          filename: "mhjfbmdgcfjbbpaeojofohoefgiehjai",
          description: "",
        },
        {
          name: "Native Client",
          filename: "internal-nacl-plugin",
          description: "",
        },
        {
          name: "Widevine Content Decryption Module",
          filename: "widevinecdmadapter.dll",
          description: "Widevine CDM for DRM",
        },
      ];
      const fakePluginArray = fakePlugins.map((p) => {
        return Object.setPrototypeOf(p, Plugin.prototype);
      });
      Object.setPrototypeOf(fakePluginArray, PluginArray.prototype);
      Object.defineProperty(navigator, "plugins", {
        get: () => fakePluginArray,
      });

      // navigator.mimeTypes
      const fakeMimeTypes = [
        {
          type: "application/pdf",
          description: "",
          suffixes: "pdf",
          enabledPlugin: fakePlugins[0],
        },
      ];
      Object.setPrototypeOf(fakeMimeTypes, MimeTypeArray.prototype);
      Object.defineProperty(navigator, "mimeTypes", {
        get: () => fakeMimeTypes,
      });

      // canvas spoof
      const getFakeCanvas = () => "data:image/png;base64,fakeimgstring";
      const originalToDataURL = HTMLCanvasElement.prototype.toDataURL;
      HTMLCanvasElement.prototype.toDataURL = function () {
        return getFakeCanvas();
      };

      // AudioContext fingerprint
      const copy = AudioBuffer.prototype.getChannelData;
      AudioBuffer.prototype.getChannelData = function () {
        const results = copy.apply(this, arguments);
        for (let i = 0; i < results.length; i += 100) {
          results[i] = results[i] + Math.random() * 0.0000001;
        }
        return results;
      };

      // удаление window.cdc_*
      for (let key in window) {
        if (key.match(/^\$?cdc_/) || key === "__webdriver_evaluate") {
          delete window[key];
        }
      }

      // eval защита
      const originalEval = window.eval;
      window.eval = function () {
        if (arguments[0].toString().includes("webdriver")) {
          return null;
        }
        return originalEval(...arguments);
      };

      // Function защита
      const originalFunction = Function.prototype.toString;
      Function.prototype.toString = function () {
        if (this.toString().includes("[native code]")) {
          return "function () { [native code] }";
        }
        return originalFunction.apply(this, arguments);
      };

      Object.defineProperty(navigator, "userAgentData", {
        get: () => ({
          brands: profile.setUserAgentOverride.userAgentMetadata.brands,
          mobile: profile.setUserAgentOverride.userAgentMetadata.mobile,
          platform: profile.setUserAgentOverride.userAgentMetadata.platform,
        }),
      });
      //Основные свойства navigator

      Object.defineProperty(navigator, "product", {
        get: () => profile.product,
      });
      Object.defineProperty(navigator, "deviceMemory", {
        get: () => profile.deviceMemory,
      });
      Object.defineProperty(navigator, "appCodeName", {
        get: () => profile.appCodeName,
      });
      Object.defineProperty(navigator, "hardwareConcurrency", {
        get: () => profile.hardwareConcurrency,
      });

      Object.defineProperty(navigator, "platform", {
        get: () => profile.platform,
      });
      Object.defineProperty(navigator, "vendor", { get: () => profile.vendor });
      Object.defineProperty(navigator, "appName", {
        get: () => profile.appName,
      });
      Object.defineProperty(navigator, "connection", {
        get: () => profile.connection,
      });

      // WebGL подмена
      const originalGetParameter = WebGLRenderingContext.prototype.getParameter;
      WebGLRenderingContext.prototype.getParameter = function (parameter) {
        if (parameter === 37445) return profile.webGL.vendor; // UNMASKED_VENDOR_WEBGL
        if (parameter === 37446) return profile.webGL.renderer; // UNMASKED_RENDERER_WEBGL
        return originalGetParameter.call(this, parameter);
      };

      // Разрешение экрана
      Object.defineProperty(screen, "width", {
        get: () => profile.screenWidth,
      });
      Object.defineProperty(screen, "height", {
        get: () => profile.screenHeight,
      });
    }, device);
  }

  browser.on("targetcreated", async (target) => {
    if (target.type() === "page") {
      const newPage = await target.page();
      await page.setUserAgent(device.userAgent);
      await newPage.setUserAgent(device.userAgent);

      const client = await page.target().createCDPSession();
      const newClient = await newPage.target().createCDPSession();

      await client.send('Network.setUserAgentOverride', device.setUserAgentOverride);

      await newClient.send('Network.setUserAgentOverride', device.setUserAgentOverride);

      await navigatorUpdate(page, device);
      await navigatorUpdate(newPage, device);

      await page.setExtraHTTPHeaders({ "Accept-Language": "en-US,en;q=0.9" });
      await newPage.setExtraHTTPHeaders({
        "Accept-Language": "en-US,en;q=0.9",
      });

      await newPage.setViewport({
        width: device.windowWidth,
        height: device.windowHeight,
        deviceScaleFactor: 1,
      });
      await page.setViewport({
        width: device.windowWidth,
        height: device.windowHeight,
        deviceScaleFactor: 1,
      });

      console.log("New page opened, user-agent set.");
    }
  });


  await page.setUserAgent(device.userAgent);
  await navigatorUpdate(page, device);

  await page.setExtraHTTPHeaders({ "Accept-Language": "en-US,en;q=0.9" });
  await page.setViewport({
    width: device.windowWidth,
    height: device.windowHeight,
    deviceScaleFactor: 1,
  });

  //await page.goto("http://127.0.0.1:5500/index.html", { waitUntil: 'networkidle2' });
  await page.goto("https://best-earn.vercel.app/", {
    waitUntil: "networkidle2",
  });
  await delay(2);
  await page.mouse.wheel({ deltaY: 2500 });
  await delay(4);

  setInterval(async () => {
    const cords = {
      x: device.width - 302 + Math.floor(Math.random() * 128),
      y: device.height - 89 + Math.floor(Math.random() * 36),
    };
    await page.mouse.click(cords.x, cords.y);
    await page.mouse.wheel({ deltaY: -Math.floor(Math.random() * 3000) });
  }, 50 + Math.floor(Math.random() * 50));

  setInterval(async () => {
    await page.mouse.click(
      Math.ceil(Math.random() * device.width),
      Math.ceil(Math.random() * device.height)
    );
    //await page.screenshot({ path: "public/img.png" })
  }, 3425 + Math.floor(Math.random() * 3000));

  setInterval(async () => {
    await page.mouse.wheel({ deltaY: Math.floor(Math.random() * 3000) });
  }, 15324 + Math.floor(Math.random() * 3000));

  console.log("FINISH");
}



app.get("/start", async (req, res) => {
  start();
  res.send({ type: true });
});

app.listen("3000", (err) => {
  err ? err : console.log("STARTED SERVER");
});
