const { sticker5 } = require('../lib/sticker')

let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let url = API('https://some-random-api.ml', '/canvas/triggered', {
    avatar: await conn.getProfilePicture(who).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
  })
  let stiker = await sticker5(null, url, packname, author)
  if (stiker) return await conn.sendFile(m.chat, stiker, '', '', m)
  throw stiker.toString()
}
handler.help = ['trigger']
handler.tags = ['maker']
handler.command = /^(trigger)$/i

module.exports = handler 