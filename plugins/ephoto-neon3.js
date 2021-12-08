const { ephoto } = require('../lib/ephoto.js')


let handler = async(m, { conn, args, usedPrefix, text,command}) => {
let oi = './src/neon.jpg'
    if (args.length == 0) return conn.sendFile(m.chat, oi, 'p.jpg',`Untuk menggunakan fitur ini\nSilahkan ketik: ${usedPrefix+command} [query] [your teks]\n\n*Contoh:* ${usedPrefix+command} b don't be sad\n\nquery yang tersedia:\na, b, c, d, e, f`, m)
let Pilihan = args[0]
let uuid = {
a: "7647ec5b-f47c-4dab-91b6-db3afef6c980",
b: "aa66248c-328c-447f-8862-ef49e1a73bc0",
c: "6bf8fced-bb7f-4373-ad07-5e95fd30e10e",
d: "3938db27-c48c-4d96-ab60-f1bd1e312abf",
e: "a35d8b0d-bb89-4718-8723-71c5a9e9de4a",
f: "188eb364-5a04-446e-a779-0e2f427b7bc3"
 
}[Pilihan]
if (!uuid) throw `Maaf query tidak tersedia. Silahkan ketik ${usedPrefix+command} untuk melihat list query`
let [teks1, ...teks2] = text.replace(Pilihan,'').trimStart().split('|')
if (!teks1) throw `masukan teksnya contoh\n ${usedPrefix+command} f mayaw`
  if(teks1.length > 23) throw `*hmmm?!!, maksimal teks 22 huruf*`
teks2 = teks2.join('|')
  let result = await ephoto('https://ephoto360.com/hieu-ung-tao-chu-ky-anh-sang-nhieu-mau-sac-686.html', `${teks1}`, uuid)
    let uh = `https://s1.ephoto360.com${result.image}`
await conn.sendFile(m.chat, uh,'p.jpg', 'wuis', m,false, { thumbnail: Buffer.alloc(0) })
    
  }
handler.help = ['neon3 <Teks>']
handler.tags = ['ep']
handler.command = /^neon3$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = true
handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler