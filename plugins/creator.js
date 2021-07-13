function handler(m) {
  this.sendContact(m.chat, '6283128734012', 'ariffb', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
