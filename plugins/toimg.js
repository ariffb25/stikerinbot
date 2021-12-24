const { spawn } = require('child_process')

let handler = async (m, { conn, usedPrefix, command }) => {
  if (!global.support.convert &&
    !global.support.magick &&
    !global.support.gm) return handler.disabled = true // Disable if doesnt support
  if (!m.quoted) throw `Balas gambar dengan perintah *${usedPrefix + command}*`
  let q = { message: { [m.quoted.mtype]: m.quoted } }
  if (/sticker/.test(m.quoted.mtype)) {
    let sticker = await conn.downloadM(q)
    if (!sticker) throw sticker
    let bufs = []
    const [_spawnprocess, ..._spawnargs] = [...(global.support.gm ? ['gm'] : global.support.magick ? ['magick'] : []), 'convert', 'webp:-', 'png:-']
    let im = spawn(_spawnprocess, _spawnargs)
    im.on('error', e => conn.reply(m.chat, conn.format(e), m))
    im.stdout.on('data', chunk => bufs.push(chunk))
    im.stdin.write(sticker)
    im.stdin.end()
    im.on('exit', () => {
      conn.sendFile(m.chat, Buffer.concat(bufs), '', '© stikerin', m)
    })
  }
}
handler.help = ['toimg']
handler.tags = ['sticker']
handler.command = /^toimg$/i

module.exports = handler 