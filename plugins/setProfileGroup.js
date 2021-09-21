let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak didukung`
    if (/image/.test(mime)) {
        let img = await q.download()
        if (!img) throw 'Gambar tidak ditemukan'
        await conn.updateProfilePicture(m.chat, img)
    } else throw `kirim/balas gambar dengan perintah *${usedPrefix + command}*`
}
handler.help = ['setppgc']
handler.tags = ['group']

handler.command = /^setpp(gc|gro?up)?$/i

handler.group = true
handler.admin = true
handler.botAdmin = true

module.exports = handler
