const fetch = require('node-fetch');
const uploadImage = require('../lib/uploadImage')
let handler = async (m, { conn }) => {
  let attachment;
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let pp = 'https://i.ibb.co/jr9Nh6Q/Thumb.jpg'
  if(!global.UsingCanvasAPI)
  {
    const { createCanvas, loadImage } = require('canvas');
    const { drawImageWithTint } = require('./../lib/Canvas');
    try {
      pp = await uploadImage(await (await fetch(await conn.getProfilePicture(who))).buffer())
    } catch(e) {

    } finally {
      const base = await loadImage("https://raw.githubusercontent.com/bot-clones/xiao/master/assets/images/to-be-continued.png");
      const data = pp;
      const canvas = createCanvas(data.width, data.height);
      const ctx = canvas.getContext('2d');
      drawImageWithTint(ctx, data, '#704214', 0, 0, data.width, data.height);
      const ratio = base.width / base.height;
      const width = canvas.width / 2;
      const height = Math.round(width / ratio);
      ctx.drawImage(base, 0, canvas.height - height, width, height);
      attachment = canvas.toBuffer();
    }
  } else {
    try {
      pp = await uploadImage(await (await fetch(await conn.getProfilePicture(who))).buffer())
      console.log('x', pp);
    } catch(e) {

    } finally {
      console.log(pp)
      attachment = `${global.CanvasAPI != '' ? global.canvasAPI : 'https://canvas-heroku-stikerinbot.herokuapp.com'}/generatetbc?avatarurl=${pp}`;
    }
  }
  conn.sendFile(m.chat, attachment, 'to-be-continue.png', '© stickerinbot', m, 0, { thumbnail: global.UsingCanvasAPI == false ? attachment : await (await fetch(attachment)).buffer() })
}

handler.help = ['tbc @<user>']
handler.tags = ['internet']
handler.command = /^(tobecontinue|tbc)$/i
handler.limit = true

module.exports = handler