let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
*「 ANTI TOXIC 」*
Sender : ${name.vnmae || name.notify || name.name || ('+' + name.jid.split`@`[0])}
Message : ${m.text}
Get used to it, don't be toxic! :)
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /bitch|fuck|nude|fucker|pussy|dick|bsdk|bhosdike|tmkc|chut|chutiya|bc|sale|madarchod|bkl|gaand|randi|loda|lodi|sex|horny|nigga|dick|bitch|tits|bastard|poor/i
handler.command = new RegExp

module.exports = handler
