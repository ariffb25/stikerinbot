let fs = require("fs")
let handler = async(m, { conn, args, text, usedPrefix: _p }) => {
 const ftoko = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "6282331033919@s.whatsapp.net" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`./src/profil.jpg`) //Gambarnye
					},
					"title": "tokonya bang", //Kasih namalu 
					"description": "SELF BOT", 
					"currencyCode": "USD",
					"priceAmount1000": "2000",
					"retailerId": "Ghost",
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
//FAKEREPLY TROLI
const ftroli = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 1,
                            status: 1,
                            surface : 1,
                            message: 'anjay', //Kasih namalu
                            orderTitle: 'Bang',
                            thumbnail: fs.readFileSync('./src/profil.jpg'), //Gambarnye
                            sellerJid: '0@s.whatsapp.net'
          
                          }
                        }
                      }
//FAKEREPLY LOCATION
const flokasi = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    locationMessage: {
                    name: 'Russia',
                    jpegThumbnail: fs.readFileSync('./src/profil.jpg')
                          }
                        }
                      }
                      
const floc = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "locationMessage": { "title":"jakarta","h": `aloo`, 'jpegThumbnail': fs.readFileSync('./src/profil.jpg')}}
	}
	
const fliveLoc = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(m.chat  ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "liveLocationMessage": { "caption":"ANTIBOT","h": `aloo`, 'jpegThumbnail': fs.readFileSync('./src/profil.jpg')}}
	}
	const fliveLoc2 = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "liveLocationMessage": { "title": "ANTIBOT","h": `aloo`, 'jpegThumbnail': fs.readFileSync('./src/profil.jpg')}}
	}
//FAKEREPLY KONTAK
 const fcon = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "contactMessage": { "title":"sri","h": `haloo`, 'jpegThumbnail': fs.readFileSync('./src/profil.jpg')}}
	}
	
	const fcona = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "contactsArrayMessage": { "title":"antibot","h": `aloo`, 'jpegThumbnail': fs.readFileSync('./src/profil.jpg')}}
	}
	const bugcon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) }, message: { "contactMessage": { "vcard": ""}}}
//FAKEREPLY DOCUMENT
const fdocs = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    documentMessage: {
                    title: 'Halo bang', 
                    jpegThumbnail: fs.readFileSync('./src/profil.jpg')
                          }
                        }
                      }
//FAKEREPLY VIDEO
const fvideo = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "6282331033919-1625305606@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title":"hallo bang",
                 "h": `Hmm`,
                 'seconds': '99999', 
                 'caption': 'Halo bang',
                 'jpegThumbnail': fs.readFileSync('./src/profil.jpg')
                        }
                       }
	                  }
//FAKEREPLY GROUPINVITE
const fgclink = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6282331033919-1625305606@g.us",
			"inviteCode": "mememteeeekkeke",
			"groupName": "Mengter", 
            "caption": "Halo bang jagoo", 
            'jpegThumbnail': fs.readFileSync('./src/profil.jpg')
		}
	}
}
//FAKEREPLY GIF
const fgif = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "6282331033919-1625305606@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title":"hallo bang",
                 "h": `Hmm`,
                 'seconds': '99999', 
                 'gifPlayback': 'true', 
                 'caption': 'Halo bang',
                 'jpegThumbnail': fs.readFileSync('./src/profil.jpg')
                        }
                       }
	                  } 
//FAKEREPLY TEXT WITH THUMBNAIL
const ftextt = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "6282331033919-1625305606@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text":"hallo bang",
                 "title": `Hmm`,
                 'jpegThumbnail': fs.readFileSync('./src/profil.jpg')
                        }
	                  } 
                     }
//FAKEREPLY VN
const fvn = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "6282331033919-1625305606@g.us" } : {}) 
                },
	 message: { 
		"audioMessage": {
                 "mimetype":"audio/ogg; codecs=opus",
                 "seconds": "${second}",
                 "ptt": "true"
                        }
	                  } 
                     }
                     let tes = await conn.sendMessage(m.chat, `ini bwang`, 'conversation', { sendEphemeral: true, quoted: fvn })
      setTimeout(() => {
        conn.deleteMessage(m.chat, tes.key)
      }, 3000)

}
handler.command = /^(tesfake)$/i

module.exports = handler

