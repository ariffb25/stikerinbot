let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*tvia/i.test(m.quoted.contentText)) return !0
    conn.trivia = conn.trivia ? conn.trivia : {}
    if (!(id in conn.trivia)) return m.reply('Soal itu telah berakhir')
    if (m.quoted.id == conn.trivia[id][0].id) {
        let json = JSON.parse(JSON.stringify(conn.trivia[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.result.jawaban.toLowerCase().trim()) {
            global.db.data.users[m.sender].money += conn.trivia[id][2]
            m.reply(`*Benar!*\n+${conn.trivia[id][2]} XP`)
            clearTimeout(conn.trivia[id][3])
            delete conn.trivia[id]
        } else if (m.text.toLowerCase().endsWith(json.result.jawaban.split` `[1])) m.reply(`*Dikit Lagi!*`)
        else m.reply(`*Salah!*`)
    }
    return !0
}
handler.exp = 0

module.exports = handler
