let handler = async (m, { conn }) => {
    let bot = conn.user.jid // Bot
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image/.test(mime)) {
        let img = await q.download()
        if (!img) throw `balas gambarnya!`
        conn.updateProfilePicture(bot, img)
        m.reply('Berhasil!')
    }
}
handler.help = ['setbotpp']
handler.command = /^(setbotpp)$/i
handler.owner = true

module.exports = handler
