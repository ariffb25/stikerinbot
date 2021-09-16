let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
Xiao wu Punya Romi Onii-chan  >///<
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /xiao wu/i
handler.command = new RegExp

module.exports = handler
