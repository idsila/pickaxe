const userAgent = require("user-agents");
const fs = require('fs');






const androidWebGLProfiles = [
  { vendor: "Qualcomm", renderer: "Adreno 610" }, 
  { vendor: "Qualcomm", renderer: "Adreno 612" }, 
  { vendor: "Qualcomm", renderer: "Adreno 618" }, 
  { vendor: "Qualcomm", renderer: "Adreno 619" }, 
  { vendor: "Qualcomm", renderer: "Adreno 619L" }, 
  { vendor: "Qualcomm", renderer: "Adreno 620" }, 
  { vendor: "Qualcomm", renderer: "Adreno 640" },
  { vendor: "Qualcomm", renderer: "Adreno 650" }, 
  { vendor: "Qualcomm", renderer: "Adreno 660" }, 
  { vendor: "Qualcomm", renderer: "Adreno 730" }, 
  { vendor: "Qualcomm", renderer: "Adreno 740" }, 
  { vendor: "ARM", renderer: "Mali-G52" },   
  { vendor: "ARM", renderer: "Mali-G57" },   
  { vendor: "ARM", renderer: "Mali-G68" },   
  { vendor: "ARM", renderer: "Mali-G72" },   
  { vendor: "ARM", renderer: "Mali-G76" },   
  { vendor: "ARM", renderer: "Mali-G77" },   
  { vendor: "ARM", renderer: "Mali-G78" },   
  { vendor: "ARM", renderer: "Mali-G710" }, 
  { vendor: "ARM", renderer: "Mali-G715" },
  { vendor: "Imagination Technologies", renderer: "PowerVR GE8100" },  
  { vendor: "Imagination Technologies", renderer: "PowerVR GE8320" },  
  { vendor: "Imagination Technologies", renderer: "PowerVR GM9446" }  
];






function getUserAgent(){
  const kf = Math.floor(Math.random()*100);
  if(kf < 40){
    return createUserAgentAndroid();
  }
  else{
    return createUserAgentWindows();
  }
}

const devices = {
  'Android': 'arm',
  'Windows': 'x86'
}
const arrMemory = [ 2,4,6 ];

const arrMemoryWin = [ 8, 10, 12, 14 ]


function createUserAgentAndroid(){
  const obj = new userAgent((user) => { return user.userAgent.includes("Android"); });
  const currentPlatform = obj.data.userAgent.split('; ')[1].split(' ')[0];
  const currentPlatformVersion = obj.data.userAgent.split(';')[1].split(' ')[2];
  const currentVersion = obj.data.userAgent.split('/')[3].split(' ')[0];
  const currentDeviceMemory = arrMemory[Math.floor(Math.random()*arrMemory.length)];

  obj.data.appCodeName =  obj.data.userAgent.split('/')[0];
  obj.data.appVersion =  obj.data.userAgent.split('Mozilla/')[1];
  obj.data.deviceMemory = currentDeviceMemory;
  obj.data.hardwareConcurrency = currentDeviceMemory+2;
  obj.data.product =  "Gecko";

  obj.data.setUserAgentOverride = {
    userAgent: obj.data.userAgent,
    userAgentMetadata: {
      fullVersion: currentVersion,
      platform: 'Android',
      platformVersion: `${currentPlatformVersion ?? '10'}.0.0`,
      architecture: devices[currentPlatform], 
      mobile: obj.data.userAgent.includes('Mobile'),
      model: "",
      brands: [
        {
         brand: 'Not;A=Brand',
         version: '99'
        },
        {
          brand: "Chromium",
          version: currentVersion.split('.')[0]
        },
        {
          brand: "Google Chrome",
          version: currentVersion.split('.')[0]
        }
      ],
      
    }
  };

  obj.data.webGL =  androidWebGLProfiles[Math.floor(Math.random()*androidWebGLProfiles.length)];

  return obj.data
}




