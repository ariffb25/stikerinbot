const similarity = require('similarity')
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*calo/i.test(m.quoted.contentText)) return !0
    this.tebakbendera = this.tebakbendera ? this.tebakbendera : {}
    if (!(id in this.tebakbendera)) return m.reply('Soal itu telah berakhir')
    if (/^(me)?nyerah$/i.test(m.text)) {
        await this.sendButton(m.chat, `Jawabannya adalah ${JSON.parse(JSON.stringify(this.tebakbendera[id][1].jawaban))}`.trim(), '© Shiraori', 'TEBAK BENDERA', '.tebakbendera').then(() => { delete this.tebakbendera[id] })
    }
    if (['.calo', 'BANTUAN', ''].includes(m.text)) return !0
    // if (m.quoted.id == this.tebakbendera[id][0].id) {
    let json = JSON.parse(JSON.stringify(this.tebakbendera[id][1]))
    if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
        global.db.data.users[m.sender].exp += this.tebakbendera[id][2]
        await this.sendButton(m.chat, `*Benar!* +${this.tebakbendera[id][2]} XP\n${json.keterangan}`, '', 'TEBAK BENDERA', '.tebakbendera')
        clearTimeout(this.tebakbendera[id][3])
        delete this.tebakbendera[id]
    } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) m.reply(`*Dikit Lagi!*`)
    else m.reply(`*Salah!*`)
    // }
    return !0
}
handler.exp = 0

module.exports = handler
