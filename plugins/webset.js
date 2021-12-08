let handler = async m => m.reply(`
┏━━°❀❬ *TQTO DEV API* ❭❀°━━┓
┣➥ *Bany :* https://api-self.herokuapp.com 
┣➥ *Videfikri:* https://videfikri.com/
┣➥ *layscoders:* https://leyscoders-api.herokuapp.com/
┣➥ *Caliph:* https://recoders-area.herokuapp.com/
┣➥ *Zeks:* https://api.zeks.xyz/api/
┣➥ *lays:* https://leyscoders-api.herokuapp.com/
┃ 「 *Pesan Dari My Owner* 」
┃ > *Trimakasih Telah Membantu*
┃ *Jalanya Bot Ini :')*
┗━━━━━━━━━━━━━━━━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['websetapi']
handler.tags = ['info']
handler.command = /^websetapi$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