function createUserAgentWindows(){
  const obj = new userAgent((user) => { return user.userAgent.includes("Windows"); });
  const currentPlatform = obj.data.userAgent.split('; ')[1].split(' ')[0];
  const currentPlatformVersion = obj.data.userAgent.split(';')[1].split(' ')[2];
  const currentVersion = obj.data.userAgent.split('/')[3].split(' ')[0];
  const currentDeviceMemory = arrMemoryWin[Math.floor(Math.random()*arrMemoryWin.length)];

  obj.data.appCodeName =  obj.data.userAgent.split('/')[0];
  obj.data.appVersion =  obj.data.userAgent.split('Mozilla/')[1];
  obj.data.deviceMemory = currentDeviceMemory;
  obj.data.hardwareConcurrency = currentDeviceMemory+2;
  obj.data.product =  "Gecko";

  obj.data.setUserAgentOverride = {
    userAgent: obj.data.userAgent,
    userAgentMetadata: {
      fullVersion: currentVersion,
      platform: 'Windows',
      platformVersion: `${currentPlatformVersion ?? '10'}.0.0`,
      architecture: 'x86', 
      mobile: obj.data.userAgent.includes('Mobile'),
      model: "",
      brands: [
        {
         brand: 'Not;A=Brand',
         version: '99'
        },
        {
          brand: "Chromium",
          version: currentVersion.split('.')[0]
        },
        {
          brand: "Google Chrome",
          version: currentVersion.split('.')[0]
        }
      ],
      
    }
  };

  obj.data.webGL =  windowsWebGLProfiles[Math.floor(Math.random()*windowsWebGLProfiles.length)];

  return obj.data
}
//const GUA = getUserAgent();
//fs.writeFileSync('obj.json', JSON.stringify(GUA, null, 2));

//module.exports = GUA;

const windowsScreenResolutions = [
  "1920x1080",  // Full HD
  "1366x768",   // ноутбуки низкого разрешения
  "1440x900",   // MacBook старых моделей / 15" экраны
  "1536x864",   // ультраширокие ноутбуки
  "1280x720",   // HD
  "1600x900",   // средние ноутбуки
  "1680x1050",  // старые 16:10 мониторы
  "1920x1200",  // 16:10 мониторы
  "2560x1440",  // QHD
  "2560x1600",  // MacBook Retina
  "3840x2160",  // 4K UHD
  "1024x768",   // старые экраны
  "1360x768",   // ноутбуки 13–14"
  "1440x1080",  // нестандартные 4:3/16:12
  "1280x800",   // 13" MacBook
  "1600x1200",  // 4:3 мониторы
  "1680x945",   // нестандартные 16:9
  "2048x1152",  // широкие ноутбуки
  "3200x1800",  // HiDPI ноутбуки
  "3840x1600"   // ультраширокие 21:9
];

const windowsWebGLProfiles = [
  { vendor: "NVIDIA Corporation", renderer: "GeForce RTX 4090" },
  { vendor: "NVIDIA Corporation", renderer: "GeForce RTX 4080" },
  { vendor: "NVIDIA Corporation", renderer: "GeForce RTX 4070" },
  { vendor: "NVIDIA Corporation", renderer: "GeForce RTX 4060" },
  { vendor: "NVIDIA Corporation", renderer: "GeForce RTX 3080" },
  { vendor: "NVIDIA Corporation", renderer: "GeForce RTX 3070" },
  { vendor: "NVIDIA Corporation", renderer: "GeForce GTX 1660" },
  { vendor: "NVIDIA Corporation", renderer: "GeForce GTX 1050" },
  { vendor: "AMD", renderer: "Radeon RX 7900 XT" },
  { vendor: "AMD", renderer: "Radeon RX 7800 XT" },
  { vendor: "AMD", renderer: "Radeon RX 7700 XT" },
  { vendor: "AMD", renderer: "Radeon RX 6900 XT" },
  { vendor: "AMD", renderer: "Radeon RX 6800 XT" },
  { vendor: "AMD", renderer: "Radeon RX 6700 XT" },
  { vendor: "AMD", renderer: "Radeon RX 6600" },
  { vendor: "AMD", renderer: "Radeon RX 6500 XT" },
  { vendor: "Intel Inc.", renderer: "UHD Graphics 770" },
  { vendor: "Intel Inc.", renderer: "UHD Graphics 730" },
  { vendor: "Intel Inc.", renderer: "UHD Graphics 710" },
  { vendor: "Intel Inc.", renderer: "UHD Graphics 630" },
  { vendor: "Intel Inc.", renderer: "HD Graphics 630" },
  { vendor: "Intel Inc.", renderer: "HD Graphics 620" },
  { vendor: "Intel Inc.", renderer: "Iris Xe Graphics" },
  { vendor: "Intel Inc.", renderer: "Iris Plus Graphics 655" },
  { vendor: "Intel Inc.", renderer: "Iris Pro Graphics 580" }
]


