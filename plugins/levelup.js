let levelling = require('../lib/levelling')
const canvacord = require('canvacord')

let handler = async m => {
  let pp = './src/avatar_contact.png'
  let who = m.sender
  let discriminator = who.substring(9, 13)
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {
  } finally {
    let user = global.db.data.users[m.sender]
    if (!levelling.canLevelUp(user.level, user.exp, global.multiplier)) {
      let { min, xp, max } = levelling.xpRange(user.level, global.multiplier)
      let rank = await new canvacord.Rank()
        .setAvatar(pp)
        .setLevel(user.level)
        .setCurrentXP(user.exp - min)
        .setRequiredXP(xp)
        .setProgressBar("#f2aa4c", "COLOR")
        .setUsername(conn.getName(who))
        .setDiscriminator(discriminator)
      rank.build()
        .then(async data => {
          await conn.sendButtonImg(m.chat, `Level *${user.level} (${user.exp - min}/${xp})*\nKurang *${max - user.exp}* lagi!`.trim(), data, '© stikerin', 'AUTO LEVEL UP', ',on autolevelup')
        })
    }
    let before = user.level * 1
    while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
      let rank = await new canvacord.Rank()
        .setAvatar(pp)
        .setLevel(user.level)
        .setCurrentXP(user.exp - min)
        .setRequiredXP(xp)
        .setProgressBar("#f2aa4c", "COLOR")
        .setUsername(conn.getName(who))
        .setDiscriminator(discriminator)
      rank.build()
        .then(async data => {
          await conn.sendButtonImg(m.chat, `_*Level Up!*_\n_${before}_ -> _${user.level}_`.trim(), data, '© stikerin', 'AUTO LEVEL UP', ',on autolevelup')
        })
    }
  }
}

handler.help = ['levelup']
handler.tags = ['xp']

handler.command = /^levelup$/i

module.exports = handler
