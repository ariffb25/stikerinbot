

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `_Example:_ ${usedPrefix + command} 10`
    let user = global.db.data.users[m.sender]
   
     
    let caption = `
Kamu Menukarkan Exp kamu dengan Uang senilai Rp*${text}*💵`



if ( user.money >= text) {
    user.money -= text
    user.exp += text
 
    conn.sendButton(m.chat, caption, '©Wabot','Tukar Lagi',`${usedPrefix + command} 10`
   , m)
 } else m.reply('ngadi Ngadi lu duit abis mau ditukerin apa')
    
   }
handler.help = ['tukarexp <jumlah>']
handler.tags = ['xp']
handler.command = /^(tukarexp|tukarxp)$/i

module.exports = handler
