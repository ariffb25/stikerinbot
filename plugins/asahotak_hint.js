let handler = async (m, { conn }) => {
    conn.asahotak = conn.asahotak ? conn.asahotak : {}
    let id = m.chat
    if (!(id in conn.asahotak)) throw 0
    let json = conn.asahotak[id][1]
    let clue = json.jawaban.replace(/[AIUEOaiueo]/g, '_')
    conn.reply(m.chat, '```' + clue + '```\n\nbalas soalnya, bukan pesan ini!', conn.asahotak[id][0])
}
handler.command = /^ao$/i

handler.limit = true

module.exports = handler