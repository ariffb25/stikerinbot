let handler = async m => m.reply(`
*Grup Official LUCU-BOT*

https://chat.whatsapp.com/CUCsW6BWfmJLJwJgPQIaKM
`.trim())
handler.help = ['grupbot']
handler.tags = ['info', 'main', 'grup']
handler.command = /^g(c|ro?up)bot$/i

module.exports = handler
