let fetch = require("node-fetch")
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn}) => {
  try {
  let res = await fetch('https://hardianto-chan.herokuapp.com/api/anime/random?sfw=kiss&apikey=hardianto')
  let json = await res.json()
  let { 
result
} = json
let stiker = await sticker(null, result, 'Kiss', `${botol}`)
  conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m
  })
 } catch (e) {
  }
}
handler.help = ['kiss']
handler.tags = ['expression']
handler.command = /^kiss/i

module.exports = handler

let botol = global.botwm