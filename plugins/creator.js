function handler(m) {
  this.sendContact(m.chat, '6281351047727', 'ilman', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
