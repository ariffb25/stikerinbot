let { WAMessageProto } = require('@adiwajshing/baileys')

let handler = async (m, { conn, command, usedPrefix, text }) => {
    let M = WAMessageProto.WebMessageInfo
    let which = command.replace(/add/i, '')
    if (!m.quoted) throw `Balas pesan dengan perintah *${usedPrefix + command}*`
    if (!text) throw `Pengunaan:${usedPrefix + command} <teks>\n\nContoh:\n${usedPrefix + command} tes`
    let msgs = db.data.msgs
    if (text in msgs) throw `'${text}' telah terdaftar!`
    msgs[text] = M.fromObject(await m.getQuotedObj()).toJSON()
    if (db.data.chats[m.chat].getmsg) return m.reply(`Berhasil menambahkan pesan '${text}'
    
<<<<<<< HEAD
akses dengan ${usedPrefix}get${which} ${text}`, '© Maceng', 'Aktifkan Getmsg', '.on getmsg', m)
=======
Akses dengan mengetik namanya`.trim())
    else return await conn.sendButton(m.chat, `Berhasil menambahkan pesan '${text}'
    
akses dengan ${usedPrefix}get${which} ${text}`, '© stikerin', 'Aktifkan', '.on getmsg', m)
>>>>>>> ecf6fc563b6b07bd684a6ce349e0f54706aca3cc
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'stiker', 'gif'].map(v => 'add' + v + ' <teks>')
handler.tags = ['database']
handler.command = /^add(vn|msg|video|audio|img|stic?ker|gif)$/

module.exports = handler