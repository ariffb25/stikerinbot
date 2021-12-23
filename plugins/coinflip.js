const { MessageType } = require("@adiwajshing/baileys");
const { createSticker, StickerTypes } = require("wa-sticker-formatter");
let axios = require("axios");

let handler = async (m, { conn }) => {
	let res = await axios.get(
		API("https://no-api-key.com", "/api/v2/coin-flip")
	);
	if (res.status !== 200) throw `${res.status} ${res.statusText}`;
	const sticker = await createSticker(res.data.gif, {
		type: StickerTypes.FULL,
		pack: global.packname,
		author: global.author,
	});
	await conn.sendMessage(m.chat, sticker, MessageType.sticker, {
		quoted: m,
		mimetype: "image/webp",
	});
	const head = await createSticker(res.data.image, {
		type: StickerTypes.FULL,
		pack: global.packname,
		author: global.author,
	});
	await conn.sendMessage(m.chat, head, MessageType.sticker, {
		quoted: m,
		mimetype: "image/webp",
	});
	await m.reply(res.data.coin);
};
handler.help = ["coin", "koin"];
handler.tags = ["fun"];

handler.command = /^((coin|koin)?flip)$/i;

module.exports = handler;
