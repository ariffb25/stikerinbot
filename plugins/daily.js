const free = 500
const prem = 5000
let handler = async (m, { conn, usedPrefix, isPrems }) => {
  let user = db.data.users[m.sender]
  if (user.level < 1) return await conn.sendButton(m.chat, 'naikan level kamu', '', 'LEVEL UP', `${usedPrefix}levelup`)
  let time = user.lastclaim + 86400000
  if (new Date - user.lastclaim < 86400000) throw `Kamu sudah mengklaim klaim harian hari ini\ntunggu selama ${msToTime(time - new Date())} lagi`
  user.exp += isPrems ? prem * user.level : free * user.level
  m.reply(`+${isPrems ? prem * user.level : free * user.level} XP\n\nsemakin tinggi level, semakin tinggi juga XP yang didapat`)
  user.lastclaim = new Date * 1
}
handler.help = ['daily', 'claim']
handler.tags = ['xp']
handler.command = /^(daily|claim)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " jam " + minutes + " menit"
}