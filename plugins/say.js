let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `uhm. teksnya mana?\n\ncontoh:\n${usedPrefix + command} halo`
    conn.reply(m.chat, text, null)
}
handler.help = ['say <teks>']
handler.tags = ['tools']
handler.command = /^(say)$/i

module.exports = handler