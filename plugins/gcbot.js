let handler = async m => m.reply(`
◇ *⚠GRUP BOT⚠*


① https://chat.whatsapp.com/CnQV9lNcHuIENb8SQ9CaYP

② https://chat.whatsapp.com/Hjr3H7l9iC8F2deP0cv6GT

③ https://chat.whatsapp.com/CkJChTj3OaSGnWvryR3i54

④ https://chat.whatsapp.com/Lb4Emjih98rBiCZiZoS2eM

⑤ https://chat.whatsapp.com/FrluVyY5kBRIhY6yKfH4DI

*《DIAHARAPKAN UNTUK MEMATUHI PERATURAN GRUP ITU》*
`.trim()) // Tambah sendiri kalo mau
handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gcbot$/i

module.exports = handler