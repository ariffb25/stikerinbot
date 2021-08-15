let pajak = 0.02
let handler = async (m, { conn, text, usedPrefix, command }) => {
    let fail = `perintah ini buat ngasih limit ke pengguna lain\n\ncontoh:\n${usedPrefix + command} @6285157336614 10\natau balas pesan doi dengan perintah: ${usedPrefix + command} 10`
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
    else who = m.chat
    if (!who) {
        conn.reply(m.chat, fail, m, { contextInfo: { mentionedJid: ['6285157336614@s.whatsapp.net'] } })
        throw false
    }
    if (typeof global.db.data.users[who] == "undefined") {
        global.db.data.users[who] = {
            exp: 0,
            limit: 10,
            lastclaim: 0,
            registered: false,
            name: conn.getName(m.sender),
            age: -1,
            regTime: -1,
            afk: -1,
            afkReason: '',
            banned: false,
            level: 0,
            call: 0,
            role: 'Warrior V',
            autolevelup: false,
            pc: 0,
        }
    }
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) {
        conn.reply(m.chat, fail, m, { contextInfo: { mentionedJid: ['6285157336614@s.whatsapp.net'] } })
        throw false
    }
    if (isNaN(txt)) throw 'Hanya angka'
    let poin = parseInt(txt)
    let limit = poin
    let pjk = Math.ceil(poin * pajak)
    limit += pjk
    if (limit < 1) throw 'minimal 1'
    let users = global.db.data.users
    if (limit > users[m.sender].limit) throw 'Limit tidak mencukupi untuk mentransfer, ada pajaknya juga'
    users[m.sender].limit -= limit
    users[who].limit += poin

    m.reply(`(${-poin} Limit) + (${-pjk} Limit (Pajak 2%)) = ( ${-limit} Limit)`)
    conn.fakeReply(m.chat, `+${poin} Limit`, who, m.text)
}
handler.help = ['paylimit @user <jumlah>']
handler.tags = ['xp']
handler.command = /^payl(imit)?$/

module.exports = handler