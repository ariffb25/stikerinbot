let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.lesbi)}”`, m)
}
handler.help = ['lesbicek']
handler.tags = ['cek']
handler.command = /^(yuricek|lesbicek)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.lesbi = [
'Lesbi Level : 4%\n\nAMAN BANGET!',
'Lesbi Level : 7%\n\nMasih Aman',
'Lesbi Level : 12%\n\nAman Kok',
'Lesbi Level : 22%\n\nHampir Aman',
'Lesbi Level : 27%\n\nLesbi dikit',
'Lesbi Level : 35%\n\nLesbi ¼',
'Lesbi Level : 41%\n\nDah lewat dri Aman',
'Lesbi Level : 48%\n\nSetengah Lesbi',
'Lesbi Level : 56%\n\nLu lesbi juga',
'Lesbi Level : 64%\n\nLumayan Lesbi',
'Lesbi Level : 71%\n\nHebatnya kelesbian lu',
'Lesbi Level : 1%\n\n99% LU GAK LESBI!',
'Lesbi Level : 77%\n\nGak akan Salah Lagi dah Lesbinya lu',
'Lesbi Level : 83%\n\nDijamin lesbi nya!',
'Lesbi Level : 89%\n\nLesbi Banget!',
'Lesbi Level : 94%\n\nTOBAT WOEE,, LESBI LU UDH MELEWATI BATAS!😂',
'Lesbi Level : 100%\n\nLU ORANG TERLESBI YANG PERNAH ADA!!!',
'Lesbi Level : 100%\n\nLU ORANG TERLESBI YANG PERNAH ADA!!!',
'Lesbi Level : 100%\n\nLU ORANG TERLESBI YANG PERNAH ADA!!!',
'Lesbi Level : 100%\n\nLU ORANG TERLESBI YANG PERNAH ADA!!!',
]