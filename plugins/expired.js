let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text || isNaN(text)) throw `Masukkan angka mewakili jumlah hari !\n*Misal : ${usedPrefix + command} 30*`

    var jumlahHari = 86400000 * text
    var now = new Date() * 1
    if (now < global.db.data.chats[m.chat].expired) global.db.data.chats[m.chat].expired += jumlahHari
    else global.db.data.chats[m.chat].expired = now + jumlahHari
    m.reply(`Berhasil menetapkan hari kadaluarsa untuk ${conn.getName(m.chat)} selama ${text} hari.\n\nHitung Mundur : ${msToDate(global.db.data.chats[m.chat].expired - now)}`)
}
handler.help = ['expired <hari>']
handler.tags = ['owner']
handler.command = /^(expired)$/i
handler.owner = true
module.exports = handler

function msToDate(ms) {
    temp = ms
    days = Math.floor(ms / (24 * 60 * 60 * 1000));
    daysms = ms % (24 * 60 * 60 * 1000);
    hours = Math.floor((daysms) / (60 * 60 * 1000));
    hoursms = ms % (60 * 60 * 1000);
    minutes = Math.floor((hoursms) / (60 * 1000));
    minutesms = ms % (60 * 1000);
    sec = Math.floor((minutesms) / (1000));
    return days + " hari " + hours + " jam " + minutes + " menit";
    // +minutes+":"+sec;
}