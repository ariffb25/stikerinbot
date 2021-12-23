let handler = async (m, { conn }) => {
    conn.siapakahaku = conn.siapakahaku ? conn.siapakahaku : {}
    let id = m.chat
    if (!(id in conn.siapakahaku)) throw 0
    let json = conn.siapakahaku[id][1]
    let clue = json.jawaban.replace(/[AIUEOaiueo]/g, '_')
    conn.reply(m.chat, '```' + clue + '```\n\nbalas soalnya, bukan pesan ini!', conn.siapakahaku[id][0])
}
handler.command = /^who$/i

handler.limit = 1

module.exports = handler