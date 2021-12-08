
let handler = async (m, {conn, command, args, usedPrefix}) => {
	
let user = global.db.data.users[m.sender]


let __timers = (new Date - global.db.data.users[m.sender].lastsda)
        let _timers = (480000 - __timers) 
        let timers = clockString(_timers)

if ( user.created = false ) throw 'g punya kerajaan'

let ems = `${Math.floor(Math.random() * 50000)}`.trim() 
let emd = `${Math.floor(Math.random() * 50000)}`.trim() 
let ema = `${Math.floor(Math.random() * 50000)}`.trim() 
let emt = `${Math.floor(Math.random() * 50000)}`.trim() 

let tup =    `${Math.floor(Math.random() * 25)}`.trim() 
let lvp = `${Math.floor(Math.random() * 10)}`

let rply = `Maaf peletonmu tidak cukup`
let khebis = `kamu sudah mengambil Sumber daya dan kamu tidak bisa mengambil nya lagi selama ${timers}`


if (new Date - global.db.data.users[m.sender].lastsda > 480000) {
if ( user.troops > 50 ) {

setTimeout(() => {
                     m.reply(`
⚔️Peletonmu berkurang -${tup}

Sda yg kamu dapatkan♨️
🏅Emas: ${ems}
🌳Kayu: ${emd}
🗿Batu: ${ema}
⛓️besi: ${emt}
🌮Makanan: ${ems}
`)
 }, 480000)
    //                  
setTimeout(() => {
                      }, 280000)
       //               
setTimeout(() => {
	m.reply(`Menemukan ${pickRandom(['Pertambangan','Pertanian','perkebunan'])} dngn level ${lvp}`)
	
	}, 18000)

setTimeout(() => {
                     m.reply(`*Memulai Mencari Sumber daya♨️

dan memakan waktu 8 menit*`)
                      }, 0)
                      
user.lastsda = new Date * 1
user.emas += ems * 1
user.kayu += emd * 1
 user.batu += ema * 1
user.besi += emt * 1
user.makanan += ems * 1
   user.troops -= tup

} else m.reply(rply)
} else m.reply(khebis)
}

handler.command = /^getsda/i

module.exports = handler

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
//HP KONTOL RELOG MULU BANGSAT