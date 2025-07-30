const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
const express = require("express");
const cors = require("cors");
const app = express();

puppeteer.use(StealthPlugin());
app.use(cors({ methods: ["GET", "POST"] }));
app.use(express.json());
app.use(express.static("public"));

const gadgets =  [
  {
    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 13_4_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.4 Safari/605.1.15",
    "platform": "MacIntel",
    "vendor": "Apple Computer, Inc.",
    "language": "en-US",
    "languages": [
      "en-US",
      "en"
    ],
    "deviceMemory": 16,
    "hardwareConcurrency": 8,
    "width": 3024,
    "height": 1964,
    "webGL": {
      "renderer": "Apple M2 GPU",
      "vendor": "Apple Inc."
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 13_4_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.4 Safari/605.1.15",
      "userAgentMetadata": {
        "brands": [
          {
            "brand": "Chromium",
            "version": "16"
          },
          {
            "brand": "Safari",
            "version": "16"
          }
        ],
        "fullVersion": "16.0.0.0",
        "platform": "macOS",
        "platformVersion": "13.4.1",
        "architecture": "x86",
        "model": "",
        "mobile": false
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5.1 Mobile/15E148 Safari/604.1",
    "platform": "iPhone",
    "vendor": "Apple Computer, Inc.",
    "language": "en-US",
    "languages": [
      "en-US",
      "en"
    ],
    "deviceMemory": 6,
    "hardwareConcurrency": 6,
    "width": 1290,
    "height": 2796,
    "webGL": {
      "renderer": "Apple A17 Pro GPU",
      "vendor": "Apple Inc."
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5.1 Mobile/15E148 Safari/604.1",
      "userAgentMetadata": {
        "brands": [
          {
            "brand": "Chromium",
            "version": "17"
          },
          {
            "brand": "Safari",
            "version": "17"
          }
        ],
        "fullVersion": "17.0.0.0",
        "platform": "iPhone",
        "platformVersion": "14.0.0",
        "architecture": "",
        "model": "iPhone 15 Pro Max",
        "mobile": true
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 13_4_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.4 Safari/605.1.15",
    "platform": "MacIntel",
    "vendor": "Apple Computer, Inc.",
    "language": "en-US",
    "languages": [
      "en-US",
      "en"
    ],
    "deviceMemory": 16,
    "hardwareConcurrency": 8,
    "width": 3024,
    "height": 1964,
    "webGL": {
      "renderer": "Apple M2 GPU",
      "vendor": "Apple Inc."
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 13_4_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.4 Safari/605.1.15",
      "userAgentMetadata": {
        "brands": [
          {
            "brand": "Chromium",
            "version": "16"
          },
          {
            "brand": "Safari",
            "version": "16"
          }
        ],
        "fullVersion": "16.0.0.0",
        "platform": "macOS",
        "platformVersion": "13.4.1",
        "architecture": "x86",
        "model": "",
        "mobile": false
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5.1 Mobile/15E148 Safari/604.1",
    "platform": "iPhone",
    "vendor": "Apple Computer, Inc.",
    "language": "en-US",
    "languages": [
      "en-US",
      "en"
    ],
    "deviceMemory": 6,
    "hardwareConcurrency": 6,
    "width": 1290,
    "height": 2796,
    "webGL": {
      "renderer": "Apple A17 Pro GPU",
      "vendor": "Apple Inc."
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5.1 Mobile/15E148 Safari/604.1",
      "userAgentMetadata": {
        "brands": [
          {
            "brand": "Chromium",
            "version": "17"
          },
          {
            "brand": "Safari",
            "version": "17"
          }
        ],
        "fullVersion": "17.0.0.0",
        "platform": "iPhone",
        "platformVersion": "14.0.0",
        "architecture": "",
        "model": "iPhone 15 Pro Max",
        "mobile": true
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Windows NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
    "platform": "Win32",
    "vendor": "Google Inc.",
    "language": "en-US",
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
  },
  {
    "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5.1 Mobile/15E148 Safari/604.1",
    "platform": "iPhone",
    "vendor": "Apple Computer, Inc.",
    "language": "en-US",
    "languages": [
      "en-US",
      "en"
    ],
    "deviceMemory": 6,
    "hardwareConcurrency": 6,
    "width": 1290,
    "height": 2796,
    "webGL": {
      "renderer": "Apple A17 Pro GPU",
      "vendor": "Apple Inc."
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5.1 Mobile/15E148 Safari/604.1",
      "userAgentMetadata": {
        "brands": [
          {
            "brand": "Chromium",
            "version": "17"
          },
          {
            "brand": "Safari",
            "version": "17"
          }
        ],
        "fullVersion": "17.0.0.0",
        "platform": "iPhone",
        "platformVersion": "14.0.0",
        "architecture": "",
        "model": "iPhone 15 Pro Max",
        "mobile": true
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Windows NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
    "platform": "Win32",
    "vendor": "Google Inc.",
    "language": "en-US",
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
  },
  {
    "userAgent": "Mozilla/5.0 (Linux; Android 14; SAMSUNG SM-S928U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Mobile Safari/537.36",
    "platform": "Android",
    "vendor": "Google Inc.",
    "language": "en-US",
    "languages": [
      "en-US",
      "en"
    ],
    "deviceMemory": 12,
    "hardwareConcurrency": 8,
    "width": 1440,
    "height": 3120,
    "webGL": {
      "renderer": "Adreno 750",
      "vendor": "Qualcomm"
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Linux; Android 14; SAMSUNG SM-S928U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Mobile Safari/537.36",
      "userAgentMetadata": {
        "brands": [
          {
            "brand": "Chromium",
            "version": "134"
          },
          {
            "brand": "Google Chrome",
            "version": "134"
          }
        ],
        "fullVersion": "134.0.0.0",
        "platform": "Android",
        "platformVersion": "14.0.0",
        "architecture": "",
        "model": "Samsung Galaxy S24 Ultra",
        "mobile": true
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 13_4_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.4 Safari/605.1.15",
    "platform": "MacIntel",
    "vendor": "Apple Computer, Inc.",
    "language": "en-US",
    "languages": [
      "en-US",
      "en"
    ],
    "deviceMemory": 16,
    "hardwareConcurrency": 8,
    "width": 3024,
    "height": 1964,
    "webGL": {
      "renderer": "Apple M2 GPU",
      "vendor": "Apple Inc."
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 13_4_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.4 Safari/605.1.15",
      "userAgentMetadata": {
        "brands": [
          {
            "brand": "Chromium",
            "version": "16"
          },
          {
            "brand": "Safari",
            "version": "16"
          }
        ],
        "fullVersion": "16.0.0.0",
        "platform": "macOS",
        "platformVersion": "13.4.1",
        "architecture": "x86",
        "model": "",
        "mobile": false
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5.1 Mobile/15E148 Safari/604.1",
    "platform": "iPhone",
    "vendor": "Apple Computer, Inc.",
    "language": "en-US",
    "languages": [
      "en-US",
      "en"
    ],
    "deviceMemory": 6,
    "hardwareConcurrency": 6,
    "width": 1290,
    "height": 2796,
    "webGL": {
      "renderer": "Apple A17 Pro GPU",
      "vendor": "Apple Inc."
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5.1 Mobile/15E148 Safari/604.1",
      "userAgentMetadata": {
        "brands": [
          {
            "brand": "Chromium",
            "version": "17"
          },
          {
            "brand": "Safari",
            "version": "17"
          }
        ],
        "fullVersion": "17.0.0.0",
        "platform": "iPhone",
        "platformVersion": "14.0.0",
        "architecture": "",
        "model": "iPhone 15 Pro Max",
        "mobile": true
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5.1 Mobile/15E148 Safari/604.1",
    "platform": "iPhone",
    "vendor": "Apple Computer, Inc.",
    "language": "en-US",
    "languages": [
      "en-US",
      "en"
    ],
    "deviceMemory": 6,
    "hardwareConcurrency": 6,
    "width": 1290,
    "height": 2796,
    "webGL": {
      "renderer": "Apple A17 Pro GPU",
      "vendor": "Apple Inc."
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5.1 Mobile/15E148 Safari/604.1",
      "userAgentMetadata": {
        "brands": [
          {
            "brand": "Chromium",
            "version": "17"
          },
          {
            "brand": "Safari",
            "version": "17"
          }
        ],
        "fullVersion": "17.0.0.0",
        "platform": "iPhone",
        "platformVersion": "14.0.0",
        "architecture": "",
        "model": "iPhone 15 Pro Max",
        "mobile": true
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5.1 Mobile/15E148 Safari/604.1",
    "platform": "iPhone",
    "vendor": "Apple Computer, Inc.",
    "language": "en-US",
    "languages": [
      "en-US",
      "en"
    ],
    "deviceMemory": 6,
    "hardwareConcurrency": 6,
    "width": 1290,
    "height": 2796,
    "webGL": {
      "renderer": "Apple A17 Pro GPU",
      "vendor": "Apple Inc."
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5.1 Mobile/15E148 Safari/604.1",
      "userAgentMetadata": {
        "brands": [
          {
            "brand": "Chromium",
            "version": "17"
          },
          {
            "brand": "Safari",
            "version": "17"
          }
        ],
        "fullVersion": "17.0.0.0",
        "platform": "iPhone",
        "platformVersion": "14.0.0",
        "architecture": "",
        "model": "iPhone 15 Pro Max",
        "mobile": true
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Android 14; Pixel 8 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Mobile Safari/537.36",
    "platform": "Android",
    "vendor": "Google Inc.",
    "language": "en-US",
    "languages": [
      "en-US",
      "en"
    ],
    "deviceMemory": 12,
    "hardwareConcurrency": 8,
    "width": 1344,
    "height": 2992,
    "webGL": {
      "renderer": "Immortalis-G715",
      "vendor": "ARM"
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Android 14; Pixel 8 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Mobile Safari/537.36",
      "userAgentMetadata": {
        "brands": [
          {
            "brand": "Chromium",
            "version": "135"
          },
          {
            "brand": "Google Chrome",
            "version": "135"
          }
        ],
        "fullVersion": "135.0.0.0",
        "platform": "Android",
        "platformVersion": "14.0.0",
        "architecture": "",
        "model": "Google Pixel 8 Pro",
        "mobile": true
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Windows NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
    "platform": "Win32",
    "vendor": "Google Inc.",
    "language": "en-US",
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
  },
  {
    "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5.1 Mobile/15E148 Safari/604.1",
    "platform": "iPhone",
    "vendor": "Apple Computer, Inc.",
    "language": "en-US",
    "languages": [
      "en-US",
      "en"
    ],
    "deviceMemory": 6,
    "hardwareConcurrency": 6,
    "width": 1290,
    "height": 2796,
    "webGL": {
      "renderer": "Apple A17 Pro GPU",
      "vendor": "Apple Inc."
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5.1 Mobile/15E148 Safari/604.1",
      "userAgentMetadata": {
        "brands": [
          {
            "brand": "Chromium",
            "version": "17"
          },
          {
            "brand": "Safari",
            "version": "17"
          }
        ],
        "fullVersion": "17.0.0.0",
        "platform": "iPhone",
        "platformVersion": "14.0.0",
        "architecture": "",
        "model": "iPhone 15 Pro Max",
        "mobile": true
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Linux; Android 14; SAMSUNG SM-S928U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Mobile Safari/537.36",
    "platform": "Android",
    "vendor": "Google Inc.",
    "language": "en-US",
    "languages": [
      "en-US",
      "en"
    ],
    "deviceMemory": 12,
    "hardwareConcurrency": 8,
    "width": 1440,
    "height": 3120,
    "webGL": {
      "renderer": "Adreno 750",
      "vendor": "Qualcomm"
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Linux; Android 14; SAMSUNG SM-S928U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Mobile Safari/537.36",
      "userAgentMetadata": {
        "brands": [
          {
            "brand": "Chromium",
            "version": "134"
          },
          {
            "brand": "Google Chrome",
            "version": "134"
          }
        ],
        "fullVersion": "134.0.0.0",
        "platform": "Android",
        "platformVersion": "14.0.0",
        "architecture": "",
        "model": "Samsung Galaxy S24 Ultra",
        "mobile": true
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Windows NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
    "platform": "Win32",
    "vendor": "Google Inc.",
    "language": "en-US",
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
  },
  {
    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 13_4_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.4 Safari/605.1.15",
    "platform": "MacIntel",
    "vendor": "Apple Computer, Inc.",
    "language": "en-US",
    "languages": [
      "en-US",
      "en"
    ],
    "deviceMemory": 16,
    "hardwareConcurrency": 8,
    "width": 3024,
    "height": 1964,
    "webGL": {
      "renderer": "Apple M2 GPU",
      "vendor": "Apple Inc."
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 13_4_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.4 Safari/605.1.15",
      "userAgentMetadata": {
        "brands": [
          {
            "brand": "Chromium",
            "version": "16"
          },
          {
            "brand": "Safari",
            "version": "16"
          }
        ],
        "fullVersion": "16.0.0.0",
        "platform": "macOS",
        "platformVersion": "13.4.1",
        "architecture": "x86",
        "model": "",
        "mobile": false
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 13_4_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.4 Safari/605.1.15",
    "platform": "MacIntel",
    "vendor": "Apple Computer, Inc.",
    "language": "en-US",
    "languages": [
      "en-US",
      "en"
    ],
    "deviceMemory": 16,
    "hardwareConcurrency": 8,
    "width": 3024,
    "height": 1964,
    "webGL": {
      "renderer": "Apple M2 GPU",
      "vendor": "Apple Inc."
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 13_4_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.4 Safari/605.1.15",
      "userAgentMetadata": {
        "brands": [
          {
            "brand": "Chromium",
            "version": "16"
          },
          {
            "brand": "Safari",
            "version": "16"
          }
        ],
        "fullVersion": "16.0.0.0",
        "platform": "macOS",
        "platformVersion": "13.4.1",
        "architecture": "x86",
        "model": "",
        "mobile": false
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5.1 Mobile/15E148 Safari/604.1",
    "platform": "iPhone",
    "vendor": "Apple Computer, Inc.",
    "language": "en-US",
    "languages": [
      "en-US",
      "en"
    ],
    "deviceMemory": 6,
    "hardwareConcurrency": 6,
    "width": 1290,
    "height": 2796,
    "webGL": {
      "renderer": "Apple A17 Pro GPU",
      "vendor": "Apple Inc."
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5.1 Mobile/15E148 Safari/604.1",
      "userAgentMetadata": {
        "brands": [
          {
            "brand": "Chromium",
            "version": "17"
          },
          {
            "brand": "Safari",
            "version": "17"
          }
        ],
        "fullVersion": "17.0.0.0",
        "platform": "iPhone",
        "platformVersion": "14.0.0",
        "architecture": "",
        "model": "iPhone 15 Pro Max",
        "mobile": true
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Linux; Android 14; SAMSUNG SM-S928U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Mobile Safari/537.36",
    "platform": "Android",
    "vendor": "Google Inc.",
    "language": "en-US",
    "languages": [
      "en-US",
      "en"
    ],
    "deviceMemory": 12,
    "hardwareConcurrency": 8,
    "width": 1440,
    "height": 3120,
    "webGL": {
      "renderer": "Adreno 750",
      "vendor": "Qualcomm"
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Linux; Android 14; SAMSUNG SM-S928U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Mobile Safari/537.36",
      "userAgentMetadata": {
        "brands": [
          {
            "brand": "Chromium",
            "version": "134"
          },
          {
            "brand": "Google Chrome",
            "version": "134"
          }
        ],
        "fullVersion": "134.0.0.0",
        "platform": "Android",
        "platformVersion": "14.0.0",
        "architecture": "",
        "model": "Samsung Galaxy S24 Ultra",
        "mobile": true
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Linux; Android 14; SAMSUNG SM-S928U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Mobile Safari/537.36",
    "platform": "Android",
    "vendor": "Google Inc.",
    "language": "en-US",
    "languages": [
      "en-US",
      "en"
    ],
    "deviceMemory": 12,
    "hardwareConcurrency": 8,
    "width": 1440,
    "height": 3120,
    "webGL": {
      "renderer": "Adreno 750",
      "vendor": "Qualcomm"
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Linux; Android 14; SAMSUNG SM-S928U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Mobile Safari/537.36",
      "userAgentMetadata": {
        "brands": [
          {
            "brand": "Chromium",
            "version": "134"
          },
          {
            "brand": "Google Chrome",
            "version": "134"
          }
        ],
        "fullVersion": "134.0.0.0",
        "platform": "Android",
        "platformVersion": "14.0.0",
        "architecture": "",
        "model": "Samsung Galaxy S24 Ultra",
        "mobile": true
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Linux; Android 14; SAMSUNG SM-S928U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Mobile Safari/537.36",
    "platform": "Android",
    "vendor": "Google Inc.",
    "language": "en-US",
    "languages": [
      "en-US",
      "en"
    ],
    "deviceMemory": 12,
    "hardwareConcurrency": 8,
    "width": 1440,
    "height": 3120,
    "webGL": {
      "renderer": "Adreno 750",
      "vendor": "Qualcomm"
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Linux; Android 14; SAMSUNG SM-S928U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Mobile Safari/537.36",
      "userAgentMetadata": {
        "brands": [
          {
            "brand": "Chromium",
            "version": "134"
          },
          {
            "brand": "Google Chrome",
            "version": "134"
          }
        ],
        "fullVersion": "134.0.0.0",
        "platform": "Android",
        "platformVersion": "14.0.0",
        "architecture": "",
        "model": "Samsung Galaxy S24 Ultra",
        "mobile": true
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Android 14; Pixel 8 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Mobile Safari/537.36",
    "platform": "Android",
    "vendor": "Google Inc.",
    "language": "en-US",
    "languages": [
      "en-US",
      "en"
    ],
    "deviceMemory": 12,
    "hardwareConcurrency": 8,
    "width": 1344,
    "height": 2992,
    "webGL": {
      "renderer": "Immortalis-G715",
      "vendor": "ARM"
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Android 14; Pixel 8 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Mobile Safari/537.36",
      "userAgentMetadata": {
        "brands": [
          {
            "brand": "Chromium",
            "version": "135"
          },
          {
            "brand": "Google Chrome",
            "version": "135"
          }
        ],
        "fullVersion": "135.0.0.0",
        "platform": "Android",
        "platformVersion": "14.0.0",
        "architecture": "",
        "model": "Google Pixel 8 Pro",
        "mobile": true
      }
    }
  },
  { 
    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 13_4_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.4 Safari/605.1.15",
    "platform": "MacIntel",
    "vendor": "Apple Computer, Inc.",
    "language": "en-US",
    "languages": [
      "en-US",
      "en"
    ],
    "deviceMemory": 16,
    "hardwareConcurrency": 8,
    "width": 3024,
    "height": 1964,
    "webGL": {
      "renderer": "Apple M2 GPU",
      "vendor": "Apple Inc."
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 13_4_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.4 Safari/605.1.15",
      "userAgentMetadata": {
        "brands": [
          {
            "brand": "Chromium",
            "version": "16"
          },
          {
            "brand": "Safari",
            "version": "16"
          }
        ],
        "fullVersion": "16.0.0.0",
        "platform": "macOS",
        "platformVersion": "13.4.1",
        "architecture": "x86",
        "model": "",
        "mobile": false
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Windows NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
    "platform": "Win32",
    "vendor": "Google Inc.",
    "language": "en-US",
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
  },
  {
    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 13_4_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.4 Safari/605.1.15",
    "platform": "MacIntel",
    "vendor": "Apple Computer, Inc.",
    "language": "en-US",
    "languages": [
      "en-US",
      "en"
    ],
    "deviceMemory": 16,
    "hardwareConcurrency": 8,
    "width": 3024,
    "height": 1964,
    "webGL": {
      "renderer": "Apple M2 GPU",
      "vendor": "Apple Inc."
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 13_4_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.4 Safari/605.1.15",
      "userAgentMetadata": {
        "brands": [
          {
            "brand": "Chromium",
            "version": "16"
          },
          {
            "brand": "Safari",
            "version": "16"
          }
        ],
        "fullVersion": "16.0.0.0",
        "platform": "macOS",
        "platformVersion": "13.4.1",
        "architecture": "x86",
        "model": "",
        "mobile": false
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Windows NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
    "platform": "Win32",
    "vendor": "Google Inc.",
    "language": "en-US",
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
  },
  {
    "userAgent": "Mozilla/5.0 (Windows NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
    "platform": "Win32",
    "vendor": "Google Inc.",
    "language": "en-US",
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
  },
  {
    "userAgent": "Mozilla/5.0 (Android 14; Pixel 8 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Mobile Safari/537.36",
    "platform": "Android",
    "vendor": "Google Inc.",
    "language": "en-US",
    "languages": [
      "en-US",
      "en"
    ],
    "deviceMemory": 12,
    "hardwareConcurrency": 8,
    "width": 1344,
    "height": 2992,
    "webGL": {
      "renderer": "Immortalis-G715",
      "vendor": "ARM"
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Android 14; Pixel 8 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Mobile Safari/537.36",
      "userAgentMetadata": {
        "brands": [
          {
            "brand": "Chromium",
            "version": "135"
          },
          {
            "brand": "Google Chrome",
            "version": "135"
          }
        ],
        "fullVersion": "135.0.0.0",
        "platform": "Android",
        "platformVersion": "14.0.0",
        "architecture": "",
        "model": "Google Pixel 8 Pro",
        "mobile": true
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 13_4_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.4 Safari/605.1.15",
    "platform": "MacIntel",
    "vendor": "Apple Computer, Inc.",
    "language": "en-US",
    "languages": [
      "en-US",
      "en"
    ],
    "deviceMemory": 16,
    "hardwareConcurrency": 8,
    "width": 3024,
    "height": 1964,
    "webGL": {
      "renderer": "Apple M2 GPU",
      "vendor": "Apple Inc."
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 13_4_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.4 Safari/605.1.15",
      "userAgentMetadata": {
        "brands": [
          {
            "brand": "Chromium",
            "version": "16"
          },
          {
            "brand": "Safari",
            "version": "16"
          }
        ],
        "fullVersion": "16.0.0.0",
        "platform": "macOS",
        "platformVersion": "13.4.1",
        "architecture": "x86",
        "model": "",
        "mobile": false
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Linux; Android 14; SAMSUNG SM-S928U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Mobile Safari/537.36",
    "platform": "Android",
    "vendor": "Google Inc.",
    "language": "en-US",
    "languages": [
      "en-US",
      "en"
    ],
    "deviceMemory": 12,
    "hardwareConcurrency": 8,
    "width": 1440,
    "height": 3120,
    "webGL": {
      "renderer": "Adreno 750",
      "vendor": "Qualcomm"
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Linux; Android 14; SAMSUNG SM-S928U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Mobile Safari/537.36",
      "userAgentMetadata": {
        "brands": [
          {
            "brand": "Chromium",
            "version": "134"
          },
          {
            "brand": "Google Chrome",
            "version": "134"
          }
        ],
        "fullVersion": "134.0.0.0",
        "platform": "Android",
        "platformVersion": "14.0.0",
        "architecture": "",
        "model": "Samsung Galaxy S24 Ultra",
        "mobile": true
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Windows NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
    "platform": "Win32",
    "vendor": "Google Inc.",
    "language": "en-US",
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
  },
  {
    "userAgent": "Mozilla/5.0 (Linux; Android 14; SAMSUNG SM-S928U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Mobile Safari/537.36",
    "platform": "Android",
    "vendor": "Google Inc.",
    "language": "en-US",
    "languages": [
      "en-US",
      "en"
    ],
    "deviceMemory": 12,
    "hardwareConcurrency": 8,
    "width": 1440,
    "height": 3120,
    "webGL": {
      "renderer": "Adreno 750",
      "vendor": "Qualcomm"
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Linux; Android 14; SAMSUNG SM-S928U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Mobile Safari/537.36",
      "userAgentMetadata": {
        "brands": [
          {
            "brand": "Chromium",
            "version": "134"
          },
          {
            "brand": "Google Chrome",
            "version": "134"
          }
        ],
        "fullVersion": "134.0.0.0",
        "platform": "Android",
        "platformVersion": "14.0.0",
        "architecture": "",
        "model": "Samsung Galaxy S24 Ultra",
        "mobile": true
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Windows NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
    "platform": "Win32",
    "vendor": "Google Inc.",
    "language": "en-US",
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
  },
  {
    "userAgent": "Mozilla/5.0 (Linux; Android 14; SAMSUNG SM-S928U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Mobile Safari/537.36",
    "platform": "Android",
    "vendor": "Google Inc.",
    "language": "en-US",
    "languages": [
      "en-US",
      "en"
    ],
    "deviceMemory": 12,
    "hardwareConcurrency": 8,
    "width": 1440,
    "height": 3120,
    "webGL": {
      "renderer": "Adreno 750",
      "vendor": "Qualcomm"
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Linux; Android 14; SAMSUNG SM-S928U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Mobile Safari/537.36",
      "userAgentMetadata": {
        "brands": [
          {
            "brand": "Chromium",
            "version": "134"
          },
          {
            "brand": "Google Chrome",
            "version": "134"
          }
        ],
        "fullVersion": "134.0.0.0",
        "platform": "Android",
        "platformVersion": "14.0.0",
        "architecture": "",
        "model": "Samsung Galaxy S24 Ultra",
        "mobile": true
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5.1 Mobile/15E148 Safari/604.1",
    "platform": "iPhone",
    "vendor": "Apple Computer, Inc.",
    "language": "en-US",
    "languages": [
      "en-US",
      "en"
    ],
    "deviceMemory": 6,
    "hardwareConcurrency": 6,
    "width": 1290,
    "height": 2796,
    "webGL": {
      "renderer": "Apple A17 Pro GPU",
      "vendor": "Apple Inc."
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5.1 Mobile/15E148 Safari/604.1",
      "userAgentMetadata": {
        "brands": [
          {
            "brand": "Chromium",
            "version": "17"
          },
          {
            "brand": "Safari",
            "version": "17"
          }
        ],
        "fullVersion": "17.0.0.0",
        "platform": "iPhone",
        "platformVersion": "14.0.0",
        "architecture": "",
        "model": "iPhone 15 Pro Max",
        "mobile": true
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Windows NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
    "platform": "Win32",
    "vendor": "Google Inc.",
    "language": "en-US",
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
  },
  {
    "userAgent": "Mozilla/5.0 (Linux; Android 14; SAMSUNG SM-S928U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Mobile Safari/537.36",
    "platform": "Android",
    "vendor": "Google Inc.",
    "language": "en-US",
    "languages": [
      "en-US",
      "en"
    ],
    "deviceMemory": 12,
    "hardwareConcurrency": 8,
    "width": 1440,
    "height": 3120,
    "webGL": {
      "renderer": "Adreno 750",
      "vendor": "Qualcomm"
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Linux; Android 14; SAMSUNG SM-S928U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Mobile Safari/537.36",
      "userAgentMetadata": {
        "brands": [
          {
            "brand": "Chromium",
            "version": "134"
          },
          {
            "brand": "Google Chrome",
            "version": "134"
          }
        ],
        "fullVersion": "134.0.0.0",
        "platform": "Android",
        "platformVersion": "14.0.0",
        "architecture": "",
        "model": "Samsung Galaxy S24 Ultra",
        "mobile": true
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 13_4_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.4 Safari/605.1.15",
    "platform": "MacIntel",
    "vendor": "Apple Computer, Inc.",
    "language": "en-US",
    "languages": [
      "en-US",
      "en"
    ],
    "deviceMemory": 16,
    "hardwareConcurrency": 8,
    "width": 3024,
    "height": 1964,
    "webGL": {
      "renderer": "Apple M2 GPU",
      "vendor": "Apple Inc."
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 13_4_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.4 Safari/605.1.15",
      "userAgentMetadata": {
        "brands": [
          {
            "brand": "Chromium",
            "version": "16"
          },
          {
            "brand": "Safari",
            "version": "16"
          }
        ],
        "fullVersion": "16.0.0.0",
        "platform": "macOS",
        "platformVersion": "13.4.1",
        "architecture": "x86",
        "model": "",
        "mobile": false
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5.1 Mobile/15E148 Safari/604.1",
    "platform": "iPhone",
    "vendor": "Apple Computer, Inc.",
    "language": "en-US",
    "languages": [
      "en-US",
      "en"
    ],
    "deviceMemory": 6,
    "hardwareConcurrency": 6,
    "width": 1290,
    "height": 2796,
    "webGL": {
      "renderer": "Apple A17 Pro GPU",
      "vendor": "Apple Inc."
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5.1 Mobile/15E148 Safari/604.1",
      "userAgentMetadata": {
        "brands": [
          {
            "brand": "Chromium",
            "version": "17"
          },
          {
            "brand": "Safari",
            "version": "17"
          }
        ],
        "fullVersion": "17.0.0.0",
        "platform": "iPhone",
        "platformVersion": "14.0.0",
        "architecture": "",
        "model": "iPhone 15 Pro Max",
        "mobile": true
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Linux; Android 14; SAMSUNG SM-S928U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Mobile Safari/537.36",
    "platform": "Android",
    "vendor": "Google Inc.",
    "language": "en-US",
    "languages": [
      "en-US",
      "en"
    ],
    "deviceMemory": 12,
    "hardwareConcurrency": 8,
    "width": 1440,
    "height": 3120,
    "webGL": {
      "renderer": "Adreno 750",
      "vendor": "Qualcomm"
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Linux; Android 14; SAMSUNG SM-S928U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Mobile Safari/537.36",
      "userAgentMetadata": {
        "brands": [
          {
            "brand": "Chromium",
            "version": "134"
          },
          {
            "brand": "Google Chrome",
            "version": "134"
          }
        ],
        "fullVersion": "134.0.0.0",
        "platform": "Android",
        "platformVersion": "14.0.0",
        "architecture": "",
        "model": "Samsung Galaxy S24 Ultra",
        "mobile": true
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Android 14; Pixel 8 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Mobile Safari/537.36",
    "platform": "Android",
    "vendor": "Google Inc.",
    "language": "en-US",
    "languages": [
      "en-US",
      "en"
    ],
    "deviceMemory": 12,
    "hardwareConcurrency": 8,
    "width": 1344,
    "height": 2992,
    "webGL": {
      "renderer": "Immortalis-G715",
      "vendor": "ARM"
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Android 14; Pixel 8 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Mobile Safari/537.36",
      "userAgentMetadata": {
        "brands": [
          {
            "brand": "Chromium",
            "version": "135"
          },
          {
            "brand": "Google Chrome",
            "version": "135"
          }
        ],
        "fullVersion": "135.0.0.0",
        "platform": "Android",
        "platformVersion": "14.0.0",
        "architecture": "",
        "model": "Google Pixel 8 Pro",
        "mobile": true
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5.1 Mobile/15E148 Safari/604.1",
    "platform": "iPhone",
    "vendor": "Apple Computer, Inc.",
    "language": "en-US",
    "languages": [
      "en-US",
      "en"
    ],
    "deviceMemory": 6,
    "hardwareConcurrency": 6,
    "width": 1290,
    "height": 2796,
    "webGL": {
      "renderer": "Apple A17 Pro GPU",
      "vendor": "Apple Inc."
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5.1 Mobile/15E148 Safari/604.1",
      "userAgentMetadata": {
        "brands": [
          {
            "brand": "Chromium",
            "version": "17"
          },
          {
            "brand": "Safari",
            "version": "17"
          }
        ],
        "fullVersion": "17.0.0.0",
        "platform": "iPhone",
        "platformVersion": "14.0.0",
        "architecture": "",
        "model": "iPhone 15 Pro Max",
        "mobile": true
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Linux; Android 14; SAMSUNG SM-S928U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Mobile Safari/537.36",
    "platform": "Android",
    "vendor": "Google Inc.",
    "language": "en-US",
    "languages": [
      "en-US",
      "en"
    ],
    "deviceMemory": 12,
    "hardwareConcurrency": 8,
    "width": 1440,
    "height": 3120,
    "webGL": {
      "renderer": "Adreno 750",
      "vendor": "Qualcomm"
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Linux; Android 14; SAMSUNG SM-S928U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Mobile Safari/537.36",
      "userAgentMetadata": {
        "brands": [
          {
            "brand": "Chromium",
            "version": "134"
          },
          {
            "brand": "Google Chrome",
            "version": "134"
          }
        ],
        "fullVersion": "134.0.0.0",
        "platform": "Android",
        "platformVersion": "14.0.0",
        "architecture": "",
        "model": "Samsung Galaxy S24 Ultra",
        "mobile": true
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 13_4_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.4 Safari/605.1.15",
    "platform": "MacIntel",
    "vendor": "Apple Computer, Inc.",
    "language": "en-US",
    "languages": [
      "en-US",
      "en"
    ],
    "deviceMemory": 16,
    "hardwareConcurrency": 8,
    "width": 3024,
    "height": 1964,
    "webGL": {
      "renderer": "Apple M2 GPU",
      "vendor": "Apple Inc."
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 13_4_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.4 Safari/605.1.15",
      "userAgentMetadata": {
        "brands": [
          {
            "brand": "Chromium",
            "version": "16"
          },
          {
            "brand": "Safari",
            "version": "16"
          }
        ],
        "fullVersion": "16.0.0.0",
        "platform": "macOS",
        "platformVersion": "13.4.1",
        "architecture": "x86",
        "model": "",
        "mobile": false
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Android 14; Pixel 8 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Mobile Safari/537.36",
    "platform": "Android",
    "vendor": "Google Inc.",
    "language": "en-US",
    "languages": [
      "en-US",
      "en"
    ],
    "deviceMemory": 12,
    "hardwareConcurrency": 8,
    "width": 1344,
    "height": 2992,
    "webGL": {
      "renderer": "Immortalis-G715",
      "vendor": "ARM"
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Android 14; Pixel 8 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Mobile Safari/537.36",
      "userAgentMetadata": {
        "brands": [
          {
            "brand": "Chromium",
            "version": "135"
          },
          {
            "brand": "Google Chrome",
            "version": "135"
          }
        ],
        "fullVersion": "135.0.0.0",
        "platform": "Android",
        "platformVersion": "14.0.0",
        "architecture": "",
        "model": "Google Pixel 8 Pro",
        "mobile": true
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 13_4_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.4 Safari/605.1.15",
    "platform": "MacIntel",
    "vendor": "Apple Computer, Inc.",
    "language": "en-US",
    "languages": [
      "en-US",
      "en"
    ],
    "deviceMemory": 16,
    "hardwareConcurrency": 8,
    "width": 3024,
    "height": 1964,
    "webGL": {
      "renderer": "Apple M2 GPU",
      "vendor": "Apple Inc."
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 13_4_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.4 Safari/605.1.15",
      "userAgentMetadata": {
        "brands": [
          {
            "brand": "Chromium",
            "version": "16"
          },
          {
            "brand": "Safari",
            "version": "16"
          }
        ],
        "fullVersion": "16.0.0.0",
        "platform": "macOS",
        "platformVersion": "13.4.1",
        "architecture": "x86",
        "model": "",
        "mobile": false
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Windows NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
    "platform": "Win32",
    "vendor": "Google Inc.",
    "language": "en-US",
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
  },
  {
    "userAgent": "Mozilla/5.0 (Android 14; Pixel 8 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Mobile Safari/537.36",
    "platform": "Android",
    "vendor": "Google Inc.",
    "language": "en-US",
    "languages": [
      "en-US",
      "en"
    ],
    "deviceMemory": 12,
    "hardwareConcurrency": 8,
    "width": 1344,
    "height": 2992,
    "webGL": {
      "renderer": "Immortalis-G715",
      "vendor": "ARM"
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Android 14; Pixel 8 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Mobile Safari/537.36",
      "userAgentMetadata": {
        "brands": [
          {
            "brand": "Chromium",
            "version": "135"
          },
          {
            "brand": "Google Chrome",
            "version": "135"
          }
        ],
        "fullVersion": "135.0.0.0",
        "platform": "Android",
        "platformVersion": "14.0.0",
        "architecture": "",
        "model": "Google Pixel 8 Pro",
        "mobile": true
      }
    }
  }
]

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
      '--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36'

    ],
  });
  const page = await browser.newPage();
  const client = await page.target().createCDPSession();

  await client.send('Network.setUserAgentOverride', device.setUserAgentOverride);



  browser.on("targetcreated", async (target) => {
    if (target.type() === "page") {
      const newPage = await target.page();
      await page.setUserAgent(device.userAgent);
      await newPage.setUserAgent(device.userAgent);
      const client = await page.target().createCDPSession();
      const newClient = await newPage.target().createCDPSession();

      await client.send('Network.setUserAgentOverride', device.setUserAgentOverride);

      await newClient.send('Network.setUserAgentOverride', device.setUserAgentOverride);
    

      await page.evaluateOnNewDocument((profile) => {
        // Основные свойства navigator
        const obj = { brands: [], mobile: true, platform: profile.platform } 

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

    Object.defineProperty(navigator, "webdriver", {
      get: () => false,
    });

    window.chrome = {
      runtime: {}
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





  await page.goto("https://best-earn.vercel.app/", { waitUntil: 'networkidle2' });
  await delay(2);
  await page.mouse.wheel({ deltaY: 2500 });
  await delay(2);

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
  err ? err : console.log("STARTD SERVER");
});
