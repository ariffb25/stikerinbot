let fs = require('fs');

let handler = async(m, { conn, text, args }) => {

  await m.reply('Searching...\nMohon tunggu sekitar 1 menit.')
let caption = `
Nihh :v
`.trim()

 let bufferg = fs.readFileSync(`/data/data/com.termux/files/home/kuhong/src/lucu/${pickRandom(['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','34','35','36','37','38','39','40','41','42','43','44','45','46','47'])}.mp4`)

     conn.sendFile(m.chat, bufferg, 'video.mp4', caption, m)
}
handler.help = ['videolucu','asupan', 'clipclaps']
handler.tags = ['video']
handler.command = /^(videolucu|asupan|clipclaps)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
