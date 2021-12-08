let handler = async (m, { conn }) => {
  m.reply('Loading...')
  let res = `https://velgrynd.herokuapp.com/api/image/milf`
  conn.sendFile(m.chat, res, 'milf.jpg', 'huu suka ama tante tante', m)
}
handler.help = ['milf']
handler.tags = ['anime']

handler.command = /^(milf)$/i

module.exports = handler