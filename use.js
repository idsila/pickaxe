const userAgent = require("user-agents");
const fs = require('fs');











const windowsScreenResolutions = [
  "1920x1080",  // Full HD – стандарт для большинства мониторов и ноутбуков
  "1366x768",   // недорогие ноутбуки
  "1440x900",   // старые MacBook / 15" экраны
  "1536x864",   // ультраширокие ноутбуки среднего сегмента
  "1280x720",   // HD, часто на бюджетных ноутбуках
  "1600x900",   // средние ноутбуки
  "1680x1050",  // старые 16:10 мониторы
  "1360x768",   // ноутбуки 13–14"
  "1280x800"    // 13" MacBook и аналогичные
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

  
  const browsers = [ (cv) => ` OPR/${cv}.0.0.0`, (cv) => ` Edg/${cv}.0.0.0`, (cv) => ''];
  const isOpr = Math.floor(Math.random() * browsers.length);
  const browserSuffix = browsers[isOpr];
  const currentVersion = isOpr === 0 ?  Math.floor(Math.random()*10) + 110 : Math.floor(Math.random()*20) + 120;
  const brw = browserSuffix(currentVersion);
  

  
  const engine = 'AppleWebKit/537.36'
  const versionBrowser = `Chrome/${currentVersion}.0.0.0 Safari/537.36${brw}`;

  
  const uaChromium = `Mozilla/5.0 (${platform}; ${system}; ${architecture}) ${engine} (KHTML, like Gecko) ${versionBrowser}`;

  return {
    userAgent: uaChromium,
    platform, system, architecture, currentVersion, engine, browserSuffix:brw
  }

}



