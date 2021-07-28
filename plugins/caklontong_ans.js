const similarity = require('similarity')
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*calo/i.test(m.quoted.contentText)) return !0
    conn.caklontong = conn.caklontong ? conn.caklontong : {}
    if (!(id in conn.caklontong)) return m.reply('Soal itu telah berakhir')
    if (/^(me)?nyerah$/i.test(m.text)) {
        await this.sendButton(m.chat, `Jawabannya adalah ${JSON.parse(JSON.stringify(this.caklontong[id][1].jawaban))}`.trim(), 'kok nyerah t_t', 'CAK LONTONG', '.caklontong').then(() => { delete conn.caklontong[id] })
    }
    if (/^.*calo$/i.test(m.text)) return !0
    // if (m.quoted.id == conn.caklontong[id][0].id) {
    let json = JSON.parse(JSON.stringify(conn.caklontong[id][1]))
    if (m.text.toLowerCase() == json.jawaban.toLowerCase()) {
        global.db.data.users[m.sender].exp += conn.caklontong[id][2]
        await this.sendButton(m.chat, `*Benar!*\n+${this.caklontong[id][2]} XP\n${json.detail}`.trim(), '', 'CAK LONTONG', '.caklontong')
        clearTimeout(conn.caklontong[id][3])
        delete conn.caklontong[id]
    } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) m.reply(`*Dikit Lagi!*`)
    else m.reply(`*Salah!*`)
    // }
    return !0
}
handler.exp = 0

module.exports = handler
