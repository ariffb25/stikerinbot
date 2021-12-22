let levelling = require('../lib/levelling')

let handler = m => m

handler.before = async function (m) {
        let user = global.db.data.users[m.sender]
        let users = Object.entries(global.db.data.users).map(([key, value]) => {
                return { ...value, jid: key }
        })
        let pp = './src/avatar_contact.png'
        let who = m.sender
        let discriminator = who
        let sortedLevel = users.map(toNumber('level')).sort(sort('level'))
        let usersLevel = sortedLevel.map(enumGetKey)
        let { min, xp, max } = levelling.xpRange(user.level, global.multiplier)
        try {
                pp = await this.getProfilePicture(who)
        } catch (e) {
        } finally {

                if (!user.autolevelup) return !0
                let before = user.level * 1
                while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++

                if (before !== user.level) {
                        await this.sendButtonImg(m.chat, API('amel', '/rank', {
                                rank: usersLevel.indexOf(m.sender) + 1,
                                pp,
                                level: user.level,
                                currentxp: user.exp - min,
                                needxp: xp,
                                name: this.getName(who),
                                discriminator
                        }, 'apikey'), `_*Level Up!*_\n_${before}_ -> _${user.level}_`.trim(), '© stikerin', 'Ambil XP Harian', ',daily')
                }
        }
}
module.exports = handler

function sort(property, ascending = true) {
        if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
        else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
        if (property) return (a, i, b) => {
                return { ...b[i], [property]: a[property] === undefined ? _default : a[property] }
        }
        else return a => a === undefined ? _default : a
}

function enumGetKey(a) {
        return a.jid
}