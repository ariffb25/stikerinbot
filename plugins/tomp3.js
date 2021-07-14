const { toAudio } = require('../lib/converter')

let handler = async (m, { conn, usedPrefix, command }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
  if (!/video|audio/.test(mime)) throw `Balas video atau voice note yang ingin diubah ke mp3 dengan perintah *${usedPrefix + command}*`
  let media = await q.download()
  let audio = await toAudio(media, 'mp4')
  conn.sendFile(m.chat, audio, '', '', m, 0, { mimetype: 'audio/mp4' })
}
handler.help = ['tomp3']
handler.tags = ['audio']

handler.command = /^to(mp3|a(udio)?)$/i

module.exports = handler
