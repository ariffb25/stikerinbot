let fetch = require('node-fetch')
let handler = async (m, { usedPrefix, command }) => {
    try {
        let res = await fetch('https://api.quran.sutanlab.id/surah')
        let json = await res.json()
        let list_id = json.data.map((v, i) => `${i + 1}. ${v.name.transliteration.id}`).join('\n')
        let list_en = json.data.map((v, i) => `${i + 1}. ${v.name.transliteration.en}`).join('\n')
        contoh = `contoh:\n*${usedPrefix}surah An-Nisaa 1*\n*${usedPrefix}ayta An-Nisaa 1*\n*${usedPrefix}tafsir An-Nisaa 1*\n*${usedPrefix}alquran 1 1*\n\nharus sesuai yang ada pada daftar surah dibawah ini, dan 1 aja ayatnya\n\n`
        m.reply(contoh + list_en + '\n\n' + list_id)
    } catch (e) {
        throw `_*Error!*_`
    }
}
handler.help = ['daftarsurah']
handler.tags = ['islam']
handler.command = /^((list|daftar)sura(t|h))$/i
module.exports = handler