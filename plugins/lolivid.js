async function getRandom(url) {
return Math.floor(Math.random() * url)
}

 let handler  = async (m, { conn }) => {
      conn.sendFile(m.chat, `https://recoders-area.caliph.repl.co/api/lolivid`, '', ``, m)
}
handler.help = ['lolivid']
handler.tags = ['video']
handler.command = /^(lolivid)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler