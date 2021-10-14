let { GroupSettingChange } = require('@adiwajshing/baileys')
let handler = m => m

let badwordRegex = /anj(k|g)|ajn?(g|k)|a?njin(g|k)|bajingan|b(a?n)?|pussy|dick|porn|chutiya|bc|sale|madarchod|bkl|gaand|randi|loda|lodi|sex|horny|nigga|fuck|dick|bitch|tits|bastard|asshole/i // tambahin sendiri

handler.before = function (m, { isOwner, isBotAdmin }) {
    if (m.isBaileys && m.fromMe) return !0
    let chat = global.db.data.chats[m.chat]
    let user = global.db.data.users[m.sender]
    let isBadword = badwordRegex.exec(m.text)

    if (!chat.antiBadword && !chat.isBanned && isBadword) {
        user.warning += 1
        this.send2Button(m.chat, `*Badword Detected*
Warning: ${user.warning} / 5
If the warning reaches 5 you will be banned

type *#on antibadword* to turn on antibadword
type *#sorry* to reduce the warning

“Never use a big word when a little filthy one will do” (MilfBOT).`, '© MilfBOT', 'Turn on Antibadword', ',1 antibadword', ',sorry', m)
        if (user.warning >= 5) {
            user.banned = true
            if (m.isGroup) {
                if (isBotAdmin) {
                    this.groupSettingChange(m.chat, GroupSettingChange.messageSend, true)
                }
            }
        }
    }
    return !0
}
module.exports = handler
