const fetch = require('node-fetch')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `give valid username \nexample:\n${usedPrefix + command} nsutjordi`

  let res = await fetch(global.API('zekais', '/igs', { username: args[0] }))
  if (!res.ok) throw eror
  let json = await res.json()
  if (json.status != 200) throw json
  conn.sendFile(m.chat, json.data.profilehd, 'eror.jpg', `*Name:* ${json.data.fullname}\n*Bio:* ${json.data.bio}\n*Followers:* ${json.data.follower}\n*Following:* ${json.data.following}\n*Posts:* ${json.data.timeline}\n*Account:* ${json.data.private ? 'Private' : 'Public'}\n\nhttp://instagram.com/nsutjordi`, m, 0, { thumbnail: await (await fetch(json.data.profilehd)).buffer() })
}
handler.help = ['igstalk <username>']
handler.tags = ['tools']
handler.command = /^(igstalk)$/i
handler.limit = true
module.exports = handler
