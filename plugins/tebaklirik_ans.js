const similarity = require('similarity')
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*teli/i.test(m.quoted.contentText)) return !0
    this.tebaklirik = this.tebaklirik ? this.tebaklirik : {}
    if (!(id in this.tebaklirik)) return m.reply('Soal itu telah berakhir')
    if (/^nyerah$/i.test(m.text)) {
        await this.sendButton(m.chat, `Jawabannya adalah ${JSON.parse(JSON.stringify(this.tebaklirik[id][1].jawaban))}`.trim(), '© stikerin', 'TEBAK LIRIK', '.tebaklirik').then(() => {
            delete this.tebaklirik[id]
            throw 0
        })
    }
    // if (m.quoted.id == this.tebaklirik[id][0].id) {
    let json = JSON.parse(JSON.stringify(this.tebaklirik[id][1]))
    if (['.teli', 'BANTUAN', ''].includes(m.text)) return !0
    if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
        global.db.data.users[m.sender].exp += this.tebaklirik[id][2]
        await this.sendButton(m.chat, `*Benar!* +${this.tebaklirik[id][2]} XP`.trim(), '', 'TEBAK LIRIK', '.tebaklirik')
        clearTimeout(this.tebaklirik[id][3])
        delete this.tebaklirik[id]
    } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) m.reply(`*Dikit Lagi!*`)
    else m.reply(`*Salah!*`)
    // }
    return !0
}
handler.exp = 0

module.exports = handler
