let handler = async (m, { conn, args, isBotAdmin, isAdmin, isOwner }) => {
    if (m.isGroup) {
        if (!isBotAdmin) return dfail('botAdmin', m, conn)
        if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
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