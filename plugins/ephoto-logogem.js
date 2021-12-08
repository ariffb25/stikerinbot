const { ephoto } = require('../lib/ephoto.js')
let handler = async (m, { conn, args, usedPrefix,command}) => {
    let a= args.join` `
    	  if (!a) throw 'harap masukan teksnya!!!'
if(a.length > 21) throw `*hmmm?!!, teksnya kepanjangan cuy, maksimal 20 karakter\ncontoh\n\n ${usedPrefix+command} Tobangado*`
let pe = ["b7380806-a223-4648-9ddc-9b7d1de88adb","f4e3f7ac-8129-4ed1-94ad-5dbec05d34ce","9941df7a-0e2e-4a97-bd4f-411c6d1ff658","4746bd67-32eb-4440-b0af-354acbef5e27","46679b7f-3711-4564-b306-d3df1f05daac","634054a6-6dd5-4948-86eb-75088ad63ff4","c9ee7572-5d12-4776-88e7-1020380afcab","58814611-b645-421b-aa53-649d2d828860","77c591bf-8935-4448-8178-79e5abf8f714","478263bb-3913-4dce-b827-cc09ce4c0b5e","594b82d8-fed4-43a3-8b39-b8359d1bdb18","df4302f5-e7ff-4cba-a3ed-2559d6d4cf6a","387613b1-57d5-4afd-8856-64b4a5aec241","c99e2765-09f6-428d-ad12-6240472ba67b","906fe4a4-6bac-418f-80ed-54662b9d0daf","0da9846b-be35-410f-b5c4-dca5975365b5"]
let cewe = pe[Math.floor(Math.random() * pe.length)]
  ephoto('https://ephoto360.com/tao-logo-team-logo-gaming-phong-cach-sat-thu-653.html', [`${a}`], `${cewe}`).then(result => {
    let uh = `https://s1.ephoto360.com${result.image}`
conn.sendFile(m.chat, uh,'p.jpg','Wuis', m,false, { thumbnail: Buffer.alloc(0) })
  }).catch(err => {
    console.log(err)
    conn.reply(m.chat, 'error',m)
  })
}
handler.help = ['gaming <Teks>']
handler.tags = ['ep']
handler.command = /^gaming$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = true
handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

