const similarity = require('similarity')
const threshold = 0.72

let handler = m => m

handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*ao/i.test(m.quoted.contentText)) return !0
    this.asahotak = this.asahotak ? this.asahotak : {}
    if (!(id in this.asahotak)) return m.reply('Asah Otak telah berakhir')
    if (m.quoted.id == this.asahotak[id][0].id) {
        let json = JSON.parse(JSON.stringify(this.asahotak[id][1]))
        if (['.ao', ''].includes(m.text)) return !0
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.asahotak[id][2]
<<<<<<< HEAD
            await this.sendButton(m.chat, `*Benar!* +${this.asahotak[id][2]} XP`, '© Maceng', 'Asah Otak', '.asahotak', m)
=======
            await this.sendButton(m.chat, benar + ` +${this.asahotak[id][2]} XP`, wm, 'Asah Otak', '.asahotak', m)
>>>>>>> ecf6fc563b6b07bd684a6ce349e0f54706aca3cc
            clearTimeout(this.asahotak[id][3])
            delete this.asahotak[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) m.reply(dikit)
        else m.reply(salah)
    }
    return !0
}

module.exports = handler
