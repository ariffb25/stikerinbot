let handler = async m => m.reply(`
┌〔 Donasi • Pulsa 〕
├ Axis [083862083658]
└────

┌〔 Donasi • Emoney 〕
├ Dana [089514791129]
└────
`.trim())
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
