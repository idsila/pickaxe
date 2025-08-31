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
      platform: currentPlatform,
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
      platform: currentPlatform,
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

  obj.data.webGL =  windowsWebGLProfiles[Math.floor(Math.random()*windowsWebGLProfiles.length)];

  return obj.data
}


module.exports = getUserAgent();

//fs.writeFileSync('obj.json', JSON.stringify(getUserAgent(), null, 2));