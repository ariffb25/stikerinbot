const similarity = require('similarity')
const threshold = 0.72

let handler = m => m

handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*teka/i.test(m.quoted.contentText)) return !0
    this.tebakkata = this.tebakkata ? this.tebakkata : {}
    if (!(id in this.tebakkata)) return m.reply('Tebak Kata telah berakhir')
    if (m.quoted.id == this.tebakkata[id][0].id) {
        let json = JSON.parse(JSON.stringify(this.tebakkata[id][1]))
        if (['.teka', ''].includes(m.text)) return !0
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.tebakkata[id][2]
<<<<<<< HEAD
            await this.sendButton(m.chat, `*Benar!* +${this.tebakkata[id][2]} XP`, '© Maceng', 'Tebak Kata', '.tebakkata', m)
=======
            await this.sendButton(m.chat, benar + ` +${this.tebakkata[id][2]} XP`, wm, 'Tebak Kata', '.tebakkata', m)
>>>>>>> ecf6fc563b6b07bd684a6ce349e0f54706aca3cc
            clearTimeout(this.tebakkata[id][3])
            delete this.tebakkata[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) m.reply(dikit)
        else m.reply(salah)
    }
    return !0
}

module.exports = handler
