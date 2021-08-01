let moment = require('moment-timezone')
let handler = m => m

handler.all = async function (m) {

    if (m.chat.endsWith('broadcast')) return
    if (m.fromMe || m.isGroup) return
    let chats = global.db.data.chats[m.sender]
    if (new Date - global.db.data.chats[m.sender].pc < 43200000) return // setiap 12 jam
    await this.send2Button(m.chat, `
Hai, ${ucapan()}

Ada yang bisa saya bantu?${m.isGroup ? '' : m.msg.contextInfo.expiration != 0 ? '\n\nmatiin pesan sementaranya, biar tombolnya bisa dipake' : ''}
`.trim(), '© stikerin | pesan otomatis', 'MENU', '.?', 'DONASI', '.donate')
    global.db.data.chats[m.sender].pc = new Date * 1
}

module.exports = handler
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat dinihari"
    if (time >= 4) {
        res = "Selamat pagi"
    }
    if (time > 10) {
        res = "Selamat siang"
    }
    if (time >= 15) {
        res = "Selamat sore"
    }
    if (time >= 18) {
        res = "Selamat malam"
    }
    return res
}