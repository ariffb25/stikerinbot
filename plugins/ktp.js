let fetch = require('node-fetch');
let ftype = require('file-type');
let { getBuffer, succes } = require('../lib/functions.js');

let handler = async(m, { conn, text }) => {
let [nik, prov, kabu, name, ttl, jk, jl, rtrw, lurah, camat, agama, nikah, kerja, warga, until, img] = text.split `|`

let str = `
Nihh,, Buat apa sihh
`.trim()

    if (!nik) return conn.reply(m.chat, 'Silahkan masukan nik', m)
    if (!prov) return conn.reply(m.chat, 'Silahkan masukan nama provinsi', m)
    if (!kabu) return conn.reply(m.chat, 'Silahkan masukan nama kabupaten', m)
    if (!name) return conn.reply(m.chat, 'Silahkan masukan nama', m)
    if (!ttl) return conn.reply(m.chat, 'Silahkan masukan tanggal lahir', m)
    if (!jk) return conn.reply(m.chat, 'Silahkan masukan jenis kelamin', m)
    if (!jl) return conn.reply(m.chat, 'Silahkan masukan alamat', m)
    if (!rtrw) return conn.reply(m.chat, 'Silahkan masukan nama rt dan rw', m)
    if (!lurah) return conn.reply(m.chat, 'Silahkan masukan nama lurah', m)
    if (!camat) return conn.reply(m.chat, 'Silahkan masukan nama camat', m)
    if (!agama) return conn.reply(m.chat, 'Silahkan masukan agamamu', m)
    if (!nikah) return conn.reply(m.chat, 'Silahkan masukan status perkawinan', m)
    if (!kerja) return conn.reply(m.chat, 'Silahkan masukan nama pekerjaan', m)
    if (!warga) return conn.reply(m.chat, 'Silahkan masukan nama negara warga', m)
    if (!until) return conn.reply(m.chat, 'Silahkan masukan until', m)
    if (!img) return conn.reply(m.chat, 'Silahkan masukan link gambarmu yang valid', m)

  await m.reply('Sedang membuat...')

  let buff = ('http://lolhuman.herokuapp.com/api/ktpmaker?apikey=31caf10e4a64e86c1a92bcba&nik=' + nik + '&prov=' + prov + '&kabu=' + kabu + '&name=' + name + '&ttl=' + ttl + '&jk=' + jk + '&jl=' + jl + '&rtrw=' + rtrw + '&lurah=' + lurah + '&camat=' + camat + '&agama=' + agama + '&nikah=' + nikah + '&kerja=' + kerja + '&warga=' + warga + '&until=' + until + '&img=' + img);
  let voss = await fetch(buff)
  let vuss = await ftype.fromStream(voss.body)
  if (vuss !== undefined) {

     conn.sendFile(m.chat, await getBuffer(buff), 'ktp.jpg', str, m)
     }
}
handler.help = ['ktp <nik|prov|kabu|name|ttl|jk|jl|rtrw|lurah|camat|agama|nikah|kerja|warga|until|url>']
handler.tags = ['sticker']
handler.command = /^(ktp)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
