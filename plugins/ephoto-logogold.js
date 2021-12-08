const { ephoto } = require('../lib/ephoto.js')
let handler = async (m, { conn, args, usedPrefix, command, text}) => {
    let [a,b] = text.split(/[&|.]/i)
    	  if (!a || !b) throw 'harap masukan teksnya!!!\ncontoh\n'+`${usedPrefix+command} wooody|ia iya`
if(a.length > 22) throw `*hmmm?!!, teksnya kepanjangan cuy, maksimal 21 huruf!!!.*`
let pe = ["941bfa83-47a3-4624-80d3-ef964431e032","41d0caec-ab83-4bfd-9770-5bed1a350693","f6b48e3f-9481-40ae-a47e-56ba5471b892","786ec906-a9cc-4cfe-a0ca-79222ccd2872","67bb94d1-1ebd-4263-8ec0-88f67c7465f5","139f1fd0-30fd-4365-ae0e-3af4a427f233"]
let cewe = pe[Math.floor(Math.random() * pe.length)]
let result = await ephoto('https://ephoto360.com/tao-logo-hoa-ma-vang-de-xay-dung-thuong-hieu-719.html',[`${a}`,`${b}`], `${cewe}`)
    let uh = `https://s1.ephoto360.com${result.image}`
await conn.sendFile(m.chat, uh,'p.jpg','Wuis', m,false, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['goldlogo [text]|[text2]']
handler.tags = ['ep']
handler.command = /^goldlogo$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null
module.exports = handler

