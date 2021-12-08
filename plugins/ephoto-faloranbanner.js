const { ephoto } = require('../lib/ephoto.js')
let handler = async (m, { conn, args, usedPrefix, command, text}) => {
  let [aw, iw, ew] = text.split(/[&|.]/i)
    	  if (!aw || !iw || !ew) throw 'harap masukan teksnya!!!\n*Contoh*:\n'+`${usedPrefix+command} Loli|Kyaaa|yamete`
    	  if(aw.length > 22) throw `*hmmm?!!, teksnya kepanjangan cuy, maksimal 21 huruf!!!.*`
let pe = ["072dd1a0-db7d-4b87-b3e7-b142c2e8cad6","784a10c2-660e-4955-901a-a1b57881df42","00251bca-e044-42bd-8dd7-f536ac0c42b4","882898c0-054d-4dce-b08a-823af1f4cfc7","4f51675f-4ad4-42a4-ad1e-1eb8792dfad6","90d9209e-0739-4079-81f7-959fd12f3bbe","dbd319cf-a529-4958-b43e-7f2e19f05853","71b52833-5560-46b4-ac88-92054c6d1f5a","acc7c093-9937-4a3d-85da-d66c02c92751","48ab2129-3543-4fa9-9361-2868fab8f073"]
let cewe = pe[Math.floor(Math.random() * pe.length)]
let result = await ephoto('https://ephoto360.com/tao-banner-youtube-game-valorant-online-681.html',[`${aw}`,`${iw}`,`${ew}`], `${cewe}`)
    let uh = `https://s1.ephoto360.com${result.image}`
await conn.sendFile(m.chat, uh,'p.jpg','Wuis', m,false, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['valoran'].map(v => v + ' [teks1]|[teks2]|[teks3]')
handler.tags = ['ep']
handler.command = /^valoran$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null
module.exports = handler