const { createCanvas, loadImage } = require('canvas');
const path = require('path');
const { drawImageWithTint } = require('./../lib/Canvas');

let handler = async (m, { conn }) => {
  console.log("Called");
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  const base = await loadImage("https://raw.githubusercontent.com/bot-clones/xiao/master/assets/images/to-be-continued.png");
  console.log(base);
  const data = await loadImage(await conn.getProfilePicture(who).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'));
  console.log("Make Code")
  const canvas = createCanvas(data.width, data.height);
  const ctx = canvas.getContext('2d');
  drawImageWithTint(ctx, data, '#704214', 0, 0, data.width, data.height);
  const ratio = base.width / base.height;
  const width = canvas.width / 2;
  console.log("Make Code");
  const height = Math.round(width / ratio);
  ctx.drawImage(base, 0, canvas.height - height, width, height);
  const attachment = canvas.toBuffer();
  conn.sendFile(m.chat, attachment, 'to-be-continue.png', '© stickerinbot', m, 0, { thumbnail: attachment })
}

handler.help = ['tbc @<user>']
handler.tags = ['internet']
handler.command = /^(tobecontinue|tbc)$/i
handler.limit = true

module.exports = handler