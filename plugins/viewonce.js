let handler = async (m, { conn, usedPrefix, command }) => {
    if (!m.quoted) throw `balas pesan yang hanya bisa dilihat sekali`
    try {
        await conn.copyNForward(m.chat, await conn.loadMessage(m.chat, m.quoted.id), false, { readViewOnce: true })
    } catch (e) {
        throw `Balas pesan yang hanya bisa dilihat sekali dengan perintah *${usedPrefix + command}*`
    }
}

handler.help = ['readviewonce']
handler.tags = ['tools']
handler.command = /^(read)?viewonce/i

module.exports = handler