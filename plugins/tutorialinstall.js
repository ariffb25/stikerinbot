let handler  = async (m, { conn, usedPrefix }) => {
  conn.reply(m.chat, `
╭「 Tutorial Install Bot 」
│
├❒ *USER TERMUX*
│
├ pkg update && pkg upgrade
├ pkg install git
├ pkg install mc
├ pkg install ffmpeg
├ pkg install imagemagick
├ pkg install node.js
├ git clone (sc bot)
├ cd (nama sc bot)
├ npm install -g npm@6.14.14
├ npm i
├ node main.js (sesuaikan dengan scrip nya)
│
│
├❒ UNTUK PENGGUNA WINDOWS/VPS/RDP
│
├ Unduh & isntal Git https://git-scm.com/downloads
├ Unduh & Instal NodeJS https://nodejs.org/en/download
├ Unduh & Instal FFmpeg https://ffmpeg.org/download.html Jangan Lupa Tambahkan FFmpeg ke variabel lingkungan PATH
├ Unduh & Instal ImageMagick https://imagemagick.org/script/download.php
│
├ git clone (sc bot)
├ cd (nama sc bot)
├ npm i
├ npm update
├ node .
│
│
├❒ UNTUK PENGGUNA HEROKU
│
├ Instal Buildpack
├ heroku/nodejs
├ https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest.git
├ https://github.com/DuckyTeam/heroku-buildpack-imagemagick.git
│
└──────────
`.trim(), m)
}
handler.help = ['tutorialinstall']
handler.tags = ['info']
handler.command = /^(tutorialinstall)$/i

module.exports = handler
