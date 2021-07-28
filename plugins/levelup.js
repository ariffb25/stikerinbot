let levelling = require('../lib/levelling')
const canvacord = require("canvacord");
let handler = async (m, { conn, usedPrefix }) => {
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
      .setProgressBar("#FFFFFF", "COLOR")
      .setUsername(conn.getName(who))
      .setDiscriminator(discriminator);
      rank.build()
      .then(data => {
    conn.sendFile(m.chat, data, 'rank.png', `Level *${user.level} (${user.exp - min}/${xp})*\nKurang *${max - user.exp}* lagi!`.trim(), m, false, { thumbnail: Buffer.alloc(0) })
    });
//    throw `
//Level *${user.level} (${user.exp - min}/${xp})*
//Kurang *${max - user.exp}* lagi!
//`.trim()
  }
  let before = user.level * 1
  while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++
  if (before !== user.level) {
    let rank = await new canvacord.Rank()
      .setAvatar(pp)
      .setLevel(user.level)
      .setCurrentXP(user.exp - min)
      .setRequiredXP(xp)
      .setProgressBar("#FFFFFF", "COLOR")
      .setUsername(conn.getName(who))
      .setDiscriminator(discriminator);
      rank.build()
      .then(data => {
    conn.sendFile(m.chat, data, 'rank.png', `_*Level Up!*_\n_${before}_ -> _${user.level}_`.trim(), m, false, { thumbnail: Buffer.alloc(0) })
    });
//            m.reply(`
//_*Level Up!*_
//_${before}_ -> _${user.level}_
//  `.trim())
        }
      }
}

handler.help = ['levelup']
handler.tags = ['xp']

handler.command = /^level(|up)$/i

module.exports = handler
