let handler = async (m, { conn }) => {
    conn.susunkata = conn.susunkata ? conn.susunkata : {}
    let id = m.chat
    if (!(id in conn.susunkata)) throw 0
    let json = conn.susunkata[id][1]
    let ans = json.jawaban.trim()
    let clue = ans.replace(/[AIUEOaiueo]/g, '_')
    conn.reply(m.chat, '```' + clue + '```\n\nbalas soalnya, bukan pesan ini!', conn.susunkata[id][0])
}
handler.command = /^suka$/i

handler.limit = 1

module.exports = handler