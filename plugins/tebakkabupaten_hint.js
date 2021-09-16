let handler = async (m, { conn }) => {
    conn.tebakkabupaten = conn.tebakkabupaten ? conn.tebakkabupaten : {}
    let id = m.chat
    if (!(id in conn.tebakkabupaten)) throw false
    let json = conn.tebakkabupaten[id][1]
    let ans = json.title.trim()
    let clue = ans.replace(/[AIUEOaiueo]/g, '_')
    conn.reply(m.chat, '```' + clue + '```\nBalas soalnya, bukan pesan ini', conn.tebakkabupaten[id][0])
}
handler.command = /^teka$/i
handler.limit = true
module.exports = handler
