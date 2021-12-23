let handler = async (m, { conn }) => {
    let user = db.data.users[m.sender]
    if (user.warning == 0) throw 'Kamu tidak memiliki warning!'

    let waktu = user.lastIstigfar + 180000
    if (new Date - user.lastIstigfar < 180000) throw `Kamu bisa menggunakan perintah ini lagi setelah ${conn.msToTime(waktu - new Date())}`
    user.warning -= 1
    m.reply(`Warning: ${user.warning} / 5`)
    user.lastIstigfar = new Date * 1
}
handler.command = /^(astagh?fir(ullah)?|maaf)$/i

handler.limit = 1

module.exports = handler 