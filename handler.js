let util = require('util')
let fetch = require('node-fetch')
let simple = require('./lib/simple')
const uploadImage = require('./lib/uploadImage')
const knights = require('knights-canvas')
let { MessageType } = require('@adiwajshing/baileys')

const isNumber = x => typeof x === 'number' && !isNaN(x)
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(resolve, ms))
module.exports = {
  async handler(chatUpdate) {
    if (global.db.data == null) await global.loadDatabase()
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
          if (!user.role) user.role = 'Warrior V'
          if (!('autolevelup' in user)) user.autolevelup = false
          if (!isNumber(user.pc)) user.pc = 0
          if (!isNumber(user.warning)) user.warning = 0
          if (!('pasangan' in user)) user.pasangan = ''
          if (!('premium' in user)) user.premium = false
          if (!isNumber(user.premiumTime)) user.premiumTime = 0
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
          role: 'Warrior V',
          autolevelup: false,
          pc: 0,
          warning: 0,
          pasangan: '',
          premium: false,
          premiumTime: 0,
        }

        let chat = global.db.data.chats[m.chat]
        if (typeof chat !== 'object') global.db.data.chats[m.chat] = {}
        if (chat) {
          if (!('isBanned' in chat)) chat.isBanned = false
          if (!('welcome' in chat)) chat.welcome = false
          if (!('detect' in chat)) chat.detect = false
          if (!('sWelcome' in chat)) chat.sWelcome = ''
          if (!('sBye' in chat)) chat.sBye = ''
          if (!('sPromote' in chat)) chat.sPromote = ''
          if (!('sDemote' in chat)) chat.sDemote = ''
          if (!('antiBadword' in chat)) chat.antiBadword = true
          if (!('antiLink' in chat)) chat.antiLink = false
          if (!('delete' in chat)) chat.delete = true
          if (!('descUpdate' in chat)) chat.descUpdate = true
          if (!('download' in chat)) chat.download = true
          if (!isNumber(chat.expired)) chat.expired = 0
          if (!('getmsg' in chat)) chat.getmsg = false
          if (!('read' in chat)) chat.read = true
          if (!('stiker' in chat)) chat.stiker = false
          if (!('viewonce' in chat)) chat.viewonce = true
        } else global.db.data.chats[m.chat] = {
          isBanned: false,
          welcome: false,
          detect: false,
          sWelcome: '',
          sBye: '',
          sPromote: '',
          sDemote: '',
          antiBadword: true,
          antiLink: false,
          delete: true,
          descUpdate: true,
          download: true,
          expired: 0,
          getmsg: false,
          read: true,
          stiker: false,
          viewonce: true,
        }

        let settings = global.db.data.settings[this.user.jid]
        if (typeof settings !== 'object') global.db.data.settings[this.user.jid] = {}
        if (settings) {
          if (!'anon' in settings) settings.anon = true
          if (!'anticall' in settings) settings.anticall = true
          if (!'antispam' in settings) settings.antispam = true
          if (!'antitroli' in settings) settings.antitroli = true
          if (!'autoupdatestatus' in settings) settings.autoupdatestatus = false
          if (!'backup' in settings) settings.backup = false
          if (!'buggc' in settings) settings.buggc = true
          if (!isNumber(settings.backupTime)) settings.backupTime = 0
          if (!'group' in settings) settings.group = false
          if (!'jadibot' in settings) settings.jadibot = false
          if (!'nsfw' in settings) settings.nsfw = true
          if (!'restrict' in settings) settings.restrict = false
          if (!'self' in settings) settings.self = false
          if (!isNumber(settings.status)) settings.status = 0
        } else global.db.data.settings[this.user.jid] = {
          anon: true,
          anticall: true,
          antispam: true,
          antitroli: true,
          autoupdatestatus: false,
          backup: false,
          buggc: true,
          backupTime: 0,
          group: false,
          jadibot: false,
          nsfw: true,
          restrict: false,
          self: false,
          status: 0,
        }
      } catch (e) {
        console.error(e)
      }
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
      let blockList = conn.blocklist.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)
      if (blockList.includes(m.sender)) return // Pengguna yang diblokir tidak bisa menggunakan bot
      m.exp += Math.ceil(Math.random() * 10)

      let usedPrefix
      let _user = global.db.data && global.db.data.users && global.db.data.users[m.sender]

      let isROwner = [global.conn.user.jid, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
      let isOwner = isROwner || m.fromMe
      if (!isOwner && db.data.settings[this.user.jid].self) return // Saat mode self diaktifkan hanya owner yang dapat menggunakannya
      let isPrems = isROwner || db.data.users[m.sender].premium
      if (!isPrems && !m.isGroup && global.db.data.settings.groupOnly) return
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
            if (!['unbanchat.js', 'profile.js'].includes(name) && chat && chat.isBanned && !isPrems) return // Kecuali ini, bisa digunakan
            if (!['unbanchat.js', 'profile.js'].includes(name) && user && user.banned) return
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
              let text = util.format(e.message ? e.message : e)
              for (let key of Object.values(global.APIKeys))
                text = text.replace(new RegExp(key, 'g'), 'apikey')
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
            // if (m.limit) m.reply(+ m.limit + ' Limit terpakai') // Jadikan sebagai komentar jika kamu risih dengan pesan ini
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
      if (db.data.chats[m.chat].read) await this.chatRead(m.chat).catch(() => { })
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
            let ppgc = 'https://i.ibb.co/jr9Nh6Q/Thumb.jpg'
            try {
              pp = await uploadImage(await (await fetch(await this.getProfilePicture(user))).buffer())
              ppgc = await uploadImage(await (await fetch(await this.getProfilePicture(jid))).buffer())
            } catch (e) {
            } finally {
              text = (action === 'add' ? (chat.sWelcome || this.welcome || conn.welcome || 'Selamat datang, @user!').replace('@subject', this.getName(jid)).replace('@desc', groupMetadata.desc ? String.fromCharCode(8206).repeat(4001) + groupMetadata.desc : '') :
                (chat.sBye || this.bye || conn.bye || 'Sampai jumpa, @user!')).replace(/@user/g, '@' + user.split`@`[0])
              let wel = await new knights.Welcome()
                .setUsername(this.getName(user))
                .setGuildName(this.getName(jid))
                .setGuildIcon(ppgc)
                .setMemberCount(groupMetadata.participants.length)
                .setAvatar(pp)
                .setBackground("https://i.ibb.co/KhtRxwZ/dark.png")
                .toAttachment()

              let lea = await new knights.Goodbye()
                .setUsername(this.getName(user))
                .setGuildName(this.getName(jid))
                .setGuildIcon(ppgc)
                .setMemberCount(groupMetadata.participants.length)
                .setAvatar(pp)
                .setBackground("https://i.ibb.co/KhtRxwZ/dark.png")
                .toAttachment()

              this.sendFile(jid, action === 'add' ? wel.toBuffer() : lea.toBuffer(), 'pp.jpg', text, null, false, {
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
    let chat = global.db.data.chats[m.key.remoteJid]
    if (chat.delete) return
    await this.sendButton(m.key.remoteJid, `
Terdeteksi @${m.participant.split`@`[0]} telah menghapus pesan

ketik *.on delete* untuk mematikan pesan ini
`.trim(), '© stikerin', 'Matikan Antidelete', ',on delete', m.message)
    this.copyNForward(m.key.remoteJid, m.message).catch(e => console.log(e, m))
  },
  async onCall(json) {
    if (!db.data.settings[this.user.jid].anticall) return
    let jid = json[2][0][1]['from']
    let isOffer = json[2][0][2][0][0] == 'offer'
    let users = global.db.data.users
    let user = users[jid] || {}
    if (user.whitelist) return
    if (jid && isOffer) {
      const tag = this.generateMessageTag()
      const nodePayload = ['action', 'call', ['call', {
        'from': this.user.jid,
        'to': `${jid.split`@`[0]}@s.whatsapp.net`,
        'id': tag
      }, [['reject', {
        'call-id': json[2][0][2][0][1]['call-id'],
        'call-creator': `${jid.split`@`[0]}@s.whatsapp.net`,
        'count': '0'
      }, null]]]]
      this.sendJSON(nodePayload, tag)
      m.reply(`Kamu dibanned karena menelepon bot, owner : @${owner[0]}`)
    }
  },
  async GroupUpdate({ jid, desc, descId, descTime, descOwner, announce }) {
    if (!db.data.chats[jid].descUpdate) return
    if (!desc) return
    let caption = `
    @${descOwner.split`@`[0]} telah mengubah deskripsi grup.

    ${desc} 
        `.trim()
    this.sendButton(jid, caption, '© stikerin', 'Matikan', ',off desc')

  }
}

global.dfail = (type, m, conn) => {
  let msg = {
    rowner: 'Perintah ini hanya dapat digunakan oleh _*Pemilik Bot*_',
    owner: 'Perintah ini hanya dapat digunakan oleh _*Pemilik Bot*_',
    premium: 'Perintah ini hanya untuk pengguna _*Premium*_',
    group: 'Perintah ini hanya dapat digunakan di grup',
    private: 'Perintah ini hanya dapat digunakan di Chat Pribadi',
    admin: 'Perintah ini hanya untuk *Admin* grup',
    botAdmin: 'Jadikan bot sebagai *Admin* untuk menggunakan perintah ini',
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
  console.log(chalk.redBright("Memperbaharui 'handler.js'"))
  delete require.cache[file]
  if (global.reloadHandler) console.log(global.reloadHandler())
})