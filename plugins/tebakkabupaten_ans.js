const similarity = require('similarity')
const threshold = 0.72

let handler = m => m

handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*tekb/i.test(m.quoted.contentText)) return !0
    this.tebakkabupaten = this.tebakkabupaten ? this.tebakkabupaten : {}
    if (!(id in this.tebakkabupaten)) return m.reply('Tebak Kabupaten telah berakhir')
    if (m.quoted.id == this.tebakkabupaten[id][0].id) {
        let json = JSON.parse(JSON.stringify(this.tebakkabupaten[id][1]))
        if (['.tekb', 'Bantuan', ''].includes(m.text)) return !0
        if (m.text.toLowerCase() == json.title.toLowerCase().trim()) {
            db.data.users[m.sender].exp += this.tebakkabupaten[id][2]
            await this.sendButton(m.chat, benar + ` +${this.tebakkabupaten[id][2]} XP`, '© stikerin', 'Tebak Kabupaten', '.tebakkabupaten', m)
            clearTimeout(this.tebakkabupaten[id][3])
            delete this.tebakkabupaten[id]
        } else if (similarity(m.text.toLowerCase(), json.title.toLowerCase().trim()) >= threshold) m.reply(dikit)
        else m.reply(salah)
    }
    return !0
}

module.exports = handler
