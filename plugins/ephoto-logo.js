const { ephoto } = require('../lib/ephoto.js')
let handler = async (m, { conn, args, usedPrefix, command, text}) => {
    let [a,b] = text.split(/[&|.]/i)
    	  if (!a || !b) throw 'Gunakan perintah seperti inu\ncomtoh\n'+`${usedPrefix+command} halo|bang`
if(a.length > 6) throw `*hmmm?!!, teksnya kepanjangan cuy, maksimal 6!!!.*`
if(b.length > 12) throw `*hmmm?!!, teksnya kepanjangan cuy, maksimal 12\ncontoh\n\n ${usedPrefix+commad} ayamja|kuat euy*`
let pe = ['f26629d6-5b3d-4702-beba-542a2d9f7439','9a9ccc88-62b3-4209-86c1-19798c8e9760','2b86e5cb-9254-4078-baeb-6fdc1b76632a','6d88da4a-acd4-4fe6-9d23-7ca4803ade26','09feee25-257e-4e85-b4c6-70e3cc62d9a6','1f926df3-b06e-44fa-9d9b-63cceb638ba1','5a0c8152-cade-453e-94d3-f69bf29796d4','2f7d1db5-3ff3-4c96-95eb-d5d849aa1b43','62023478-a77d-42dd-8238-e9cad3945a6f','2d9ad953-64a0-4b8f-86f3-8a0501b08510','1d075d9f-15d8-4300-95d1-56f02b532f41','77f5b478-d7df-4443-94dc-c8be71ee1049','22e895fe-288d-4d30-b63e-c1eb0de09271','6ae3018b-5568-4ac9-8cf5-72851d86932d','b0d43e63-10ba-4373-bcec-b3e9404635cf','66b4e83f-990d-42c7-84eb-c238aad16823','2a62f9dc-13b5-42e5-9bc8-8c2c4a74ce9a','f18f5b37-f3e8-4391-a5e8-694fe8b4fc42','82151b31-e19e-4d66-a6f4-23a0075f6eb2','8473a458-e414-4ce6-b887-e0f51f94eafb','b0242aa8-adaa-4367-a660-8ed466bd6670','d76d6aa8-a3eb-4a89-ab7a-d3693e7b41c0','550caa7a-c40d-4aa0-b11a-35de8d1689ae','829e5eab-721f-42a0-8d08-f75c83411f54','e9e6eee4-70f2-4fda-8ba2-6768b41940e4','e64a4242-7fd9-4d72-bdf3-0f619102b7ee','d2ef5483-61b0-4bc4-8750-b324949d4bd9','170ba76d-b558-477e-9658-7b0914f4565f','0852c322-6721-4068-89b7-57b5c4022016','158cdd44-1a0a-46d1-9746-ea9572a4ef16','a84c7575-e65c-4fe2-9c5b-a36f975fe09f','bded0320-6600-4535-9fb0-00f1675f1b43','z97cn3em7','kgs2or6h3','gojklsqki','bgkscskmt','gu3nvozkw','s4r3fx0f1','aq8ayex83','i2e33eah7','g7565ecyy','m6zosmq4g','fss3g2yvu','qsk13oz2e','64cn47ftx','kvdzskd85','r5c02bp5y','6l9x849hd','q4ku56bek','51jlkc2ug','s5uvb3ngt','h2ts57146','fhq6lw98n','zm9etfup0','l6k61hn36','s4r3fx0f1']
let cewe = pe[Math.floor(Math.random() * pe.length)]
  ephoto('https://ephoto360.com/hieu-ung-chu/tao-logo-avatar-theo-phong-cach-mascot-364.html', [`${a}`,`${b}`], `${cewe}`).then(result => {
    let uh = `https://s1.ephoto360.com${result.image}`
conn.sendFile(m.chat, uh,'p.jpg','Wuis', m,false, { thumbnail: Buffer.alloc(0) })
  }).catch(err => {
    console.log(err)
    conn.reply(m.chat, 'error',m)
  })
}
handler.help = ['logo <text>']
handler.tags = ['ep']
handler.command = /^logo$/i
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