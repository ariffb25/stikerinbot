let handler = m => m

let levelling = require('../lib/levelling')
handler.before = m => {
        let user = global.db.data.users[m.sender]
        if (!user.autolevelup) return !0
        let before = user.level * 1
        while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++
        let role = ((user.level >= 1) && (user.level <= 10)) ? 'Bronze'
                : ((user.level >= 10) && (user.level <= 20)) ? 'Bronze I'
                        : ((user.level >= 20) && (user.level <= 30)) ? 'Silver'
                                : ((user.level >= 30) && (user.level <= 40)) ? 'Silver I'
                                        : ((user.level >= 40) && (user.level <= 50)) ? 'Gold'
                                                : ((user.level >= 50) && (user.level <= 60)) ? 'Platinum'
                                                        : ((user.level >= 60) && (user.level <= 70)) ? 'Diamond'
                                                                : ((user.level >= 70) && (user.level <= 80)) ? 'Master'
                                                                        : 'Pinnacle'

        if (before !== user.level) {
                m.reply(`
Selamat, kamu telah naik level!
*${before}* -> *${user.level}*
gunakan *.profile* untuk mengecek
	`.trim())
                user.role = role
        }
}

module.exports = handler
