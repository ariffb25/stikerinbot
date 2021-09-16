let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
Moshi" dare desuka
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /@6283102255420/i
handler.command = new RegExp

module.exports = handler
