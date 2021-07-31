let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let res = await fetch(global.API('pencarikode', '/api/truthid', {}, 'apikey'))
  if (!res.ok) throw await `${res.status} ${res.statusText}`
  let json = await res.json()
  if (!json.message) throw 'Error!'
  if (json.message) m.reply(json.message.trim())
  else throw json
}
handler.help = ['truth']
handler.tags = ['fun']
handler.command = /^(truth|kebenaran|kejujuran)$/i
//ftwr
module.exports = handler