let handler  = async (m, { conn, usedPrefix }) => {
  conn.reply(m.chat, `
╭「 Tutorial Install Bot 」
│
├❒ *TERMUX*
│
├ pkg install git
├ pkg install mc
├ pkg install ffmpeg
├ pkg install imagemagick
├ pkg install node.js
├ Pkg update && pkg upgrade
├ git clone (sc bot)
├ cd wabot 
├ npm i @adiwajshing/baileys
├ npm start
└──────────
`.trim(), m)
}
handler.help = ['tutorialinstall']
handler.tags = ['info']
handler.command = /^(tutorialinstall)$/i

module.exports = handler
