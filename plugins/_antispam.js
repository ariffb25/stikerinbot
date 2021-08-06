let handler = m => m

handler.all = async function (m, { isBanned }) {
    if (!global.db.data.settings.antispam) return
    if (!m.message) return
    if (m.isBaileys) return
    if (m.fromMe) return
    if (isBanned) return
    if (!m.isCommand) return
    this.spam = this.spam ? this.spam : {}
    if (m.sender in this.spam) {
        this.spam[m.sender].count++
        if (m.messageTimestamp.toNumber() - this.spam[m.sender].lastspam > 10) {
            if (this.spam[m.sender].count > 10) {
                global.db.data.users[m.sender].banned = true
                m.reply('*km dibanned, minta sama admin grup/owner kalo mau pake bot lg*')
            }
            this.spam[m.sender].count = 0
            this.spam[m.sender].lastspam = m.messageTimestamp.toNumber()
        }
    }
    else this.spam[m.sender] = {
        jid: m.sender,
        count: 0,
        lastspam: 0
    }
}

module.exports = handler
