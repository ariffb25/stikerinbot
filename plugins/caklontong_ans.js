const similarity = require('similarity')
const threshold = 0.72

let handler = m => m

handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*calo/i.test(m.quoted.contentText)) return !0
    this.caklontong = this.caklontong ? this.caklontong : {}
    if (!(id in this.caklontong)) return m.reply('Cak Lontong telah berakhir')
    if (m.quoted.id == this.caklontong[id][0].id) {
        let json = JSON.parse(JSON.stringify(this.caklontong[id][1]))
<<<<<<< HEAD
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            db.data.users[m.sender].exp += this.caklontong[id][2]
            await this.sendButton(m.chat, `*Benar!* +${this.caklontong[id][2]} XP\n${json.result.deskripsi}`, '© Maceng', 'Cak Lontong', '.caklontong', m)
=======
        if (['.calo', ''].includes(m.text)) return !0
        if (m.text.toLowerCase() == json.jawaban.toLowerCase()) {
            global.db.data.users[m.sender].exp += this.caklontong[id][2]
            await this.sendButton(m.chat, benar + ` +${this.caklontong[id][2]} XP\n${json.deskripsi}`, wm, 'Cak Lontong', '.caklontong', m)
>>>>>>> ecf6fc563b6b07bd684a6ce349e0f54706aca3cc
            clearTimeout(this.caklontong[id][3])
            delete this.caklontong[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) m.reply(dikit)
        else m.reply(salah)
    }
    return !0
}

module.exports = handler
