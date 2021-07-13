let handler = m => m
handler.before = async (m, { conn }) => {

    if (m.isGroup && global.db.data.chats[m.chat].expired != 0) {
        if (new Date() * 1 >= global.db.data.chats[m.chat].expired) {
            let users = (await conn.groupMetadata(m.chat)).participants.map(u => u.jid)
            conn.reply(m.chat, `waktunya *${conn.user.name}* untuk meninggalkan grup :(\n*Chat owner untuk invite bot lagi*`, null, { contextInfo: { mentionedJid: users } }).then(() => {
                conn.sendContact(m.chat, '6283128734012', 'ariffb', m).then(() => {
                    conn.groupLeave(m.chat).then(() => {
                        global.db.data.chats[m.chat].expired = 0
                    })
                })
            })
        }
    }
}

module.exports = handler