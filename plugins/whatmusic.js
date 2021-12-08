let FormData = require('form-data')
let axios = require('axios')

let handler = async (m, { conn, usedPrefix, command }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
  if (!/video|audio/.test(mime)) throw `Reply to the music you want to find with a reply *${usedPrefix + command}*`
 m.reply(global.wait)
				const bodyForm = new FormData()
			        bodyForm.append('audio', await q.download(), 'music.mp3')
           			bodyForm.append('apikey', 'apivinz')
           			axios('https://api.zeks.me/api/searchmusic', {
                		method: 'POST',
                		headers: {
				"Content-Type": "multipart/form-data",
        			...bodyForm.getHeaders()
                		},
                		data: bodyForm
            			})
                		.then(({data}) =>{
				  m.reply(`*_Data Found!_*\n\n*Title* : ${data.data.title}\n*Artists* : ${data.data.artists}\n*Genre* : ${data.data.genre}\n*Album* : ${data.data.album}\n*Release Date* : ${data.data.release_date}`)
				}).catch(() => {
				m.reply('*_Song not found!_*')
				})
				
}
handler.help = ['whatmusic']
handler.tags = ['music']

handler.command = /^(whatmusic)$/i

module.exports = handler
