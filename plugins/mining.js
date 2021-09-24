let handler = async (m, { conn }) => {

let hasil = Math.floor(Math.random() * 1000)
global.db.data.users[m.sender].money += hasil * 1 // Number(hasil)
   await conn.sendButton(m.chat, `Selamat Kamu Mendapatkan ${hasil}`, '© 𝐚𝐫𝐢𝐚𝐛𝐨𝐭𝐳', 'MINING', `.mining`, m)
}

handler.help = ['mining', 'nguli']
handler.tags = ['xp']
handler.command = /^(mining|nguli)$/i
handler.limit = true

module.exports = handler
