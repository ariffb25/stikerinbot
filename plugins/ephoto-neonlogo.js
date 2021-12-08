const { ephoto } = require('../lib/ephoto.js')


let handler = async(m, { conn, args, usedPrefix, text, command}) => {
 let ah = './src/neonlogo.jpg'
    if (args.length == 0) return conn.sendFile(m.chat, ah, 'p.jpg', `Untuk menggunakan fitur ini\nSilahkan ketik: ${usedPrefix+command} [query] [your teks]\n\n*Contoh:* ${usedPrefix+command} cetah not not\n\nquery yang tersedia:\ntiger, hiu, dugong, bull, cetah, lion`, m)
let Pilihan = args[0]
let uuid = {
tiger: "2cb0949e-9e73-4e46-b149-e7e3927ba535",
hiu: "6e80d164-85bd-412f-ae4b-36c09a9fc6ad",
dugong: "f81ef052-83f9-46a3-bbbc-4ce2653f735e",
bull: "2bea561a-1130-4a3e-bd4b-1533cd0675d1",
cetah: "63e2a3f2-85ce-4973-bdcb-cf294542a8f2",
lion: "b50e6618-0079-4acd-a097-aeb44315c29a",
 
}[Pilihan]
if (!uuid) throw `Maaf query tidak tersedia. Silahkan ketik ${usedPrefix+command} untuk melihat list query`
let [teks1, ...teks2] = text.replace(Pilihan,'').trimStart().split('|')
if (!teks1) throw `masukan teksnya contoh\n ${usedPrefix+command} bull banaga`
if(teks1.length > 15) throw `*hmmm?!!, teksnya kepanjangan cuy, maksimal 14 karakter\ncontoh\n\n ${usedPrefix+command} bull Tobangado*`
teks2 = teks2.join('|')
  let result = await ephoto('https://ephoto360.com/tao-logo-neon-xanh-truc-tuyen-546.html', `${teks1}`, uuid)
    let uh = `https://s1.ephoto360.com${result.image}`
await conn.sendFile(m.chat, uh,'p.jpg', 'wuis', m,false, { thumbnail: Buffer.alloc(0) })
    
  }

handler.help = ['neonlogo']
handler.tags = ['ep']
handler.command = /^neonlogo$/i
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler