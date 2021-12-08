let { performance } = require('perf_hooks')
let fs = require('fs')
let { MessageType } = require('@adiwajshing/baileys')
let peli = fs.readFileSync('./Ah5.jpeg')
let pelo = fs.readFileSync('./emror.jpeg')
let handler = async (m, { conn }) => {
await m.reply(global.wait)
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `𝙍𝙐𝙉𝙏𝙄𝙈𝙀\n${pad(hours)}H ${pad(minutes)}M ${pad(seconds)}S`
}
					runtime = process.uptime()
					teks = `${kyun(runtime)}`
					var itsme = `0@s.whatsapp.net`
					var split = `@ẉa.me/ᵀᵒʰʳᵘ-ᴮᴼᵀᶻ`
					const rtimebro = {
					contextInfo: {
					participant: itsme,
					quotedMessage: {
					extendedTextMessage: {
					text: split,
									}
								}
							}
						}
						conn.sendMessage(m.chat, '```RUNTIME```', 'conversation', {thumbnail: pelo, contextInfo:{externalAdReply: {title: '@ẉa.me/ᵀᵒʰʳᵘ-ᴮᴼᵀᶻ', sourceUrl: '', body: `${teks}`, thumbnail: peli}}})
				/*	conn.sendMessage(m.chat, `${teks}`, MessageType.text, rtimebro)*/
}

handler.help = ['runtime']
handler.tags = ['main']
handler.command = /^runtime$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler