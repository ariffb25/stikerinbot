let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
  let ar = ['dog', 'cat', 'panda', 'fox', 'red_panda', 'koala', 'bird', 'raccoon', 'kangaroo']
  if (!text)
    throw `
┌「 Pilihan 」
${ar.map(v => '├ ' + v).join`\n`}
└────

contoh:
${usedPrefix}${command} panda
`.trim()
  let res = await fetch(
    API('https://some-random-api.ml', '/animal/' + text, {})
  )
  if (!res.ok) throw `${res.status} ${res.statusText}`
  let json = await res.json()
  if (json.image) await conn.sendFile(m.chat, json.image, '', `${json.fact}\n\n~fatur`, m)
  else throw json
}
handler.help = ['animal'].map((v) => v + ' <opsi>')
handler.tags = ['internet']
handler.command = /^(animal|animalfact)$/i

module.exports = handler