function genUAWindows(){
  const platform = `Windows NT ${10+Math.floor(Math.random()*2)}.0`;
  const system = 'Win64';
  const architecture = 'x64';

  const currentVersion = Math.floor(Math.random()*20) + 120;
  const browsers = [` OPR/${currentVersion}.0.0.0`, ` Edg/${currentVersion}.0.0.0`, '', `Firefox/${currentVersion}.0`];
  const browserSuffix = browsers[Math.floor(Math.random() * browsers.length)];
  const engine = 'AppleWebKit/537.36'
  const versionBrowser = `Chrome/${currentVersion}.0.0.0 Safari/537.36${browserSuffix}`;

  const uaFirefox = `Mozilla/5.0 (${platform}; ${system}; ${architecture}; rv:${currentVersion}.0) Gecko/20100101 Firefox/${currentVersion}.0`;
  const uaChromium = `Mozilla/5.0 (${platform}; ${system}; ${architecture}) ${engine} (KHTML, like Gecko) ${versionBrowser}`;

  return {
    userAgent: browserSuffix.includes('Firefox') ? uaFirefox : uaChromium,
    platform, system, architecture, currentVersion, engine, browserSuffix
  }

}



function genConnectionInfo() {
  const types = ["slow-2g", "2g", "3g", "4g", "5g", "wifi"];
  const effectiveType = types[Math.floor(Math.random() * types.length)];

  // RTT (Round-Trip Time) зависит от типа сети
  let rtt;
  let downlink;

  switch(effectiveType) {
    case "slow-2g": rtt = 1000; downlink = 0.05; break;
    case "2g":      rtt = 300;  downlink = 0.1;  break;
    case "3g":      rtt = 100;  downlink = 1.5;  break;
    case "4g":      rtt = 50;   downlink = 10;   break;
    case "5g":      rtt = 20;   downlink = 100;  break;
    case "wifi":    rtt = 30;   downlink = 30;   break;
  }

  // Можно слегка добавить рандом для реалистичности
  rtt = Math.floor(rtt * (0.8 + Math.random() * 0.4));      // ±20%
  downlink = +(downlink * (0.8 + Math.random() * 0.4)).toFixed(1);

  return { effectiveType, rtt, downlink };
}



function createUserAgentWindows2(){
  const obj = genUAWindows();

  const arrMemoryWin = [4, 8, 16, 32];
  
  const currentDeviceMemory = arrMemoryWin[Math.floor(Math.random()*arrMemoryWin.length)];
  const currentScreen = windowsScreenResolutions[Math.floor(Math.random() * windowsScreenResolutions.length)].split('x');
  const width = parseInt(currentScreen[0]);
  const height = parseInt(currentScreen[1]);
  

  const windowWidth = Math.floor(width * (0.7 + Math.random() * 0.3));  // 70–100% экрана
  const windowHeight = Math.floor(height * (0.7 + Math.random() * 0.3));

  return {
    width,
    height,
    windowWidth,
    windowHeight,
    connection: genConnectionInfo(),
    userAgent: obj.userAgent,
    appName: 'Netscape',
    vendor: 'Google Inc.',
    appCodeName:'Mozilla',
    appVersion: obj.userAgent.split('Mozilla/')[1],
    deviceMemory: currentDeviceMemory,
    hardwareConcurrency: currentDeviceMemory+2,
    product: 'Gecko',
    setUserAgentOverride: {
      userAgent: obj.userAgent,
      userAgentMetadata: {
        fullVersion: `${obj.currentVersion}.0.0.0`,
        platform: 'Windows',
        platformVersion: obj.platform.split('NT ')[1],
        architecture: obj.architecture, 
        mobile: false,
        model: "",
        brands: [
          {
          brand: 'Not;A=Brand',
          version: '99'
          },
          {
            brand: "Chromium",
            version: `${obj.currentVersion}`
          },
          {
            brand: `${obj.browserSuffix.includes('Edg') ? "Microsoft Edge" : obj.browserSuffix.includes('OPR') ? "Opera" : "Google Chrome"}`,
            version: `${obj.currentVersion}`
          }
        ],
      
      }
    },
    webGL: windowsWebGLProfiles[Math.floor(Math.random()*windowsWebGLProfiles.length)]
  }
  
}

const cuaw = createUserAgentWindows2();

fs.writeFileSync('obj_1.json', JSON.stringify(cuaw, null, 2));

module.exports = cuaw;


//fs.writeFileSync('obj.json', JSON.stringify(createUserAgentWindows(), null, 2));


