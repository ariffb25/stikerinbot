let handler = async (m, { conn, text, participants }) => {

  const format = num => {
    const n = String(num),
          p = n.indexOf('.')
    return n.replace(
        /\d(?=(?:\d{3})+(?:\.|$))/g,
        (m, i) => p < 0 || i < p ? `${m},` : m
    )
  }

  function getRandom(min,max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random()*(max-min+1)) + min
  }

  // jika belum terdaftar
  if(typeof global.db.data.users[m.sender] == 'undefined') {
  global.db.data.users[m.sender] = {
      exp: 0,
      limit: 10,
      lastclaim: 0,
      lastnguli: 0,
      warning: 0,
      lastrepeat: 0,
      name: conn.getName(m.sender),
      regTime: -1,
      afk: -1,
      afkReason: '',
      job: "no",
      price: 0,
      chat: 0,
      whitelist: false,
      isBanned: false,
      spam: 0  
		}
	}

  user = text.split('@')[1] + "@s.whatsapp.net"

  if (!text){
    return conn.reply(m.chat,'*[ JOB ERROR ]*\n\nTag nama orang yang ingin anda sewa jasanya.',m)
  }else if(global.db.data.users[text] == "undefined"){
    return conn.reply(m.chat,'*[ JOB ERROR ]*\n\nOrang yang anda tag tidak menawarkan jasa apapun.',m)
  }else {


    if (m.sender == user){
      return conn.reply(m.chat,'*[ JOB ERROR ]*\n\nTidak bisa menyewa diri sendiri',m)
    }else if (global.db.data.users[m.sender].exp < global.db.data.users[user].price){
      return conn.reply(m.chat,`*[ JOB ERROR ]*\n\nUang anda miliki tidak cukup untuk membeli jasa dari @${user.split('@')[0]}\n\nSaldo anda : Rp. ${format(global.db.data.users[m.sender].exp)},-\nHarga jasa : Rp. ${format(global.db.data.users[user].price)},-`,m,{contextInfo: {
        mentionedJid: [user]
      }})
    }else {
      if (global.db.data.users[user].job === "x"){
        return conn.reply(m.chat,'*[ JOB ERROR ]*\n\nOrang yang anda tag tidak menawarkan jasa apapun.',m)  
      }else if (global.db.data.users[user].job === "lonte"){
        global.db.data.users[m.sender].exp -= global.db.data.users[user].price
        global.db.data.users[user].exp += global.db.data.users[user].price
        conn.reply(m.chat,`*[ JASA SEWA LONTE ]*\n\n@${m.sender.split('@')[0]} : "Aku masukin ya sayang ahhh"\n@${user.split('@')[0]} : "Aduuh pelan pelan dong, enaaak"\n@${m.sender.split('@')[0]} : "Aaaah aaaahhh, croooot"\n\nBiaya sewa : Rp. ${format(global.db.data.users[user].price)}`,m,{contextInfo: {
          mentionedJid: [m.sender,user]
        }})
        global.db.data.users[user].price = 0
        global.db.data.users[user].job = "x"
      }else if (global.db.data.users[user].job === "pijat"){
        global.db.data.users[m.sender].exp -= global.db.data.users[user].price
        global.db.data.users[user].exp += global.db.data.users[user].price
        conn.reply(m.chat,`*[ JASA SEWA TUKANG PIJAT ]*\n\n@${m.sender.split('@')[0]} : "Bagian sininya pijat yang enak ya bangsat"\n@${user.split('@')[0]} : "Iya suhu, sabar, ini lagi di pijat, huft"\n@${m.sender.split('@')[0]} : "Aaaah aaaahhh jangan ke alat vital dooong"\n\nBiaya sewa : Rp. ${format(global.db.data.users[user].price)}`,m,{contextInfo: {
          mentionedJid: [m.sender,user]
        }})
        global.db.data.users[user].price = 0
        global.db.data.users[user].job = "x"
      }else if (global.db.data.users[user].job === "gebukin"){
      let users = participants.map(u => u.jid)
	  var tag = users[Math.floor(users.length * Math.random())]      
        global.db.data.users[m.sender].exp -= global.db.data.users[user].price
        global.db.data.users[user].exp += global.db.data.users[user].price
        conn.reply(m.chat,`*[ JASA TUKANG GEBUKIN ]*\n\n@${m.sender.split('@')[0]} : "Woiy, sini lu!!!"\n@${user.split('@')[0]} : "Iya boss, ada apa?"\n@${m.sender.split('@')[0]} : "Gw Gabut nih, lu gak ada kerjaan kan?"\n@${user.split('@')[0]} : "Iya boss, kenapa emang?"\n@${m.sender.split('@')[0]} : "Gw ada tugas Buat lu!!!"\n@${user.split('@')[0]} : "Apa tuch?"\n@${m.sender.split('@')[0]} : "Gebukin salah satu member grup disini!!!"\n@${user.split('@')[0]} : "Siap boss!i!i!"\n\n_dan Akhirnya si @${user.split('@')[0]} pun segera mencari salah satu member di grup ini_\nsetelah beberapa menit kemudian akhirnya dia pun bertemu dengan @${tag.split('@')[0]} dan langsung di hajar oleh si @${user.split('@')[0]}\n\nGebruak gebrak gebruk ahh(suara rusuh ketika bertarung)\nsetelah 3 menit pertarungan tersebut akhirnya si @${tag.split('@')[0]} pun kalah\n@${user.split('@')[0]} : "Akhirnya kalah juga lu!!"\n@${tag.split('@')[0]} : "apa sih njing datang-datang langsung gebukin gw, belum siap aku njing_-"\n@${user.split('@')[0]} : "sakit gak?"\n@${user.split('@')[0]} : "sakit gak?"\n@${tag.split('@')[0]} : "sakitlah njing, masak nggak😭"\n@${user.split('@')[0]} : "awokawokawok"\n\nD O N E\nBiaya sewa : Rp. ${format(global.db.data.users[user].price)}`,m,{contextInfo: {
          mentionedJid: [m.sender,user,tag]
        }})
        global.db.data.users[user].price = 0
        global.db.data.users[user].job = "x"
      }else if (global.db.data.users[user].job === "sepong"){
        global.db.data.users[m.sender].exp -= global.db.data.users[user].price
        global.db.data.users[user].exp += global.db.data.users[user].price
        conn.reply(m.chat,`*[ JASA TUKANG GEBUKIN ]*\n\n@${m.sender.split('@')[0]} : "Ayok aku buka dulu celananya"\n@${user.split('@')[0]} : "Waduh gede kali om, mmppsss"\n@${m.sender.split('@')[0]} : "Croooot, telen ayo telen"\n\nBiaya sewa : Rp. ${format(global.db.data.users[user].price)}`,m,{contextInfo: {
          mentionedJid: [m.sender,user]
        }})
        global.db.data.users[user].price = 0
        global.db.data.users[user].job = "x"
      }else if (global.db.data.users[user].job === "maling"){
        let users = participants.map(u => u.jid)
		    var tag = users[Math.floor(users.length * Math.random())]
        limitMax = getRandom(1,Math.floor(global.db.data.users[user].price/100000)*2)
        if (global.db.data.users[tag].limit < limitMax){
          limitMax = global.db.data.users[tag].limit
        }
        global.db.data.users[tag].limit -= limitMax
        global.db.data.users[m.sender].limit += limitMax
        global.db.data.users[m.sender].exp -= global.db.data.users[user].price
        global.db.data.users[user].exp += global.db.data.users[user].price
        conn.reply(m.chat,`*[ JASA SEWA MALING ]*\n\n@${user.split('@')[0]} : "Woy bangsat sini gw maling limit lu !"\n@${tag.split('@')[0]} : "Ampuuuun ndan, hiks hiks"\n\n_5 Menit kemudian_\n\n@${user.split('@')[0]} : "Ni bos hasil maling limitnya si @${tag.split('@')[0]} cuma dapet ${limitMax} limit"\n@${m.sender.split('@')[0]} : "Oke siap njing"\n\nBiaya sewa : Rp. ${format(global.db.data.users[user].price)}`,m,{contextInfo: {
          mentionedJid: [m.sender,user,tag]
        }})
        global.db.data.users[user].price = 0
        global.db.data.users[user].job = "x"
      }
    }
  }

}
handler.help = ['sewa *@user*']
handler.tags = ['job']
handler.command = /^sewa$/i
handler.admin = false
handler.botAdmin = false
handler.register = true
module.exports = handler
