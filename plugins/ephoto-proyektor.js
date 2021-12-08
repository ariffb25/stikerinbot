const { ephoto2 } = require('../lib/ephoto2.js')
let handler = async (m, { conn, args, usedPrefix, command, text}) => {
  let [aw, iw, ew] = text.split(/[&|.]/i)
    	  if (!aw || !iw || !ew) throw 'gunakan command seperti ini\n*Contoh*:\n'+`${usedPrefix+command} Loli|Kyaaa|yamete` 
    	  if(aw.length > 22) throw `*hmmm?!!, teksnya kepanjangan cuy, maksimal 21 huruf!!!.*`
  ephoto2('https://ephoto360.com/tao-logo-phong-cach-may-chieu-3d-518.html',[`${aw}`,`${iw}`,`${ew}`]).then(result => {
    let uh = `https://s1.ephoto360.com${result.image}`
conn.sendFile(m.chat, uh,'p.jpg', 'wuis', m,false, { thumbnail: Buffer.alloc(0) })/*
 conn.sendFile(m.chat, uh, 'p.jpg', 'wuis',m)*/
  }).catch(err => {
    console.log(err)
    conn.reply(m.chat, 'error',m)
  })
}
handler.help = ['proyektor'].map(v => v + ' [teks1]|[teks2]|[teks3]')
handler.tags = ['ep']
handler.command = /^proyektor$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null
module.exports = handler