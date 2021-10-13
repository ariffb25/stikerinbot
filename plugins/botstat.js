let handler = async (m, { conn }) => {
    let { anon, anticall, antispam, antitroli, backup, jadibot, groupOnly, nsfw } = global.db.data.settings[conn.user.jid]
    const chats = conn.chats.all()
    const groups = chats.filter(v => v.jid.endsWith('g.us'))
    let totaljadibot = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]

    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)

    m.reply(`
┌─〔 Status 〕
├ Aktif selama ${uptime}
├ Baterai ${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? '🔌 charging' : ''}` : 'not known'}
├ *${groups.length}* Groups
├ *${chats.length - groups.length}* Chat Personal
├ *${Object.keys(global.db.data.users).length}* Users
├ *${totaljadibot.length}* Jadibot
├ *${conn.blocklist.length}* Blocked Users
├ *${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}* Banned Chats
├ *${Object.entries(global.db.data.users).filter(user => user[1].banned).length}* Banned Users
└────

┌─〔 Arrangement 〕
├ ${anon ? '✅' : '❌'} *Anon Chat*
├ ${anticall ? '✅' : '❌'} *Anti Call*
├ ${antispam ? '✅' : '❌'} *Anti Spam*
├ ${antitroli ? '✅' : '❌'} *Anti Troli*
├ ${backup ? '✅' : '❌'} *Auto Backup DB*
├ ${groupOnly ? '✅' : '❌'} *Group Mode*
├ ${jadibot ? '✅' : '❌'} *Jadi Bot*
├ ${nsfw ? '✅' : '❌'} *Nsfw Mode*
└────
    `.trim())
}
handler.help = ['botstatus']
handler.tags = ['info']
handler.command = /^botstat(us)?$/i

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
