let handler = async (m, { conn }) => {
    conn.tebakanime = conn.tebakanime ? conn.tebakanime : {}
    let id = m.chat
    if (!(id in conn.tebakanime)) throw false
    let json = conn.tebakanime[id][1]
    conn.reply(m.chat, '```' + json.jawaban.replace(/[AIUEOaiueo]/g, '_') + '```\nBalas gambarnya, bukan pesan ini', conn.tebakanime[id][0])
}
handler.command = /^hint$/i

module.exports = handler
