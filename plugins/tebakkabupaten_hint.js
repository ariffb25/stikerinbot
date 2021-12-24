let handler = async (m, { conn }) => {
    conn.tebakkabupaten = conn.tebakkabupaten ? conn.tebakkabupaten : {}
    let id = m.chat
    if (!(id in conn.tebakkabupaten)) throw false
    let json = conn.tebakkabupaten[id][1]
    conn.reply(m.chat, '```' + json.bantuan + '```\nBalas soalnya, bukan pesan ini', conn.tebakkabupaten[id][0])
}
handler.command = /^teka$/i

handler.limit = 1

module.exports = handler