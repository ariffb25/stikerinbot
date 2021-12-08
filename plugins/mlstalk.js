let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Masukan ID MLmu', m)

        axios.get(`http://lolhuman.herokuapp.com/api/mobilelegend/${text}?apikey=APIKEYMU`).then ((res) => {
                let hasil = `Nama : ${res.data.result}\nID : ${text}`

    conn.reply(m.chat, hasil, m)
        })
}
handler.help = ['mlstalk'].map(v => v + ' <id ml>')
handler.tags = ['stalk']
handler.command = /^(mlstalk)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler
