let handler = async m => m.reply(`
┏ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇       *「 Manga • Manhwa 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ❖ https://mangatx.com
┃ ❖ https://komikcast.com
┃ ❖ https://komiku.id
┃ ❖ https://mangaku.pro
┃ ❖ https://mangakita.net
┃ ❖ https://bacakomik.co
┃ ❖ https://kiryuu.co
┃ ❖ https://komikid.com
┃ ❖ https://komikfox.web.id
┃ ❖ https://westmanga.info
┃ ❖ https://mangaindo.web.id
┃ ❖ https://komikindo.co
┃ ❖ https://matakomik.com
┃ ❖ https://mangaid.click
┃ ❖ https://klikmanga.com
┃ ❖ https://komikmama.net
┃ ❖ https://maid.my.id
┃ ❖ https://komikav.com
┃ ❖ https://mangadex.org
┃ ❖ https://ngomik.net
┃ ❖ https://mangaku.pro
┃ ❖ https://boosei.com
┃ ❖ https://mgkomik.my.id
┃ ❖ https://pojokmanga.com
┗ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['mangalink','manhwalink']
handler.tags = ['anime']
handler.command = /^ma(nga|nhwa)link$/i
handler.group = false
handler.register = true

module.exports = handler
