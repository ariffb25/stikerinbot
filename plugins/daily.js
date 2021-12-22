const free = 500
const prem = 5000

let handler = async (m, { conn, usedPrefix, isPrems }) => {
  if (db.data.users[m.sender].level < 1) return await conn.sendButton(m.chat, 'Kamu masih level 0', '© stikerin', 'Naikan Level', `${usedPrefix}levelup`, m)
  let time = db.data.users[m.sender].lastclaim + 86400000
  if (new Date - db.data.users[m.sender].lastclaim < 86400000) throw `Kamu sudah mengklaim klaim harian hari ini\nTunggu selama ${conn.msToTime(time - new Date())} lagi`
  db.data.users[m.sender].exp += isPrems ? prem * db.data.users[m.sender].level : free * db.data.users[m.sender].level
  m.reply(`+${isPrems ? prem * db.data.users[m.sender].level : free * db.data.users[m.sender].level} XP\n\nSemakin tinggi level, semakin tinggi juga XP yang didapat`)
  db.data.users[m.sender].lastclaim = new Date * 1
}
handler.help = ['daily', 'claim']
handler.tags = ['xp']
handler.command = /^(daily|claim)$/i

module.exports = handler