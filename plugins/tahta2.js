let { spawn } = require('child_process')
let fs = require('fs')

let handler = async (m, { text, usedPrefix, command }) => {
  if (text) {
    try {
      const splitText = text.replace(/(\S+\s*){1,10}/g, '$&\n')
      const fixHeight = 'HARTA\nTAHTA\n' + splitText.toUpperCase()
      spawn('convert', [
        '-gravity',
        'Center',
        '-size',
        '1280x1280',
        'xc:black',
        '-font',
        './src/font/hartatahta.ttf',
        '-pointsize',
        '200',
        '-tile',
        './src/Aesthetic/harta.jpg',
        '-annotate',
        '+20+80',
        fixHeight,
        '-wave',
        '10x175',
        './src/Aesthetic/tahta.jpg'
      ])
        .on('error', () => m.reply(`_*Error!*_`))
        .on('exit', () => {
          conn.sendFile(m.chat, './src/Aesthetic/tahta.jpg', 'harta5.jpg', '© stikerin', m)
          fs.unlinkSync('./src/Aesthetic/tahta.jpg')
        })
    } catch (e) {
      console.log(e)
      throw eror
    }
  } else throw `contoh:\n${usedPrefix + command} ariffb`
}
handler.help = ['harta2'].map(v => v + ' <teks>')
handler.tags = ['tools']
handler.command = /^(harta|ht|tahta)2$/i

handler.limit = 1

module.exports = handler 