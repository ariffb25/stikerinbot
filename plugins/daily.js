const free = 500
const prem = 5000

let handler = async (m, { conn, usedPrefix, isPrems }) => {
<<<<<<< HEAD
  if (db.data.users[m.sender].level < 1) return await conn.sendButton(m.chat, 'naikan level kamu', '© Maceng', 'Level Up', `${usedPrefix}levelup`, m)
=======
  if (db.data.users[m.sender].level < 1) return await conn.sendButton(m.chat, 'Kamu masih level 0', '© stikerin', 'Naikan Level', `${usedPrefix}levelup`, m)
>>>>>>> ecf6fc563b6b07bd684a6ce349e0f54706aca3cc
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