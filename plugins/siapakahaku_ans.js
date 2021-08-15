const similarity = require('similarity')
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*who/i.test(m.quoted.contentText)) return !0
    this.siapakahaku = this.siapakahaku ? this.siapakahaku : {}
    if (!(id in this.siapakahaku)) return m.reply('Soal itu telah berakhir')
    if (/^nyerah$/i.test(m.text)) {
        await this.sendButton(m.chat, `Jawabannya adalah ${JSON.parse(JSON.stringify(this.siapakahaku[id][1].data.jawaban))}`.trim(), '© stikerin', 'SIAPAKAH AKU', '.siapaaku').then(() => {
            delete this.siapakahaku[id]
            throw 0
        })
    }
    // if (m.quoted.id == this.siapakahaku[id][0].id) {
    let json = JSON.parse(JSON.stringify(this.siapakahaku[id][1]))
    if (['.who', 'BANTUAN', ''].includes(m.text)) return !0
    if (m.text.toLowerCase() == json.data.jawaban.toLowerCase().trim()) {
        global.db.data.users[m.sender].exp += this.siapakahaku[id][2]
        await this.sendButton(m.chat, `*Benar!* +${this.siapakahaku[id][2]} XP`, '© stikerin', 'SIAPAKAH AKU', '.siapaaku')
        clearTimeout(this.siapakahaku[id][3])
        delete this.siapakahaku[id]
    } else if (similarity(m.text.toLowerCase(), json.data.jawaban.toLowerCase().trim()) >= threshold) m.reply(`*Dikit Lagi!*`)
    else m.reply(`*Salah!*`)
    // }
    return !0
}
handler.exp = 0

module.exports = handler
