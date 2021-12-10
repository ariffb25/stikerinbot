let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, usedPrefix, owner }) => { 
     try {
        let __timers = (new Date - global.db.data.users[m.sender].lastberbru)
        let _timers = (300000 - __timers) 
        let timers = clockString(_timers)
        
        if (global.db.data.users[m.sender].stamina > 60) {
        if (global.db.data.users[m.sender].healt > 50) {
        	//////conn.berbu = conn.berbu ? conn.berbu : {}
   ////// if (m.chat in conn.berbu) return m.reply ('Masih ada yang melakukan perburuan disini, tunggu sampai selesai!!')
   ///// else conn.berbu[m.chat] = true
            if (new Date - global.db.data.users[m.sender].lastberbru > 300000) {
            let armor = global.db.data.users[m.sender].armor
            let rubah = global.db.data.users[m.sender].rubah
            let kuda = global.db.data.users[m.sender].kuda
            let kucing = global.db.data.users[m.sender].kucing
            let ____health = `${Math.floor(Math.random() * 50)}`.trim()
            let ___health = (____health * 1)
            let kucingnya = (kucing == 0? 0 : '' || kucing == 1 ? 5 : '' || kucing == 2 ? 10 : '' || kucing == 3 ? 15 : '' || kucing == 4 ? 21 : ''  || kucing == 5 ? 30 : '')
            let armornya = (armor == 0 ? 0 : '' || armor == 1 ? 5 : '' || armor == 2 ? 10 : '' || armor == 3 ? 15 : '' || armor == 4 ? 21 : '' || armor == 5 ? 30 : '')
            let __health = (___health > 60 ? ___health - kucingnya - armornya : ___health)
            let healt = (kucing == 0 && armor == 0 ? pickRandom(['100', '99', '98', '97', '96', '95', '94', '93', '92', '91', '90']) : kucing > 0 && armor > 0 ? __health : ___health)
            let ____stamina = `${Math.floor(Math.random() * 50)}`.trim()
            let ___stamina = (____stamina * 1)
            let __stamina = (___stamina > 60 ? ___stamina - kucingnya - armornya : ___stamina)
            let stamina = (kucing == 0 && armor == 0 ? pickRandom(['100', '99', '98', '97', '96', '95', '94', '93', '92', '91', '90']) : kucing > 0 && armor > 0 ? __stamina : ___stamina)
            ///HEWAN YG BERHASIL DIBURU\\
          let sapi = `${Math.floor(Math.random() * 20)}`.trim() 
        let babi = `${Math.floor(Math.random() * 15)}`.trim() 
        let ayam = `${Math.floor(Math.random() * 25)}`.trim() 
        let banteng = `${Math.floor(Math.random() * 30)}`.trim() 
        let unta = `${Math.floor(Math.random() * 39)}`.trim() 
        let keledai = `${Math.floor(Math.random() * 44)}`.trim() 
        let domba = `${Math.floor(Math.random() * 60)}`.trim() 
        let kambing = `${Math.floor(Math.random() * 50)}`.trim() 
            ///m.reply(`Sedang Berburu.....`)
           let ber = `Nyawamu yg berkurang *-${healt * 1}* Akibat Diserang hewan ataupun terjatuh
Stamina mu juga berkurang -${stamina}

_Hewan yang kamu berhasil diburu:_
🐄Sapi: ${sapi}      🐑domba:${domba}
🐖Babi: ${babi}      🐑Kambing ${kambing}
🐓Ayam: ${ayam}
🐂Banteng: ${banteng}
🐪Unta: ${unta}
🐪Keledai: ${keledai}
`.trim()
setTimeout(() => {
conn.send2Button( m.chat, ber, wm, 'Again', '.berburu', 'inventory', '.inv', m)
}, 23000) 

                     setTimeout(() => {
                     m.reply(`*Berhasil Menangkap hewan....*`)
                      }, 20000)
                      
                      setTimeout(() => {
                     m.reply(`*Bergerak Menangkap hewan...*`)
                      }, 18000)
                      
                      setTimeout(() => {
                     m.reply(`*Memantau Pergerakan Hewan....*`)
                      }, 12000)
                      
                      setTimeout(() => {
                     m.reply(`*Mulai Berburu...*`)
                      }, 0)
                      //
                        global.db.data.users[m.sender].healt -= healt * 1
                        global.db.data.users[m.sender].stamina -= stamina * 1
                        global.db.data.users[m.sender].sapi += sapi * 1
                        global.db.data.users[m.sender].banteng += banteng * 1
                        global.db.data.users[m.sender].ayam += ayam * 1
                        global.db.data.users[m.sender].babi += babi * 1
                        global.db.data.users[m.sender].lastberbru = new Date * 1
                         } else conn.sendButton(m.chat, `Anda sudah berburu untuk kelangsungan hidup dan kelelahan silahkan coba *${timers}* lagi`, `Games Rpg Bot`, 'Go back', '.gmenu')
               } else conn.send2Button(m.chat, `Minimal 50 health♥️ dan 60 stamina untuk bisa berburu`, wm, 'Potion', '.use potion 1','Go back Menu','.menu')
               } else conn.send2Button(m.chat, `Minimal 60 Stamina untuk bisa berburu`, wm, 'Makan', '.makam ayamb 2','Go back Menu','.menu')
                } catch (e) {
        console.log(e)
        conn.reply(m.chat, 'Error', m)
        if (owner) {
            let file = require.resolve(__filename)
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, file + ' error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
}
handler.help = ['berburu']
handler.tags = ['rpg']
handler.command = /^(berburu|buru)$/i 
handler.register = false
module.exports = handler
//JANGAN DIUBAH YA YG DIBAWAH
function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
