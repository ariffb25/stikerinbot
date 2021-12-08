const { MessageType } = require('@adiwajshing/baileys')
const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
  let name = 'ᴛʜᴇ.ꜱᴀᴅ.ʙᴏʏ01'
  number = owner[0].replace(/[^0-9]/g, '')
  let njid = number + '@s.whatsapp.net'
  let onW = await this.isOnWhatsApp(njid) || { isBusiness: false }

  let name2 = 'Bochil Gaming'
  number2 = owner[1].replace(/[^0-9]/g, '')
  let njid2 = number2 + '@s.whatsapp.net'
  let onW2 = await this.isOnWhatsApp(njid2) || { isBusiness: false }
  
  let name3 = 'Kanna Bot'
  number3 = owner[2].replace(/[^0-9]/g, '')
  let njid3 = number3 + '@s.whatsapp.net'
  let onW3 = await this.isOnWhatsApp(njid3) || { isBusiness: false }
  
  let name4 = 'ᵀᵒʰʳᵘ ᴮᴼᵀᶻ'
  number4 = owner[3].replace(/[^0-9]/g, '')
  let njid4 = number4 + '@s.whatsapp.net'
  let onW4 = await this.isOnWhatsApp(njid2) || { isBusiness: false }
  
  let name5 = 'Nurutomo'
  number5 = owner[4].replace(/[^0-9]/g, '')
  let njid5 = number5 + '@s.whatsapp.net'
  let onW5 = await this.isOnWhatsApp(njid2) || { isBusiness: false }
  
  let name6 = 'ariffb'
  number6 = owner[5].replace(/[^0-9]/g, '')
  let njid6 = number6 + '@s.whatsapp.net'
  let onW6 = await this.isOnWhatsApp(njid2) || { isBusiness: false }
  
  let name7 = 'Adi-official'
  number7 = owner[6].replace(/[^0-9]/g, '')
  let njid7 = number7 + '@s.whatsapp.net'
  let onW7 = await this.isOnWhatsApp(njid2) || { isBusiness: false }
  
  let name8 = 'Diablo BOTz'
  number8 = owner[7].replace(/[^0-9]/g, '')
  let njid8 = number8 + '@s.whatsapp.net'
  let onW8 = await this.isOnWhatsApp(njid2) || { isBusiness: false }
  
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
    }, {
      displayname: name3, vcard: `
BEGIN:VCARD
VERSION:3.0
N:;${name3.replace(/\n/g, '\\n')};;;
FN:${name3.replace(/\n/g, '\\n')}
TEL;type=CELL;type=VOICE;waid=${number3}:${PhoneNumber('+' + number3).getNumber('international')}${onW3.isBusiness ? `
X-WA-BIZ-NAME:${(this.contacts[njid3].vname || this.getName(njid3)).replace(/\n/, '\\n')}
X-WA-BIZ-DESCRIPTION:${((await this.getBusinessProfile(njid3)).description || '').replace(/\n/g, '\\n')}
` : ''}
END:VCARD
`.trim()
    }, {
      displayname: name4, vcard: `
BEGIN:VCARD
VERSION:3.0
N:;${name4.replace(/\n/g, '\\n')};;;
FN:${name4.replace(/\n/g, '\\n')}
TEL;type=CELL;type=VOICE;waid=${number4}:${PhoneNumber('+' + number4).getNumber('international')}${onW4.isBusiness ? `
X-WA-BIZ-NAME:${(this.contacts[njid4].vname || this.getName(njid4)).replace(/\n/, '\\n')}
X-WA-BIZ-DESCRIPTION:${((await this.getBusinessProfile(njid4)).description || '').replace(/\n/g, '\\n')}
` : ''}
END:VCARD
`.trim()
    }, {
      displayname: name5, vcard: `
BEGIN:VCARD
VERSION:3.0
N:;${name5.replace(/\n/g, '\\n')};;;
FN:${name5.replace(/\n/g, '\\n')}
TEL;type=CELL;type=VOICE;waid=${number5}:${PhoneNumber('+' + number5).getNumber('international')}${onW5.isBusiness ? `
X-WA-BIZ-NAME:${(this.contacts[njid5].vname || this.getName(njid5)).replace(/\n/, '\\n')}
X-WA-BIZ-DESCRIPTION:${((await this.getBusinessProfile(njid5)).description || '').replace(/\n/g, '\\n')}
` : ''}
END:VCARD
`.trim()
    }, {
      displayname: name6, vcard: `
BEGIN:VCARD
VERSION:3.0
N:;${name6.replace(/\n/g, '\\n')};;;
FN:${name6.replace(/\n/g, '\\n')}
TEL;type=CELL;type=VOICE;waid=${number6}:${PhoneNumber('+' + number6).getNumber('international')}${onW6.isBusiness ? `
X-WA-BIZ-NAME:${(this.contacts[njid6].vname || this.getName(njid6)).replace(/\n/, '\\n')}
X-WA-BIZ-DESCRIPTION:${((await this.getBusinessProfile(njid6)).description || '').replace(/\n/g, '\\n')}
` : ''}
END:VCARD
`.trim()
    }, {
      displayname: name7, vcard: `
BEGIN:VCARD
VERSION:3.0
N:;${name7.replace(/\n/g, '\\n')};;;
FN:${name7.replace(/\n/g, '\\n')}
TEL;type=CELL;type=VOICE;waid=${number7}:${PhoneNumber('+' + number7).getNumber('international')}${onW7.isBusiness ? `
X-WA-BIZ-NAME:${(this.contacts[njid7].vname || this.getName(njid7)).replace(/\n/, '\\n')}
X-WA-BIZ-DESCRIPTION:${((await this.getBusinessProfile(njid7)).description || '').replace(/\n/g, '\\n')}
` : ''}
END:VCARD
`.trim()
    }, {
      displayname: name8, vcard: `
BEGIN:VCARD
VERSION:3.0
N:;${name8.replace(/\n/g, '\\n')};;;
FN:${name8.replace(/\n/g, '\\n')}
TEL;type=CELL;type=VOICE;waid=${number8}:${PhoneNumber('+' + number7).getNumber('international')}${onW8.isBusiness ? `
X-WA-BIZ-NAME:${(this.contacts[njid8].vname || this.getName(njid8)).replace(/\n/, '\\n')}
X-WA-BIZ-DESCRIPTION:${((await this.getBusinessProfile(njid8)).description || '').replace(/\n/g, '\\n')}
` : ''}
END:VCARD
`.trim()
    }]
  }, MessageType.contactsArray, { quoted: m })
  conn.reply(m.chat, `Tuh owner Ku Jangan Galak² Ya >_<, Nanti Ku Banned Nanges`,m)
  }
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler