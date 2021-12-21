let { WAMessageProto } = require('@adiwajshing/baileys')

let handler = async (m, { conn, command, usedPrefix, text }) => {
    let M = WAMessageProto.WebMessageInfo
    let which = command.replace(/add/i, '')
    if (!m.quoted) throw 'balas pesannya!'
    if (!text) throw `uhm.. teksnya mana?\n\ncontoh:\n${usedPrefix + command} tes`
    let msgs = db.data.msgs
    if (text in msgs) throw `'${text}' telah terdaftar!`
    msgs[text] = M.fromObject(await m.getQuotedObj()).toJSON()
    await conn.sendButton(m.chat, `berhasil menambahkan pesan '${text}'
    
akses dengan ${usedPrefix}get${which} ${text}`, '© Maceng', 'Aktifkan Getmsg', '.on getmsg', m)
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'stiker', 'gif'].map(v => 'add' + v + ' <teks>')
handler.tags = ['database']
handler.command = /^add(vn|msg|video|audio|img|stic?ker|gif)$/

module.exports = handler