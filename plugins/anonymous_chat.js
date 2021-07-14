const { MessageType } = require("@adiwajshing/baileys")

async function handler(m, { command }) {
    if (!global.db.data.settings.anon) throw `Fitur Anonymous Chat tidak dinyalakan oleh _*Pemilik Bot*_`
    command = command.toLowerCase()
    this.anonymous = this.anonymous ? this.anonymous : {}
    switch (command) {
        case 'next':
        case 'leave': {
            let room = Object.values(this.anonymous).find(room => room.check(m.sender))
            if (!room) throw '_Kamu tidak sedang berada di anonymous chat_'
            m.reply('_Ok_')
            let other = room.other(m.sender)
            if (other) this.sendMessage(other, '_Partner meninggalkan chat_', MessageType.text)
            delete this.anonymous[room.id]
            if (command === 'leave') break
        }
        case 'start': {
            if (Object.values(this.anonymous).find(room => room.check(m.sender))) throw '_Kamu masih berada di dalam anonymous chat, menunggu partner_'
            let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
            if (room) {
                this.sendMessage(room.a, '_Partner ditemukan!_', MessageType.text)
                room.b = m.sender
                room.state = 'CHATTING'
                m.reply('_Partner ditemukan!_')
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
                m.reply('_Menunggu partner..._')
            }
            break
        }
    }
}
handler.help = ['start', 'leave', 'next']
handler.tags = 'anonymous'

handler.command = ['start', 'leave', 'next']
handler.private = true

module.exports = handler
