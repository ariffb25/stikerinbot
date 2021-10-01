let handler = async (m, { conn }) => {
    let { anon, anticall, antispam, antitroli, backup, jadibot, groupOnly, nsfw } = global.db.data.settings[conn.user.jid]
    const chats = conn.chats.all()
    const groups = chats.filter(v => v.jid.endsWith('g.us'))
    let totaljadibot = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]

    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)

    m.reply(`
*🌹Status🌹*

🔖 Aktif selama ${uptime}
🔖 Baterai ${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? '🔌 pengisian' : ''}` : 'tidak diketahui'}
🔖 Chat Grup: *${groups.length}* 
🔖 Chat Pribadi: *${chats.length - groups.length}*
🔖 Pengguna: *${Object.keys(global.db.data.users).length}* 
🔖 Jadi Bot: *${totaljadibot.length}* 
🔖 Terblock: *${conn.blocklist.length}* 
🔖 Chat terbanned: *${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}* 
🔖 Pengguna terbanned: *${Object.entries(global.db.data.users).filter(user => user[1].banned).length}* 


*🌹Pengaturan🌹*

🔖 Anon Chat: ${anon ? '✅' : '❌'}
🔖 Anti Call: ${anticall ? '✅' : '❌'}
🔖 Anti Spam: ${antispam ? '✅' : '❌'}
🔖 Anti Troli: ${antitroli ? '✅' : '❌'}
🔖 Auto Backup DB: ${backup ? '✅' : '❌'}
🔖 Mode Grup: ${groupOnly ? '✅' : '❌'}
🔖 Jadi Bot: ${jadibot ? '✅' : '❌'}
🔖 Nsfw: ${nsfw ? '✅' : '❌'}

    `.trim())
}
handler.help = ['botstatus']
handler.tags = ['info']
handler.command = /^botstat(us)?|stat(us)?(bot)?$/i

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
