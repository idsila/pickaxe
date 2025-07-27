const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
const express = require("express");
const cors = require("cors");
const app = express();

puppeteer.use(StealthPlugin());
app.use(cors({ methods: ["GET", "POST"] }));
app.use(express.json());
app.use(express.static("public"));

const gadgets = [
  {
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:119.0) Gecko/20100101 Firefox/119.0",
    platform: "Win32",
    vendor: "Mozilla",
    language: "ru-RU",
    languages: ["ru-RU", "ru", "en-US"],
    deviceMemory: 8,
    hardwareConcurrency: 4,
    width: 1920,
    height: 1080,
    webGL: {
      renderer: "NVIDIA GeForce RTX 3080",
      vendor: "NVIDIA Corporation"
    }
  },
  {
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 13_5_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.5 Safari/605.1.15",
    platform: "MacIntel",
    vendor: "Apple Computer, Inc.",
    language: "ru-RU",
    languages: ["ru-RU", "ru", "en"],
    deviceMemory: 16,
    hardwareConcurrency: 8,
    width: 2560,
    height: 1600,
    webGL: {
      renderer: "Apple M2",
      vendor: "Apple Inc."
    }
  },
  {
    userAgent: "Mozilla/5.0 (Windows NT 10.0; WOW64; rv:115.0) Gecko/20100101 Firefox/115.0",
    platform: "Win32",
    vendor: "Mozilla",
    language: "ru",
    languages: ["ru", "en-US"],
    deviceMemory: 4,
    hardwareConcurrency: 4,
    width: 1366,
    height: 768,
    webGL: {
      renderer: "Intel HD Graphics 620",
      vendor: "Intel Inc."
    }
  },
  {
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
    platform: "iPhone",
    vendor: "Apple Computer, Inc.",
    language: "ru-RU",
    languages: ["ru-RU", "en-US"],
    deviceMemory: 4,
    hardwareConcurrency: 6,
    width: 1170,
    height: 2532,
    webGL: {
      renderer: "Apple A17 GPU",
      vendor: "Apple Inc."
    }
  },
  {
    userAgent: "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.5938.92 Safari/537.36",
    platform: "Win32",
    vendor: "Google Inc.",
    language: "ru",
    languages: ["ru", "en-US"],
    deviceMemory: 8,
    hardwareConcurrency: 8,
    width: 1920,
    height: 1080,
    webGL: {
      renderer: "AMD Radeon RX 580 Series",
      vendor: "ATI Technologies Inc."
    }
  },
  {
    userAgent: "Mozilla/5.0 (iPad; CPU OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
    platform: "iPad",
    vendor: "Apple Computer, Inc.",
    language: "ru",
    languages: ["ru", "en-US"],
    deviceMemory: 6,
    hardwareConcurrency: 6,
    width: 2048,
    height: 2732,
    webGL: {
      renderer: "Apple A14X GPU",
      vendor: "Apple Inc."
    }
  },
  {
    userAgent: "Mozilla/5.0 (Windows NT 10.0; ARM64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.6099.129 Safari/537.36",
    platform: "Win32",
    vendor: "Google Inc.",
    language: "ru-RU",
    languages: ["ru-RU", "en"],
    deviceMemory: 8,
    hardwareConcurrency: 4,
    width: 1920,
    height: 1080,
    webGL: {
      renderer: "Qualcomm Adreno 690",
      vendor: "Qualcomm"
    }
  },
  {
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 12_6_5) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Safari/605.1.15",
    platform: "MacIntel",
    vendor: "Apple Computer, Inc.",
    language: "ru",
    languages: ["ru", "en-US"],
    deviceMemory: 8,
    hardwareConcurrency: 8,
    width: 1680,
    height: 1050,
    webGL: {
      renderer: "Intel Iris Plus Graphics 640",
      vendor: "Intel Inc."
    }
  },
  {
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:113.0) Gecko/20100101 Firefox/113.0",
    platform: "Win32",
    vendor: "Mozilla",
    language: "ru",
    languages: ["ru", "en-US"],
    deviceMemory: 16,
    hardwareConcurrency: 8,
    width: 2560,
    height: 1440,
    webGL: {
      renderer: "NVIDIA GeForce GTX 1660 Ti",
      vendor: "NVIDIA Corporation"
    }
  },
  {
    userAgent: "Mozilla/5.0 (Android 14; Mobile; rv:120.0) Gecko/120.0 Firefox/120.0",
    platform: "Android",
    vendor: "Mozilla",
    language: "ru",
    languages: ["ru", "en-US"],
    deviceMemory: 6,
    hardwareConcurrency: 8,
    width: 1080,
    height: 2400,
    webGL: {
      renderer: "Mali-G77 MP11",
      vendor: "ARM"
    }
  }
];

const delay = (ms) => new Promise((r) => setTimeout(r, ms * 1000));

