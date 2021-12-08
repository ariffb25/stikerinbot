let handler = async (m, { conn }) => {
    conn.trivia = conn.trivia ? conn.trivia : {}
    let id = m.chat
    if (!(id in conn.trivia)) throw false
    let json = conn.trivia[id][1]
    let ans = json.result.jawaban.trim()
    let clue = ans.replace(/[AIUEOaiueo]/g, '_')
    m.reply('```' + clue + '```')
}
handler.command = /^tvia$/i
handler.limit = true
module.exports = handler
