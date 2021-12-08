let { get } = require('axios')
let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Uhm...url nya mana?'
m.reply('Downloading....')
   let { status, result } = (await get(`https://api.lolhuman.xyz/api/spotify?apikey=ohayou&url=${args[0]}`)).data
    if (status !== 200) throw 'Server Error, Try Again!'
    let { title, artists, duration, link, thumbnail } = result
    conn.sendMessage(m.chat, await getBuffer(thumbnail), 'imageMessage', { quoted: m, caption : `*Title* : ${title}\n*Artist* : ${artists}` })
    conn.sendMessage(m.chat, await getBuffer(link), 'documentMessage', { quoted: m, mimetype: 'audio/mp3' , filename: `${title}.mp3` })
}
handler.help = ['spotify'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(spotify(dl)?)$/i

module.exports = handler

async function getBuffer(url) {
h = await require('node-fetch')(url)
j = await h.buffer()
return j 
}