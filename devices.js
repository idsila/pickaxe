const devices = [
  {
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
    platform: "Win32",
    vendor: "Google Inc.",
    language: "en-US",
    languages: ["en-US", "en"],
    deviceMemory: 16,
    hardwareConcurrency: 8,
    width: 1920,
    height: 1080,
    webGL: {
      renderer: "NVIDIA GeForce RTX 3080",
      vendor: "NVIDIA Corporation",
    },
  },
  {
    userAgent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
    platform: "MacIntel",
    vendor: "Google Inc.",
    language: "en-US",
    languages: ["en-US", "en"],
    deviceMemory: 16,
    hardwareConcurrency: 8,
    width: 2560,
    height: 1600,
    webGL: {
      renderer: "Apple M2",
      vendor: "Apple Inc.",
    },
  },
  {
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 18_3_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.3.1 Mobile/15E148 Safari/604.1",
    platform: "iPhone",
    vendor: "Apple Computer, Inc.",
    language: "en-US",
    languages: ["en-US", "en"],
    deviceMemory: 6,
    hardwareConcurrency: 6,
    width: 1170,
    height: 2532,
    webGL: {
      renderer: "Apple A18 GPU",
      vendor: "Apple Inc.",
    },
  },
  {
    userAgent:
      "Mozilla/5.0 (iPad; CPU OS 18_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/138.0.0.0 Mobile/15E148 Safari/604.1",
    platform: "iPad",
    vendor: "Apple Computer, Inc.",
    language: "en-US",
    languages: ["en-US", "en"],
    deviceMemory: 8,
    hardwareConcurrency: 8,
    width: 2048,
    height: 2732,
    webGL: {
      renderer: "Apple A18X GPU",
      vendor: "Apple Inc.",
    },
  },
  {
    userAgent:
      "Mozilla/5.0 (Android 14; Pixel 9 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Mobile Safari/537.36",
    platform: "Android",
    vendor: "Google Inc.",
    language: "en-US",
    languages: ["en-US", "en"],
    deviceMemory: 12,
    hardwareConcurrency: 8,
    width: 1440,
    height: 3120,
    webGL: {
      renderer: "Adreno 756",
      vendor: "Qualcomm",
    },
  },
  {
    userAgent:
      "Mozilla/5.0 (Windows NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36",
    platform: "Win32",
    vendor: "Google Inc.",
    language: "en-US",
    languages: ["en-US", "en"],
    deviceMemory: 16,
    hardwareConcurrency: 8,
    width: 2560,
    height: 1440,
    webGL: {
      renderer: "NVIDIA GeForce RTX 4070",
      vendor: "NVIDIA Corporation",
    },
  },
  {
    userAgent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
    platform: "MacIntel",
    vendor: "Google Inc.",
    language: "en-US",
    languages: ["en-US", "en"],
    deviceMemory: 8,
    hardwareConcurrency: 4,
    width: 1680,
    height: 1050,
    webGL: {
      renderer: "Intel Iris Plus Graphics 640",
      vendor: "Intel Inc.",
    },
  },
  {
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
    platform: "iPhone",
    vendor: "Apple Computer, Inc.",
    language: "en-US",
    languages: ["en-US", "en"],
    deviceMemory: 4,
    hardwareConcurrency: 6,
    width: 1179,
    height: 2556,
    webGL: {
      renderer: "Apple A17 Pro",
      vendor: "Apple Inc.",
    },
  },
  {
    userAgent:
      "Mozilla/5.0 (Android 13; SAMSUNG SM-S918U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Mobile Safari/537.36",
    platform: "Android",
    vendor: "Google Inc.",
    language: "en-US",
    languages: ["en-US", "en"],
    deviceMemory: 12,
    hardwareConcurrency: 8,
    width: 1440,
    height: 3088,
    webGL: {
      renderer: "Adreno 740",
      vendor: "Qualcomm",
    },
  },
  {
    userAgent:
      "Mozilla/5.0 (iPad; CPU OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1",
    platform: "iPad",
    vendor: "Apple Computer, Inc.",
    language: "en-US",
    languages: ["en-US", "en"],
    deviceMemory: 6,
    hardwareConcurrency: 8,
    width: 2224,
    height: 1668,
    webGL: {
      renderer: "Apple A16 GPU",
      vendor: "Apple Inc.",
    },
  },
  {
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Edge/135.0.0.0 Safari/537.36",
    platform: "Win32",
    vendor: "Google Inc.",
    language: "en-US",
    languages: ["en-US", "en"],
    deviceMemory: 8,
    hardwareConcurrency: 4,
    width: 1366,
    height: 768,
    webGL: {
      renderer: "Intel UHD Graphics 620",
      vendor: "Intel Inc.",
    },
  },
  {
    userAgent:
      "Mozilla/5.0 (Android 12; Pixel 6a) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Mobile Safari/537.36",
    platform: "Android",
    vendor: "Google Inc.",
    language: "en-US",
    languages: ["en-US", "en"],
    deviceMemory: 6,
    hardwareConcurrency: 8,
    width: 1080,
    height: 2400,
    webGL: {
      renderer: "Mali-G78 MP20",
      vendor: "ARM",
    },
  },
  {
    userAgent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Safari/605.1.15",
    platform: "MacIntel",
    vendor: "Apple Computer, Inc.",
    language: "en-US",
    languages: ["en-US", "en"],
    deviceMemory: 8,
    hardwareConcurrency: 4,
    width: 1440,
    height: 900,
    webGL: {
      renderer: "AMD Radeon Pro 555X",
      vendor: "ATI Technologies Inc.",
    },
  },
  {
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
    platform: "Win32",
    vendor: "Google Inc.",
    language: "en-US",
    languages: ["en-US", "en"],
    deviceMemory: 8,
    hardwareConcurrency: 4,
    width: 1600,
    height: 900,
    webGL: {
      renderer: "AMD Radeon RX 5600 XT",
      vendor: "ATI Technologies Inc.",
    },
  },
  {
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
    platform: "Win32",
    vendor: "Google Inc.",
    language: "en-US",
    languages: ["en-US", "en"],
    deviceMemory: 16,
    hardwareConcurrency: 8,
    width: 3840,
    height: 2160,
    webGL: {
      renderer: "NVIDIA GeForce RTX 4090",
      vendor: "NVIDIA Corporation",
    },
  },
  // 27
  {
    userAgent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 13_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Safari/605.1.15",
    platform: "MacIntel",
    vendor: "Apple Computer, Inc.",
    language: "en-US",
    languages: ["en-US", "en"],
    deviceMemory: 32,
    hardwareConcurrency: 16,
    width: 3024,
    height: 1964,
    webGL: {
      renderer: "Apple M1 Pro",
      vendor: "Apple Inc.",
    },
  },
  // 28
  {
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 17_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
    platform: "iPhone",
    vendor: "Apple Computer, Inc.",
    language: "en-US",
    languages: ["en-US", "en"],
    deviceMemory: 8,
    hardwareConcurrency: 6,
    width: 1284,
    height: 2778,
    webGL: {
      renderer: "Apple A17 Pro",
      vendor: "Apple Inc.",
    },
  },
  // 29
  {
    userAgent:
      "Mozilla/5.0 (iPad; CPU OS 16_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.5 Mobile/15E148 Safari/604.1",
    platform: "iPad",
    vendor: "Apple Computer, Inc.",
    language: "en-US",
    languages: ["en-US", "en"],
    deviceMemory: 6,
    hardwareConcurrency: 8,
    width: 2360,
    height: 1640,
    webGL: {
      renderer: "Apple A16X GPU",
      vendor: "Apple Inc.",
    },
  },
  // 30
  {
    userAgent:
      "Mozilla/5.0 (Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Mobile Safari/537.36",
    platform: "Android",
    vendor: "Google Inc.",
    language: "en-US",
    languages: ["en-US", "en"],
    deviceMemory: 12,
    hardwareConcurrency: 8,
    width: 1080,
    height: 2400,
    webGL: {
      renderer: "Adreno 730",
      vendor: "Qualcomm",
    },
  },
  // 31
  {
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:119.0) Gecko/20100101 Firefox/119.0",
    platform: "Win32",
    vendor: "Mozilla",
    language: "en-US",
    languages: ["en-US", "en"],
    deviceMemory: 16,
    hardwareConcurrency: 8,
    width: 1920,
    height: 1080,
    webGL: {
      renderer: "NVIDIA GeForce RTX 3070",
      vendor: "NVIDIA Corporation",
    },
  },
  // 32
  {
    userAgent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_7_4) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.1 Safari/605.1.15",
    platform: "MacIntel",
    vendor: "Apple Computer, Inc.",
    language: "en-US",
    languages: ["en-US", "en"],
    deviceMemory: 16,
    hardwareConcurrency: 8,
    width: 2560,
    height: 1600,
    webGL: {
      renderer: "Apple M1",
      vendor: "Apple Inc.",
    },
  },
  // 33
  {
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 16_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.7 Mobile/15E148 Safari/604.1",
    platform: "iPhone",
    vendor: "Apple Computer, Inc.",
    language: "en-US",
    languages: ["en-US", "en"],
    deviceMemory: 6,
    hardwareConcurrency: 6,
    width: 1170,
    height: 2532,
    webGL: {
      renderer: "Apple A16 GPU",
      vendor: "Apple Inc.",
    },
  },
  // 34
  {
    userAgent:
      "Mozilla/5.0 (iPad; CPU OS 15_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1",
    platform: "iPad",
    vendor: "Apple Computer, Inc.",
    language: "en-US",
    languages: ["en-US", "en"],
    deviceMemory: 4,
    hardwareConcurrency: 6,
    width: 1620,
    height: 2160,
    webGL: {
      renderer: "Apple A14X GPU",
      vendor: "Apple Inc.",
    },
  },
  // 35
  {
    userAgent:
      "Mozilla/5.0 (Android 13; SAMSUNG SM-G996U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Mobile Safari/537.36",
    platform: "Android",
    vendor: "Google Inc.",
    language: "en-US",
    languages: ["en-US", "en"],
    deviceMemory: 12,
    hardwareConcurrency: 8,
    width: 1440,
    height: 3088,
    webGL: {
      renderer: "Mali-G78 MP14",
      vendor: "ARM",
    },
  },
  // 36
  {
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36 Edg/135.0.0.0",
    platform: "Win32",
    vendor: "Google Inc.",
    language: "en-US",
    languages: ["en-US", "en"],
    deviceMemory: 32,
    hardwareConcurrency: 16,
    width: 3440,
    height: 1440,
    webGL: {
      renderer: "NVIDIA GeForce RTX 3090",
      vendor: "NVIDIA Corporation",
    },
  },
  // 37
  {
    userAgent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 12_6_5) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.3 Safari/605.1.15",
    platform: "MacIntel",
    vendor: "Apple Computer, Inc.",
    language: "en-US",
    languages: ["en-US", "en"],
    deviceMemory: 16,
    hardwareConcurrency: 8,
    width: 2560,
    height: 1600,
    webGL: {
      renderer: "Apple M1 Max",
      vendor: "Apple Inc.",
    },
  },
  // 38
  {
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 16_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.4.1 Mobile/15E148 Safari/604.1",
    platform: "iPhone",
    vendor: "Apple Computer, Inc.",
    language: "en-US",
    languages: ["en-US", "en"],
    deviceMemory: 6,
    hardwareConcurrency: 6,
    width: 1170,
    height: 2532,
    webGL: {
      renderer: "Apple A15 GPU",
      vendor: "Apple Inc.",
    },
  },
  // 39
  {
    userAgent:
      "Mozilla/5.0 (iPad; CPU OS 14_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1",
    platform: "iPad",
    vendor: "Apple Computer, Inc.",
    language: "en-US",
    languages: ["en-US", "en"],
    deviceMemory: 4,
    hardwareConcurrency: 4,
    width: 1536,
    height: 2048,
    webGL: {
      renderer: "Apple A12X GPU",
      vendor: "Apple Inc.",
    },
  },
  // 40
  {
    userAgent:
      "Mozilla/5.0 (Android 11; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Mobile Safari/537.36",
    platform: "Android",
    vendor: "Google Inc.",
    language: "en-US",
    languages: ["en-US", "en"],
    deviceMemory: 8,
    hardwareConcurrency: 8,
    width: 1080,
    height: 2340,
    webGL: {
      renderer: "Adreno 620",
      vendor: "Qualcomm",
    },
  },
  // 41
  {
    userAgent:
      "Mozilla/5.0 (Windows NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
    platform: "Win32",
    vendor: "Google Inc.",
    language: "en-US",
    languages: ["en-US", "en"],
    deviceMemory: 24,
    hardwareConcurrency: 12,
    width: 2560,
    height: 1440,
    webGL: {
      renderer: "NVIDIA GeForce RTX 4080",
      vendor: "NVIDIA Corporation",
    },
  },
  // 42
  {
    userAgent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6 Safari/605.1.15",
    platform: "MacIntel",
    vendor: "Apple Computer, Inc.",
    language: "en-US",
    languages: ["en-US", "en"],
    deviceMemory: 12,
    hardwareConcurrency: 6,
    width: 2880,
    height: 1800,
    webGL: {
      renderer: "AMD Radeon Pro 5500M",
      vendor: "ATI Technologies Inc.",
    },
  },
  // 43
  {
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 15_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6 Mobile/15E148 Safari/604.1",
    platform: "iPhone",
    vendor: "Apple Computer, Inc.",
    language: "en-US",
    languages: ["en-US", "en"],
    deviceMemory: 4,
    hardwareConcurrency: 6,
    width: 1170,
    height: 2532,
    webGL: {
      renderer: "Apple A14 GPU",
      vendor: "Apple Inc.",
    },
  },
  // 44
  {
    userAgent:
      "Mozilla/5.0 (iPad; CPU OS 13_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.2 Mobile/15E148 Safari/604.1",
    platform: "iPad",
    vendor: "Apple Computer, Inc.",
    language: "en-US",
    languages: ["en-US", "en"],
    deviceMemory: 4,
    hardwareConcurrency: 4,
    width: 2048,
    height: 2732,
    webGL: {
      renderer: "Apple A12Z GPU",
      vendor: "Apple Inc.",
    },
  },
  // 45
  {
    userAgent:
      "Mozilla/5.0 (Android 12; Pixel 5a) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Mobile Safari/537.36",
    platform: "Android",
    vendor: "Google Inc.",
    language: "en-US",
    languages: ["en-US", "en"],
    deviceMemory: 8,
    hardwareConcurrency: 8,
    width: 1080,
    height: 2340,
    webGL: {
      renderer: "Adreno 620",
      vendor: "Qualcomm",
    },
  },
  // 46
  {
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:118.0) Gecko/20100101 Firefox/118.0",
    platform: "Win32",
    vendor: "Mozilla",
    language: "en-US",
    languages: ["en-US", "en"],
    deviceMemory: 16,
    hardwareConcurrency: 8,
    width: 1920,
    height: 1080,
    webGL: {
      renderer: "NVIDIA GeForce GTX 1080 Ti",
      vendor: "NVIDIA Corporation",
    },
  },
  // 47
  {
    userAgent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 12_5_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.2 Safari/605.1.15",
    platform: "MacIntel",
    vendor: "Apple Computer, Inc.",
    language: "en-US",
    languages: ["en-US", "en"],
    deviceMemory: 16,
    hardwareConcurrency: 8,
    width: 2560,
    height: 1600,
    webGL: {
      renderer: "Apple M1 Max",
      vendor: "Apple Inc.",
    },
  },
  // 48
  {
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 15_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.3.1 Mobile/15E148 Safari/604.1",
    platform: "iPhone",
    vendor: "Apple Computer, Inc.",
    language: "en-US",
    languages: ["en-US", "en"],
    deviceMemory: 4,
    hardwareConcurrency: 6,
    width: 1170,
    height: 2532,
    webGL: {
      renderer: "Apple A13 GPU",
      vendor: "Apple Inc.",
    },
  },
  // 49
  {
    userAgent:
      "Mozilla/5.0 (iPad; CPU OS 12_5_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.2 Mobile/15E148 Safari/604.1",
    platform: "iPad",
    vendor: "Apple Computer, Inc.",
    language: "en-US",
    languages: ["en-US", "en"],
    deviceMemory: 3,
    hardwareConcurrency: 4,
    width: 1536,
    height: 2048,
    webGL: {
      renderer: "Apple A10X GPU",
      vendor: "Apple Inc.",
    },
  },
  // 50
  {
    userAgent:
      "Mozilla/5.0 (Android 13; Pixel 7 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Mobile Safari/537.36",
    platform: "Android",
    vendor: "Google Inc.",
    language: "en-US",
    languages: ["en-US", "en"],
    deviceMemory: 12,
    hardwareConcurrency: 8,
    width: 1440,
    height: 3120,
    webGL: {
      renderer: "Adreno 730",
      vendor: "Qualcomm",
    },
  },
];





{
  "userAgent": "Mozilla/5.0 (Windows NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
  "platform": "Win32",
  "vendor": "Google Inc.",
  "language": "en-US",
  "product": "Gecko",
  "appCodeName": "Mozilla",
  "appName": "Netscape",
  "languages": [
    "en-US",
    "en"
  ],
  "deviceMemory": 32,
  "hardwareConcurrency": 16,
  "width": 3456,
  "height": 2160,
  "webGL": {
    "renderer": "NVIDIA GeForce RTX 4070 Laptop GPU",
    "vendor": "NVIDIA Corporation"
  },
  "setUserAgentOverride": {
    "userAgent": "Mozilla/5.0 (Windows NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
    "userAgentMetadata": {
      "brands": [
        {
          "brand": "Chromium",
          "version": "136"
        },
        {
          "brand": "Google Chrome",
          "version": "136"
        }
      ],
      "fullVersion": "136.0.0.0",
      "platform": "Win32",
      "platformVersion": "14.0.0",
      "architecture": "x86",
      "model": "",
      "mobile": false
    }
  }
}