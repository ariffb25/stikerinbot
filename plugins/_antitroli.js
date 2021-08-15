let handler = m => m

handler.all = async function (m) {
    if (m.message && m.isBaileys && m.quoted && m.quoted.mtype === 'orderMessage' && !(m.quoted.token && m.quoted.orderId)) {
        m.reply('Troli Terdeteksi\n\n' + require('util').format(m.key), null)
        await this.modifyChat(m.chat, 'clear', {
            includeStarred: false
        }).catch(console.log)
        this.reply(global.owner[0] + '@s.whatsapp.net', `
Pelaku pengirim troli @${m.sender.split`@`[0]}
ID: ${m.isGroup ? m.chat : m.sender}
Nama: ${m.isGroup ? this.getName(m.chat) : this.getName(m.sender)}
`.trim(), null, { contextInfo: { mentionedJid: [m.sender] } })
    }
}

module.exports = handler