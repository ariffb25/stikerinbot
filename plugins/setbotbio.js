// NurNurz
let handler = async (m, { conn, text }) => {
  if (!text) throw `Penggunaan:\n${usedPrefix + command} <teks>\n\nContoh:\n${usedPrefix + command} tes`
  try {
    await conn.setStatus(text)
    m.reply('Berhasil!')
  } catch (e) {
    console.log(e)
    throw `Eror`
  }
}
handler.help = ['setbotbio <teks>']
handler.tags = ['owner']
handler.command = /^(setbotbio)$/i

handler.owner = true

module.exports = handler