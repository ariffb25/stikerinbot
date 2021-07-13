let fetch = require('node-fetch')
let split = '|'
let handler = async (m, { conn, args: [effect], text: txt }) => {
  let { effects } = await (await (fetch(global.API('xteam', '/textpro')))).json()
  if (!effect) throw '*Daftar Efek*\n\n' + effects.sort((a, b) => a - b).join('\n')
  effect = effect.toLowerCase()
  if (!effect in effects) throw `Efek *${effect}* tidak ditemukan`
  let [text, ...text2] = txt.replace(effect, '').trimStart().split(split)
  text2 = text2.join(split)
  let url = global.API('xteam', '/textpro/' + effect, { text, text2 }, 'APIKEY')
  await conn.sendFile(m.chat, url, 'file.jpg', `*TEXTPRO*\n*Efek:* ${effect}`, m, 0, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['textpro'].map(v => v + ' <efek> <teks>|[teks2]')
handler.tags = ['tools']
handler.command = /^(textpro)$/i

module.exports = handler

