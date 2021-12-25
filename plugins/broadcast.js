let handler = async (m, { conn, text }) => {
  let chats = conn.chats.all().filter(v => v.jid.endsWith('.net')).map(v => v.jid).filter(v => !v.startsWith(owner[0]))
  let cc = conn.serializeM(text ? m : m.quoted ? await m.getQuotedObj() : false || m)
  let teks = text ? text : cc.text
  conn.reply(m.chat, `Mengirim pesan broadcast ke ${chats.length} chat\nEstimasi selesai ${chats.length * 1.5} detik`, m)
  for (let id of chats) {
    await conn.delay(1500)
    await conn.copyNForward(id, conn.cMod(m.chat, cc, /bc|broadcast/i.test(teks) ? teks : '「 *Stikerin Broadcast* 」\n\n' + teks + '\n\n© stikerin'), true).catch(_ => _)
  }
  m.reply('*Broadcast Selesai*')
}
handler.help = ['broadcast', 'bc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)$/i

handler.owner = true

module.exports = handler 