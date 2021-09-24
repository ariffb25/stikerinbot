let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => { 
let paus = global.db.data.users[m.sender].paus
let kepiting = global.db.data.users[m.sender].kepiting
let gurita = global.db.data.users[m.sender].gurita
let cumi = global.db.data.users[m.sender].cumi
let buntal = global.db.data.users[m.sender].buntal
let dory = global.db.data.users[m.sender].dory
let lumba = global.db.data.users[m.sender].lumba
let lobster = global.db.data.users[m.sender].lobster
let hiu = global.db.data.users[m.sender].hiu
let udang = global.db.data.users[m.sender].udang
let ikan = global.db.data.users[m.sender].ikan
let orca = global.db.data.users[m.sender].orca

let zer = `
*《 ISI KOLAM MU 》*
    
 *🐋 = [ ${paus} ] Ekor Paus*
 *🦀 = [ ${kepiting} ] Ekor Kepiting*
 *🐙 = [ ${gurita} ] Ekor Gurita*
 *🦑 = [ ${cumi} ] Ekor Cumi Cumi*
 *🐡 = [ ${buntal} ] Ekor Buntal*
 *🐠 = [ ${dory} ] Ekor Dory*
 *🐬 = [ ${lumba} ] Ekor Lumba Lumba*
 *🦞 = [ ${lobster} ] Ekor Lobster*
 *🦈 = [ ${hiu} ] Ekor Hiu*
 *🦐 = [ ${udang} ] Ekor Udang*
 *🐟 = [ ${ikan} ] Ekor Ikan*
 *🐳 = [ ${orca} ] Ekor Orca*   
 `.trim()
     conn.reply(m.chat, zer, m)
} 
handler.help = ['kolam']
handle.tags = ['rpg']
handler.customPrefix = ['kolam']
handler.command = new RegExp
handler.register = true

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
