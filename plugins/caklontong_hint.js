let handler = async (m, { conn }) => {
    conn.caklontong = conn.caklontong ? conn.caklontong : {}
    let id = m.chat
    if (!(id in conn.caklontong)) throw false
    let json = conn.caklontong[id][1]
    let clue = json.jawaban.replace(/[AIUEOaiueo]/g, '_')
    conn.reply(m.chat, '```' + clue + '```\nBalas soalnya, bukan pesan ini', conn.caklontong[id][0])
}
handler.command = /^calo$/i
handler.limit = true
module.exports = handler