let moment = require('moment-timezone')

handler.all = async function (m, { isBlocked }) {

    if (isBlocked) return // Yang diblock ga direspon
    if (m.chat.endsWith('broadcast')) return
    if (m.fromMe || m.isGroup) return
    let chats = global.db.data.chats[m.sender]
    if (new Date - global.db.data.chats[m.sender].pc < 43200000) return // setiap 12 jam
    await this.send2Button(m.chat, `
Hai, ${ucapan()}
Saya adalah stikerin bot milik ariffb
Ada yang bisa saya bantu?
`.trim(), '© stikerin', 'MENU', '.?', 'DONASI', '.donate')
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