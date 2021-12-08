//just trying, maap kalo eror

let handler = async m => {
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || ''
	if (/image/.test(mime)) {
		let img = m.quoted ? { message: { [m.quoted.mtype]: m.quoted }} : m
		 await conn.downloadAndSaveMediaMessage(img, './src/thumb').then(() => m.reply('done'))
	} else throw 'Reply imagenya'
}

handler.help = ['thumb', 'thumbnail'].map(v => 'set' + v)
handler.command = /^set(thumb|thumbnail)$/i
handler.owner = true

module.exports = handler
