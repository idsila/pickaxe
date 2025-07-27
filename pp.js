function getDeviceInfo() {
  // Основные данные
  const info = {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    vendor: navigator.vendor,
    language: navigator.language,
    languages: [...navigator.languages],
    cookieEnabled: navigator.cookieEnabled,
    online: navigator.onLine,
    pdfViewerEnabled: navigator.pdfViewerEnabled,
    
    // Память и процессор
    deviceMemory: navigator.deviceMemory || 'N/A', // ОЗУ в GB
    hardwareConcurrency: navigator.hardwareConcurrency || 'N/A', // Ядра CPU
    

    
    // Браузер
    browser: {
      name: getBrowserName(),
      version: getBrowserVersion(),
    },
    
    // ОС
    os: getOS(),
    
    // Сеть
    connection: navigator.connection ? {
      type: navigator.connection.type,
      effectiveType: navigator.connection.effectiveType,
      downlink: navigator.connection.downlink,
      rtt: navigator.connection.rtt,
      saveData: navigator.connection.saveData
    } : 'Network Information API not supported',
    

    
    // Дополнительные возможности
    touchSupport: 'ontouchstart' in window,
    batteryApi: 'getBattery' in navigator,
    vibrationApi: 'vibrate' in navigator,
    webGL: getWebGLInfo()
  };

  return info;
}







// Информация о GPU

// Пример использования
console.log(getDeviceInfo());



function getWebGLInfo() {
  const canvas = document.createElement('canvas');
  try {
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return 'WebGL not supported';
    
    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    console.log(debugInfo)
    console.log(gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL))
    return {
      renderer: debugInfo ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) : 'Blocked',
      vendor: debugInfo ? gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL) : 'Blocked'
    };
  } catch (e) {
    return `WebGL error: ${e.message}`;
  }
}
getWebGLInfo()



const ppp = {
  userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) ...",
  platform: "Win32",
  vendor: "Google Inc.",
  language: "ru-RU",
  languages: ["ru-RU", "ru", "en-US"],
  deviceMemory: 8,
  hardwareConcurrency: 4,


  webGL: {
    renderer: "NVIDIA GeForce RTX 3080",
    vendor: "NVIDIA Corporation"
  }
}

Напиши массив из 50 устройств разных типов кроме Linux его не испорьзуй. Используй следующий обект и заполни его раззынми данными котрые исаользуют реальные физические устройства. Ты можешь использовать разные типы устройств и браузеров приблеженные к реальноси кроме Linux.


// Google Chrome, Safari, Firefox, Edge, Opera
// MacOS, Ipad, Iphone, Windows, Android,




Доделать здесь
navigator.userAgent = '';
navigator.platform = '';
navigator.vendor = '';
navigator.language = '';
navigator.languages = ''
navigator.deviceMemory = '';
navigator.hardwareConcurrency = '';


window.ontouchstart = () => {}


function changeWebGLData(newData = {}) {
  const defaults = { renderer: "Intel Iris OpenGL Engine", vendor: "Intel Inc." };
  const finalData = {...defaults, ...newData};

  const originalGetParameter = WebGLRenderingContext.prototype.getParameter;
  
  WebGLRenderingContext.prototype.getParameter = function(p) {
    const debugInfo = this.getExtension('WEBGL_debug_renderer_info');
    
    if (debugInfo) {
      if (p === debugInfo.UNMASKED_VENDOR_WEBGL) {
        return finalData.vendor;
      }
      if (p === debugInfo.UNMASKED_RENDERER_WEBGL) {
        return finalData.renderer;
      }
    }
    
    return originalGetParameter.call(this, p);
  };
  return finalData;
}



changeWebGLData({ renderer: "NVIDIA RTX 4090", vendor: "NVIDIA Corporation" });


function linkApp(){
  const device = gadgets[Math.floor(Math.random() * gadgets.length)];
  navigator.userAgent = device.userAgent;
  navigator.platform = device.platform;
  navigator.vendor = device.vendor;
  navigator.language = device.language;
  navigator.languages = device.languages;
  navigator.deviceMemory = device.deviceMemory;
  navigator.hardwareConcurrency = device.hardwareConcurrency;
  window.ontouchstart = () => {}
  function changeWebGLData(newData = {}) {
    const defaults = { renderer: "Intel Iris OpenGL Engine", vendor: "Intel Inc." };
    const finalData = {...defaults, ...newData};
  
    const originalGetParameter = WebGLRenderingContext.prototype.getParameter;
    
    WebGLRenderingContext.prototype.getParameter = function(p) {
      const debugInfo = this.getExtension('WEBGL_debug_renderer_info');
      
      if (debugInfo) {
        if (p === debugInfo.UNMASKED_VENDOR_WEBGL) {
          return finalData.vendor;
        }
        if (p === debugInfo.UNMASKED_RENDERER_WEBGL) {
          return finalData.renderer;
        }
      }
      
      return originalGetParameter.call(this, p);
    };
    return finalData;
  }
  changeWebGLData({ renderer: device.webGL.renderer, vendor: device.webGL.vendor });

}

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



// // Проверяем изменения
// function checkWebGL() {
//   const canvas = document.createElement('canvas');
//   const gl = canvas.getContext('webgl');
//   const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
  
//   return {
//     renderer: debugInfo ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) : null,
//     vendor: debugInfo ? gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL) : null
//   };
// }

// console.log('Current WebGL info:', checkWebGL());














(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // 1. Устанавливаем User-Agent до навигации
  await page.setUserAgent(device.userAgent);

  // 2. Подменяем navigator и другие свойства через evaluateOnNewDocument
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
    Object.defineProperty(screen, 'width', { get: () => profile.screen.width });
    Object.defineProperty(screen, 'height', { get: () => profile.screen.height });
  }, device);

  // 3. Дополнительные заголовки
  await page.setExtraHTTPHeaders({'Accept-Language': 'en-US,en;q=0.9'});

  // 4. Устанавливаем viewport (должен соответствовать screen)
  await page.setViewport({
    width: DEVICE_PROFILE.screen.width,
    height: DEVICE_PROFILE.screen.height,
    deviceScaleFactor: 1
  });

  // 5. Переходим на страницу
  await page.goto('https://example.com', { waitUntil: 'networkidle2' });






  await browser.close();
})();