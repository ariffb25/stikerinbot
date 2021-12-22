let handler = async (m, { conn, usedPrefix, text }) => {
  if (conn.user.jid !== global.conn.user.jid) throw false
  let users = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user.jid)])]
  let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
  let teks = text ? text : cc.text
  let content = conn.cMod(m.chat, cc, /bc|broadcast/i.test(teks) ? teks : '「 *Stikerin Broadcast* 」\n\n' + teks)
  for (let id of users) {
    await conn.delay(1500)
    await conn.copyNForward(id, content, true)
  }
  conn.reply(m.chat, `_Berhasil mengirim broadcast ke ${users.length} nomor yang jadi bot_
${users.map(v => 'wa.me/' + v.replace(/[^0-9]/g, '') + `?text=${encodeURIComponent(usedPrefix)}menu`).join('\n')}
\nEstimasi selesai ${users.length * 1.5} detik`.trim(), m)
}
handler.help = ['broadcastjadibot', 'bcbot'].map(v => v + ' <teks>')
handler.tags = ['host']
handler.command = /^(broadcast|bc)(jadi)?bot$/i

handler.rowner = true

module.exports = handler 