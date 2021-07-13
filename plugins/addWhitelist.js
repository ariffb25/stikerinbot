let handler = async (m, { usedPrefix, command, text, args }) => {
    if (!args || !['add', 'remove'].includes(args[0].toLowerCase())) throw `
*Penggunaan:* ${usedPrefix + command} <add|remove> nomor,nomor,...,nomor
*Contoh:*
${usedPrefix + command} add 6281111111111,12345678901,0
${usedPrefix + command} remove 6281111111111,12345678901,0
`.trim()
    let type = args[0].toLowerCase() === 'add' ? true : false
    let teks = text.replace(args[0], '').trim()
    let users = teks.split(',').map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net')
    for (let who of users) {
        let user = global.db.data.users[who]
        if (!user) user = global.db.data.users[who] = {}
        user.whitelist = type
    }
    m.reply(`Berhasil ${type ? 'menambah' : 'menghapus'} whitelist ${users.length} pengguna`)
}
handler.help = ['whitelist'].map(v => v + ' nomor,nomor')
handler.tags = ['owner']
handler.command = ['whitelist']
handler.owner = true

module.exports = handler
