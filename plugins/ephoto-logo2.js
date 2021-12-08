const { ephoto } = require('../lib/ephoto.js')


let handler = async(m, { conn, args, usedPrefix, text, command}) => {
 let ah = './src/logo2.jpg'
    if (args.length == 0) return conn.sendFile(m.chat, ah, 'p.jpg', `Untuk menggunakan fitur ini\nSilahkan ketik: ${usedPrefix+command} [query] [your teks]\n\n*Contoh:* ${usedPrefix+command} panda not not\n\nquery yang tersedia:\ngirl, ghost, swat, rakun, rabbit, panda`, m)
let Pilihan = args[0]
let uuid = {
girl: "89af5387-168a-4924-a49d-f938e061b7ba",
ghost: "9424ca60-11e4-4904-86b9-10ecf2442f5c",
swat: "eafc98ed-6ba6-4a30-88e1-e73b059eeca1",
rakun: "f53b5da9-5e99-4874-a634-d06ae81a2b09",
rabbit: "bb937ed8-6ace-4fb6-bc63-2e90a737e32c",
panda: "98de991a-e305-4d37-869a-4f345fb07427",
 
}[Pilihan]
if (!uuid) throw `Maaf query tidak tersedia. Silahkan ketik ${usedPrefix+command} untuk melihat list query`
let [teks1, ...teks2] = text.replace(Pilihan,'').trimStart().split('|')
if (!teks1) throw `masukan teksnya contoh\n ${usedPrefix+command} panda mayaw`
if(teks1.length > 15) throw `*hmmm?!!, teksnya kepanjangan cuy, maksimal 14 karakter\ncontoh\n\n ${usedPrefix+command} Tobangado*`
teks2 = teks2.join('|')
  let result = await ephoto('https://ephoto360.com/tao-logo-game-pubg-free-fire-fps-online-dep-607.html', `${teks1}`, uuid)
    let uh = `https://s1.ephoto360.com${result.image}`
await conn.sendFile(m.chat, uh,'p.jpg', 'wuis', m,false, { thumbnail: Buffer.alloc(0) })
    
  }

handler.help = ['logo2']
handler.tags = ['ep']
handler.command = /^logo2$/i
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
