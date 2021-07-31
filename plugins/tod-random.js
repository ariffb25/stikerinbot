let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let rando = pickRandom(["truth", "dare"])
  let res = await fetch(global.API('pencarikode', '/api/' + rando + 'id', {}, 'apikey'))
  if (!res.ok) throw await `${res.status} ${res.statusText}`
  let json = await res.json()
  if (!json.message) throw 'Error!'
  if (json.message) m.reply(json.message.trim())
  else throw json
}
handler.help = ['random']
handler.tags = ['fun']
handler.command = /^(random(tod|truthordare))$/i
//ftwr
module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}