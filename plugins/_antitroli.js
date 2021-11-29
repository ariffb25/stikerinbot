let handler = m => m

handler.all = async function (m) {
    if (!db.data.settings[this.user.jid].antitroli) return // antitroli aktif?
    if (m.message && m.isBaileys && m.quoted && m.quoted.mtype === 'orderMessage' && !(m.quoted.token && m.quoted.orderId)) {
        m.reply('Troli Terdeteksi\n\n' + require('util').format(m.key), null)
        await this.modifyChat(m.chat, 'clear', {
            includeStarred: false
        }).catch(console.log)
        this.reply(owner[0] + '@s.whatsapp.net', `
Pelaku pengirim troli @${m.sender.split`@`[0]}
ID: ${m.chat}
Nama: ${this.getName(m.chat)}
`.trim(), null, { contextInfo: { mentionedJid: [m.sender] } })
    }
}

module.exports = handler