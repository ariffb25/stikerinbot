let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let res = await fetch('https://fdciabdul.tech/api/ayla/?pesan=' + encodeURIComponent(m.text))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (json.jawab == 'Aku tidak mengerti apa yang kamu katakan.Tolong ajari aku.') await m.reply('siminya blom diajarin jadi gatau t_t custom pesannya di https://simsimi.com/teach')
  else await m.reply(`*Simi:* ${json.jawab.replace(/ayla/i, 'stikerin')}`)
}
handler.help = ['simi', 'simsimi', 'simih'].map(v => v + ' <teks>')
handler.tags = ['fun']
handler.command = /^((sim)?simi|simih)$/i

module.exports = handler

