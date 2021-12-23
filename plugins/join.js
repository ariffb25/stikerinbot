let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, usedPrefix }) => {
    let [_, code] = text.match(linkRegex) || []
    if (!code) throw 'Link Salah'
    let res = await conn.acceptInvite(code)
    m.reply(`Berhasil join grup ${res.gid}`).then(() => {
        var jumlahHari = 86400000 * 0.5
        var now = new Date() * 1
        if (now < global.db.data.chats[res.gid].expired) global.db.data.chats[res.gid].expired += jumlahHari
        else global.db.data.chats[res.gid].expired = now + jumlahHari
    })
    await conn.sendButton(res.gid, `
*${conn.user.name}* adalah bot whatsapp yang dibangun dengan Nodejs, *${conn.user.name}* diundang oleh @${m.sender.split`@`[0]}
    
<<<<<<< HEAD
ketik *${usedPrefix}menu* untuk melihat daftar perintah`.trim(), '© Maceng', 'Menu', `${usedPrefix}?`, { contextInfo: { mentionedJid: [m.sender] } })
=======
ketik *${usedPrefix}menu* untuk melihat daftar perintah`.trim(), '© stikerin', 'Menu', `${usedPrefix}?`, m)
>>>>>>> ecf6fc563b6b07bd684a6ce349e0f54706aca3cc
}
handler.help = ['join <chat.whatsapp.com>']
handler.tags = ['tools']
handler.command = /^join$/i

handler.premium = false

module.exports = handler