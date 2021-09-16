let handler = async (m, { conn }) => {

  conn.sendFile(m.chat, 'https://h4ck3rs404-api.herokuapp.com/api/xnxx-search?q=pubg+gameplay&apikey=404Api', '', 'caption', m)
}
handler.help = ['xnxx]
handler.tags = ['NSFW']
handler.command = /^(xnxx)$/i

handler.premium = true
handler.limit = true
handler.Grup = true


module.exports = handler