async function start() {
  console.log("STARTED BOT");
  const device = gadgets[Math.floor(Math.random() * gadgets.length)];
  console.log(device);
  const browser = await puppeteer.launch({
    headless: false,
    args: [
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
    ],
  });
  const page = await browser.newPage();

  browser.on("targetcreated", async (target) => {
    if (target.type() === "page") {
      const newPage = await target.page();
      await page.setUserAgent(device.userAgent);
      await newPage.setUserAgent(device.userAgent);
      await page.evaluateOnNewDocument((profile) => {
        // Основные свойства navigator
        Object.defineProperty(navigator, 'platform', { get: () => profile.platform });
        Object.defineProperty(navigator, 'deviceMemory', { get: () => profile.deviceMemory });
        Object.defineProperty(navigator, 'hardwareConcurrency', { get: () => profile.hardwareConcurrency });
    
        // WebGL подмена
        const originalGetParameter = WebGLRenderingContext.prototype.getParameter;
        WebGLRenderingContext.prototype.getParameter = function(parameter) {
          if (parameter === 37445) return profile.webGL.vendor; // UNMASKED_VENDOR_WEBGL
          if (parameter === 37446) return profile.webGL.renderer; // UNMASKED_RENDERER_WEBGL
          return originalGetParameter.call(this, parameter);
        };
    
        // Разрешение экрана
        Object.defineProperty(screen, 'width', { get: () => profile.width });
        Object.defineProperty(screen, 'height', { get: () => profile.height });
      }, device);

      await newPage.evaluateOnNewDocument((profile) => {
        // Основные свойства navigator
        Object.defineProperty(navigator, 'platform', { get: () => profile.platform });
        Object.defineProperty(navigator, 'deviceMemory', { get: () => profile.deviceMemory });
        Object.defineProperty(navigator, 'hardwareConcurrency', { get: () => profile.hardwareConcurrency });
    
        // WebGL подмена
        const originalGetParameter = WebGLRenderingContext.prototype.getParameter;
        WebGLRenderingContext.prototype.getParameter = function(parameter) {
          if (parameter === 37445) return profile.webGL.vendor; // UNMASKED_VENDOR_WEBGL
          if (parameter === 37446) return profile.webGL.renderer; // UNMASKED_RENDERER_WEBGL
          return originalGetParameter.call(this, parameter);
        };
    
        // Разрешение экрана
        Object.defineProperty(screen, 'width', { get: () => profile.width });
        Object.defineProperty(screen, 'height', { get: () => profile.height });
      }, device);
      await newPage.setViewport({ width: device.width, height: device.height });
      await page.setViewport({
        width: device.width,
        height: device.height,
        deviceScaleFactor: 1,
      });
      console.log("New page opened, user-agent set.");
    }
  });

  await page.setUserAgent(device.userAgent);
  await page.evaluateOnNewDocument((profile) => {
    // Основные свойства navigator
    Object.defineProperty(navigator, 'platform', { get: () => profile.platform });
    Object.defineProperty(navigator, 'deviceMemory', { get: () => profile.deviceMemory });
    Object.defineProperty(navigator, 'hardwareConcurrency', { get: () => profile.hardwareConcurrency });

    // WebGL подмена
    const originalGetParameter = WebGLRenderingContext.prototype.getParameter;
    WebGLRenderingContext.prototype.getParameter = function(parameter) {
      if (parameter === 37445) return profile.webGL.vendor; // UNMASKED_VENDOR_WEBGL
      if (parameter === 37446) return profile.webGL.renderer; // UNMASKED_RENDERER_WEBGL
      return originalGetParameter.call(this, parameter);
    };

    // Разрешение экрана
    Object.defineProperty(screen, 'width', { get: () => profile.width });
    Object.defineProperty(screen, 'height', { get: () => profile.height });
  }, device);
  await page.setExtraHTTPHeaders({'Accept-Language': 'en-US,en;q=0.9'});
  await page.setViewport({ width: device.width, height: device.height, deviceScaleFactor: 1 });

  await page.evaluateOnNewDocument(() => {
    // navigator.webdriver
    Object.defineProperty(navigator, "webdriver", {
      get: () => false,
    });

    // window.chrome
    window.chrome = {
      runtime: {},
      // добавь другие свойства если нужно
    };

    // navigator.permissions
    const originalQuery = window.navigator.permissions.query;
    window.navigator.permissions.query = (parameters) =>
      parameters.name === "notifications"
        ? Promise.resolve({ state: Notification.permission })
        : originalQuery(parameters);

    // navigator.languages
    Object.defineProperty(navigator, "languages", {
      get: () => ["en-US", "en"],
    });

    // navigator.plugins
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

    // WebGL vendor/renderer
    const getParameter = WebGLRenderingContext.prototype.getParameter;
    WebGLRenderingContext.prototype.getParameter = function (parameter) {
      if (parameter === 37445) return "Intel Inc.";
      if (parameter === 37446) return "Intel Iris OpenGL Engine";
      return getParameter.call(this, parameter);
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
  });





  await page.goto("https://idsila.vercel.app/", { waitUntil: 'networkidle2' });
  await delay(2);
  //await page.mouse.wheel({ deltaY: 2500 });
  await delay(2);

  // setInterval(async () => {
  //   const cords = {
  //     x: device.width - 302 + Math.floor(Math.random() * 128),
  //     y: device.height - 89 + Math.floor(Math.random() * 36),
  //   };
  //   await page.mouse.click(cords.x, cords.y);
  //   await page.mouse.wheel({ deltaY: -Math.floor(Math.random() * 3000) });
  // }, 50 + Math.floor(Math.random() * 50));

  // setInterval(async () => {
  //   await page.mouse.click(
  //     Math.ceil(Math.random() * device.width),
  //     Math.ceil(Math.random() * device.height)
  //   );
  //   //await page.screenshot({ path: "public/img.png" })
  // }, 3425 + Math.floor(Math.random() * 3000));

  // setInterval(async () => {
  //   await page.mouse.wheel({ deltaY: Math.floor(Math.random() * 3000) });
  // }, 15324 + Math.floor(Math.random() * 3000));

  console.log("FINISH");
}

start();

app.get("/start", async (req, res) => {
  start();
  res.send({ type: true });
});

app.listen("3000", (err) => {
  err ? err : console.log("STARTD SERVER");
});
