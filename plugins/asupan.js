let fetch = require("node-fetch")
let arr = []
let handler = async (m, { conn }) => {
  let res = await fetch('http://sansekai.my.id/sansekai.txt')
  if (!res.ok) throw `${res.status} ${res.statusText}`
let txt = await res.text()
arr = txt.split`\n`
  let asupan = arr[Math.floor(Math.random() * arr.length)]
  await conn.sendFile(m.chat, 'http://sansekai.my.id/ptl_repost/'+asupan, asupan, null, m)
}
handler.help = ['asupan']
handler.tags = ['fun']
handler.command = /^(asupan)$/i

module.exports = handler
