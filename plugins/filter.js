const uploadImage = require("../lib/uploadImage");

let handler = async (m, { conn, text, usedPrefix, command }) => {
  let filt = `
balas foto dengan caption opsi di bawah ini:

┌〔 Opsi 〕
├ greyscale
├ invert
├ invertgreyscale
├ brightness
├ threshold
├ sepia
├ red
├ green
├ blue
├ blurple
├ blurple2
└────
`.trim();
  if (!text) throw filt;
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || "";
  if (!mime) throw filt;
  let media = await q.download();
  let link = await uploadImage(media).catch(
    (_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png"
  );
  conn.sendFile(
    m.chat,
    API("https://some-random-api.ml", "/canvas/" + text, {
      avatar: link,
    }),
    "",
    text,
    m
  );
};
handler.help = ["filter"].map((v) => v + " <foto>");
handler.tags = ["tools"];
handler.command = /^(filter|filters)$/i;

module.exports = handler;
