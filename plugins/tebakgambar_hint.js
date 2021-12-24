let handler = async (m, { conn }) => {
    conn.tebakgambar = conn.tebakgambar ? conn.tebakgambar : {}
    let id = m.chat
    if (!(id in conn.tebakgambar)) throw 0
    let json = conn.tebakgambar[id][1]
    conn.reply(m.chat, '```' + json.bantuan + '```\n\nBalas gambarnya, bukan pesan ini!', conn.tebakgambar[id][0])
}
handler.command = /^hint$/i

handler.limit = 1

module.exports = handler