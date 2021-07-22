let handler = m => m
handler.before = async (m) => {

    if (m.isGroup && global.db.data.chats[m.chat].expired != 0) {
        if (new Date() * 1 >= global.db.data.chats[m.chat].expired) {
            let users = (await this.groupMetadata(m.chat)).participants.map(u => u.jid)
            this.reply(m.chat, `waktunya *${this.user.name}* untuk meninggalkan grup`, null, { contextInfo: { mentionedJid: users } }).then(() => {
                this.sendContact(m.chat, global.owner[0], 'ariffb', m).then(() => {
                    this.groupLeave(m.chat).then(() => {
                        global.db.data.chats[m.chat].expired = 0
                    })
                })
            })
        }
    }
}

module.exports = handler