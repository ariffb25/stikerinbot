const { ephoto2 } = require('../lib/ephoto2.js')


let handler = async(m, { conn, args, usedPrefix, text}) => {

  if (!text) throw 'masukan teksnya'
  if (text.length > 15) throw 'kepanjangan kak, maksimal 15 huruf'
  let result = await ephoto2('https://ephoto360.com/hieu-ung-chu/hieu-ung-chu-da-quy-hong-ngoc-3d-281.html', `${text}`)
    let uh = `https://s1.ephoto360.com${result.image}`
await conn.sendFile(m.chat, uh,'p.jpg', 'wuis', m,false, { thumbnail: Buffer.alloc(0) })
/*await conn.sendFile(m.chat, uh, 'p.jpg', 'wuis',m)*/
     }

handler.help = ['ruby']
handler.tags = ['ep']
handler.command = /^ruby$/i
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
