let handler = async (m, { conn, command, text }) => {
  m.reply(`
*Pertanyaan:* ${command} ${text}?
*Jawaban:* ${Math.floor(Math.random() * 10)} ${conn.pickRandom(['detik', 'menit', 'jam', 'hari', 'minggu', 'bulan', 'tahun', 'dekade', 'abad'])} lagi ...
`.trim())
}
handler.help = ['', 'kah'].map(v => 'kapan' + v + ' <pertanyaan>')
handler.tags = ['kerang']
handler.command = /^kapan(kah)?$/i

module.exports = handler 