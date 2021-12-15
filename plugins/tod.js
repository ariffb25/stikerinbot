let fetch = require('node-fetch')
let handler = async (m, { conn, command, usedPrefix }) => {
  if (/^tod$/i.test(command)) {
    await conn.send3Button(m.chat, 'Truth or Dare', '© stikerin', 'Truth', `${usedPrefix}truth`, 'Dare', `${usedPrefix}dare`, 'Acak', `${pickRandom([`${usedPrefix}dare`, `${usedPrefix}truth`])}`, m)
  }
  if (/^truth$/i.test(command)) {
    let res = await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/kata-kata/truth.json')
    if (!res.ok) throw eror
    let data = await res.json()
    let json = pickRandom(data)
    await conn.send2Button(m.chat, `_*Truth*_\n\n${json}`, '© stikerin', 'Truth', `${usedPrefix}truth`, 'Dare', `${usedPrefix}dare`, m)

  }
  if (/^dare$/i.test(command)) {
    let res = await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/kata-kata/dare.json')
    if (!res.ok) throw eror
    let data = await res.json()
    let json = pickRandom(data)
    await conn.send2Button(m.chat, `_*Dare*_\n\n${json}`, '© stikerin', 'Truth', `${usedPrefix}truth`, 'Dare', `${usedPrefix}dare`, m)

  }
}
handler.help = ['tod']
handler.tags = ['fun']
handler.command = /^(tod|truth|dare)$/i

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
