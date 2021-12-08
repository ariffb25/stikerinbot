let { MessageType } = require('@adiwajshing/baileys')
let PhoneNumber = require('awesome-phonenumber')
let { buttonsMessage, contactsArray, image, MimeType } = MessageType
let fs = require('fs')

let handler = async (m, { conn, text, usedPrefix }) => {

let imgk = fs.readFileSync('./lib/kerajaan.jpg')

let user = global.db.data.users[m.sender]

if (!('created' in user)) return m.reply('anda tidak memiliki kerajaan')

let kerajaan = global.db.data.users[m.sender].kingdomName
let trops = global.db.data.users[m.sender].troops
let lvl = global.db.data.users[m.sender].lvl
let populasi = global.db.data.users[m.sender].population
let name = global.db.data.users[m.sender].namk
let aliance = global.db.data.users[m.sender].aliance
let koin = global.db.data.users[m.sender].koin
let makanan = global.db.data.users[m.sender].makanan
let trofi = global.db.data.users[m.sender].trofi
let rtrofi = global.db.data.users[m.sender].rtrofi

let benteng = global.db.data.users[m.sender].fortress
let rs = global.db.data.users[m.sender].rumahsakit
let kamp = global.db.data.users[m.sender].troopcamp

let besi = global.db.data.users[m.sender].besi
let kayu = global.db.data.users[m.sender].kayu
let batu = global.db.data.users[m.sender].batu

let sortedlvl = Object.entries(global.db.data.users).sort((a, b) => b[1].lvl - a[1].lvl)
let userslvl = sortedlvl.map(v => v[0])

let caption = `
_Profil Kerajaanmu_

🏰Name Kerajaan: ${kerajaan}
👑Name King: ${name}
🏆TROFI: ${trofi}
🎯LIGA: ${rtrofi}
👥populasi: ${populasi}
👮pasukan: ${trops}
🎋level kerajaan: ${lvl}

💹Ekonomi SDA:
💰Koin: ${koin}
🌳Kayu: ${kayu}
⛓️Besi: ${besi}
🪨Batu: ${batu}
🌮Makanan: ${makanan}

🏗️Fasilitas:
🏕️kamp pasukan: ${kamp == 0 ? 'tidak punya kamp pasukan' : '' || kamp == 1 ? 'kamp pasukan mini' : '' || kamp == 2 ? 'kamp pasukan sedang' : ''}
🏥rumah sakit: ${ rs == 0 ? 'tidak punya rumah sakit' : '' }

🏯Benteng level:
${ benteng == 0 ? 'Tidak punya benteng' : '' || benteng == 1 ? 'benteng kayu' : '' || benteng == 2 ? 'benteng beton' : '' }


⚔️To war typing:
${usedPrefix}attack @mention <jumlah peleton>

🏰Bangun Dan level up kerajaan
${usedPrefix}build <type>

♨️Untuk Mengambil Sumber daya:
${usedPrefix}getsda

CEK LIGA🎯 KERAJAAN MU! KETIK
*${usedPrefix}rankliga*

*[ FITUR INI MASIH DALAM PENGERJAAN]*`.trim()


conn.sendFile( m.chat, imgk, 'kerajaa.jpg', caption, m, false, {
    contextInfo: {
      mentionedJid: conn.parseMention(text)
    }
  })
}

handler.help = ['mykingdom','mykrjn','kerajaanku']
handler.tags = ['rpg']
handler.command = /^(mykingdom|kerajaanku)/i

handler.owner = false
handler.register = false

module.exports = handler
