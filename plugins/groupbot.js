let handler = async m => m.reply(`
*Grup Official LUCU-BOT*

https://chat.whatsapp.com/CUCsW6BWfmJLJwJgPQIaKM

\`\`\`ramein ya kak 🥰\`\`\`
`.trim())
handler.help = ['groupbot']
handler.tags = ['info', 'main', 'grup']
handler.command = /^g(c|ro?up)bot$/i

module.exports = handler
