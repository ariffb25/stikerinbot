let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Pengunaan:\n${usedPrefix + command} <angka>\n\nexample:\n${usedPrefix + command} 30\n\nAngka menunjukan total hari`

    let who
    if (m.isGroup) who = args[1] ? args[1] : m.chat
    else who = args[1]

    var jumlahHari = 86400000 * args[0]
    var now = new Date() * 1
    let chat = db.data.chats[who]
    if (now < chat.groupTime) chat.groupTime += jumlahHari
    else chat.groupTime = now + jumlahHari
    m.reply(`Hitung mundur: ${conn.msToDate(chat.groupTime - now)}`)
}
handler.help = ['addgroup <angka> [jid]']
handler.tags = ['owner']
handler.command = /^((\+|add)g(roup)?)$/i

handler.rowner = true

module.exports = handler