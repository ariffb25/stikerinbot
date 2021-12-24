let handler = async (m, { conn }) => {
    conn.tebakkata = conn.tebakkata ? conn.tebakkata : {}
    let id = m.chat
    if (!(id in conn.tebakkata)) throw 0
    let json = conn.tebakkata[id][1]
    conn.reply(m.chat, '```' + json.bantuan + '```\n\nBalas soalnya, bukan pesan ini!', conn.tebakkata[id][0])
}
handler.command = /^teka$/i

handler.limit = 1

module.exports = handler