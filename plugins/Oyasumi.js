let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
Tidur yang nyenyak ya onii chan
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /oyasumi/i
handler.command = new RegExp

module.exports = handler
