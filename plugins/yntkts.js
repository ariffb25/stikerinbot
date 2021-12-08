let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './src/Audio/yntkts.m4a'
conn.sendFile(m.chat, vn, 'yntkts.m4a', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /(Yntkts|tahu)/
handler.command = new RegExp
module.exports = handler