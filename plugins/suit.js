let handler = async (m, { text, usedPrefix }) => {
    let salah = `Pilihan yang tersedia\n\ngunting, kertas, batu\n\n${usedPrefix}suit gunting\n\nkasih spasi!`
    if (!text) throw salah
    var astro = Math.random()

    if (astro < 0.34) {
        astro = 'batu'
    } else if (astro > 0.34 && astro < 0.67) {
        astro = 'gunting'
    } else {
        astro = 'kertas'
    }

    //menentukan rules
    if (text == astro) {
        m.reply(`Seri!\nkamu: ${text}\nBot: ${astro}`)
    } else if (text == 'batu') {
        if (astro == 'gunting') {
            global.DATABASE._data.users[m.sender].uang += 1000
            m.reply(`Kamu menang! +Rp1000\nKamu: ${text}\nBot: ${astro}`)
        } else {
            m.reply(`Kamu kalah!\nkamu: ${text}\nBot: ${astro}`)
        }
    } else if (text == 'gunting') {
        if (astro == 'kertas') {
            global.DATABASE._data.users[m.sender].uang += 1000
            m.reply(`Kamu menang! +Rp1000\nKamu: ${text}\nBot: ${astro}`)
        } else {
            m.reply(`Kamu kalah!\nkamu: ${text}\nBot: ${astro}`)
        }
    } else if (text == 'kertas') {
        if (astro == 'batu') {
            global.DATABASE._data.users[m.sender].uang += 1000
            m.reply(`Kamu menang! +Rp1000\nKamu: ${text}\nBot: ${astro}`)
        } else {
            m.reply(`Kamu kalah!\nkamu: ${text}\nBot: ${astro}`)
        }
    } else {
        throw salah
    }
}
handler.help = ['suit']
handler.tags = ['RPG']
handler.command = /^(suit)$/i
handler.register = true
handler.limit = false

module.exports = handler
