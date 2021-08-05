let handler = m => m

let levelling = require('../lib/levelling')
handler.before = function (m) {
        let user = global.db.data.users[m.sender]
        if (!user.autolevelup) return !0
        let before = user.level * 1
        while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++

        if (before !== user.level) {
                this.sendButton(m.chat, `
Selamat, kamu telah naik level!
*${before}* -> *${user.level}*
gunakan *.my* untuk mengecek
	`.trim(), '', 'MY', '.my')
        }
}

module.exports = handler
