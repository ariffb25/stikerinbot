let handler = function (m) {
  if (!m.quoted) throw false
  let { chat, fromMe, id, isBaileys } = m.quoted
  if (!fromMe) throw false
  if (/Broadcast Bot/i.test(m.quoted.text)) throw 'Tidak bisa menghapus pesan broadcast!'
  if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
  this.deleteMessage(chat, {
    fromMe,
    id,
    remoteJid: chat
  })
}
handler.help = ['delete']
handler.tags = ['info']

handler.command = /^d(el|elete)?$/i
handler.limit = true 
module.exports = handler
