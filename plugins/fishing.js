let { Presence } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
  conn.mancing = conn.mancing ? conn.mancing : {}

  const delay = time => new Promise(res=>setTimeout(res,time));

  if (typeof conn.mancing[m.sender] != "undefined" && conn.mancing[m.sender] == true) return m.reply(`*Can't fish anymore because you are waiting for the fish to catch bro.*`)

  conn.mancing[m.sender] = true

  let wait = getRandom(1,5)
  let minute = wait * 1000 * 60
  m.reply("*Was fishing for " + wait + " minute*\n\n*Please copy and be patient first*")
  await delay(minute)

  let ikan = ['🐠','🐟','🐡','🐬','🐳','🐋','🦈','🦀','🐊']
  var randIkan = ikan[Math.floor(Math.random() * ikan.length)]
  randIkan2 = randIkan
  
  setTimeout(() => {
    if (randIkan2 == "🐠"){
      var jumlahIkan = getRandom(1,25)
      var hargaIkan = 10000
      var namaIkan = "Clown Fish"
    }else if (randIkan2 == "🐟"){
      var jumlahIkan = getRandom(1,13)
      var hargaIkan = 20000
      var namaIkan = "Blue Fish"
    }else if (randIkan2 == "🐡"){
      var jumlahIkan = getRandom(1,7)
      var hargaIkan = 40000
      var namaIkan = "Puffer fish"
    }else if (randIkan2 == "🐬"){
      var jumlahIkan = getRandom(1,3)
      var hargaIkan = 100000
      var namaIkan = "Dolphins"
    }else if (randIkan2 == "🐳"){		// < 5jt
      var jumlahIkan = getRandom(1,4)
      var hargaIkan = 70000
      var namaIkan = "Whale"
    }else if (randIkan2 == '🐋'){
      var jumlahIkan = getRandom(1,3)
      var hargaIkan = 100000
      var namaIkan = "Blue Whale"
    }else if (randIkan2 == "🦈"){
      var jumlahIkan = getRandom(1,5)
      var hargaIkan = 50000
      var namaIkan = "Shark"
    }else if (randIkan2 == "🐊"){
      var jumlahIkan = getRandom(1,3)
      var hargaIkan = 100000
      var namaIkan = "Crocodile"
    }else if (randIkan2 == "🦀"){
      var jumlahIkan = getRandom(1,17)
      var hargaIkan = 15000
      var namaIkan = "Crab"
    }
    
    global.DATABASE._data.users[m.sender].money += hargaIkan * jumlahIkan
    conn.updatePresence(m.chat, Presence.composing)

    tampilanIkan = ""
    for (i=0;i<jumlahIkan;i++){
      tampilanIkan += randIkan + " "
    }

    conn.reply(m.chat, `*❏ FISHING MANIA*\n\nCatch : ${tampilanIkan}\nCongratulations you caught *${jumlahIkan} tail ${namaIkan}* with sales *Rp. ${Number(hargaIkan*jumlahIkan).toLocaleString()}*`, m)
    delete conn.mancing[m.sender]
  }, 1000)
}
handler.help = ['fishing']
handler.tags = ['game']
handler.command = /^(fishing)$/i
handler.limit = true
handler.exp = 0
module.exports = handler

function getRandom(min,max){
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random()*(max-min+1)) + min
}
