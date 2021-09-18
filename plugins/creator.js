/*
* Made by Rizxyu
* Hehehehehhehehe
*/
let { MessageType }= require('@adiwajshing/baileys')
let { contactsArray } = MessageType
let handler = function (m, { conn }) {
   conarray = []
ownerContact = ['0']//Put your number here
  for (let i of ownerContact.map(v => v + '@s.whatsapp.net')) {
 vname = conn.contacts[i] != undefined ? conn.contacts[i].vname || conn.contacts[i].notify : undefined
  conarray.push({
"displayName": 'peler',//put your name
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${conn.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
}
conn.sendMessage(m.chat, {
"displayName": `${conarray.length} kontak`,
"contacts": conarray 
}, 'contactsArrayMessage', { quoted: m })
conn.sendMessage(m.chat, 'This Contact Owner',MessageType.text, { quoted: m} )
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
