let handler = async (m, { conn }) => {
    conn.tebaklagu = conn.tebaklagu ? conn.tebaklagu : {}
    let id = m.chat
    if (!(id in conn.tebaklagu)) throw false
    let json = conn.tebaklagu[id][1]
    let clue = json.judul.replace(/[AIUEOaiueo]/g, '_')
    conn.reply(m.chat, '```' + clue + '```\nBalas soalnya, bukan pesan ini atau audionya', conn.tebaklagu[id][0])
}
handler.command = /^cek$/i
handler.limit = true
module.exports = handler