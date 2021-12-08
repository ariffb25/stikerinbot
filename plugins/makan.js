let { MessageType } = require('@adiwajshing/baileys')
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) =>  {
    let msgerror = (pickRandom(['Error', 'astagfirullah error', 'Nice Error', 'Salah format keknya :v', 'error bro', 'Kocak error :v', 'wtf error :v', 'Ciaaa error', 'error cuyy', 'dahlah (emot batu) error']))
let healt = global.db.data.users[m.sender].healt
 let kucing = global.db.data.users[m.sender].kucing
        let snyawa = (kucing == 0 ? 40 : '' || kucing == 1 ? 45 : '' || kucing == 2 ? 50 : '' || kucing == 3 ? 55 : '' || kucing == 4 ? 60 : '' || kucing == 5 ? 65 : '' || kucing == 6 ? 70 : '' || kucing == 7 ? 75 : '' || kucing == 8 ? 80 : '' || kucing == 9 ? 85 : '' || kucing == 10 ? 90 : '')
         
        let spertamina= (kucing == 0 ? 40 : '' || kucing == 1 ? 45 : '' || kucing == 2 ? 50 : '' || kucing == 3 ? 55 : '' || kucing == 4 ? 60 : '' || kucing == 5 ? 65 : '' || kucing == 6 ? 70 : '' || kucing == 7 ? 75 : '' || kucing == 8 ? 80 : '' || kucing == 9 ? 85 : '' || kucing == 10 ? 90 : '')
try {
        if (/makan|eat/i.test(command)) {
        const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
        if (args[0] === 'ayamg') {
        	
        if (global.db.data.users[m.sender].stamina < 100) {
        	if (global.db.data.users[m.sender].ayamg >= count * 1) {
                            global.db.data.users[m.sender].ayamg -= count * 1
                           ////// global.db.data.users[m.sender].healt += snyawa * count
                            global.db.data.users[m.sender].stamina += spertamina * count
                            conn.reply(m.chat, `Nyam nyam`, m)
                            } else conn.reply(m.chat, `Ayam mu kurang weh` ,m)
        	////} else conn.reply(m.chat, `dah kenyang lol`, m)
        } else conn.reply( m.chat, `wes kebek weh`, m)
        } else  if (args.length > 2 && args[0] === !'potion') m.reply('cuman bisa gunain ayamgoreng')
        if (args[0] === 'ayamb') {
        	////if (global.db.data.users[m.sender].healt < 100) {
        if (global.db.data.users[m.sender].stamina < 100) {
        	if (global.db.data.users[m.sender].ayamb >= count * 1) {
                            global.db.data.users[m.sender].ayamb -= count * 1
                           ///// global.db.data.users[m.sender].healt += snyawa * count
                            global.db.data.users[m.sender].stamina += spertamina * count
                            conn.reply(m.chat, `Nyam nyam`, m)
                            } else conn.reply(m.chat, `Ayam mu kurang weh` ,m)
        	/////} else conn.reply(m.chat, `dah kenyang lol`, m)
        } else conn.reply( m.chat, `wes kebek weh`, m)
        } else  if (args.length > 2 && args[0] === !'potion') m.reply('cuman bisa gunain ayamgoreng')
        if (args[0] === 'leleb') {
        	////if (global.db.data.users[m.sender].healt < 100) {
        if (global.db.data.users[m.sender].stamina < 100) {
        	if (global.db.data.users[m.sender].leleb >= count * 1) {
                            global.db.data.users[m.sender].leleb -= count * 1
                           ///// global.db.data.users[m.sender].healt += snyawa * count
                            global.db.data.users[m.sender].stamina += spertamina * count
                            conn.reply(m.chat, `Nyam nyam`, m)
                            } else conn.reply(m.chat, `lele bakar mu kurang weh` ,m)
        	/////} else conn.reply(m.chat, `dah kenyang lol`, m)
        } else conn.reply( m.chat, `wes kebek weh`, m)
        } else  if (args.length > 2 && args[0] === !'potion') m.reply('cuman bisa gunain ayamgoreng')
        }
     } catch (e) {
        console.log(e)
        conn.reply(m.chat, msgerror, m)
        if (DevMode) {
            let file = require.resolve(__filename)
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, file + ' error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
  }
  
handler.help = ['use <item> <jumlah>', 'heal']
handler.tags = ['rpg']
handler.command = /^(makan|eat)$/i
handler.register = true
module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
