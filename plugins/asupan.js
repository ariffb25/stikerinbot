let fetch = require("node-fetch")
let handler = async (m, { conn }) => {
let res = await fetch('https://raw.githubusercontent.com/VideFrelan/words/main/ptl.txt')
let txt = await res.text()

let arr = txt.split('\n')
let cita = arr[Math.floor(Math.random() * arr.length)]
conn.sendFile(m.chat, cita, 'asupan.mp4', 'Nih Onii-chan', m, false, { contextInfo: { forwardingScore: 999, isForwarded: true }}) 
}

handler.tags = ['fun']
handler.help = ['asupan']
handler.command = /^(asupan)$/i
handler.limit = true

module.exports = handler
