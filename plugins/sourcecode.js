let handler = async m => m.reply(`
*Bot ini menggunakan script github:*

https://github.com/raselcomel

\`\`\`Fork\`\`\`
`.trim())
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^s(c|cript?|ourcecode)$/i

module.exports = handler
