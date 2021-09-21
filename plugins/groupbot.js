let handler = async m => m.reply(`
*Grup Bot Official LUCU-BOT*

https://chat.whatsapp.com/CUCsW6BWfmJLJwJgPQIaKM
`.trim())
handler.help = ['groupbot', 'grupbot']
handler.tags = ['info', 'main', 'grup']
handler.command = /^g(c|ro?up)bot$/i

module.exports = handler
