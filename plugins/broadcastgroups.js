let handler = async (m, { conn, text }) => {
  let groups = conn.chats.all().filter(v => v.jid.endsWith('g.us')).map(v => v.jid)
  let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
  let teks = text ? text : cc.text
  conn.reply(m.chat, `Mengirim pesan broadcast ke ${groups.length} grup\nEstimasi selesai ${groups.length * 1.5} detik`, m)
  for (let id of groups) {
<<<<<<< HEAD
    await delay(1500)
    await conn.copyNForward(id, conn.cMod(m.chat, cc, /bc|broadcast/i.test(teks) ? teks : '〔 Maceng Broadcast 〕\n\n' + teks + '\n\n' + '© Maceng'), true).catch(_ => _)
=======
    await conn.delay(1500)
    await conn.copyNForward(id, conn.cMod(m.chat, cc, /bc|broadcast/i.test(teks) ? teks : '「 *Stikerin Broadcast* 」\n\n' + teks + '\n\n© stikerin'), true).catch(_ => _)
>>>>>>> ecf6fc563b6b07bd684a6ce349e0f54706aca3cc
  }
  m.reply('*Broadcast Selesai*')
}
handler.help = ['broadcastgroup', 'bcgc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)(group|grup|gc)$/i

handler.owner = true

module.exports = handler 