function handler(m) {
  this.sendContact(m.chat, '6289514791129', '𝑅𝑖𝑑𝑤𝑎𝑛𝑋𝑦𝑍', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
