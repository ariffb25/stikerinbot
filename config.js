let fs = require('fs')
global.owner = ['62895622729068'] // Letakan nomor kamu disini
global.mods = [] // Moderator?
global.prems = JSON.parse(fs.readFileSync('./src/premium.json')) // Pengguna premium tidak memerlukan limit
global.APIs = { // API Prefix
  // nama: 'https://website'
  bx: 'https://bx-hunter.herokuapp.com',
  dhnjing: 'https://dhnjing.xyz',
  aria: 'https://ariarestapii.herokuapp.com',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zekais: 'http://zekais-api.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
}
global.APIKeys = { // APIKey nya disini
  // 'https://website': 'apikey'
  'https://ariarestapii.herokuapp.com': 'aria',
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://pencarikode.xyz': 'pais',
  'https://api.xteam.xyz': 'apikeymu',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
}

// Sticker WM
global.packname = 'Aria'
global.author = 'Botz'

global.wait = '_*tunggu..*_'
global.eror = '_*Server Error*_'
function kintil(list) {
  return list[Math.floor(list.length * Math.random())]
}
global.fla = kintil(['https://telegra.ph/file/ed87bfeecd285253080be.jpg', 'https://telegra.ph/file/d03be530f4945bfeead24.jpg', 'https://telegra.ph/file/338d4b0b05bb3e0693925.jpg', 'https://telegra.ph/file/ad5b14b881bdb97215bb5.jpg'])
global.donate = kintil(['https://telegra.ph/file/ed87bfeecd285253080be.jpg', 'https://telegra.ph/file/d03be530f4945bfeead24.jpg', 'https://telegra.ph/file/338d4b0b05bb3e0693925.jpg', 'https://telegra.ph/file/ad5b14b881bdb97215bb5.jpg'])

global.multiplier = 69 // Semakin tinggi, semakin sulit naik level

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
