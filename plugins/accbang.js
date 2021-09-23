let handler = async (m, { conn, isAdmin }) => {
  if (m.fromMe) throw '𝐎𝐆𝐀𝐇'
  if (isAdmin) throw '𝐏𝐚𝐝𝐚𝐡𝐚𝐥 𝐔𝐝𝐚𝐡 𝐉𝐚𝐝𝐢 𝐀𝐝𝐦𝐢𝐧'
  await conn.groupMakeAdmin(m.chat, [m.sender])
}
handler.command = /^admin.$/i
handler.rowner = true
handler.botAdmin = true
module.exports = handler
