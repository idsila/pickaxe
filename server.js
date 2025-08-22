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
    "userAgent": "Mozilla/5.0 (Android NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
    "platform": "Android",
    "vendor": "Google Inc.",
    "language": "en-US",
    "product": "Gecko",
    "appCodeName": "Mozilla",
    "appName": "Netscape",
    "languages": [
      "en-US",
      "en"
    ],
    "deviceMemory": 6,
    "hardwareConcurrency": 8,
    "width": 1080,
    "height": 2400,
    "webGL": {
      "renderer": "Adreno 610",
      "vendor": "Qualcomm"
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Android NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
      "userAgentMetadata": {
        "brands": [
          {
            "brand": "Chromium",
            "version": "138"
          },
          {
            "brand": "Google Chrome",
            "version": "138"
          }
        ],
        "fullVersion": "138.0.0.0",
        "platform": "Android",
        "platformVersion": "12.0.0",
        "architecture": "arm",
        "model": "Xiaomi Redmi Note 11",
        "mobile": true
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Android NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
    "platform": "Android",
    "vendor": "Google Inc.",
    "language": "en-US",
    "product": "Gecko",
    "appCodeName": "Mozilla",
    "appName": "Netscape",
    "languages": [
      "en-US",
      "en"
    ],
    "deviceMemory": 4,
    "hardwareConcurrency": 8,
    "width": 1080,
    "height": 2400,
    "webGL": {
      "renderer": "Adreno 619",
      "vendor": "Qualcomm"
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Android NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
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
        "platformVersion": "10.0.0",
        "architecture": "arm",
        "model": "OnePlus Nord N200",
        "mobile": true
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Win32 NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
    "platform": "Win32",
    "vendor": "Google Inc.",
    "language": "en",
    "product": "Gecko",
    "appCodeName": "Mozilla",
    "appName": "Netscape",
    "languages": [
      "en",
      "en"
    ],
    "deviceMemory": 16,
    "hardwareConcurrency": 8,
    "width": 2256,
    "height": 1504,
    "webGL": {
      "renderer": "Intel Iris Xe",
      "vendor": "Intel Inc."
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Win32 NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
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
        "platformVersion": "10.0.0",
        "architecture": "x86",
        "model": "",
        "mobile": false
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Win32 NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
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
    "deviceMemory": 8,
    "hardwareConcurrency": 8,
    "width": 1920,
    "height": 1080,
    "webGL": {
      "renderer": "NVIDIA GeForce MX330",
      "vendor": "NVIDIA Corporation"
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Win32 NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
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
        "platformVersion": "12.0.0",
        "architecture": "x86",
        "model": "",
        "mobile": false
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Win32 NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
    "platform": "Win32",
    "vendor": "Google Inc.",
    "language": "en",
    "product": "Gecko",
    "appCodeName": "Mozilla",
    "appName": "Netscape",
    "languages": [
      "en",
      "en"
    ],
    "deviceMemory": 8,
    "hardwareConcurrency": 4,
    "width": 1366,
    "height": 768,
    "webGL": {
      "renderer": "Intel UHD Graphics",
      "vendor": "Intel Inc."
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Win32 NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
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
        "platform": "Win32",
        "platformVersion": "13.0.0",
        "architecture": "x86",
        "model": "",
        "mobile": false
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Android NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
    "platform": "Android",
    "vendor": "Google Inc.",
    "language": "en",
    "product": "Gecko",
    "appCodeName": "Mozilla",
    "appName": "Netscape",
    "languages": [
      "en",
      "en"
    ],
    "deviceMemory": 4,
    "hardwareConcurrency": 8,
    "width": 1080,
    "height": 2400,
    "webGL": {
      "renderer": "Adreno 610",
      "vendor": "Qualcomm"
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Android NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
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
        "platform": "Android",
        "platformVersion": "13.0.0",
        "architecture": "arm",
        "model": "Motorola Moto G Power",
        "mobile": true
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Win32 NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
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
    "deviceMemory": 16,
    "hardwareConcurrency": 8,
    "width": 1920,
    "height": 1080,
    "webGL": {
      "renderer": "Intel Iris Xe Graphics",
      "vendor": "Intel Inc."
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Win32 NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
      "userAgentMetadata": {
        "brands": [
          {
            "brand": "Chromium",
            "version": "138"
          },
          {
            "brand": "Google Chrome",
            "version": "138"
          }
        ],
        "fullVersion": "138.0.0.0",
        "platform": "Win32",
        "platformVersion": "12.0.0",
        "architecture": "x86",
        "model": "",
        "mobile": false
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Android NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
    "platform": "Android",
    "vendor": "Google Inc.",
    "language": "en-US",
    "product": "Gecko",
    "appCodeName": "Mozilla",
    "appName": "Netscape",
    "languages": [
      "en-US",
      "en"
    ],
    "deviceMemory": 4,
    "hardwareConcurrency": 8,
    "width": 1080,
    "height": 2400,
    "webGL": {
      "renderer": "Adreno 610",
      "vendor": "Qualcomm"
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Android NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
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
        "platformVersion": "10.0.0",
        "architecture": "arm",
        "model": "Motorola Moto G Power",
        "mobile": true
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Android NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36",
    "platform": "Android",
    "vendor": "Google Inc.",
    "language": "en",
    "product": "Gecko",
    "appCodeName": "Mozilla",
    "appName": "Netscape",
    "languages": [
      "en",
      "en"
    ],
    "deviceMemory": 6,
    "hardwareConcurrency": 8,
    "width": 1080,
    "height": 2400,
    "webGL": {
      "renderer": "Adreno 610",
      "vendor": "Qualcomm"
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Android NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36",
      "userAgentMetadata": {
        "brands": [
          {
            "brand": "Chromium",
            "version": "137"
          },
          {
            "brand": "Google Chrome",
            "version": "137"
          }
        ],
        "fullVersion": "137.0.0.0",
        "platform": "Android",
        "platformVersion": "13.0.0",
        "architecture": "arm",
        "model": "Xiaomi Redmi Note 11",
        "mobile": true
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Android NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
    "platform": "Android",
    "vendor": "Google Inc.",
    "language": "en-US",
    "product": "Gecko",
    "appCodeName": "Mozilla",
    "appName": "Netscape",
    "languages": [
      "en-US",
      "en"
    ],
    "deviceMemory": 6,
    "hardwareConcurrency": 8,
    "width": 1080,
    "height": 2400,
    "webGL": {
      "renderer": "Adreno 610",
      "vendor": "Qualcomm"
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Android NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
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
        "platformVersion": "12.0.0",
        "architecture": "arm",
        "model": "Xiaomi Redmi Note 11",
        "mobile": true
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Android NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
    "platform": "Android",
    "vendor": "Google Inc.",
    "language": "en-US",
    "product": "Gecko",
    "appCodeName": "Mozilla",
    "appName": "Netscape",
    "languages": [
      "en-US",
      "en"
    ],
    "deviceMemory": 4,
    "hardwareConcurrency": 8,
    "width": 1080,
    "height": 2400,
    "webGL": {
      "renderer": "Adreno 610",
      "vendor": "Qualcomm"
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Android NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
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
        "platformVersion": "10.0.0",
        "architecture": "arm",
        "model": "Motorola Moto G Power",
        "mobile": true
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Win32 NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
    "platform": "Win32",
    "vendor": "Google Inc.",
    "language": "ru-RU",
    "product": "Gecko",
    "appCodeName": "Mozilla",
    "appName": "Netscape",
    "languages": [
      "ru-RU",
      "en"
    ],
    "deviceMemory": 8,
    "hardwareConcurrency": 4,
    "width": 1366,
    "height": 768,
    "webGL": {
      "renderer": "Intel UHD Graphics",
      "vendor": "Intel Inc."
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Win32 NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
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
        "platform": "Win32",
        "platformVersion": "12.0.0",
        "architecture": "x86",
        "model": "",
        "mobile": false
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Win32 NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
    "platform": "Win32",
    "vendor": "Google Inc.",
    "language": "ru-RU",
    "product": "Gecko",
    "appCodeName": "Mozilla",
    "appName": "Netscape",
    "languages": [
      "ru-RU",
      "en"
    ],
    "deviceMemory": 16,
    "hardwareConcurrency": 8,
    "width": 1920,
    "height": 1080,
    "webGL": {
      "renderer": "Intel Iris Xe Graphics",
      "vendor": "Intel Inc."
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Win32 NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
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
        "platform": "Win32",
        "platformVersion": "12.0.0",
        "architecture": "x86",
        "model": "",
        "mobile": false
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Win32 NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36",
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
    "deviceMemory": 8,
    "hardwareConcurrency": 4,
    "width": 1366,
    "height": 768,
    "webGL": {
      "renderer": "Intel UHD Graphics",
      "vendor": "Intel Inc."
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Win32 NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36",
      "userAgentMetadata": {
        "brands": [
          {
            "brand": "Chromium",
            "version": "137"
          },
          {
            "brand": "Google Chrome",
            "version": "137"
          }
        ],
        "fullVersion": "137.0.0.0",
        "platform": "Win32",
        "platformVersion": "13.0.0",
        "architecture": "x86",
        "model": "",
        "mobile": false
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Win32 NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
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
    "deviceMemory": 8,
    "hardwareConcurrency": 4,
    "width": 1366,
    "height": 768,
    "webGL": {
      "renderer": "Intel UHD Graphics",
      "vendor": "Intel Inc."
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Win32 NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
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
        "platformVersion": "12.0.0",
        "architecture": "x86",
        "model": "",
        "mobile": false
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Android NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
    "platform": "Android",
    "vendor": "Google Inc.",
    "language": "en-US",
    "product": "Gecko",
    "appCodeName": "Mozilla",
    "appName": "Netscape",
    "languages": [
      "en-US",
      "en"
    ],
    "deviceMemory": 6,
    "hardwareConcurrency": 8,
    "width": 1080,
    "height": 2340,
    "webGL": {
      "renderer": "Mali-G68",
      "vendor": "ARM"
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Android NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
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
        "platformVersion": "13.0.0",
        "architecture": "arm",
        "model": "Samsung Galaxy A54",
        "mobile": true
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Android NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36",
    "platform": "Android",
    "vendor": "Google Inc.",
    "language": "ru-RU",
    "product": "Gecko",
    "appCodeName": "Mozilla",
    "appName": "Netscape",
    "languages": [
      "ru-RU",
      "en"
    ],
    "deviceMemory": 4,
    "hardwareConcurrency": 8,
    "width": 1080,
    "height": 2400,
    "webGL": {
      "renderer": "Adreno 610",
      "vendor": "Qualcomm"
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Android NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36",
      "userAgentMetadata": {
        "brands": [
          {
            "brand": "Chromium",
            "version": "137"
          },
          {
            "brand": "Google Chrome",
            "version": "137"
          }
        ],
        "fullVersion": "137.0.0.0",
        "platform": "Android",
        "platformVersion": "10.0.0",
        "architecture": "arm",
        "model": "Motorola Moto G Power",
        "mobile": true
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Android NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36",
    "platform": "Android",
    "vendor": "Google Inc.",
    "language": "en-US",
    "product": "Gecko",
    "appCodeName": "Mozilla",
    "appName": "Netscape",
    "languages": [
      "en-US",
      "en"
    ],
    "deviceMemory": 4,
    "hardwareConcurrency": 8,
    "width": 1080,
    "height": 2400,
    "webGL": {
      "renderer": "Adreno 619",
      "vendor": "Qualcomm"
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Android NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36",
      "userAgentMetadata": {
        "brands": [
          {
            "brand": "Chromium",
            "version": "137"
          },
          {
            "brand": "Google Chrome",
            "version": "137"
          }
        ],
        "fullVersion": "137.0.0.0",
        "platform": "Android",
        "platformVersion": "13.0.0",
        "architecture": "arm",
        "model": "OnePlus Nord N200",
        "mobile": true
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Win32 NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
    "platform": "Win32",
    "vendor": "Google Inc.",
    "language": "en",
    "product": "Gecko",
    "appCodeName": "Mozilla",
    "appName": "Netscape",
    "languages": [
      "en",
      "en"
    ],
    "deviceMemory": 8,
    "hardwareConcurrency": 8,
    "width": 1920,
    "height": 1080,
    "webGL": {
      "renderer": "NVIDIA GeForce MX330",
      "vendor": "NVIDIA Corporation"
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Win32 NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
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
        "platform": "Win32",
        "platformVersion": "14.0.0",
        "architecture": "x86",
        "model": "",
        "mobile": false
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Android NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
    "platform": "Android",
    "vendor": "Google Inc.",
    "language": "ru-RU",
    "product": "Gecko",
    "appCodeName": "Mozilla",
    "appName": "Netscape",
    "languages": [
      "ru-RU",
      "en"
    ],
    "deviceMemory": 6,
    "hardwareConcurrency": 8,
    "width": 1080,
    "height": 2400,
    "webGL": {
      "renderer": "Mali-G78",
      "vendor": "ARM"
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Android NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
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
        "architecture": "arm",
        "model": "Google Pixel 6a",
        "mobile": true
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Win32 NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
    "platform": "Win32",
    "vendor": "Google Inc.",
    "language": "ru-RU",
    "product": "Gecko",
    "appCodeName": "Mozilla",
    "appName": "Netscape",
    "languages": [
      "ru-RU",
      "en"
    ],
    "deviceMemory": 16,
    "hardwareConcurrency": 8,
    "width": 2256,
    "height": 1504,
    "webGL": {
      "renderer": "Intel Iris Xe",
      "vendor": "Intel Inc."
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Win32 NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
      "userAgentMetadata": {
        "brands": [
          {
            "brand": "Chromium",
            "version": "138"
          },
          {
            "brand": "Google Chrome",
            "version": "138"
          }
        ],
        "fullVersion": "138.0.0.0",
        "platform": "Win32",
        "platformVersion": "11.0.0",
        "architecture": "x86",
        "model": "",
        "mobile": false
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Win32 NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
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
    "deviceMemory": 16,
    "hardwareConcurrency": 8,
    "width": 2256,
    "height": 1504,
    "webGL": {
      "renderer": "Intel Iris Xe",
      "vendor": "Intel Inc."
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Win32 NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
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
        "platform": "Win32",
        "platformVersion": "11.0.0",
        "architecture": "x86",
        "model": "",
        "mobile": false
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Win32 NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
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
    "deviceMemory": 8,
    "hardwareConcurrency": 4,
    "width": 1920,
    "height": 1080,
    "webGL": {
      "renderer": "AMD Radeon Vega 8",
      "vendor": "ATI Technologies Inc."
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Win32 NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
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
        "platform": "Win32",
        "platformVersion": "13.0.0",
        "architecture": "x86",
        "model": "",
        "mobile": false
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Win32 NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
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
    "deviceMemory": 8,
    "hardwareConcurrency": 4,
    "width": 1920,
    "height": 1080,
    "webGL": {
      "renderer": "AMD Radeon Vega 8",
      "vendor": "ATI Technologies Inc."
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Win32 NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
      "userAgentMetadata": {
        "brands": [
          {
            "brand": "Chromium",
            "version": "138"
          },
          {
            "brand": "Google Chrome",
            "version": "138"
          }
        ],
        "fullVersion": "138.0.0.0",
        "platform": "Win32",
        "platformVersion": "13.0.0",
        "architecture": "x86",
        "model": "",
        "mobile": false
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Win32 NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36",
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
    "deviceMemory": 16,
    "hardwareConcurrency": 8,
    "width": 2256,
    "height": 1504,
    "webGL": {
      "renderer": "Intel Iris Xe",
      "vendor": "Intel Inc."
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Win32 NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36",
      "userAgentMetadata": {
        "brands": [
          {
            "brand": "Chromium",
            "version": "137"
          },
          {
            "brand": "Google Chrome",
            "version": "137"
          }
        ],
        "fullVersion": "137.0.0.0",
        "platform": "Win32",
        "platformVersion": "10.0.0",
        "architecture": "x86",
        "model": "",
        "mobile": false
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Win32 NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
    "platform": "Win32",
    "vendor": "Google Inc.",
    "language": "ru-RU",
    "product": "Gecko",
    "appCodeName": "Mozilla",
    "appName": "Netscape",
    "languages": [
      "ru-RU",
      "en"
    ],
    "deviceMemory": 16,
    "hardwareConcurrency": 8,
    "width": 1920,
    "height": 1080,
    "webGL": {
      "renderer": "Intel Iris Xe Graphics",
      "vendor": "Intel Inc."
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Win32 NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
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
        "platform": "Win32",
        "platformVersion": "13.0.0",
        "architecture": "x86",
        "model": "",
        "mobile": false
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Android NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
    "platform": "Android",
    "vendor": "Google Inc.",
    "language": "en",
    "product": "Gecko",
    "appCodeName": "Mozilla",
    "appName": "Netscape",
    "languages": [
      "en",
      "en"
    ],
    "deviceMemory": 6,
    "hardwareConcurrency": 8,
    "width": 1080,
    "height": 2340,
    "webGL": {
      "renderer": "Mali-G68",
      "vendor": "ARM"
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Android NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
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
        "platform": "Android",
        "platformVersion": "11.0.0",
        "architecture": "arm",
        "model": "Samsung Galaxy A54",
        "mobile": true
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Win32 NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36",
    "platform": "Win32",
    "vendor": "Google Inc.",
    "language": "ru-RU",
    "product": "Gecko",
    "appCodeName": "Mozilla",
    "appName": "Netscape",
    "languages": [
      "ru-RU",
      "en"
    ],
    "deviceMemory": 16,
    "hardwareConcurrency": 8,
    "width": 1920,
    "height": 1080,
    "webGL": {
      "renderer": "Intel Iris Xe Graphics",
      "vendor": "Intel Inc."
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Win32 NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36",
      "userAgentMetadata": {
        "brands": [
          {
            "brand": "Chromium",
            "version": "137"
          },
          {
            "brand": "Google Chrome",
            "version": "137"
          }
        ],
        "fullVersion": "137.0.0.0",
        "platform": "Win32",
        "platformVersion": "11.0.0",
        "architecture": "x86",
        "model": "",
        "mobile": false
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Win32 NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36",
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
    "deviceMemory": 8,
    "hardwareConcurrency": 4,
    "width": 1920,
    "height": 1080,
    "webGL": {
      "renderer": "AMD Radeon Vega 8",
      "vendor": "ATI Technologies Inc."
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Win32 NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36",
      "userAgentMetadata": {
        "brands": [
          {
            "brand": "Chromium",
            "version": "137"
          },
          {
            "brand": "Google Chrome",
            "version": "137"
          }
        ],
        "fullVersion": "137.0.0.0",
        "platform": "Win32",
        "platformVersion": "12.0.0",
        "architecture": "x86",
        "model": "",
        "mobile": false
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Win32 NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36",
    "platform": "Win32",
    "vendor": "Google Inc.",
    "language": "en",
    "product": "Gecko",
    "appCodeName": "Mozilla",
    "appName": "Netscape",
    "languages": [
      "en",
      "en"
    ],
    "deviceMemory": 8,
    "hardwareConcurrency": 4,
    "width": 1920,
    "height": 1080,
    "webGL": {
      "renderer": "Intel Iris Xe Graphics",
      "vendor": "Intel Inc."
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Win32 NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36",
      "userAgentMetadata": {
        "brands": [
          {
            "brand": "Chromium",
            "version": "137"
          },
          {
            "brand": "Google Chrome",
            "version": "137"
          }
        ],
        "fullVersion": "137.0.0.0",
        "platform": "Win32",
        "platformVersion": "10.0.0",
        "architecture": "x86",
        "model": "",
        "mobile": false
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Win32 NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
    "platform": "Win32",
    "vendor": "Google Inc.",
    "language": "en",
    "product": "Gecko",
    "appCodeName": "Mozilla",
    "appName": "Netscape",
    "languages": [
      "en",
      "en"
    ],
    "deviceMemory": 16,
    "hardwareConcurrency": 8,
    "width": 1920,
    "height": 1080,
    "webGL": {
      "renderer": "Intel Iris Xe Graphics",
      "vendor": "Intel Inc."
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Win32 NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
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
        "platformVersion": "10.0.0",
        "architecture": "x86",
        "model": "",
        "mobile": false
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Win32 NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
    "platform": "Win32",
    "vendor": "Google Inc.",
    "language": "en",
    "product": "Gecko",
    "appCodeName": "Mozilla",
    "appName": "Netscape",
    "languages": [
      "en",
      "en"
    ],
    "deviceMemory": 8,
    "hardwareConcurrency": 4,
    "width": 1920,
    "height": 1080,
    "webGL": {
      "renderer": "Intel Iris Xe Graphics",
      "vendor": "Intel Inc."
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Win32 NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
      "userAgentMetadata": {
        "brands": [
          {
            "brand": "Chromium",
            "version": "138"
          },
          {
            "brand": "Google Chrome",
            "version": "138"
          }
        ],
        "fullVersion": "138.0.0.0",
        "platform": "Win32",
        "platformVersion": "13.0.0",
        "architecture": "x86",
        "model": "",
        "mobile": false
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Android NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36",
    "platform": "Android",
    "vendor": "Google Inc.",
    "language": "ru-RU",
    "product": "Gecko",
    "appCodeName": "Mozilla",
    "appName": "Netscape",
    "languages": [
      "ru-RU",
      "en"
    ],
    "deviceMemory": 6,
    "hardwareConcurrency": 8,
    "width": 1080,
    "height": 2340,
    "webGL": {
      "renderer": "Mali-G68",
      "vendor": "ARM"
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Android NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36",
      "userAgentMetadata": {
        "brands": [
          {
            "brand": "Chromium",
            "version": "137"
          },
          {
            "brand": "Google Chrome",
            "version": "137"
          }
        ],
        "fullVersion": "137.0.0.0",
        "platform": "Android",
        "platformVersion": "10.0.0",
        "architecture": "arm",
        "model": "Samsung Galaxy A54",
        "mobile": true
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Win32 NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
    "platform": "Win32",
    "vendor": "Google Inc.",
    "language": "en",
    "product": "Gecko",
    "appCodeName": "Mozilla",
    "appName": "Netscape",
    "languages": [
      "en",
      "en"
    ],
    "deviceMemory": 8,
    "hardwareConcurrency": 8,
    "width": 1920,
    "height": 1080,
    "webGL": {
      "renderer": "NVIDIA GeForce MX330",
      "vendor": "NVIDIA Corporation"
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Win32 NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
      "userAgentMetadata": {
        "brands": [
          {
            "brand": "Chromium",
            "version": "138"
          },
          {
            "brand": "Google Chrome",
            "version": "138"
          }
        ],
        "fullVersion": "138.0.0.0",
        "platform": "Win32",
        "platformVersion": "11.0.0",
        "architecture": "x86",
        "model": "",
        "mobile": false
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Win32 NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
    "platform": "Win32",
    "vendor": "Google Inc.",
    "language": "ru-RU",
    "product": "Gecko",
    "appCodeName": "Mozilla",
    "appName": "Netscape",
    "languages": [
      "ru-RU",
      "en"
    ],
    "deviceMemory": 8,
    "hardwareConcurrency": 8,
    "width": 1920,
    "height": 1080,
    "webGL": {
      "renderer": "NVIDIA GeForce MX330",
      "vendor": "NVIDIA Corporation"
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Win32 NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
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
        "platform": "Win32",
        "platformVersion": "14.0.0",
        "architecture": "x86",
        "model": "",
        "mobile": false
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Android NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
    "platform": "Android",
    "vendor": "Google Inc.",
    "language": "en-US",
    "product": "Gecko",
    "appCodeName": "Mozilla",
    "appName": "Netscape",
    "languages": [
      "en-US",
      "en"
    ],
    "deviceMemory": 4,
    "hardwareConcurrency": 8,
    "width": 1080,
    "height": 2400,
    "webGL": {
      "renderer": "Adreno 619",
      "vendor": "Qualcomm"
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Android NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
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
        "platform": "Android",
        "platformVersion": "12.0.0",
        "architecture": "arm",
        "model": "OnePlus Nord N200",
        "mobile": true
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Android NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
    "platform": "Android",
    "vendor": "Google Inc.",
    "language": "en-US",
    "product": "Gecko",
    "appCodeName": "Mozilla",
    "appName": "Netscape",
    "languages": [
      "en-US",
      "en"
    ],
    "deviceMemory": 6,
    "hardwareConcurrency": 8,
    "width": 1080,
    "height": 2400,
    "webGL": {
      "renderer": "Mali-G78",
      "vendor": "ARM"
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Android NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
      "userAgentMetadata": {
        "brands": [
          {
            "brand": "Chromium",
            "version": "138"
          },
          {
            "brand": "Google Chrome",
            "version": "138"
          }
        ],
        "fullVersion": "138.0.0.0",
        "platform": "Android",
        "platformVersion": "13.0.0",
        "architecture": "arm",
        "model": "Google Pixel 6a",
        "mobile": true
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Win32 NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36",
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
    "deviceMemory": 8,
    "hardwareConcurrency": 8,
    "width": 1920,
    "height": 1080,
    "webGL": {
      "renderer": "NVIDIA GeForce MX330",
      "vendor": "NVIDIA Corporation"
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Win32 NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36",
      "userAgentMetadata": {
        "brands": [
          {
            "brand": "Chromium",
            "version": "137"
          },
          {
            "brand": "Google Chrome",
            "version": "137"
          }
        ],
        "fullVersion": "137.0.0.0",
        "platform": "Win32",
        "platformVersion": "12.0.0",
        "architecture": "x86",
        "model": "",
        "mobile": false
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Android NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
    "platform": "Android",
    "vendor": "Google Inc.",
    "language": "en-US",
    "product": "Gecko",
    "appCodeName": "Mozilla",
    "appName": "Netscape",
    "languages": [
      "en-US",
      "en"
    ],
    "deviceMemory": 4,
    "hardwareConcurrency": 8,
    "width": 1080,
    "height": 2400,
    "webGL": {
      "renderer": "Adreno 619",
      "vendor": "Qualcomm"
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Android NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
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
        "architecture": "arm",
        "model": "OnePlus Nord N200",
        "mobile": true
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Win32 NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
    "platform": "Win32",
    "vendor": "Google Inc.",
    "language": "ru-RU",
    "product": "Gecko",
    "appCodeName": "Mozilla",
    "appName": "Netscape",
    "languages": [
      "ru-RU",
      "en"
    ],
    "deviceMemory": 16,
    "hardwareConcurrency": 8,
    "width": 2256,
    "height": 1504,
    "webGL": {
      "renderer": "Intel Iris Xe",
      "vendor": "Intel Inc."
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Win32 NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
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
        "platform": "Win32",
        "platformVersion": "13.0.0",
        "architecture": "x86",
        "model": "",
        "mobile": false
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Win32 NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
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
    "deviceMemory": 8,
    "hardwareConcurrency": 4,
    "width": 1920,
    "height": 1080,
    "webGL": {
      "renderer": "AMD Radeon Vega 8",
      "vendor": "ATI Technologies Inc."
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Win32 NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
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
        "platform": "Win32",
        "platformVersion": "11.0.0",
        "architecture": "x86",
        "model": "",
        "mobile": false
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Win32 NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
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
    "deviceMemory": 8,
    "hardwareConcurrency": 4,
    "width": 1920,
    "height": 1080,
    "webGL": {
      "renderer": "Intel Iris Xe Graphics",
      "vendor": "Intel Inc."
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Win32 NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
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
        "platformVersion": "12.0.0",
        "architecture": "x86",
        "model": "",
        "mobile": false
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Android NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36",
    "platform": "Android",
    "vendor": "Google Inc.",
    "language": "ru-RU",
    "product": "Gecko",
    "appCodeName": "Mozilla",
    "appName": "Netscape",
    "languages": [
      "ru-RU",
      "en"
    ],
    "deviceMemory": 6,
    "hardwareConcurrency": 8,
    "width": 1080,
    "height": 2400,
    "webGL": {
      "renderer": "Mali-G78",
      "vendor": "ARM"
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Android NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36",
      "userAgentMetadata": {
        "brands": [
          {
            "brand": "Chromium",
            "version": "137"
          },
          {
            "brand": "Google Chrome",
            "version": "137"
          }
        ],
        "fullVersion": "137.0.0.0",
        "platform": "Android",
        "platformVersion": "12.0.0",
        "architecture": "arm",
        "model": "Google Pixel 6a",
        "mobile": true
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Win32 NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
    "platform": "Win32",
    "vendor": "Google Inc.",
    "language": "en",
    "product": "Gecko",
    "appCodeName": "Mozilla",
    "appName": "Netscape",
    "languages": [
      "en",
      "en"
    ],
    "deviceMemory": 8,
    "hardwareConcurrency": 4,
    "width": 1920,
    "height": 1080,
    "webGL": {
      "renderer": "Intel Iris Xe Graphics",
      "vendor": "Intel Inc."
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Win32 NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
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
        "platform": "Win32",
        "platformVersion": "14.0.0",
        "architecture": "x86",
        "model": "",
        "mobile": false
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Win32 NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
    "platform": "Win32",
    "vendor": "Google Inc.",
    "language": "en",
    "product": "Gecko",
    "appCodeName": "Mozilla",
    "appName": "Netscape",
    "languages": [
      "en",
      "en"
    ],
    "deviceMemory": 8,
    "hardwareConcurrency": 4,
    "width": 1366,
    "height": 768,
    "webGL": {
      "renderer": "Intel UHD Graphics",
      "vendor": "Intel Inc."
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Win32 NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
      "userAgentMetadata": {
        "brands": [
          {
            "brand": "Chromium",
            "version": "138"
          },
          {
            "brand": "Google Chrome",
            "version": "138"
          }
        ],
        "fullVersion": "138.0.0.0",
        "platform": "Win32",
        "platformVersion": "13.0.0",
        "architecture": "x86",
        "model": "",
        "mobile": false
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Android NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
    "platform": "Android",
    "vendor": "Google Inc.",
    "language": "en",
    "product": "Gecko",
    "appCodeName": "Mozilla",
    "appName": "Netscape",
    "languages": [
      "en",
      "en"
    ],
    "deviceMemory": 6,
    "hardwareConcurrency": 8,
    "width": 1080,
    "height": 2400,
    "webGL": {
      "renderer": "Mali-G78",
      "vendor": "ARM"
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Android NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
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
        "platformVersion": "12.0.0",
        "architecture": "arm",
        "model": "Google Pixel 6a",
        "mobile": true
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Android NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
    "platform": "Android",
    "vendor": "Google Inc.",
    "language": "ru-RU",
    "product": "Gecko",
    "appCodeName": "Mozilla",
    "appName": "Netscape",
    "languages": [
      "ru-RU",
      "en"
    ],
    "deviceMemory": 6,
    "hardwareConcurrency": 8,
    "width": 1080,
    "height": 2400,
    "webGL": {
      "renderer": "Adreno 610",
      "vendor": "Qualcomm"
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Android NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
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
        "platform": "Android",
        "platformVersion": "13.0.0",
        "architecture": "arm",
        "model": "Xiaomi Redmi Note 11",
        "mobile": true
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Android NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
    "platform": "Android",
    "vendor": "Google Inc.",
    "language": "ru-RU",
    "product": "Gecko",
    "appCodeName": "Mozilla",
    "appName": "Netscape",
    "languages": [
      "ru-RU",
      "en"
    ],
    "deviceMemory": 6,
    "hardwareConcurrency": 8,
    "width": 1080,
    "height": 2340,
    "webGL": {
      "renderer": "Mali-G68",
      "vendor": "ARM"
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Android NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
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
        "architecture": "arm",
        "model": "Samsung Galaxy A54",
        "mobile": true
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Android NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
    "platform": "Android",
    "vendor": "Google Inc.",
    "language": "en",
    "product": "Gecko",
    "appCodeName": "Mozilla",
    "appName": "Netscape",
    "languages": [
      "en",
      "en"
    ],
    "deviceMemory": 6,
    "hardwareConcurrency": 8,
    "width": 1080,
    "height": 2340,
    "webGL": {
      "renderer": "Mali-G68",
      "vendor": "ARM"
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Android NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
      "userAgentMetadata": {
        "brands": [
          {
            "brand": "Chromium",
            "version": "138"
          },
          {
            "brand": "Google Chrome",
            "version": "138"
          }
        ],
        "fullVersion": "138.0.0.0",
        "platform": "Android",
        "platformVersion": "13.0.0",
        "architecture": "arm",
        "model": "Samsung Galaxy A54",
        "mobile": true
      }
    }
  },
  {
    "userAgent": "Mozilla/5.0 (Android NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
    "platform": "Android",
    "vendor": "Google Inc.",
    "language": "en",
    "product": "Gecko",
    "appCodeName": "Mozilla",
    "appName": "Netscape",
    "languages": [
      "en",
      "en"
    ],
    "deviceMemory": 6,
    "hardwareConcurrency": 8,
    "width": 1080,
    "height": 2400,
    "webGL": {
      "renderer": "Mali-G78",
      "vendor": "ARM"
    },
    "setUserAgentOverride": {
      "userAgent": "Mozilla/5.0 (Android NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
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
        "platform": "Android",
        "platformVersion": "12.0.0",
        "architecture": "arm",
        "model": "Google Pixel 6a",
        "mobile": true
      }
    }
  }
];



const delay = (ms) => new Promise((r) => setTimeout(r, ms * 1000));

async function start() {
  console.log("STARTED BOT");
  const device = gadgets[Math.floor(Math.random() * gadgets.length)];
  console.log(device);
  const browser = await puppeteer.launch({
    headless: true,
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
        Object.defineProperty(navigator, 'vendor', { get: () => profile.vendor });
        Object.defineProperty(navigator, 'product', { get: () => profile.product });
        Object.defineProperty(navigator, 'appName', { get: () => profile.appName });
        Object.defineProperty(navigator, 'appCodeName', { get: () => profile.appCodeName });

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
        Object.defineProperty(navigator, 'vendor', { get: () => profile.vendor });
        Object.defineProperty(navigator, 'product', { get: () => profile.product });
        Object.defineProperty(navigator, 'appName', { get: () => profile.appName });
        Object.defineProperty(navigator, 'appCodeName', { get: () => profile.appCodeName });
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

    Object.defineProperty(navigator, 'vendor', { get: () => profile.vendor });
    Object.defineProperty(navigator, 'product', { get: () => profile.product });
    Object.defineProperty(navigator, 'appName', { get: () => profile.appName });
    Object.defineProperty(navigator, 'appCodeName', { get: () => profile.appCodeName });



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




  //await page.goto("http://127.0.0.1:5500/index.html", { waitUntil: 'networkidle2' });
  await page.goto("https://earn-best-web.vercel.app/", { waitUntil: 'networkidle2' });
  await delay(2);
  //await page.mouse.wheel({ deltaY: 2500 });
  await delay(4);
  const elements = await page.$$('.sbt-tr_brd');

  setInterval(async () => {
    const box = await elements[Math.floor(Math.random()*elements.length)].boundingBox();
    const cords = {
      x: box.x + Math.random() * box.width,
      y: box.y + Math.random() * box.height
    };
    console.log(cords)
    await page.mouse.click(cords.x, cords.y);
    //await page.mouse.wheel({ deltaY: -Math.floor(Math.random() * 3000) });
  }, 300 + Math.floor(Math.random() * 50));


  

  // const x = box.x + Math.random() * box.width;
  // const y = box.y + Math.random() * box.height;
  //console.log(box)

  // setInterval(async () => {
  //   const cords = {
  //     x: device.width - 302 + Math.floor(Math.random() * 128),
  //     y: device.height - 89 + Math.floor(Math.random() * 36),
  //   };
  //   //await page.mouse.click(cords.x, cords.y);
  //   //await page.mouse.wheel({ deltaY: -Math.floor(Math.random() * 3000) });
  // }, 50 + Math.floor(Math.random() * 50));

  // setInterval(async () => {
  //   await page.mouse.click(
  //     Math.ceil(Math.random() * device.width),
  //     Math.ceil(Math.random() * device.height)
  //   );
  //   //await page.screenshot({ path: "public/img.png" })
  // }, 3425 + Math.floor(Math.random() * 3000));

  // setInterval(async () => {
  //   //await page.mouse.wheel({ deltaY: Math.floor(Math.random() * 3000) });
  // }, 15324 + Math.floor(Math.random() * 3000));

  console.log("FINISH");
}

//start();

app.get("/start", async (req, res) => {
  start();
  res.send({ type: true });
});

app.listen("3000", (err) => {
  err ? err : console.log("STARTED SERVER");
});
