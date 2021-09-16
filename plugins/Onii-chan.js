let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
Gomen-nee Onii-chan
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /Ngeselin/i
handler.command = new RegExp

module.exports = handler
