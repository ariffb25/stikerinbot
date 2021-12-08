let fetch = require('node-fetch')
let handler = async (m, { text, usedPrefix, isPrems }) => {
    try {
        let res = await fetch('http://zekais-api.herokuapp.com/quoteagamis')
        let json = await res.json()
        m.reply(`${json.quotes}`)
    } catch (e) {
        throw `_*Dalam perbaikan!*_`
    }
}
handler.help = ['quoteislam']
handler.tags = ['islam']
handler.command = /^(q(uotes?)?(islami?|agamis))$/i
module.exports = handler