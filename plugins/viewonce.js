let handler = async (m, { conn }) => {
    if (!m.quoted) throw `balas pesan yang hanya bisa dilihat sekali`
    try {
        await conn.copyNForward(m.chat, await conn.loadMessage(m.chat, m.quoted.id), false, { readViewOnce: true })
    } catch (e) {
        throw `balas pesan yang hanya bisa dilihat sekali`
    }
}

handler.help = ['readviewonce']
handler.tags = ['tools']

handler.command = /^readviewonce/i

module.exports = handler