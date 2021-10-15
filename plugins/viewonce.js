let handler = async (m, { conn }) => {
    if (!m.quoted) throw `Reply to messages that can only be seen once`
    try {
        await conn.copyNForward(m.chat, await conn.loadMessage(m.chat, m.quoted.id), false, { readViewOnce: true })
    } catch (e) {
        throw `Reply to messages that can only be seen once`
    }
}

handler.help = ['readviewonce']
handler.tags = ['tools']

handler.command = /^readviewonce/i

module.exports = handler
