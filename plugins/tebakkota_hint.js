let handler = async (m, { conn }) => {
    conn.tebakkota = conn.tebakkota ? conn.tebakkota : {}
    let id = m.chat
    if (!(id in conn.tebakkota)) throw false
    let json = conn.tebakkota[id][1]
    let clue = json.jawaban.replace(/[AIUEOaiueo]/g, '_')
    conn.reply(m.chat, '```' + clue + '```\nBalas soalnya, bukan pesan ini', conn.tebakkota[id][0])
}
handler.command = /^teko$/i
handler.limit = true
module.exports = handler