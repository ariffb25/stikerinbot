let fetch = require('node-fetch')

const artinama_api = [
  ['http://nzcha-apii.herokuapp.com', '/artinama', 'nama', null, json => {
    if (!json.status) throw json
    return `
*Arti:* ${json.result}
`.trim()
  }],
  ['https://scrap.terhambar.com', '/nama', 'n', null, json => {
    if (!json.status) throw json
    return `
*Arti:* ${json.result.arti}
`.trim()
  }]
]

let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `Pengunaan:\n${usedPrefix + command} <nama>\n\nContoh:\n${usedPrefix + command} ariffb`
  let result = ''
  for (let [origin, pathname, query, apikey, fn] of artinama_api) {
    try {
      let res = await fetch(global.API(origin, pathname, { [query]: text }, apikey))
      if (!res.ok) throw `${res.status} ${res.statusText}`
      let json = await res.json()
      result = await fn(json)
      break
    } catch (e) {
      lastErr = e
    }
  }
  m.reply(result)
}
handler.help = ['artinama'].map(v => v + ' <nama>')
handler.tags = ['kerang']
handler.command = ['artinama']

module.exports = handler