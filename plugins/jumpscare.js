let fetch = require("node-fetch")
let handler = async (m, { conn }) => {
let res = await fetch('https://raw.githubusercontent.com/AlvioAdjiJanuar/lord/main/jumpscare.txt')
let txt = await res.text()

let arr = txt.split('\n')
let cita = arr[Math.floor(Math.random() * arr.length)]
conn.sendFile(m.chat, cita, 'asupan.mp4', 'Nih kak asupan nya!!\n*Follow:* https://instagram.com/caliph91_', m) 
}


handler.help = ['jumpscare']
handler.tags = ['internet', 'fun']
handler.command = /^jumpscare$/i
module.exports = handler
//



module.exports = handler