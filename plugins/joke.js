let fetch = require('node-fetch')

let handler = async (m, { }) => {
  let res = await fetch(API('https://some-random-api.ml', '/joke', {}, ''))
  if (!res.ok) throw `${res.status} ${res.statusText}`
  let json = await res.json()
  m.reply(json.joke)
}
handler.help = ['joke', 'jokes']
handler.tags = ['fun']
handler.command = /^(joke|jokes)$/i

module.exports = handler