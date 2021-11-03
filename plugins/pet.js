const { MessageType } = require("@adiwajshing/baileys");
const petPetGif = require("pet-pet-gif");
const { createSticker, StickerTypes } = require("wa-sticker-formatter");

let handler = async (m, { conn }) => {
  let who =
    m.mentionedJid && m.mentionedJid[0]
      ? m.mentionedJid[0]
      : m.fromMe
      ? conn.user.jid
      : m.sender;
  let animatedGif = await petPetGif(
    await conn
      .getProfilePicture(who)
      .catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
  );
  const sticker = await createSticker(animatedGif, {
    type: StickerTypes.FULL,
    pack: "petpet",
    author: "fatur",
  });
  await conn.sendMessage(m.chat, sticker, MessageType.sticker, {
    quoted: m,
    mimetype: "image/webp",
  });
};

handler.help = ["pet", "petpet"];
handler.tags = ["maker"];

handler.command = /^(petpet|pet)$/i;

module.exports = handler;

//await conn.getProfilePicture(who).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
