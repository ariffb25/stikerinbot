let fetch = require('node-fetch')
let handler = async (m, { usedPrefix, command, args }) => {
    if (!args[0]) throw `Pengunaan:
    ${usedPrefix + command} <teks> <angka>
    
Contoh:
${usedPrefix + command} bukhari 1
${usedPrefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
    if (!args[1] || isNaN(args[1])) throw `hadis yang ke berapa?\n\nContoh:\n${usedPrefix + command} muslim 1`
    try {
        let res = await fetch(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
        if (!res.ok) throw eror
        let json = await res.json()
        let { number, arab, id } = json.find(v => v.number == args[1])
        m.reply(`No. ${number}

${arab}

${id}`)
    } catch (e) {
        throw `Tidak ditemukan!`
    }
}
handler.help = ['hadis']
handler.tags = ['quran']
handler.command = /^(hadist?)$/i
module.exports = handler
