let fs = require('fs');

let handler = async(m, { conn, text, args }) => {
    if (args.length == 0) return conn.reply(m.chat, `Silahkan masukan querynya`, m)
    if (args[0] == 'ff' || args[0] == 'ml' || args[0] == 'beatvn') {

  await m.reply('Searching...\nMohon tunggu sekitar 1 menit.')
let caption = `
Nihh Boss!
`.trim()

     let bufferg = fs.readFileSync(`./src/jedag_jedug/${args[0]}/${pickRandom(['jedag','jedag1','jedag2','jedag3','jedag4','jedag5','jedag6','jedag7','jedag8'])}.mp4`)

     conn.sendFile(m.chat, bufferg, 'video.mp4', caption, m)
    } else {
        conn.reply(m.chat, `Query yang tersedia :\n\n• ff\n• ml\n• beatvn\n\nMisal : !jedagjedug ff`, m)
    }
}
handler.help = ['jedagjedug <query>']
handler.tags = ['videomaker']
handler.command = /^(jedagjedug)$/i
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
