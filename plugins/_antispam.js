let handler = m => m

handler.all = async function (m) {
    if (!db.data.settings[this.user.jid].antispam) return // antispam aktif?
    if (m.isBaileys && m.fromMe) return
    if (!m.message) return
    if (!m.isCommand) return
    if (db.data.users[m.sender].banned) return
    if (db.data.chats[m.chat].isBanned) return
    this.spam = this.spam ? this.spam : {}
    if (m.sender in this.spam) {
        this.spam[m.sender].count++
        if (m.messageTimestamp.toNumber() - this.spam[m.sender].lastspam > 10) {
            if (this.spam[m.sender].count > 10) {
                db.data.users[m.sender].banned = true
                await this.sendButton(m.chat, `kamu dibanned karena spam!${m.isGroup ? `\n\nadmin grup bisa menggunakan perintah *.unban @${m.sender.split`@`[0]}*` : ''}`, '© stikerin', 'Pemilik Bot', ',owner', m, { contextInfo: { mentionedJid: [m.sender] } })
            }
            this.spam[m.sender].count = 0
            this.spam[m.sender].lastspam = m.messageTimestamp.toNumber()
        }
    }
    else this.spam[m.sender] = {
        jid: m.sender,
        count: 0,
        lastspam: 0
    }
}

module.exports = handler
