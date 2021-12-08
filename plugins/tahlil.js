let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  await m.reply(global.wait)
  let res = await fetch(global.API('xteam','/religi/tahlil', {}, 'APIKEY'))
  let json = await res.json()
  if (res.status != 200) throw json
  if (json.result.error) throw json.result.message
  let {
    title,
    id,
    arabic,
    translation
  } = json.result
  let caption = `
*「 Tahlil 」*
${id}. ${title}
${arabic}
Artinya:
_"${translation}"_
`.trim()
  await m.reply(caption)
}
handler.help = ['tahlil']
handler.tags = ['islam']
handler.command = /^(tahlil)$/i
handler.register = true

handler.fail = null
handler.limit = false

module.exports = handler
