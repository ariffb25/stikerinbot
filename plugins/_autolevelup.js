let handler = m => m

let levelling = require('../lib/levelling')
handler.before = m => {
  let user = global.db.data.users[m.sender]
  let pp = './src/avatar_contact.png'
  let who = m.sender
  let discriminator = who.substring(9, 13)
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
  if (!user.autolevelup) return !0
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
            user.role = role
          }
        }
}

module.exports = handler
