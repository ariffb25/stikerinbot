const { MessageType, newMessagesDB } = require("@adiwajshing/baileys")

module.exports = {
    async all(m, chatUpdate) {
        if (m.isBaileys) return
        if (!m.message) return
        if (m.mtype !== 'buttonsResponseMessage' && m.type !== 1) return
        this.emit('chat-update', {
            ...chatUpdate,
            messages: newMessagesDB([
                this.cMod(m.chat,
                    await this.prepareMessage(m.chat, m.msg.selectedButtonId, MessageType.extendedText, {
                        contextInfo: {
                            mentionedJid: m.msg.contextInfo && m.msg.contextInfo.mentionedJid ? m.msg.contextInfo.mentionedJid : []
                        },
                        ...(m.quoted ? { quoted: m.quoted.fakeObj } : {}),
                        messageId: m.id,
                    }),
                    m.msg.selectedButtonId,
                    m.sender
                )
            ])
        })
    }
}