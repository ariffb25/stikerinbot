const similarity = require('similarity')
const threshold = 0.72

module.exports = {
    async before(m) {
        this.game = this.game ? this.game : {}
        let id = 'family100_' + m.chat
        if (!(id in this.game)) return !0
        let room = this.game[id]
        let text = m.text.toLowerCase().replace(/[^\w\s\-]+/, '')
        let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
        if (!isSurrender) {
            let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === text)
            if (index < 0) {
                if (Math.max(...room.jawaban.filter((_, index) => !room.terjawab[index]).map(jawaban => similarity(jawaban, text))) >= threshold) m.reply(dikit)
                return !0
            }
            if (room.terjawab[index]) return !0
            let users = global.db.data.users[m.sender]
            room.terjawab[index] = m.sender
            users.exp += room.winScore
        }
        let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
        let caption = `
*soal:* ${room.soal}

terdapat *${room.jawaban.length}* jawaban${room.jawaban.find(v => v.includes(' ')) ? `
(beberapa jawaban terdapat spasi)
`: ''}
${isWin ? `*SEMUA JAWABAN TERJAWAB*` : isSurrender ? '*MENYERAH!*' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
            return isSurrender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split`@`[0] : ''}`.trim() : false
        }).filter(v => v).join('\n')}

${isSurrender ? '' : ``}
    `.trim()
        await this.sendButton(m.chat, caption, wm, `${isWin || isSurrender ? 'lagi' : 'nyerah'}`, `${isWin || isSurrender ? '.family100' : 'nyerah'}`, m).then(msg => {
            return this.game[id].msg = msg
        }).catch(_ => _)
        if (isWin || isSurrender) delete this.game[id]
        return !0
    }
}
