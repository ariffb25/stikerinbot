// NurNurz
let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Penggunaan:\n${usedPrefix + command} <teks>\n\nContoh:\n${usedPrefix + command} stikerin`
  try {
    await conn.updateProfileName(text)
    m.reply('Berhasil!')
  } catch (e) {
    console.log(e)
    throw `Error`
  }
}
handler.help = ['setbotname <teks>']
handler.tags = ['owner']
handler.command = /^(setbotname)$/i

handler.owner = true

module.exports = handler