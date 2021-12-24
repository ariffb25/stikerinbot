async function handler(m) {
    if (!m.quoted) throw `Balas pesan dengan perintah *${usedPrefix + command}*`
    let q = this.serializeM(await m.getQuotedObj())
    if (!q.quoted) throw 'Pesan yang anda balas tidak mengandung balasan!'
    await q.quoted.copyNForward(m.chat, true)
}
handler.help = ['q']
handler.tags = ['tools']
handler.command = /^q$/i

module.exports = handler