const similarity = require('similarity')
const threshold = 0.72

let handler = m => m

handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*suka/i.test(m.quoted.contentText)) return !0
    this.susunkata = this.susunkata ? this.susunkata : {}
    if (!(id in this.susunkata)) return m.reply('Susun Kata telah berakhir')
    if (m.quoted.id == this.susunkata[id][0].id) {
        let json = JSON.parse(JSON.stringify(this.susunkata[id][1]))
        if (['.suka', ''].includes(m.text)) return !0
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.susunkata[id][2]
<<<<<<< HEAD
            await this.sendButton(m.chat, `*Benar!* +${this.susunkata[id][2]} XP`, '© Maceng', 'Susun Kata', '.susunkata', m)
=======
            await this.sendButton(m.chat, benar + ` +${this.susunkata[id][2]} XP`, wm, 'Susun Kata', '.susunkata', m)
>>>>>>> ecf6fc563b6b07bd684a6ce349e0f54706aca3cc
            clearTimeout(this.susunkata[id][3])
            delete this.susunkata[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) m.reply(dikit)
        else m.reply(salah)
    }
    return !0
}
module.exports = handler
