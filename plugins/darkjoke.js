let fetch = require('node-fetch')
let arr = []
fetch('https://raw.githubusercontent.com/Caliph71/txt/main/darkjokes.txt')
    .then(res => res.text())
    .then(txt => arr = txt.split('\n'))
let handler = async (m, { conn }) => {
    let img = arr[Math.floor(Math.random() * arr.length)]
    if (!img) throw img
    await conn.sendFile(m.chat, img, '', 'Whatsapp bot', m, 0, { thumbnail: await (await fetch(img)).buffer() })
}
handler.help = ['darkjoke']
handler.tags = ['internet']
handler.command = /^((drag|dark)joke)$/i

module.exports = handler
