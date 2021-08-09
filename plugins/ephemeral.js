let handler = async (m, { conn, args, isBotAdmin, isAdmin, isOwner }) => {
    if (m.isGroup) {
        if (!isBotAdmin) {
            global.dfail('botAdmin', m, conn)
            throw false
        }
        if (!(isAdmin || isOwner)) {
            global.dfail('admin', m, conn)
            throw false
        }
    }
    if (args[0] == 'on') await conn.toggleDisappearingMessages(
        m.chat,
        7 * 24 * 60 * 60
    )
    else await conn.toggleDisappearingMessages(m.chat, 0)
}
handler.help = ['ephe [on]']
handler.tags = ['tools']
handler.command = /^(ephe)$/i

module.exports = handler