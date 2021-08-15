const similarity = require('similarity')
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*ao/i.test(m.quoted.contentText)) return !0
    this.asahotak = this.asahotak ? this.asahotak : {}
    if (!(id in this.asahotak)) return m.reply('Soal itu telah berakhir')
    if (/^nyerah$/i.test(m.text)) {
        await this.sendButton(m.chat, `Jawabannya adalah ${JSON.parse(JSON.stringify(this.asahotak[id][1].jawaban))}`.trim(), '© stikerin', 'ASAH OTAK', '.asahotak').then(() => { delete this.asahotak[id] })
    }
    // if (m.quoted.id == this.asahotak[id][0].id) {
    let json = JSON.parse(JSON.stringify(this.asahotak[id][1]))
    if (['.ao', 'BANTUAN', ''].includes(m.text)) return !0
    if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
        global.db.data.users[m.sender].exp += this.asahotak[id][2]
        await this.sendButton(m.chat, `*Benar!* +${this.asahotak[id][2]} XP`, '© stikerin', 'ASAH OTAK', '.asahotak')
        clearTimeout(this.asahotak[id][3])
        delete this.asahotak[id]
    } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) m.reply(`*Dikit Lagi!*`)
    else m.reply(`*Salah!*`)
    // }
    return !0
}
handler.exp = 0

module.exports = handler
