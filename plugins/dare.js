let fetch = require('node-fetch')
let handler = async (m) => {
  let res = await fetch(global.API('pencarikode', '/api/dareid', {}, 'apikey'))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.message) throw json
  m.reply(json.message)
}
handler.help = ['dare']
handler.tags = ['fun']
handler.command = /^(dare)$/i

module.exports = handler