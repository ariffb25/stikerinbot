let yts = require('yt-search')

let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `Pengunaan:\n${usedPrefix + command} <teks>\n\nContoh:\n${usedPrefix + command} belajar nodejs`
  let results = await yts(text)
  let teks = results.all.map(v => {
    switch (v.type) {
      case 'video': return `
*${v.title}* (${v.url})
Durasi: ${v.timestamp}
Diupload ${v.ago}
${v.views} Penonton
      `.trim()
      case 'channel': return `
*${v.name}* (${v.url})
_${v.subCountLabel} (${v.subCount}) Subscriber_
${v.videoCount} video
`.trim()
    }
  }).filter(v => v).join('\n========================\n')
  m.reply(teks)
}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['internet']
handler.command = /^yts(earch)?$/i

module.exports = handler