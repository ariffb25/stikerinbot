let fetch = require('node-fetch')

let handler = async(m, { conn, args, usedPrefix }) => {
    if (args.length == 0) return conn.reply(m.chat, `Untuk menggunakan ${usedPrefix}kpop\nSilahkan ketik: ${usedPrefix}kpop [query]\nContoh: ${usedPrefix}kpop bts\n\nquery yang tersedia:\nblackpink, exo, bts`, m)
    if (args[0] == 'blackpink' || args[0] == 'exo' || args[0] == 'bts') {

  await m.reply('Searching...')
        fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/kpop/' + args[0] + '.txt')
            .then(res => res.text())
            .then(body => {
                let randomkpop = body.split('\n')
                let randomkpopx = randomkpop[Math.floor(Math.random() * randomkpop.length)]
                conn.sendFile(m.chat, randomkpopx, '', 'Dasar Kpopers', m)
            })
            .catch(() => {
                conn.reply(m.chat, 'Ada yang Error cuy... Bisa tanyakan ke owner BOT ini!', m)
            })
    } else {
        conn.reply(m.chat, `Maaf query tidak tersedia. Silahkan ketik ${usedPrefix}kpop untuk melihat list query`, m)
    }

}

handler.help = ['kpop'].map(v => v + ' <query>')
handler.tags = ['foto']
handler.command = /^(kpop)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler