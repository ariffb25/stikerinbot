const { ephoto } = require('../lib/ephoto.js')


let handler = async(m, { conn, args, usedPrefix, text}) => {

    if (args.length == 0) throw `Untuk menggunakan fitur ini\nSilahkan ketik: ${usedPrefix}kaca [query] [your teks]\n\n*Contoh:* ${usedPrefix}kaca smile don't be sad\n\nquery yang tersedia:\nbg1\nbg2\nbg3\nbg4\nbg5\nbg6`
let Pilihan = args[0] 
let uuid = {
 bg1: "783ab148-70af-40b4-a0e0-6dd837ae6e8b",
 bg2: "f0285f0d-a8a7-41c2-b956-a0d372003026",
 bg3: "222969f0-a2e0-4909-9629-193e51befbd8",
 bg4: "1743f0c3-ce47-4792-a6a8-d65aa24b9021",
 bg5: "84a61ecf-125c-450f-8c88-8356e9b35065",
 bg6: "f5efa9cb-55ec-4eb9-8705-0b9a9103e5df"
 
}[Pilihan]
if (!uuid) throw `Maaf query tidak tersedia. Silahkan ketik ${usedPrefix}kaca untuk melihat list query`
let [teks1, ...teks2] = text.replace(Pilihan,'').trimStart().split('|')
if (!teks1) throw `masukan teksnya contoh\n${usedPrefix+command} bg6 mellia`
  if(teks1.length > 200) throw `*hmmm?!!, teksnya kepanjangan cuy!!!.*`
teks2 = teks2.join('|')
  let result = await ephoto('https://ephoto360.com/hieu-ung-viet-chu-3d-len-bai-bien-814.html', `${teks1}`, uuid)
    let uh = `https://s1.ephoto360.com${result.image}`
await conn.sendFile(m.chat, uh,'p.jpg', 'wuis', m,false, { thumbnail: Buffer.alloc(0) })
/*await conn.sendFile(m.chat, uh, 'p.jpg', 'wuis',m)*/
     }
handler.help = ['pantai']
handler.tags = ['ep']
handler.command = /^pantai$/i
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler
