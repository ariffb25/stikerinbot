//follow gh sy dong
let cp = require('child_process')
let { promisify } = require('util')
let fs = require('fs')
let { MessageType } = require('@adiwajshing/baileys')
let { performance } = require('perf_hooks')
let exec = promisify(cp.exec).bind(cp)
let handler = async (m, { conn, isOwner, command, text }) => {
  if (global.conn.user.jid != conn.user.jid) return /*conn.reply(m.chat, util.format(...args), m)*/
  let fetch = require('node-fetch')
await conn.sendMessage(m.chat, '```Executing...```', 'conversation', { thumbnail:  await (await fetch('https://i.ibb.co/H2xpv56/elaina2.jpg')).buffer(), contextInfo: { forwardingScore: '508', isForwarded: true, stanzaId: 'xxx', participant: '0@s.whatsapp.net', quotedMessage: { viewOnceMessage: { message: { imageMessage: {viewOnce: true}}}}, remoteJid: 'status@broadcast' }})
  let o
  try {
    o = await exec(command.trimStart()  + ' ' + text.trimEnd())
  } catch (e) {
    o = e
  } finally {
    let { stdout, stderr } = o
    if (stdout.trim())  /*conn.reply(m.chat, util.format(...args), m)*/ 
await conn.sendMessage(m.chat, stdout, 'conversation', { thumbnail:  await (await fetch('https://i.ibb.co/H2xpv56/elaina2.jpg')).buffer(), contextInfo: { forwardingScore: '508', isForwarded: true, stanzaId: 'xxx', participant: '0@s.whatsapp.net', quotedMessage: { viewOnceMessage: { message: { imageMessage: {viewOnce: true}}}}, remoteJid: 'status@broadcast' }})
    if (stderr.trim())  /*conn.reply(m.chat, util.format(...args), m)*/ 
await conn.sendMessage(m.chat, stderr, 'conversation', { thumbnail:  await (await fetch('https://i.ibb.co/H2xpv56/elaina2.jpg')).buffer(), contextInfo: { forwardingScore: '508', isForwarded: true, stanzaId: 'xxx', participant: '0@s.whatsapp.net', quotedMessage: { viewOnceMessage: { message: { imageMessage: {viewOnce: true}}}}, remoteJid: 'status@broadcast' }})
  }
}
handler.customPrefix = /^[$] /
handler.command = new RegExp
handler.rowner = true
module.exports = handler
