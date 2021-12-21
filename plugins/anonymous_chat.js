const { MessageType } = require("@adiwajshing/baileys")

async function handler(m, { command, usedPrefix }) {
    if (!global.db.data.settings.anon) {
        await this.sendButton(m.chat, 'Anonymous Chat tidak diaktifkan', '© Maceng', 'Aktifkan', '.on anon', m)
        throw false
    }
    command = command.toLowerCase()
    this.anonymous = this.anonymous ? this.anonymous : {}
    switch (command) {
        case 'next':
        case 'leave': {
            let room = Object.values(this.anonymous).find(room => room.check(m.sender))
            if (!room) {
                await this.sendButton(m.chat, '_Kamu tidak sedang berada di anonymous chat_', '© Maceng', 'Cari Partner', `${usedPrefix}start`, m)
                throw false
            }
            m.reply('_Ok_')
            let other = room.other(m.sender)
            if (other) await this.sendButton(other, '_Partner meninggalkan chat_', '© Maceng', 'Cari Partner', `${usedPrefix}start`, m)
            delete this.anonymous[room.id]
            if (command === 'leave') break
        }
        case 'start': {
            if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                await this.sendButton(m.chat, '_Kamu masih berada di dalam anonymous chat, menunggu partner_', '© Maceng', 'Keluar', `${usedPrefix}leave`, m)
                throw false
            }
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