function genConnectionInfo() {
  const types = [ "3g", "4g", "5g", "wifi"];
  const effectiveType = types[Math.floor(Math.random() * types.length)];

  // RTT (Round-Trip Time) зависит от типа сети
  let rtt;
  let downlink;

  switch(effectiveType) {
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



function createUserAgentWindows(){
  const obj = genUAWindows();

 

   // RAM в гигабайтах (то, что возвращает navigator.deviceMemory)
   const arrMemoryWin = [2, 4, 8, 16, 32];
   const currentDeviceMemory = arrMemoryWin[Math.floor(Math.random() * arrMemoryWin.length)];
 
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
    platform: 'Win32',
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




const androidScreenResolutions = [
  "720x1280",  // HD
  "720x1440",  // бюджетные смартфоны с вытянутым экраном
  "1080x1920", // Full HD
  "1080x2160", // обычные Full HD+ бюджетные
  "1080x2220", // бюджетные LG, Samsung mid-range
  "1080x2280", // бюджетные Xiaomi, Samsung
  "1080x2310", // средний сегмент
  "1080x2340"  // распространённые модели бюджетных Samsung / Xiaomi
];


const androidWebGLProfiles = [
  { vendor: "ARM", renderer: "Mali-G78" },
  { vendor: "ARM", renderer: "Mali-G77" },
  { vendor: "ARM", renderer: "Mali-G76" },
  { vendor: "ARM", renderer: "Mali-G72" },
  { vendor: "ARM", renderer: "Mali-G71" },
  { vendor: "ARM", renderer: "Mali-G57" },
  { vendor: "ARM", renderer: "Mali-G52" },
  { vendor: "Qualcomm", renderer: "Adreno 650" },
  { vendor: "Qualcomm", renderer: "Adreno 640" },
  { vendor: "Qualcomm", renderer: "Adreno 630" },
  { vendor: "Qualcomm", renderer: "Adreno 618" },
  { vendor: "Qualcomm", renderer: "Adreno 616" },
  { vendor: "Qualcomm", renderer: "Adreno 512" },
  { vendor: "Qualcomm", renderer: "Adreno 530" },
  { vendor: "Imagination Technologies", renderer: "PowerVR GM9446" },
  { vendor: "Imagination Technologies", renderer: "PowerVR GM9445" },
  { vendor: "Imagination Technologies", renderer: "PowerVR GX6250" },
  { vendor: "Imagination Technologies", renderer: "PowerVR GE8320" },
  { vendor: "Intel Inc.", renderer: "UHD Graphics 620" } // встречается на некоторых Android эмуляторах
];


function genUAAndroid() {
  const androidVersions = ["12", "13", "14"];
  const version = androidVersions[Math.floor(Math.random() * androidVersions.length)];

  const browsers = [
    (cv) => ` Chrome/${cv}.0.0.0 Mobile Safari/537.36`,
    (cv) => ` EdgA/${cv}.0.0.0 Mobile Safari/537.36`,
    (cv) => ` OPR/${cv}.0.0.0 Mobile Safari/537.36`
  ];

  const isBrowser = Math.floor(Math.random() * browsers.length);
  const currentVersion = 100 + Math.floor(Math.random() * 30);
  const browserSuffix = browsers[isBrowser](currentVersion);

  const ua = `Mozilla/5.0 (Linux; Android ${version}; Mobile) AppleWebKit/537.36 (KHTML, like Gecko)${browserSuffix}`;

  return {
    userAgent: ua,
    version,
    currentVersion,
    browserSuffix: ua.includes("EdgA") ? "Edge" : ua.includes("OPR") ? "Opera" : "Chrome"
  };
}

function genConnectionInfoAndroid() {
  const types = ["3g", "4g", "5g", "wifi"];
  const effectiveType = types[Math.floor(Math.random() * types.length)];

  let rtt, downlink;
  switch(effectiveType) {
    case "3g": rtt = 100; downlink = 1.5; break;
    case "4g": rtt = 50; downlink = 10; break;
    case "5g": rtt = 20; downlink = 100; break;
    case "wifi": rtt = 30; downlink = 30; break;
  }

  rtt = Math.floor(rtt * (0.8 + Math.random() * 0.4));
  downlink = +(downlink * (0.8 + Math.random() * 0.4)).toFixed(1);

  return { effectiveType, rtt, downlink };
}

function createUserAgentAndroid() {
  const obj = genUAAndroid();

  const deviceMemoryOptions = [2, 3, 4, 6, 8];
  const currentDeviceMemory = deviceMemoryOptions[Math.floor(Math.random() * deviceMemoryOptions.length)];

  const screen = androidScreenResolutions[Math.floor(Math.random() * androidScreenResolutions.length)].split('x');
  const width = parseInt(screen[0]);
  const height = parseInt(screen[1]);

  const windowWidth = Math.floor(width * (0.7 + Math.random() * 0.3));
  const windowHeight = Math.floor(height * (0.7 + Math.random() * 0.3));

  return {
    width,
    height,
    windowWidth,
    windowHeight,
    platform: Math.floor(Math.random()*2) ? 'Linux armv8l' : 'Linux aarch64',
    connection: genConnectionInfoAndroid(),
    userAgent: obj.userAgent,
    appName: 'Netscape',
    vendor: 'Google Inc.',
    appCodeName: 'Mozilla',
    appVersion: obj.userAgent.split('Mozilla/')[1],
    deviceMemory: currentDeviceMemory,
    hardwareConcurrency: currentDeviceMemory + 2,
    product: 'Gecko',
    setUserAgentOverride: {
      userAgent: obj.userAgent,
      userAgentMetadata: {
        fullVersion: `${obj.currentVersion}.0.0.0`,
        platform: 'Android',
        platformVersion: obj.version,
        architecture: 'arm64',
        mobile: true,
        model: "Generic Android",
        brands: [
          { brand: 'Not;A=Brand', version: '99' },
          { brand: 'Chromium', version: `${obj.currentVersion}` },
          { brand: obj.browserSuffix, version: `${obj.currentVersion}` }
        ]
      }
    },
    webGL: androidWebGLProfiles[Math.floor(Math.random() * androidWebGLProfiles.length)]
  };
}








function getUserAgent(){
  const kf = Math.floor(Math.random()*100);
  if(kf < 40){
    return createUserAgentAndroid();
  }
  else{
    return createUserAgentWindows();
  }
}


const cuaw = getUserAgent;



//fs.writeFileSync('obj_1.json', JSON.stringify(cuaw, null, 2));

module.exports = cuaw;
