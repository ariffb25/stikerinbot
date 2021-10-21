let handler = async (m, { conn, usedPrefix, args }) => {

if (!args[0]) return m.reply('dari detik?')
if (!args[1]) return m.reply('ke detik?')
        let q = m.quoted ? { message: { [m.quoted.mtype]: m.quoted } } : m
        let mime = ((m.quoted ? m.quoted : m.msg).mimetype || '')
        if (/audio/.test(mime)) {
            let media = await conn.downloadAndSaveMediaMessage(q)
            let ran = getRandom('.mp3')
            exec(`ffmpeg -ss ${args[0]} -i ${media} -t ${args[1]} -c copy ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) m.reply(`_*Error!*_`)
                let buff = fs.readFileSync(ran)
                conn.sendFile(m.chat, buff, ran, null, m, true, { quoted: m, mimetype: 'audio/mp4' })
                fs.unlinkSync(ran)
            })
        } else m.reply(`Balas vn/audio yang ingin diubah dengan caption *${usedPrefix}cut*`)
    } catch (e) {
        throw e
    }
}
handler.help = ['cut'].map(v => v + ' [vn]')
handler.tags = ['audio']
handler.command = /^cut/i
module.exports = handler
//G usah hapus wm bang :)*Rizkyadi
const getRandom = (ext) => {
    return `${Math.floor(Math.random() * 10000)}${ext}`
}
