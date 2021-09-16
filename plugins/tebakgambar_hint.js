let handler = async (m, { conn }) => {
    conn.tebakgambar = conn.tebakgambar ? conn.tebakgambar : {}
    let id = m.chat
    if (!(id in conn.tebakgambar)) throw false
    let json = conn.tebakgambar[id][1]
    conn.reply(m.chat, '```' + json.jawaban.replace(/[AIUEOaiueo]/g, '_') + '```\nBalas gambarnya, bukan pesan ini', conn.tebakgambar[id][0])
}
handler.command = /^hint$/i

module.exports = handler
