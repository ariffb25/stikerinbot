const { createHash } = require('crypto')
async function handler(m, { conn,text }) {
    conn.verify = conn.verify ? conn.verify : {}
     user = global.db.data.users
     kode = Math.floor(Math.random() * 9999)
     if (user[m.sender].registered) return m.reply('Kamu Sudah Terverifikasi!')
   aww = await m.reply('Kode Verifikasi Telah Dikirim Ke Chat Pribadi, Reply Pesan Dan Balas Pesan Ini Untuk Verifikasi!')
    m.reply(`Kode Verifikasi Anda Adalah *${kode}*\nJangan Berikan kepada Siapapun Maupun Owner!`, m.sender)
     conn.verify[m.sender] = { code: kode, key: aww.key.id }
  }
  
  handler.all = async m => {
       if (!conn.verify) return
       if (!m.quoted) return
      if ((m.sender in conn.verify) == false) return
      let sn = createHash('md5').update(m.sender).digest('hex')
      if (m.text == conn.verify[m.sender].code && m.quoted.id == conn.verify[m.sender].key) {
      m.reply(`
❒ USER TERDAFTAR
├ Terimakasih Sudah
├ Mendaftar Diri
├ Dalam Data Base Bot
╰─── 
❒ INFO USER
├ Sn : ${sn}
├ Status : Terverifikasi ✓
├ NOTE : GUNAKAN BOT DENGAN BAIK, DON'T SPAM BOT!
╰───`.trim())
      global.db.data.users[m.sender].registered = true
      delete conn.verify[m.sender]
     }
  }
  
  handler.help = ['verify']
  handler.command = ['verify']
  module.exports = handler
