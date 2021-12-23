let fetch = require('node-fetch')

let handler = async (m, { conn }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let url = global.API('https://some-random-api.ml', '/canvas/gay', {
    avatar: await conn.getProfilePicture(who).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
  })
  conn.sendFile(m.chat, url, 'gay.png', '© stikerin', m, 0, { thumbnail: await (await fetch(url)).buffer() })
}

handler.help = ['gay']
handler.tags = ['maker']
handler.command = /^(gay)$/i

module.exports = handler
