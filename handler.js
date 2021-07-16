let util = require('util')
let fetch = require('node-fetch')
let simple = require('./lib/simple')
const uploadImage = require('./lib/uploadImage')
let { MessageType } = require('@adiwajshing/baileys')

const isNumber = x => typeof x === 'number' && !isNaN(x)
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(resolve, ms))
module.exports = {
  async handler(chatUpdate) {
    // console.log(chatUpdate)
    if (!chatUpdate.hasNewMessage) return
    if (!chatUpdate.messages && !chatUpdate.count) return
    let m = chatUpdate.messages.all()[0]
    try {
      simple.smsg(this, m)
      switch (m.mtype) {
        case MessageType.image:
        case MessageType.video:
        case MessageType.audio:
          if (!m.key.fromMe) await delay(1000)
          if (!m.msg.url) await this.updateMediaMessage(m)
          break
      }
      m.exp = 0
      m.limit = false
      try {
        let user = global.db.data.users[m.sender]
        if (typeof user !== 'object') global.db.data.users[m.sender] = {}
        if (user) {
          if (!isNumber(user.exp)) user.exp = 0
          if (!isNumber(user.limit)) user.limit = 10
          if (!isNumber(user.lastclaim)) user.lastclaim = 0
          if (!('registered' in user)) user.registered = false
          if (!user.registered) {
            if (!('name' in user)) user.name = this.getName(m.sender)
            if (!isNumber(user.age)) user.age = -1
            if (!isNumber(user.regTime)) user.regTime = -1
          }
          if (!isNumber(user.afk)) user.afk = -1
          if (!('afkReason' in user)) user.afkReason = ''
          if (!('banned' in user)) user.banned = false
          if (!isNumber(user.level)) user.level = 0
          if (!isNumber(user.call)) user.call = 0
          if (!user.role) user.role = 'Bronze'
          if (!('autolevelup' in user)) user.autolevelup = false
        } else global.db.data.users[m.sender] = {
          exp: 0,
          limit: 10,
          lastclaim: 0,
          registered: false,
          name: this.getName(m.sender),
          age: -1,
          regTime: -1,
          afk: -1,
          afkReason: '',
          banned: false,
          level: 0,
          call: 0,
          role: 'Bronze',
          autolevelup: false,
        }

        let chat = global.db.data.chats[m.chat]
        if (typeof chat !== 'object') global.db.data.chats[m.chat] = {}
        if (chat) {
          if (!('isBanned' in chat)) chat.isBanned = false
          if (!('welcome' in chat)) chat.welcome = true
          if (!('detect' in chat)) chat.detect = false
          if (!('sWelcome' in chat)) chat.sWelcome = ''
          if (!('sBye' in chat)) chat.sBye = ''
          if (!('sPromote' in chat)) chat.sPromote = ''
          if (!('sDemote' in chat)) chat.sDemote = ''
          if (!('stiker' in chat)) chat.stiker = false
          if (!('delete' in chat)) chat.delete = true
          if (!('antiLink' in chat)) chat.antiLink = false
          if (!isNumber(chat.expired)) chat.expired = 0
        } else global.db.data.chats[m.chat] = {
          isBanned: false,
          welcome: true,
          detect: false,
          sWelcome: '',
          sBye: '',
          sPromote: '',
          sDemote: '',
          stiker: false,
          delete: true,
          antiLink: false,
          expired: 0,
        }

        let settings = global.db.data.settings
        if (typeof settings !== 'object') global.db.data.settings = {}
        if (settings) {
          if (!'anon' in settings) settings.anon = true
          if (!'anticall' in settings) settings.anticall = true
          if (!'antispam' in settings) settings.antispam = true
          if (!'antitroli' in settings) settings.antitroli = true
          if (!'backup' in settings) settings.backup = false
          if (!isNumber(settings.backupDB)) settings.backupDB = 0
          if (!'groupOnly' in settings) settings.groupOnly = false
          if (!'jadibot' in settings) settings.groupOnly = false
          if (!'nsfw' in settings) settings.nsfw = true
          if (!isNumber(settings.status)) settings.status = 0
        } else global.db.data.settings = {
          anon: true,
          anticall: true,
          antispam: true,
          antitroli: true,
          backup: false,
          backupDB: 0,
          groupOnly: false,
          jadibot: false,
          nsfw: true,
          status: 0,
        }
      } catch (e) {
        console.error(e)
      }
      if (opts['nyimak']) return
      if (!m.fromMe && opts['self']) return
      if (typeof m.text !== 'string') m.text = ''
      for (let name in global.plugins) {
        let plugin = global.plugins[name]
        if (!plugin) continue
        if (plugin.disabled) continue
        if (!plugin.all) continue
        if (typeof plugin.all !== 'function') continue
        try {
          await plugin.all.call(this, m, chatUpdate)
        } catch (e) {
          if (typeof e === 'string') continue
          console.error(e)
        }
      }
      if (m.isBaileys) return
      if (m.chat.endsWith('broadcast')) return // Supaya tidak merespon di status
      if (!m.isGroup && global.db.data.settings.groupOnly) return m.reply(`Saat ini bot hanya bisa digunakan di grup`)
      let blockList = conn.blocklist.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)
      if (blockList.includes(m.sender)) return // Pengguna yang diblokir tidak bisa menggunakan bot
      m.exp += Math.ceil(Math.random() * 10)

      let usedPrefix
      let _user = global.db.data && global.db.data.users && global.db.data.users[m.sender]

      let isROwner = [global.conn.user.jid, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
      let isOwner = isROwner || m.fromMe
      let isMods = isOwner || global.mods.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
      let isPrems = isROwner || global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
      let groupMetadata = m.isGroup ? this.chats.get(m.chat).metadata || await this.groupMetadata(m.chat) : {} || {}
      let participants = m.isGroup ? groupMetadata.participants : [] || []
      let user = m.isGroup ? participants.find(u => u.jid == m.sender) : {} // User Data
      let bot = m.isGroup ? participants.find(u => u.jid == this.user.jid) : {} // Data Kamu (bot)
      let isAdmin = user.isAdmin || user.isSuperAdmin || false // Apakah user admin?
      let isBotAdmin = bot.isAdmin || bot.isSuperAdmin || false // Apakah kamu (bot) admin?
      let isBlocked = this.blocklist.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != this.user.jid).includes(m.sender) // Apakah user diblokir?
      for (let name in global.plugins) {
        let plugin = global.plugins[name]
        if (!plugin) continue
        if (plugin.disabled) continue
        if (!opts['restrict']) if (plugin.tags && plugin.tags.includes('admin')) continue
        const str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
        let _prefix = plugin.customPrefix ? plugin.customPrefix : conn.prefix ? conn.prefix : global.prefix
        let match = (_prefix instanceof RegExp ? // RegExp Mode?
          [[_prefix.exec(m.text), _prefix]] :
          Array.isArray(_prefix) ? // Array?
            _prefix.map(p => {
              let re = p instanceof RegExp ? // RegExp in Array?
                p :
                new RegExp(str2Regex(p))
              return [re.exec(m.text), re]
            }) :
            typeof _prefix === 'string' ? // String?
              [[new RegExp(str2Regex(_prefix)).exec(m.text), new RegExp(str2Regex(_prefix))]] :
              [[[], new RegExp]]
        ).find(p => p[1])
        if (typeof plugin.before === 'function') if (await plugin.before.call(this, m, {
          match,
          conn: this,
          participants,
          groupMetadata,
          user,
          bot,
          isROwner,
          isOwner,
          isAdmin,
          isBotAdmin,
          isPrems,
          chatUpdate,
          isBlocked,
        })) continue
        if (typeof plugin !== 'function') continue
        if ((usedPrefix = (match[0] || '')[0])) {
          let noPrefix = m.text.replace(usedPrefix, '')
          let [command, ...args] = noPrefix.trim().split` `.filter(v => v)
          args = args || []
          let _args = noPrefix.trim().split` `.slice(1)
          let text = _args.join` `
          command = (command || '').toLowerCase()
          let fail = plugin.fail || global.dfail // Ketika gagal
          let isAccept = plugin.command instanceof RegExp ? // RegExp Mode?
            plugin.command.test(command) :
            Array.isArray(plugin.command) ? // Array?
              plugin.command.some(cmd => cmd instanceof RegExp ? // RegExp in Array?
                cmd.test(command) :
                cmd === command
              ) :
              typeof plugin.command === 'string' ? // String?
                plugin.command === command :
                false

          if (!isAccept) continue
          m.plugin = name
          if (m.chat in global.db.data.chats || m.sender in global.db.data.users) {
            let chat = global.db.data.chats[m.chat]
            let user = global.db.data.users[m.sender]
            if (!['unbanchat.js'].includes(name) && chat && chat.isBanned) return // Kecuali ini, bisa digunakan
            if (name != 'unbanuser.js' && user && user.banned) return
          }
          if (plugin.rowner && plugin.owner && !(isROwner || isOwner)) { // Keduanya Owner
            fail('owner', m, this)
            continue
          }
          if (plugin.rowner && !isROwner) { // Owner sebenarnya
            fail('rowner', m, this)
            continue
          }
          if (plugin.owner && !isOwner) { // Owner bot
            fail('owner', m, this)
            continue
          }
          if (plugin.mods && !isMods) { // Moderator
            fail('mods', m, this)
            continue
          }
          if (plugin.premium && !isPrems) { // Premium
            fail('premium', m, this)
            continue
          }
          if (plugin.group && !m.isGroup) { // Hanya grup
            fail('group', m, this)
            continue
          } else if (plugin.botAdmin && !isBotAdmin) { // Kamu Admin
            fail('botAdmin', m, this)
            continue
          } else if (plugin.admin && !isAdmin) { // User Admin
            fail('admin', m, this)
            continue
          }
          if (plugin.private && m.isGroup) { // Hanya Private Chat
            fail('private', m, this)
            continue
          }
          if (plugin.register == true && _user.registered == false) { // Butuh daftar?
            fail('unreg', m, this)
            continue
          }
          if (plugin.nsfw && !global.db.data.settings.nsfw) { // Nsfw
            fail('nsfw', m, this)
            continue
          }

          m.isCommand = true
          let xp = 'exp' in plugin ? parseInt(plugin.exp) : 17 // Pendapatkan XP per Command
          if (xp > 200) m.reply('Ngecit -_-') // Hehehe
          else m.exp += xp
          if (!isPrems && plugin.limit && global.db.data.users[m.sender].limit < plugin.limit * 1) {
            this.reply(m.chat, `Limit kamu habis, silahkan beli melalui *${usedPrefix}buy*`, m)
            continue // Limit habis
          }
          if (plugin.level > _user.level) {
            this.reply(m.chat, `diperlukan level ${plugin.level} untuk menggunakan perintah ini. Level kamu ${_user.level}`, m)
            continue // Jika levelnya belum tercapai
          }
          let extra = {
            match,
            usedPrefix,
            noPrefix,
            _args,
            args,
            command,
            text,
            conn: this,
            participants,
            groupMetadata,
            user,
            bot,
            isROwner,
            isOwner,
            isAdmin,
            isBotAdmin,
            isPrems,
            chatUpdate,
            isBlocked,
          }
          try {
            await plugin.call(this, m, extra)
            if (!isPrems) m.limit = m.limit || plugin.limit || false
          } catch (e) {
            // Terjadi kesalahan
            m.error = e
            console.error(e)
            if (e) {
              let text = util.format(e)
              for (let key of Object.values(global.APIKeys))
                text = text.replace(new RegExp(key, 'g'), '#HIDDEN#')
              m.reply(text)
            }
          } finally {
            // m.reply(util.format(_user))
            if (typeof plugin.after === 'function') {
              try {
                await plugin.after.call(this, m, extra)
              } catch (e) {
                console.error(e)
              }
            }
            if (m.limit) m.reply(+ m.limit + ' Limit terpakai') // Jadikan sebagai komentar jika kamu risih dengan pesan ini
          }
          break
        }
      }
    } finally {
      //console.log(global.db.data.users[m.sender])
      let user, stats = global.db.data.stats
      if (m) {
        if (m.sender && (user = global.db.data.users[m.sender])) {
          user.exp += m.exp
          user.limit -= m.limit * 1
        }

        let stat
        if (m.plugin) {
          let now = + new Date
          if (m.plugin in stats) {
            stat = stats[m.plugin]
            if (!isNumber(stat.total)) stat.total = 1
            if (!isNumber(stat.success)) stat.success = m.error != null ? 0 : 1
            if (!isNumber(stat.last)) stat.last = now
            if (!isNumber(stat.lastSuccess)) stat.lastSuccess = m.error != null ? 0 : now
          } else stat = stats[m.plugin] = {
            total: 1,
            success: m.error != null ? 0 : 1,
            last: now,
            lastSuccess: m.error != null ? 0 : now
          }
          stat.total += 1
          stat.last = now
          if (m.error == null) {
            stat.success += 1
            stat.lastSuccess = now
          }
        }
      }

      try {
        require('./lib/print')(m, this)
      } catch (e) {
        console.log(m, m.quoted, e)
      }
      if (opts['autoread']) await this.chatRead(m.chat).catch(() => { })
    }
  },
  async participantsUpdate({ jid, participants, action }) {
    let chat = global.db.data.chats[jid] || {}
    let text = ''
    switch (action) {
      case 'add':
      case 'remove':
        if (chat.welcome) {
          let groupMetadata = await this.groupMetadata(jid)
          for (let user of participants) {
            // let pp = './src/avatar_contact.png'
            let pp = 'https://i.ibb.co/jr9Nh6Q/Thumb.jpg'
            try {
              pp = await uploadImage(await (await fetch(await this.getProfilePicture(user))).buffer())
            } catch (e) {
            } finally {
              text = (action === 'add' ? (chat.sWelcome || this.welcome || conn.welcome || 'Selamat datang, @user!').replace('@subject', this.getName(jid)).replace('@desc', groupMetadata.desc) :
                (chat.sBye || this.bye || conn.bye || 'Sampai jumpa, @user!')).replace('@user', '@' + user.split`@`[0])
              let wel = `https://hardianto-chan.herokuapp.com/api/tools/welcomer2?name=${encodeURIComponent(this.getName(user))}&descriminator=${user.substring(8, 13)}&totalmem=${participants.length}&namegb=${encodeURIComponent(this.getName(jid))}&ppuser=${pp}&background=https://i.ibb.co/KhtRxwZ/dark.png&apikey=hardianto`
              let lea = `https://hardianto-chan.herokuapp.com/api/tools/leave2?name=${encodeURIComponent(this.getName(user))}&descriminator=${user.substring(8, 13)}&totalmem=${participants.length}&namegb= ${encodeURIComponent(this.getName(jid))}&ppuser=${pp}&background=https://i.ibb.co/KhtRxwZ/dark.png&apikey=hardianto`

              this.sendFile(jid, action === 'add' ? wel : lea, 'pp.jpg', text, null, false, {
                contextInfo: {
                  mentionedJid: [user]
                }
              })
            }
          }
        }
        break
      case 'promote':
        text = (chat.sPromote || this.spromote || conn.spromote || '@user sekarang Admin')
      case 'demote':
        if (!text) text = (chat.sDemote || this.sdemote || conn.sdemote || '@user sekarang bukan Admin')
        text = text.replace('@user', '@' + participants[0].split`@`[0])
        if (chat.detect) this.sendMessage(jid, text, MessageType.extendedText, {
          contextInfo: {
            mentionedJid: this.parseMention(text)
          }
        })
        break
    }
  },
  async delete(m) {
    if (m.key.fromMe) return
    let chat = global.db.data.chats[m.key.remoteJid]
    if (chat.delete) return
    await this.reply(m.key.remoteJid, `
Terdeteksi @${m.participant.split`@`[0]} telah menghapus pesan`.trim(), m.message, {
      contextInfo: {
        mentionedJid: [m.participant]
      }
    })
    this.copyNForward(m.key.remoteJid, m.message).catch(e => console.log(e, m))
  },
  async onCall(json) {
    let { from } = json[2][0][1]
    let users = global.db.data.users
    let user = users[from] || {}
    if (user.whitelist) return
    if (!global.db.data.anticall) return
    switch (this.callWhitelistMode) {
      case 'mycontact':
        if (from in this.contacts && 'short' in this.contacts[from])
          return
        break
    }
    user.call += 1
    await this.reply(from, `Jika kamu menelepon lebih dari 5, maka kamu akan dibokir.\n\n${user.call} / 5`, null)
    if (user.call == 5) {
      await this.blockUser(from, 'add')
      user.call = 0
    }
  }
}

global.dfail = (type, m, conn) => {
  let msg = {
    rowner: 'Perintah ini hanya dapat digunakan oleh _*Pemilik Bot*_',
    owner: 'Perintah ini hanya dapat digunakan oleh _*Pemilik Bot*_',
    mods: 'Perintah ini hanya dapat digunakan oleh _*Moderator*_',
    premium: 'Perintah ini hanya untuk pengguna _*Premium*_',
    group: 'Perintah ini hanya dapat digunakan di grup',
    private: 'Perintah ini hanya dapat digunakan di Chat Pribadi',
    admin: 'Perintah ini hanya untuk *Admin* grup',
    botAdmin: 'Bot harus menjadi *ADMIN* untuk menggunakan perintah ini',
    unreg: 'Silahkan daftar untuk menggunakan fitur ini dengan cara mengetik:\n\n*#daftar nama.umur*\n\nContoh: *#daftar Arif.19*',
    nsfw: 'NSFW tidak aktif'
  }[type]
  if (msg) return m.reply(msg)
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'handler.js'"))
  delete require.cache[file]
  if (global.reloadHandler) console.log(global.reloadHandler())
})
