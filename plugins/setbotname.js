// NurNurz
let handler = async (m, { conn, text }) => {
  if (!text) throw `uhm.. teksnya mana?`
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
