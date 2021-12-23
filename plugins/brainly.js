const Brainly = require('brainly-scraper-v2')
const brain = new Brainly('id')

let handler = async function (m, { text, usedPrefix, command }) {
  if (!text) throw `Pengunaan:\n${usedPrefix + command} <soal>\n\nContoh:\n${usedPrefix + command} apa itu javascript?`
  brain.search('id', text).then(res => {
    let json = JSON.parse(JSON.stringify(res))
    let answer = json.map((v, i) => `_*PERTANYAAN KE ${i + 1}*_\n${v.question.content}\n${v.answers.map((v, i) => `*JAWABAN KE ${i + 1}*\n${v.content.replace(/<\/?p>|<\/?strong>|<\/?u>|<\/?h[1-3]>|<\/?span>/g, '').replace(/<br ?(\/|\\)?>/g, '\n')}`).join('\n')}`).join('\n\n•------------•\n\n')
    m.reply(answer)
  })
}
handler.help = ['brainly <soal>']
handler.tags = ['internet']

handler.command = /^brainly$/i

module.exports = handler
