//**by Rizxyu
//Kok kamu wibu
//**\\
//TELKOMSEL ASU

let handler = async (m, { conn, text, usedPrefix, command }) => {

let [ a1, a2 ] = text.split`|`

if (text) throw 'hmmm'

  try {
    if (/setwm/.test(command)) {
    global.author = a1
    global.packname = a2
    m.reply(`Berhasil ubah menjadi ${text}`)
    }
    if (/setbotwm/.test(command)) {
    global.wm = text
    m.reply(`Berhasil mengubah wm bot menjadi ${text}`)
    }
   } catch (e) {
    throw 'eror ngab'
  }
 }

handler.help = ['setbotwm <text>','setwm <text>']
handler.tags = ['owner']
handler.command = /^(setwm|setbotwm)/i

handler.owner = true

module.exports = handler
