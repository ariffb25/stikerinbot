let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './src/Audio/robot.m4a'
conn.sendFile(m.chat, vn, 'robot.m4a', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /Bot/
handler.command = new RegExp
module.exports = handler