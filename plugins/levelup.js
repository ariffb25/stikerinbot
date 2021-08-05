let levelling = require('../lib/levelling')

let handler = m => {
  let user = global.db.data.users[m.sender]
  if (!levelling.canLevelUp(user.level, user.exp, global.multiplier)) {
    let { min, xp, max } = levelling.xpRange(user.level, global.multiplier)
    throw `
Level *${user.level} (${user.exp - min}/${xp})*
Kurang *${max - user.exp}* lagi!
`.trim()
  }
  let before = user.level * 1
  while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++

  if (before !== user.level) {
    conn.send2Button(m.chat, `
Selamat, kamu telah naik level!
*${before}* -> *${user.level}*
gunakan *.my* untuk mengecek
gunakan *.on levelup* untuk naik level otomatis
	`.trim(), '© stikerin', 'MY', ',my', 'LEVEL UP', ',on levelup')
  }
}

handler.help = ['levelup']
handler.tags = ['xp']

handler.command = /^levelup$/i

module.exports = handler
