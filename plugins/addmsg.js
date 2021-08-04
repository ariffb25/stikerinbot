let { WAMessageProto } = require('@adiwajshing/baileys')
let handler = async (m, { command, usedPrefix, text }) => {
    let M = WAMessageProto.WebMessageInfo
    let which = command.replace(/add/i, '')
    if (!m.quoted) throw 'Balas Pesan!'
    if (!text) throw `Gunakan *${usedPrefix}list${which}* untuk melihat daftar nya`
    let msgs = global.db.data.msgs
    if (text in msgs) throw `'${text}' telah terdaftar di daftar pesan`
    msgs[text] = M.fromObject(await m.getQuotedObj()).toJSON()
    m.reply(`Berhasil menambahkan pesan di daftar pesan sebagai '${text}'
    
Akses dengan ${usedPrefix}get${which} ${text}`)
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker', 'gif'].map(v => 'add' + v + ' <teks>')
handler.tags = ['database']
handler.command = /^add(vn|msg|video|audio|img|stic?ker|gif)$/

module.exports = handler