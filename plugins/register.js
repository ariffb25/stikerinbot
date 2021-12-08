let fetch = require('node-fetch')
const { createHash } = require('crypto')
let Reg = /(.*)([.|])([0-9]*)$/i
let handler = async function (m, { text, usedPrefix }) {
  let user = global.db.data.users[m.sender]
  let pantek = 'https://telegra.ph/file/b65957f39a82395bb09d0.jpg'
  if (user.registered === true) throw `Anda sudah terdaftar\nMau daftar ulang? ${usedPrefix}unreg <SN|SERIAL NUMBER> \n\n jika anda lupa sn silahkan ketik ${usedPrefix}sn`
  if (!Reg.test(text)) throw `Format salah!\nContoh: *${usedPrefix}daftar ${conn.getName(m.sender)}.17*`
  let [_, name, splitter, age] = text.match(Reg)
  let totalreg = Object.keys(global.db.data.users).length
  if (!name) throw 'Nama tidak boleh kosong!'
  if (!age) throw 'Umur tidak boleh kosong!'
  if (age < 13) throw 'Maaf, Anda belum bisa mendaftar.\n*Minimal umur 13 Ke Atas*'
  if (age > 30) throw 'Maaf, Anda terlalu tua.'
  user.name = name
  user.age = parseInt(age)
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let caption = `
*PENDAFTARAN BERHASIL*

 ❒ _*Nama*_ : ${name}
 ❒ _*Umur*_ : ${age} Tahun
 ❒ _*Total User*_ : ${totalreg} nomor
 ❒ _*Sn*_ : ${sn}
 
_*Note*_ :
Kalau mau unreg, lupa sn ketik ${usedPrefix}sn
`.trim()
var _0x159381=_0x1c85;function _0x2bc0(){var _0x2cc185=['5ZCyNCs','2320326cXAjvk','962213DnbvqZ','AdiOfficial','6658112zENtvS','556468DXlqBN','168449dJwLCA','9eJlSHO','6882650LxQmqp','chat','reply','status@broadcast','6UliCqJ','sender','10344048EVjhmf','8whyjfr','0@s.whatsapp.net'];_0x2bc0=function(){return _0x2cc185;};return _0x2bc0();}function _0x1c85(_0x402d4e,_0xded898){var _0x2bc073=_0x2bc0();return _0x1c85=function(_0x1c8567,_0x54d15b){_0x1c8567=_0x1c8567-0x98;var _0x39945c=_0x2bc073[_0x1c8567];return _0x39945c;},_0x1c85(_0x402d4e,_0xded898);}(function(_0xbd4baa,_0x448eb6){var _0x4f7c20=_0x1c85,_0x4cd3be=_0xbd4baa();while(!![]){try{var _0x30385a=parseInt(_0x4f7c20(0xa3))/0x1*(-parseInt(_0x4f7c20(0x9b))/0x2)+parseInt(_0x4f7c20(0x9e))/0x3+parseInt(_0x4f7c20(0xa2))/0x4*(-parseInt(_0x4f7c20(0x9d))/0x5)+parseInt(_0x4f7c20(0x98))/0x6*(-parseInt(_0x4f7c20(0x9f))/0x7)+-parseInt(_0x4f7c20(0xa1))/0x8+parseInt(_0x4f7c20(0xa4))/0x9*(parseInt(_0x4f7c20(0xa5))/0xa)+parseInt(_0x4f7c20(0x9a))/0xb;if(_0x30385a===_0x448eb6)break;else _0x4cd3be['push'](_0x4cd3be['shift']());}catch(_0x2f94f0){_0x4cd3be['push'](_0x4cd3be['shift']());}}}(_0x2bc0,0x973af),await conn[_0x159381(0xa7)](m[_0x159381(0xa6)],caption,{'key':{'participant':_0x159381(0x9c),'remoteJid':_0x159381(0xa8)},'message':{'orderMessage':{'itemCount':0x3e7,'status':0x3e7,'thumbnail':await(await fetch(pantek))['buffer'](),'surface':0x3e7,'message':'BERHASIL\x20REG DI TOHRUBOT','orderTitle':_0x159381(0xa0),'sellerJid':'0@s.whatsapp.net'}}},{'contextInfo':{'mentionedJid':[m[_0x159381(0x99)]]}}));
}
handler.help = ['daftar <nama|umur>','register <nama|umur>']
handler.tags = ['daftar']
handler.command = /^daftar|register$/i

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}