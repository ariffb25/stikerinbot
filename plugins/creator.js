const { MessageType } = require('@adiwajshing/baileys')
const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
  let name = 'ariffb'
  number = owner[0].replace(/[^0-9]/g, '')
  let njid = number + '@s.whatsapp.net'
  let onW = await this.isOnWhatsApp(njid) || { isBusiness: false }

  let name2 = 'andrian'
  number2 = owner[1].replace(/[^0-9]/g, '')
  let njid2 = number2 + '@s.whatsapp.net'
  let onW2 = await this.isOnWhatsApp(njid2) || { isBusiness: false }

  this.sendMessage(m.chat, {
    contacts: [{
      displayname: name, vcard: `
BEGIN:VCARD
VERSION:3.0
N:;${name.replace(/\n/g, '\\n')};;;
FN:${name.replace(/\n/g, '\\n')}
TEL;type=CELL;type=VOICE;waid=${number}:${PhoneNumber('+' + number).getNumber('international')}${onW.isBusiness ? `
X-WA-BIZ-NAME:${(this.contacts[njid].vname || this.getName(njid)).replace(/\n/, '\\n')}
X-WA-BIZ-DESCRIPTION:${((await this.getBusinessProfile(njid)).description || '').replace(/\n/g, '\\n')}
` : ''}
END:VCARD
`.trim()
    }, {
      displayname: name2, vcard: `
BEGIN:VCARD
VERSION:3.0
N:;${name2.replace(/\n/g, '\\n')};;;
FN:${name2.replace(/\n/g, '\\n')}
TEL;type=CELL;type=VOICE;waid=${number2}:${PhoneNumber('+' + number2).getNumber('international')}${onW2.isBusiness ? `
X-WA-BIZ-NAME:${(this.contacts[njid2].vname || this.getName(njid2)).replace(/\n/, '\\n')}
X-WA-BIZ-DESCRIPTION:${((await this.getBusinessProfile(njid2)).description || '').replace(/\n/g, '\\n')}
` : ''}
END:VCARD
`.trim()
    }]
  }, MessageType.contactsArray, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler