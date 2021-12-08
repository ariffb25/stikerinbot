let handler = async(m, {conn, usedPrefix, args, command}) => {

let user = global.db.data.users[m.sender]

if (!('created' in user)) return m.reply('anda tidak memiliki kerajaan')
if (!('created' in user)) return m.reply('Itu adalah aliansi kamu kamu tidak dapat menyerangnya')

let who = m.mentionedJid ? m.mentionedJid[0] : (args[0].replace(/[@ .+-]/g, '').replace(' ', '') + '@s.whatsapp.net')

let count = args[1] && args[1].length > 0 ? Math.min(100, Math.max(parseInt(args[1]), 1)) : Math.min(1)

if (!who || !args[0]) return m.reply('tag yg ingin di attack')

let enemy = global.db.data.users[who]

if (!('created' in enemy)) return m.reply('yang anda tag tidak memiliki kerajaan')

let trof = '60'

let userTroops = user.troops

let enemyTroops = enemy.troops

let enemyGold = enemy.emas
let enemyWood = enemy.kayu
let enemyStone = enemy.batu

if (enemy.shield == true) return m.reply('shield player tersebut aktif dan tidak dapat diserang')


if (user.troops >= count * 1) {
setTimeout(() => {
if (count * 1 > enemy.troops) {

global.db.data.users[m.sender].troops -= global.db.data.users[who].troops

global.db.data.users[who].troops -= count * 1

if (enemy.troops < 0) global.db.data.users[who].troops = 0

m.reply(`${m.sender.replace(/@.+/, '')} berhasil menyerang dan memenangkan peperangan, tersisa ${count - global.db.data.users[who].troops} yang berhasil survive dan kembali ke kerajaan, serta mendapatkan seluruh SDA dari user yang diserang\n\n🏆Trofi: ${trof}`)

global.db.data.users[m.sender].emas += enemyGold

global.db.data.users[m.sender].trofi += trof

global.db.data.users[m.sender].kayu += enemyWood

global.db.data.users[m.sender].batu += enemyStone

global.db.data.users[who].emas= 0

global.db.data.users[who].kayu = 0

global.db.data.users[who].batu = 0

}

if (count * 1 < enemy.troops) {

global.db.data.users[m.sender].troops -= global.db.data.users[who].troops

global.db.data.users[who].troops -= count * 1

global.db.data.users[who].trofi -= trof
global.db.data.users[m.sender].trofi += trof

m.reply(`${m.sender.replace(/@.+/, '')} menyerang dan kalah dalam peperangan, 
semua troops mati dalam peperangan\nDan anda tidak mendapatkan Trofi🏆`)
    }
}, 20000)

setTimeout(() => {
	m.reply(`
Memulai Peperangan⚔️

@${m.sender.replace(/@.+/, '')} vs
@${who.split("@")[0]}
`)
}, 10000)

setTimeout(() => {
	m.reply(`${m.sender.replace(/@.+/, '')}  mulai akan menyerang kerajaan @${who.split("@")[0]} dengan pasukan ${count}`)
	}, 0)

} else m.reply('troops kamu tidak cukup untuk menyerang target')


}
handler.help = ['attack']
module.exports = handler

handler.command = /^(attack|serang)/i









