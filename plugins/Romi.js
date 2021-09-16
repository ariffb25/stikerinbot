let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
Romi-kun Kawaisou
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /@14158912734/i
handler.command = new RegExp

module.exports = handler
