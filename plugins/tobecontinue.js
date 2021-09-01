let handler = async (m, { conn }) => {
  let attachment;
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  if(!global.UsingCanvasAPI)
  {
    const { createCanvas, loadImage } = require('canvas');
    const { drawImageWithTint } = require('./../lib/Canvas');
    const base = await loadImage("https://raw.githubusercontent.com/bot-clones/xiao/master/assets/images/to-be-continued.png");
    console.log(base);
    const data = await loadImage(await conn.getProfilePicture(who).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'));
    const canvas = createCanvas(data.width, data.height);
    const ctx = canvas.getContext('2d');
    drawImageWithTint(ctx, data, '#704214', 0, 0, data.width, data.height);
    const ratio = base.width / base.height;
    const width = canvas.width / 2;
    const height = Math.round(width / ratio);
    ctx.drawImage(base, 0, canvas.height - height, width, height);
    attachment = canvas.toBuffer();
  } else {
    attachment = `${global.CanvasAPI != '' ? global.canvasAPI : 'https://canvas-heroku-stikerin.herokuapp.com'}/generatetbc?avatarurl=${await conn.getProfilePicture(who).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')}`;
  }
  conn.sendFile(m.chat, attachment, 'to-be-continue.png', '© stickerinbot', m, 0, { thumbnail: global.UsingCanvasAPI == false ? attachment : await(await(fetch(attachment).toBuffer())) })
}

handler.help = ['tbc @<user>']
handler.tags = ['internet']
handler.command = /^(tobecontinue|tbc)$/i
handler.limit = true

module.exports = handler