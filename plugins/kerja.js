let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, {conn, command, args, usedPrefix}) => {
let type = (args[0] || '').toLowerCase()
let users = global.db.data.users[m.sender]
let time = global.db.data.users[m.sender].lastjb + 300000
//let __timers = (new Date - global.db.data.users[m.sender].lastkerja)
   // let _timers = (0 - __timers)
   // let timers = clockString(_timers) 
    //JANGAN DI OTAK ATIK
//THIS PLUGINS BY RIZKY
//PEMBATAS
let penumpan = ['mas mas','bapak bapak','cewe sma','bocil epep','emak emak']
let penumpang = penumpan[Math.floor(Math.random() * penumpan.length)]
let daganga = ['wortel','sawi','selada','tomat','seledri','cabai','daging','ikan','ayam']
let dagangan = daganga[Math.floor(Math.random() * daganga.length)]
let pasie = ['sakit kepala','cedera','luka bakar','patah tulang']
let pasien = pasie[Math.floor(Math.random() * pasie.length)]
let pane = ['Wortel','Kubis','stowbery','teh','padi','jeruk','pisang','semangka','durian','rambutan']
let panen = pane[Math.floor(Math.random() * pane.length)]
let bengke = ['mobil','motor','becak','bajai','bus','angkot','becak','sepeda']
let bengkel = bengke[Math.floor(Math.random() * bengke.length)]
let ruma = ['Membangun Rumah','Membangun Gedung','Memperbaiki Rumah','Memperbaiki Gedung','Membangun Fasilitas Umum','Memperbaiki Fasilitas Umum']
let rumah = ruma[Math.floor(Math.random() * ruma.length)]

let pppecat = ['Ruko Kebakaran','LO NGOCOK DIDEPAN UMUM','Males Malesan','Ngew istrinya yg punya ruko']
let alasanpecat = pppecat[Math.floor(Math.random() * pppecat.length)]
let ddppecat = ['Bakar Pasien','Jual Organ Dalem ke Lapak ilegal','serinv telat']
let alasanpasien = ddppecat[Math.floor(Math.random() * ddppecat.length)]
//Uang
let uangm = Math.floor(Math.random() * 10) + 10000
let duit = Math.floor(Math.random() * 20) + 20000
let duitm = Math.floor(Math.random() * 50) + 50000
let duitd = Math.floor(Math.random() * 62) + 62000
let duitr = Math.floor(Math.random() * 20) + 40000
let duitk = Math.floor(Math.random() * 70) + 70000
//ANJAY
let _pecat= `${pickRandom(['1', '1', '1', '1'])}`
            let pecat = (_pecat * 1)
            let ppecat = `KAMU KENA PECAT KARNA KAMU ${alasanpecat}`
let _dpecat = `${pickRandom(['1', '0', '0', '1'])}`
            let dpecat = (_dpecat * 1)
            let dppecat = `KAMU DI PECAT KARNA ${alasanpasien}`
//GAK RAPIH G GANTENG
//PEMBATAS\\
let kerjam = `
_✒️contoh ketik:_
${usedPrefix+command} ojek
_Untuk Claim Pekerjaan ketik:_
${usedPrefix}selectjob ojek

*📝List Kerja:*
🎐Ojek
🎐 Dokter
🎐Petani
🎐 Pedagang
🎐 Montir
🎐 Kuli

*📌Jika Fitur Ini eror laporkan owner*
`.trim()
if (/kerjadulu|kerja|work/i.test(command)) {
switch(type) {
	case 'ojek':
	if (global.db.data.users[m.sender].ojek == false) throw 'ini bukan tugas kamu atau kamu pengangguran!'
if (new Date - global.db.data.users[m.sender].lastkerja < 300000)  throw `Kamu sudah bekerja\nSaatnya istirahat selama ${msToTime(time - new Date())}`
	global.db.data.users[m.sender].money += uangm
global.db.data.users[m.sender].lastkerja = new Date * 1
	m.reply(`Kamu Sudah Mengantarkan *${penumpang}*\nDan mendapatkan uang senilai *Rp ${uangm}*`)
break
     case 'pedagang':
     if (global.db.data.users[m.sender].pedagang == false) throw 'ini bukan tugas kamu atau kamu pengangguran!'
if (new Date - global.db.data.users[m.sender].lastkerja < 300000)  throw `Kamu sudah bekerja\nSaatnya istirahat selama ${msToTime(time - new Date())}`
	global.db.data.users[m.sender].money += duit
global.db.data.users[m.sender].lastkerja = new Date * 1
	m.reply(`Ada pembeli yg membeli *${dagangan}*\nDan mendapatkan uang senilai *Rp ${duit}*`)
	if (pecat > 1 ) {
                   global.db.data.users[m.sender].pedagang -= pecat * 1
                   m.reply(ppecat)
            }
break
      case 'dokter':
 if (global.db.data.users[m.sender].dokter == false) throw 'ini bukan tugas kamu atau kamu pengangguran!'
if (new Date - global.db.data.users[m.sender].lastkerja < 300000)  throw `Kamu sudah bekerja\nSaatnya istirahat selama ${msToTime(time - new Date())}`
	global.db.data.users[m.sender].money += duitm
global.db.data.users[m.sender].lastkerja = new Date * 1
	m.reply(`Kamu menyembuhkan pasien *${pasien}*\nDan mendapatkan uang senilai *Rp ${duitm}*`)
break
       case 'petani':
if (global.db.data.users[m.sender].petani == false) throw 'ini bukan tugas kamu atau kamu pengangguran!'
if (new Date - global.db.data.users[m.sender].lastkerja < 300000)  throw `Kamu sudah bekerja\nSaatnya istirahat selama ${msToTime(time - new Date())}`
	global.db.data.users[m.sender].money += uangm
global.db.data.users[m.sender].lastkerja = new Date * 1
	m.reply(`${panen} Sudah Panen\nDan Kamu menjualnya dan mendapatkan uang senilai Rp ${duitd}`)
break
     case 'montir':
 if (global.db.data.users[m.sender].montir == false) throw 'ini bukan tugas kamu atau kamu pengangguran!'
if (new Date - global.db.data.users[m.sender].lastkerja < 300000)  throw `Kamu sudah bekerja\nSaatnya istirahat selama ${msToTime(time - new Date())}`
	global.db.data.users[m.sender].money += duitr
global.db.data.users[m.sender].lastkerja = new Date * 1
	m.reply(`Kamu Baru saja mendapatkan pelanggan dan memperbaiki *${bengkel}*\nDan kamu mendapatkan uang senilai *Rp ${duitr}*`)
break
      case 'kuli':
 if (global.db.data.users[m.sender].kuli == false) throw 'ini bukan tugas kamu atau kamu pengangguran!'
if (new Date - global.db.data.users[m.sender].lastkerja < 300000)  throw `Kamu sudah bekerja\nSaatnya istirahat selama ${msToTime(time - new Date())}`
	global.db.data.users[m.sender].money += duitk
global.db.data.users[m.sender].lastkerja = new Date * 1
	m.reply(`Kamu baru saja selesai ${rumah}\nDan condapatkan uang senilai *Rp ${duitk}*`)
break
default:
                        return conn.sendButton( m.chat, kerjam, `Games Bot`,`Back`,'.menu')
                }
                }
                
                }
///AKSJDDJ
handler.help = ['kerja','work']
handler.tags = ['pekerjaan']
handler.command = /^kerja$/i 

module.exports = handler
//JANGAN DIUBAH YA YG DIBAWAH
function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " jam " + minutes + " menit"
}