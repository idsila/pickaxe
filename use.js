const userAgent = require("user-agents");


// const ua = new userAgent((user) => {
//   return user.userAgent.includes("Android");
// });

// console.log(ua.data);

const devices = {
  'Android': 'arm',
  'Windows': 'x86',
  'iOS':'arm'
}
const arrMemory = [ 2,4,6 ]
function createUserAgentAndroid(){
  const obj = new userAgent((user) => { return user.userAgent.includes("Android"); });
  const currentPlatform = obj.data.userAgent.split('; ')[1].split(' ')[0];
  const currentPlatformVersion = obj.data.userAgent.split(';')[1].split(' ')[2];
  const currentDeviceMemory = arrMemory[Math.ceil(arrMemory.random()*arrMemory.length)]
  obj.data.appCodeName =  obj.data.userAgent.split('/')[0];
  obj.data.appVersion =  obj.data.userAgent.split('Mozilla/')[1];
  obj.data.product =  "Gecko";
  obj.data.setUserAgentOverride = {
    userAgent: obj.data.userAgent,
    userAgentMetadata: {
      fullVersion: obj.data.userAgent.split('/')[3].split(' ')[0],
      platform: currentPlatform,
      platformVersion: `${currentPlatformVersion}.0.0`,
      architecture: devices[currentPlatform], 
      mobile: obj.data.userAgent.includes('Mobile'),
      brands: [
        {
         brand: 'Not;A=Brand',
         version: '99'
        },
        {
          brand: "Chromium",
          version: currentPlatformVersion
        },
        {
          brand: "Google Chrome",
          version: currentPlatformVersion
        }
      ],
      
    }
  };
  console.log(obj.data)
}

createUserAgentAndroid()

// setInterval(() => {
//   createUserAgentAndroid()
// }, 300)

//"appCodeName": "Mozilla",
//
//
//
const p2 = {
  userAgent: 'Mozilla/5.0 (Linux; Android 5.1.1; KFSUWI) AppleWebKit/537.36 (KHTML, like Gecko) Silk/108.18.4 like Chrome/108.0.5359.220 Safari/537.36',
  appName: 'Netscape',     
  platform: 'Linux armv8l',
  vendor: 'Google Inc.',
  viewportHeight: 1094,
  viewportWidth: 800,

  connection: {
    downlink: 8.95,        
    downlinkMax: null,     
    effectiveType: '4g',   
    rtt: 200,
    type: 'wifi'
  },

  pluginsLength: 0,
  screenHeight: 1280,
  screenWidth: 800,
  
 
  
  weight: 0.00009903637167482612,
  deviceCategory: 'tablet'
}


const pp = {
  "userAgent": "Mozilla/5.0 (Android NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
  "appName": "Netscape",
  "platform": "Android",
  "vendor": "Google Inc.",
  "width": 1080,
  "height": 2400,
  "product": "Gecko",
  "appCodeName": "Mozilla",
  "setUserAgentOverride": {
    "fullVersion": "138.0.0.0",
    "platform": "Android",
    "platformVersion": "12.0.0",
    "architecture": "arm",
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
    

    "mobile": true
  },




  "language": "en-US",



  "languages": [
    "en-US",
    "en"
  ],
  "deviceMemory": 6,
  "hardwareConcurrency": 8,
 
  "webGL": {
    "renderer": "Adreno 610",
    "vendor": "Qualcomm"
  },

}





// Импортируем библиотеку
const userAgent = require('user-agents');
const fs = require('fs');

// Случайный UA, где устройство iPhone

const devices = {
  'Android': 'arm',
  'Windows': 'x86',
  'iOS':'arm'
}
const arrMemory = [ 2,4,6 ]
function createUserAgentAndroid(){
  const obj = new userAgent((user) => { return user.userAgent.includes("Android"); });
  const currentPlatform = obj.data.userAgent.split('; ')[1].split(' ')[0];
  const currentPlatformVersion = obj.data.userAgent.split(';')[1].split(' ')[2];
  const currentVersion = obj.data.userAgent.split('/')[3].split(' ')[0];
  const currentDeviceMemory =
  arrMemory[Math.ceil(Math.random()*arrMemory.length)];
  obj.data.appCodeName =  obj.data.userAgent.split('/')[0];
  obj.data.appVersion =  obj.data.userAgent.split('Mozilla/')[1];
  obj.data.deviceMemory = currentDeviceMemory;
  obj.data.hardwareConcurrency = currentDeviceMemory+2;
  obj.data.product =  "Gecko";
  console.log(currentPlatformVersion)
  obj.data.setUserAgentOverride = {
    userAgent: obj.data.userAgent,
    userAgentMetadata: {
      fullVersion: currentVersion,
      platform: currentPlatform,
      platformVersion: `${currentPlatformVersion ?? '10'}.0.0`,
      architecture: devices[currentPlatform], 
      mobile: obj.data.userAgent.includes('Mobile'),
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
  return obj.data
}
//console.log(JSON.stringify(createUserAgentAndroid(), null, 2));
fs.writeFileSync('obj.json',JSON.stringify(createUserAgentAndroid(), null, 2))





// Создаём экземпляр
//const userAgent = new UserAgent({ deviceCategory: 'mobile', platform: 'Android'});

// Можно и объектом:
//console.log(userAgent.data);
//console.log(userAgent.data);
//console.log(userAgent.data);
