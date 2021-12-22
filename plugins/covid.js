let fetch = require('node-fetch')
let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `Pengunaan:\n${usedPrefix + command} <negara>\n\nContoh:\n${usedPrefix + command} indonesia`
  let res = await fetch(API('https://covid19.mathdro.id', '/api/countries/' + (text)))
  if (!res.ok) throw `${res.status} ${res.statusText}`
  let json = await res.json()
  if (json.confirmed) m.reply(`
Countries : ${text}
Confirmed : ${json.confirmed.value}
Recovered : ${json.recovered.value}
Deaths : ${json.deaths.value}
Last Update : ${json.lastUpdate}`.trim())
  else throw json
}
handler.help = ['covid'].map(v => v + ' <negara>')
handler.tags = ['internet']
handler.command = /^(corona|covid|covid19)$/i

module.exports = handler