<<<<<<< HEAD
const { MessageType } = require("@adiwajshing/baileys")

async function handler(m, { command, usedPrefix }) {
    if (!global.db.data.settings.anon) {
        await this.sendButton(m.chat, 'Anonymous Chat tidak diaktifkan', '© Maceng', 'Aktifkan', '.on anon', m)
        throw false
    }
=======
async function handler(m, { command, usedPrefix, isOwner }) {
    if (!global.db.data.settings[this.user.jid].anon) return await this.sendButton(m.chat, isOwner ? 'Aktifkan' : 'Anonymous Chat dimatikan', '© stikerin', isOwner ? 'Aktifkan' : 'Owner', isOwner ? '.on anon' : '.owner', m)
>>>>>>> ecf6fc563b6b07bd684a6ce349e0f54706aca3cc
    command = command.toLowerCase()
    this.anonymous = this.anonymous ? this.anonymous : {}
    switch (command) {
        case 'next':
        case 'leave': {
            let room = Object.values(this.anonymous).find(room => room.check(m.sender))
<<<<<<< HEAD
            if (!room) {
                await this.sendButton(m.chat, '_Kamu tidak sedang berada di anonymous chat_', '© Maceng', 'Cari Partner', `${usedPrefix}start`, m)
                throw false
            }
=======
            if (!room) return await this.sendButton(m.chat, '_Kamu tidak sedang berada di anonymous chat_', '© stikerin', 'Cari Partner', `${usedPrefix}start`, m)
>>>>>>> ecf6fc563b6b07bd684a6ce349e0f54706aca3cc
            m.reply('_Ok_')
            let other = room.other(m.sender)
            if (other) await this.sendButton(other, '_Partner meninggalkan chat_', '© Maceng', 'Cari Partner', `${usedPrefix}start`, m)
            delete this.anonymous[room.id]
            if (command === 'leave') break
        }
        case 'start': {
<<<<<<< HEAD
            if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                await this.sendButton(m.chat, '_Kamu masih berada di dalam anonymous chat, menunggu partner_', '© Maceng', 'Keluar', `${usedPrefix}leave`, m)
                throw false
            }
=======
            if (Object.values(this.anonymous).find(room => room.check(m.sender))) return await this.sendButton(m.chat, '_Kamu masih berada di dalam anonymous chat, menunggu partner_', '© stikerin', 'Keluar', `${usedPrefix}leave`, m)
>>>>>>> ecf6fc563b6b07bd684a6ce349e0f54706aca3cc
            let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
            if (room) {
                await this.sendButton(room.a, '_Partner ditemukan!_', '© Maceng', 'Next', `${usedPrefix}next`, m)
                room.b = m.sender
                room.state = 'CHATTING'
                await this.sendButton(room.b, '_Partner ditemukan!_', '© Maceng', 'Next', `${usedPrefix}next`, m)
            } else {
                let id = + new Date
                this.anonymous[id] = {
                    id,
                    a: m.sender,
                    b: '',
                    state: 'WAITING',
                    check: function (who = '') {
                        return [this.a, this.b].includes(who)
                    },
                    other: function (who = '') {
                        return who === this.a ? this.b : who === this.b ? this.a : ''
                    },
                }
                await this.sendButton(m.chat, '_Menunggu partner..._', '© Maceng', 'Keluar', `${usedPrefix}leave`, m)
            }
            break
        }
    }
}
handler.help = ['start', 'leave', 'next']
handler.tags = ['anonymous']
handler.command = ['start', 'leave', 'next']

handler.private = true

module.exports = handler