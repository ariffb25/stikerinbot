let handler = async (m, { conn, text }) => {
  let id = m.chat
  conn.math = conn.math ? conn.math : {}
  if (id in conn.math) {
    clearTimeout(conn.math[id][3])
    delete conn.math[id]
    m.reply('Hmmm...cheat?')
  }
  let val = text
    .replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
    .replace(/×/g, '*')
    .replace(/÷/g, '/')
    .replace(/π|pi/gi, 'Math.PI')
    .replace(/e/gi, 'Math.E')
    .replace(/\/+/g, '/')
    .replace(/\++/g, '+')
    .replace(/-+/g, '-')
  let format = val
    .replace(/Math\.PI/g, 'π')
    .replace(/Math\.E/g, 'e')
    .replace(/\//g, '÷')
    .replace(/\*×/g, '×')
  try {
    console.log(val)
    let result = (new Function('return ' + val))()
    if (!result) throw result
    m.reply(`*${format}* = _${result}_`)
  } catch (e) {
    if (e == undefined) throw 'What's in it?'
    throw 'Incorrect format,only 0-9 and Symboll -, +, *, /, ×, ÷, π, e, (, ) supported'
  }
}
handler.help = ['calc <expression>']
handler.tags = ['tools']
handler.command = /^(calc(ulat(e|or))?|kalk(ulator)?)$/i
handler.exp = 5

module.exports = handler
