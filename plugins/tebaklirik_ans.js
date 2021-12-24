const similarity = require('similarity')
const threshold = 0.72

let handler = m => m

handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*teli/i.test(m.quoted.contentText)) return !0
    this.tebaklirik = this.tebaklirik ? this.tebaklirik : {}
    if (!(id in this.tebaklirik)) return m.reply('Tebak Lirik telah berakhir')
    if (m.quoted.id == this.tebaklirik[id][0].id) {
        let json = JSON.parse(JSON.stringify(this.tebaklirik[id][1]))
        if (['.teli', 'Bantuan', ''].includes(m.text)) return !0
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            db.data.users[m.sender].exp += this.tebaklirik[id][2]
            await this.sendButton(m.chat, benar + ` +${this.tebaklirik[id][2]} XP`.trim(), '© stikerin', 'Tebak Lirik', '.tebaklirik', m)
            clearTimeout(this.tebaklirik[id][3])
            delete this.tebaklirik[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) m.reply(dikit)
        else m.reply(salah)
    }
    return !0
}

module.exports = handler
