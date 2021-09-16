let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
Pasti Didikan Rido Sama Wahyu
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /rido/i
handler.command = new RegExp

module.exports = handler
