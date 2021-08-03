let fetch = require('node-fetch')
let handler = async (m, { conn, command }) => {
  if (/^tod$/i.test(command)) {
    conn.send3Button(m.chat, 'Truth or Dare', 'made with ❤️ by ariffb', 'TRUTH', ',truth', 'DARE', ',dare', 'RANDOM', `${pickRandom([',dare', ',truth'])}`)
  }
  if (/^truth$/i.test(command)) {
    let res = await fetch(global.API('pencarikode', '/api/truthid', {}, 'apikey'))
    if (!res.ok) throw await `${res.status} ${res.statusText}`
    let json = await res.json()
    if (json.message == "") throw json
    conn.send3Button(m.chat, json.message, '', 'TRUTH', ',truth', 'DARE', ',dare', 'RANDOM', `${pickRandom([',dare', ',truth'])}`)

  }
  if (/^dare$/i.test(command)) {
    let res = await fetch(global.API('pencarikode', '/api/dareid', {}, 'apikey'))
    if (!res.ok) throw await `${res.status} ${res.statusText}`
    let json = await res.json()
    if (json.message == "") throw json
    conn.send3Button(m.chat, json.message, '', 'TRUTH', ',truth', 'DARE', ',dare', 'RANDOM', `${pickRandom([',dare', ',truth'])}`)

  }
}
handler.help = ['tod']
handler.tags = ['fun']
handler.command = /^(tod|truth|dare)$/i

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}