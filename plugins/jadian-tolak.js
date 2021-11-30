/*//////////////////////////////////

Cretor : Hairul Lana
https://github.com/hairullana 

/*////////////////////////////////*/

let handler = async (m, { conn, text }) => {
	if(isNaN(text)) {
  	var number = text.split`@`[1]
  } else if(!isNaN(text)) {
  	var number = text
  }

  if(!text && !m.quoted) return conn.reply(m.chat, `Masukan nomor, tag atau balas pesan target.`, m)
  
  if(isNaN(number)) return conn.reply(m.chat, `Nomor yang anda masukan salah!`, m)
  if(number.length > 15) return conn.reply(m.chat, `Format salah!`, m)
  try {
		if(text) {
			var user = number + '@s.whatsapp.net'
		} else if(m.quoted.sender) {
			var user = m.quoted.sender
		} else if(m.mentionedJid) {
  		  var user = number + '@s.whatsapp.net'
			}  
		} catch (e) {
  } finally {
    let groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat) : {}
    let participants = m.isGroup ? groupMetadata.participants : []
    let users = m.isGroup ? participants.find(u => u.jid == user) : {}
    if(!users) return conn.reply(m.chat, `Target atau Nomor tidak ditemukan, mungkin sudah keluar atau bukan anggota grup ini.`, m)
    if(user === m.sender) return conn.reply(m.chat, `Tidak bisa berpacaran dengan diri sendiri!`, m)
    if(user === conn.user.jid) return conn.reply(m.chat, `*Tidak bisa berpacaran dengan saya t_t`, m)
    
    if(global.db.data.users[user].pasangan != m.sender){
      conn.reply(m.chat,`Maaf @${user.split('@')[0]} tidak sedang menembak anda`,m,{contextInfo: {
        mentionedJid: [user]
      }})
    }else{
      global.db.data.users[user].pasangan = ""
      conn.reply(m.chat,`Anda baru saja menolak @${user.split('@')[0]} untuk menjadi pasangan anda!`,m,{contextInfo: {
        mentionedJid: [user]
      }})
    }
	}	
}
handler.help = ['tolak *@tag*']
handler.tags = ['jadian']
handler.command = /^(tolak)$/i
handler.mods = false
handler.premium = false
handler.group = true
handler.limit = false
handler.fail = null
module.exports = handler