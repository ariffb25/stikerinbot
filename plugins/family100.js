let fetch = require('node-fetch')
let winScore = 500

async function handler(m) {
    this.game = this.game ? this.game : {}
    let id = 'family100_' + m.chat
    if (id in this.game) {
<<<<<<< HEAD
        this.sendButton(m.chat, 'Masih ada kuis yang belum terjawab di chat ini', '© Maceng', 'Nyerah', 'nyerah', this.game[id].msg)
=======
        this.sendButton(m.chat, 'Masih ada kuis yang belum terjawab!', wm, 'Nyerah', 'nyerah', this.game[id].msg)
>>>>>>> ecf6fc563b6b07bd684a6ce349e0f54706aca3cc
        throw false
    }
    let res = await fetch(API('amel', '/family100', {}, 'apikey'))
    if (!res.ok) throw eror
    let json = await res.json()
    if (!json.status) throw json
    let caption = `
*soal:* ${json.soal}

terdapat *${json.jawaban.length}* jawaban${json.jawaban.find(v => v.includes(' ')) ? `
(beberapa jawaban terdapat spasi)

+500 XP tiap jawaban benar
`: ''}
    `.trim()
    this.game[id] = {
        id,
<<<<<<< HEAD
        msg: await this.sendButton(m.chat, caption, '© Maceng', 'Nyerah', 'nyerah', m),
=======
        msg: await this.sendButton(m.chat, caption, wm, 'nyerah', 'nyerah', m),
>>>>>>> ecf6fc563b6b07bd684a6ce349e0f54706aca3cc
        ...json,
        terjawab: Array.from(json.jawaban, () => false),
        winScore,
    }
}
handler.help = ['family100']
handler.tags = ['game']
handler.command = /^f(amily)?100$/i

handler.game = true

module.exports = handler