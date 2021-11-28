let handler = async (m, { conn }) => {
conn.sendFile(m.chat, API('amel', '/asupan', {}, 'apikey'), 'asupan.mp4', '@melcanz.io')
}
handler.help = ['asupan']
handler.tags = ['fun']
handler.command = /^(asupan)$/i
