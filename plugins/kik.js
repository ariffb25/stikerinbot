let handler = async (m, { conn, args }) => {
try { let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
if (!jids) throw `tag atau reply pesan orang yang akan di kick`
await conn.groupRemove(m.chat, jids)} catch { m.reply("gunakan perintah "+ `${usedPrefix+command} reply orangnya`)}
}
handler.help = ['kick', '-'].map(v => v + ' @user')
handler.tags = ['admin']
handler.command = /^kick2$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = true

handler.fail = null

module.exports = handler
