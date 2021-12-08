const axios = require('axios')

let handler = async(m, { conn, text }) => {

    if (!text) throw '_Masukkan daerahmu!_'
    await m.reply(global.wait)
    new Promise((resolve, reject) => {
        axios.get('https://tobz-api.herokuapp.com/api/jadwalshalat?q=' + encodeURIComponent(text) + '&apikey=Tobzzz17')
            .then((res) => {

                let caption = `*「 Jadwal Salat 」*\n\n*Isya:* ${res.data.result.isha}\n*Imsak:* ${res.data.result.imsak}\n*Subuh:* ${res.data.result.subuh}\n*Zuhur:* ${res.data.result.dzuhur}\n*Asar:* ${res.data.result.ashar}\n*Magrib:* ${res.data.result.maghrib}\n*Matahari Terbit:* ${res.data.result.sunrise}\n*Matahari Tenggelam:* ${res.data.result.sunset}\n*Tengah Malam:* ${res.data.result.midnight}`
                conn.reply(m.chat, caption, m)
            })
            .catch((err) => {
                reject(err)
            })
    })
}
handler.help = ['jadwalsolat <daerahmu>']
handler.tags = ['islamic']
handler.command = /^(jadwalsh?[ao]lat)$/i
handler.register = true
module.exports = handler