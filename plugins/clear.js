let handler = async (m, { conn, command, args }) => {
  let chats
  if (/gro?up|gc/i.test(args[0])) chats = conn.chats.array.filter(v => v.jid.endsWith('g.us')).map(v => v.jid)
  else if (/chat|private|pc/i.test(args[0])) chats = conn.chats.array.filter(v => v.jid.endsWith('.net') && !v.pin).map(v => v.jid)
  else if (/all/i.test(args[0])) chats = conn.chats.array.filter(v => v.jid && !v.pin).map(v => v.jid)
  else chats = [m.chat]
  let isDelete = /^(delete)/i.test(command)
  let isClear = /^(clear)/i.test(command)
  m.reply(`me${isDelete ? 'nghapus' : isClear ? 'mbersihkan' : 'mbisukan'} ${chats.length} chat ${args[0] ? args[0] : ''}`)
  for (let id of chats) {
    if (isDelete || isClear) await conn.modifyChat(id, (isDelete ? 'delete' : 'clear'), {
      includeStarred: false
    }).catch(console.log)
    else await conn.modifyChat(id, 'mute', -Math.floor(new Date / 1e3) * 1e3 - 1e3).catch(console.log)
  }
  m.reply(`_*Selesai*_`)
}
handler.help = [
  'clearchat',
  'clearchat chat',
  'clearchat group',
  'clearchat all',
  'deletechat',
  'deletechat chat',
  'deletechat group',
  'deletechat all',
  'mutechat',
  'mutechat chat',
  'mutechat group',
  'mutechat all'
]
handler.tags = ['owner']
handler.command = /^(clear|delete|mute)chat$/i
handler.owner = true

module.exports = handler
