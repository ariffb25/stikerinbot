let handler = async (m, { conn }) => {
  const delay = time => new Promise(res=>setTimeout(res,time));
  let ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net'
  let users = (await conn.fetchGroupMetadataFromWA(m.chat)).participants.map(u => u.jid)
  for (let user of users){
    if (user !== ownerGroup + '@s.whatsapp.net' && user !== global.conn.user.jid && user !== global.owner + '@s.whatsapp.net' && user !== '6281351047727@s.whatsapp.net' && user!== '6281351047727'){
      await conn.groupRemove(m.chat, [user])
      await delay(3000)
    }
  }
}
handler.help = ['kickall']
handler.tags = ['mods']
handler.command = /^(kickall)$/i
handler.mods = true
handler.group = true
handler.fail = null

handler.owner = true


module.exports = handler