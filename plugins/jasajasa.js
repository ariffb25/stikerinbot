let handler = async (m, { conn, args, usedPrefix }) => {

  const format = num => {
    const n = String(num),
      p = n.indexOf('.')
    return n.replace(
      /\d(?=(?:\d{3})+(?:\.|$))/g,
      (m, i) => p < 0 || i < p ? `${m},` : m
    )
  }

  // jika belum terdaftar
  if (typeof global.db.data.users[m.sender] == 'undefined') {
    global.db._data.users[m.sender] = {
      exp: 0,
      limit: 100,
      lastclaim: 0,
      lastnguli: 0,
      warning: 0,
      lastrepeat: 0,
      name: conn.getName(m.sender),
      regTime: -1,
      afk: -1,
      price: 0,
      afkReason: '',
      job: "no",
      chat: 0,
      whitelist: false,
      isBanned: false,
      spam: 0  
    }
  }

  var ket = `\n\nKetik *${usedPrefix}sewa @user* untuk menggunakan jasa`

  if (!args[0] || !args[1]) {
    throw `*[ JOB ERROR ]*\n\nMasukkan nama profesinya dan harga jasa. Misal :\n${usedPrefix}job maling 100000\n\nPekerjaan yang tersedia : pijat, lonte, sepong, maling, gebukin`
  } else {
    if (parseInt(args[1]) < 1000 || parseInt(args[1]) > 10000000) {
      throw '*[ JOB ERROR ]*\n\nHarga jasa minimal Rp.1000,- & maksimal Rp.10000000,-'
    }
    args[0] = args[0].toLowerCase()
    if (args[0] === "lonte") {
      global.db.data.users[m.sender].job = args[0]
      global.db.data.users[m.sender].price = parseInt(args[1])
      conn.reply(m.chat, `*[ JASA SEWA LONTE ]*\n\n@${m.sender.split('@')[0]} menawarkan diri sebagai lonte dengan biaya ${format(args[1])},-${ket}`, m, {
        contextInfo: {
          mentionedJid: [m.sender]
        }
      })
    } else if (args[0] === "pijat") {
      global.db.data.users[m.sender].job = args[0]
      global.db.data.users[m.sender].price = parseInt(args[1])
      conn.reply(m.chat, `*[ JASA TUKANG PIJAT ]*\n\n@${m.sender.split('@')[0]} menawarkan diri sebagai tukang pijat dengan biaya ${format(args[1])},-${ket}`, m, {
        contextInfo: {
          mentionedJid: [m.sender]
        }
      })
    } else if (args[0] === "sepong") {
      global.db.data.users[m.sender].job = args[0]
      global.db.data.users[m.sender].price = parseInt(args[1])
      conn.reply(m.chat, `*[ JASA TUKANG SEPONG ]*\n\n@${m.sender.split('@')[0]} menawarkan diri sebagai tukang sepong dengan biaya ${format(args[1])},-${ket}`, m, {
        contextInfo: {
          mentionedJid: [m.sender]
        }
      })
    } else if (args[0] === "gebukin") {
      global.db.data.users[m.sender].job = args[0]
      global.db.data.users[m.sender].price = parseInt(args[1])
      conn.reply(m.chat, `*[ JASA TUKANG GEBUKIN ]*\n\n@${m.sender.split('@')[0]} menawarkan diri sebagai tukang gebukin dengan biaya ${format(args[1])},-${ket}`, m, {
        contextInfo: {
          mentionedJid: [m.sender]
        }
      })
    } else if (args[0] === "maling") {
      global.db.data.users[m.sender].job = args[0]
      global.db.data.users[m.sender].price = parseInt(args[1])
      conn.reply(m.chat, `*[ JASA TUKANG MALING ]*\n\n@${m.sender.split('@')[0]} menawarkan diri sebagai tukang maling dengan biaya ${format(args[1])},-${ket}`, m, {
        contextInfo: {
          mentionedJid: [m.sender]
        }
      })
    } else {
      throw '*[ JOB ERROR ]*\n\nJenis pekerjaan yang tersedia adalah maling, lonte, sepong, pijat, gebukin'
    }
  }
}
handler.help = ['jasa', 'job'].map(v => v + ' <service> <price>')
handler.tags = ['fun']
handler.command = /^(jasa|job)$/i
handler.admin = false
handler.group = true
handler.register = true
handler.botAdmin = false
handler.limit = true
module.exports = handler
