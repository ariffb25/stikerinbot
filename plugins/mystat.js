let handler = async (m, { conn }) => {
    let { antispam, antitroli, backup, backupDB, groupOnly, nsfw } = global.db.data.settings
    const chats = conn.chats.all()
    const groups = chats.filter(v => v.jid.endsWith('g.us'))

    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)


    m.reply(`
┌─〔 Status 〕
├ Aktif selama ${uptime}
├ Baterai ${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? '🔌 pengisian' : ''}` : 'tidak diketahui'}
├ *${groups.length}* Total Grup
├ *${chats.length - groups.length}* Total Chat Pribadi
├ ${Object.keys(global.db.data.users).length}* Total Pengguna
└────

┌─〔 Pengaturan 〕
├ ${antispam ? '✅' : '❌'} *Anti Spam*
├ ${antitroli ? '✅' : '❌'} *Anti Troli*
├ ${backup ? '✅' : '❌'} *Auto Backup DB*
├ ${groupOnly ? '✅' : '❌'} *Mode Grup*
├ ${nsfw ? '✅' : '❌'} *Mode Nsfw*
└────
    `.trim())
}
handler.help = ['mystat']
handler.tags = ['info']
handler.command = /^mystat$/i

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}