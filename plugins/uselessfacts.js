let fetch = require('node-fetch')

let handler = async (m) => {
  let res = await fetch(API('https://uselessfacts.jsph.pl', '/random.json', { language: 'en' }))
  if (!res.ok) throw eror
  let json = await res.json()
  m.reply(json.text)
}
handler.help = ['uselessfacts', 'ulf']
handler.tags = ['fun']
handler.command = /^(uselessfacts|ulf)$/i

module.exports = handler
