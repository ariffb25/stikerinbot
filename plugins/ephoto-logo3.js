const { ephoto } = require('../lib/ephoto.js')
let handler = async (m, { conn, args, usedPrefix, command}) => {
    let a = args.join` `
  
    	  if (!a) throw  'harap masukan teksnya!!!'
if(a.length > 22) throw `*hmmm?!!, teksnya kepanjangan cuy, maksimal 21 huruf!!!.*`
let pe = ["1989de11-38c1-4d9a-b6f2-5cdb7cb99cd3","f99fea3e-79c2-4295-9b4a-241e8332780b","fb059712-c479-4c64-bb70-02fe8363b6c8","1e9a2872-9914-495b-b709-92e19b7f411f","35da5e55-9717-41a6-8739-5fa0f6c23449","f76554eb-5b54-4fe2-8745-421d08bd44e9","80644bac-9c99-4cb1-ab2d-e922f134d077","deaca8b0-b079-4289-90b7-c663892fe37c","b3266ea8-ba09-402e-9a2d-81629586e9b2","2952bc88-e2e3-45fd-b54d-a8f73b52413f","bf2fad95-ea06-46ea-922b-756861c1e613","3c8d3f17-f562-4c78-b305-864d8f40e0fc","6fda04fc-79e8-46d9-bded-01250d43e253","e6e37e54-4fc3-473b-b930-4a75ef065c88","7e8d1d6b-1b72-481a-bc38-a9d26513a803","ad7ec525-b2c4-4560-9a25-a36fb3da3b5f","656111bb-2832-4a73-b337-10e1eea54bd3","cd5465d9-9c5e-4d08-9f1b-3b9f3a45a858"]
let cewe = pe[Math.floor(Math.random() * pe.length)]
  ephoto('https://ephoto360.com/tao-logo-team-logo-gaming-phong-cach-mascot-mien-phi-633.html',`${a}`, `${cewe}`).then(result => {
    let uh = `https://s1.ephoto360.com${result.image}`
conn.sendFile(m.chat, uh,'p.jpg','Wuis', m,false, { thumbnail: Buffer.alloc(0) })
  }).catch(err => {
    console.log(err)
    conn.reply(m.chat, 'error',m)
  })
}
handler.help = ['logo3 <text>']
handler.tags = ['ep']
handler.command = /^logo3$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null
handler.limit = true
module.exports = handler

