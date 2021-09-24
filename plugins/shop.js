let { MessageType } = require('@adiwajshing/baileys')
const potion = 500
const Spotion = 150 
const Bdiamond = 900
const Sdiamond = 750
const Bcommon = 200
const Scommon = 20
const Suncommon = 100
const Buncommon = 600
const Bmythic = 2000 
const Smythic = 500
const Blegendary = 7500
const Bpet = 15000
const Slegendary = 3000
const Bsampah = 10
const Ssampah = 2
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
    const _armor = global.db.data.users[m.sender].armor
    const armor = (_armor == 0 ? 20000 : '' || _armor == 1 ? 49999 : '' || _armor == 2 ? 99999 : '' || _armor == 3 ? 149999 : '' || _armor == 4 ? 299999 : '')
    let type = (args[0] || '').toLowerCase()
    let _type = (args[1] || '').toLowerCase()
    let jualbeli = (args[0] || '').toLowerCase()
    const Kchat = `
${usedPrefix}shop <Buy|sell> <item> <jumlah>\n
Contoh penggunaan: *${usedPrefix}shop buy potion 1*\n\n
List Barang:\n\n━━━━━━━━━━━━━━━━━\n
*Barang   |  Harga beli*\n━━━━━━━━━━━━━━━━━\n
Potion:       ${potion}
Diamond:     ${Bdiamond}
Common:     ${Bcommon}
Uncommon:  ${Buncommon}
Mythic:     ${Bmythic}
Legendary: ${Blegendary}
Sampah:     ${Bsampah}
Armor:       ${armor}\n\n━━━━━━━━━━━━━━━━━\n
*Barang   | Harga Jual*\n━━━━━━━━━━━━━━━━━\n
Potion:       ${Spotion}
Diamond:     ${Sdiamond}
Common:     ${Scommon}
Uncommon:  ${Suncommon}
Mythic:     ${Smythic}
Legendary: ${Slegendary}
Sampah:     ${Ssampah}\n━━━━━━━━━━━━━━━━━\n━━━━━━━━━━━━━━━━━\n\n
`.trim()
    try {
        if (/shop|toko/i.test(command)) {
            const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
            const sampah = global.db.data.users[m.sender].sampah
            switch (jualbeli) {
            case 'buy':
                switch (_type) {
                    case 'potion':
                            if (global.db.data.users[m.sender].money >= potion * count) {
                                global.db.data.users[m.sender].money -= potion * count
                                global.db.data.users[m.sender].potion += count * 1
                                conn.reply(m.chat, `Sukses Membeli ${count} Potion Dengan Harga ${potion * count} money\n\nGunakan Potion Dengan Ketik: *${usedPrefix}use potion <jumlah>*`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Potion Dengan Harga ${potion * count} Money `,)
                        break

                    case 'diamond':
                            if (global.db.data.users[m.sender].money >= Bdiamond * count) {
                                global.db.data.users[m.sender].diamond += count * 1
                                global.db.data.users[m.sender].money -= Bdiamond * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Diamond Dengan Harga ${Bdiamond * count} Money`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup`, m)
                        
                        break
                    case 'common':
                            if (global.db.data.users[m.sender].money >= Bcommon * count) {
                                global.db.data.users[m.sender].common += count * 1
                                global.db.data.users[m.sender].money -= Bcommon * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Common Crate Dengan Harga ${Bcommon * count} Money`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Common Crate Dengan Harga ${Bcommon * count} Money \n\nBuka Crate Dengan Ketik: *${usedPrefix}open common*`, m)
                        
                        break
                    case 'uncommon':
                            if (global.db.data.users[m.sender].money >= Buncommon * count) {
                                global.db.data.users[m.sender].uncommon += count * 1
                                global.db.data.users[m.sender].money -= Buncommon * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Uncommon Crate Dengan Harga ${Buncommon * count} Money`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Uncommon Crate Dengan Harga ${Buncommon * count} Money \n\nBuka Crate Dengan Ketik: *${usedPrefix}open uncommon*`, m)
                        
                        break
                    case 'mythic':
                            if (global.db.data.users[m.sender].money >= Bmythic * count) {
                                    global.db.data.users[m.sender].mythic += count * 1
                                global.db.data.users[m.sender].money -= Bmythic * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Mythic Crate Dengan Harga ${Bmythic * count} Money`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Mythic Crate Dengan Harga ${Bmythic* count} Money\n\nBuka Crate Dengan Ketik:*${usedPrefix}open mythic*`, m)
                        
                        break
                    case 'legendary':
                            if (global.db.data.users[m.sender].money >= Blegendary * count) {
                                global.db.data.users[m.sender].legendary += count * 1
                                global.db.data.users[m.sender].money -= Blegendary * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Legendary Crate Dengan Harga ${Blegendary * count} Money`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Legendary Crate Dengan Harga ${Blegendary * count} Money \n\nBuka Crate Dengan Ketik: *${usedPrefix}open legendary*`, m)
                        
                        break
                    case 'sampah':
                            if (global.db.data.users[m.sender].money >= Bsampah * count) {
                                global.db.data.users[m.sender].sampah += count * 1
                                global.db.data.users[m.sender].money -= Bsampah * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Sampah Dengan Harga ${Bsampah * count} Money `, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Sampah Dengan Harga ${Bsampah * count} Money`.trim(), m)
                        
                        break
                    case 'kucing':
                        if (global.db.data.users[m.sender].money >= Bpet * count) {
                            global.db.data.users[m.sender].kucing += count * 1
                            global.db.data.users[m.sender].money -= Bpet * count
                            conn.reply(m.chat, `Sukses Membeli ${count} kucing Dengan Harga ${Bpet * count} Money `, m)
                        } else conn.reply(m.chat, `Money Anda Tidak Cukup `, m)
                    
                    break
                    case 'armor':
                            if (global.db.data.users[m.sender].armor == 5) return conn.reply(m.chat, 'Armormu sudah *Level Max*', m)
                            if (global.db.data.users[m.sender].money > armor) {
                                global.db.data.users[m.sender].armor += 1
                                global.db.data.users[m.sender].money -= armor * 1
                                conn.reply(m.chat, `Sukses Membeli Armor Seharga ${armor} Money` ,m)
                            } else conn.reply(m.chat, `Uang Mu Tidak Cukup Untuk Membeli Armor Seharga ${armor} Money`, m)
                        
                        break
                    default:
                        return conn.reply(m.chat, Kchat, m)
                }
                break
            case 'sell': 
                switch (_type) {
                    case 'potion':
                        if (global.db.data.users[m.sender].potion >= count * 1) {
                            global.db.data.users[m.sender].money += Spotion * count
                            global.db.data.users[m.sender].potion -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Potion Dengan Harga ${Spotion * count} Money `.trim(), m)
                        } else conn.reply(m.chat, `Potion Kamu Tidak Cukup`.trim(), m)
                        break
                    case 'common':
                        if (global.db.data.users[m.sender].common >= count * 1) {
                            global.db.data.users[m.sender].money += Scommon * count
                            global.db.data.users[m.sender].common -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Common Crate Dengan Harga ${Scommon * count} Money`.trim(), m)
                        } else conn.reply(m.chat, `Common Crate Kamu Tidak Cukup`.trim(), m)
                        break
                    case 'uncommon':
                        if (global.db.data.users[m.sender].uncommon >= count * 1) {
                            global.db.data.users[m.sender].money += Suncommon * count
                            global.db.data.users[m.sender].uncommon -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Uncommon Crate Dengan Harga ${Suncommon * count} Money`.trim(), m)
                        } else conn.reply(m.chat, `Uncommon Crate Kamu Tidak Cukup`.trim(), m)
                        break
                    case 'mythic':
                        if (global.db.data.users[m.sender].mythic >= count * 1) {
                            global.db.data.users[m.sender].money += Smythic * count
                            global.db.data.users[m.sender].mythic -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Mythic Crate Dengan Harga ${Smythic * count} Money`.trim(), m)
                        } else conn.reply(m.chat, `Mythic Crate Kamu Tidak Cukup `.trim(), m)
                        break
                    case 'legendary':
                        if (global.db.data.users[m.sender].legendary >= count * 1) {
                            global.db.data.users[m.sender].money += Slegendary * count
                            global.db.data.users[m.sender].legendary -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Legendary Crate Dengan Harga ${Slegendary * count} Money `.trim(), m)
                        } else conn.reply(m.chat, `Legendary Crate Kamu Tidak Cukup `.trim(), m)
                        break
                    case 'sampah':
                        if (global.db.data.users[m.sender].sampah >= count * 1) {
                            global.db.data.users[m.sender].sampah -= count * 1
                            global.db.data.users[m.sender].money += Ssampah * count
                            conn.reply(m.chat, `Sukses Menjual ${count} Sampah , Dan Anda Mendapatkan ${Ssampah * count} Money `, m)
                        } else conn.reply(m.chat, `Sampah Anda Tidak Cukup `, m)
                        break
                    case 'diamond':
                        if (global.db.data.users[m.sender].diamond >= count * 1) {
                            global.db.data.users[m.sender].diamond -= count * 1
                            global.db.data.users[m.sender].money += Sdiamond * count
                            conn.reply(m.chat, `Sukses Menjual ${count} Diamond, Dan Anda Mendapatkan ${Sdiamond * count} Money `, m)
                        } else conn.reply(m.chat, `Diamond Anda Tidak Cukup `, m)
                        break
                    default:
                        return conn.reply(m.chat, Kchat, m)
                }
                break
            default:
                return conn.reply(m.chat, Kchat, m)
            }
        } else if (/beli|buy/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'potion':
                        if (global.db.data.users[m.sender].money >= potion * count) {
                            global.db.data.users[m.sender].money -= potion * count
                            global.db.data.users[m.sender].potion += count * 1
                            conn.reply(m.chat, `Sukses membeli ${count} Potion Dengan Harga ${potion * count} Money \n\nGunakan Potion Dengan Ketik: *${usedPrefix}use potion <jumlah>*`, m)
                        } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Potion Dengan Harga ${potion * count} Money`,m)
                    
                    break
                case 'diamond':
                        if (global.db.data.users[m.sender].money >= Bdiamond * count) {
                            global.db.data.users[m.sender].diamond += count * 1
                            global.db.data.users[m.sender].money -= Bdiamond * count
                            conn.reply(m.chat, `Sukses Membeli ${count} Diamond Dengan Harga ${Bdiamond * count} Money `, m)
                        } else conn.reply(m.chat, `Money Anda Tidak Cukup `, m)
                    
                    break
                 case 'kucing':
                        if (global.db.data.users[m.sender].money >= Bpet * count) {
                            global.db.data.users[m.sender].kucing += count * 1
                            global.db.data.users[m.sender].money -= Bpet * count
                            conn.reply(m.chat, `Sukses Membeli ${count} kucing Dengan Harga ${Bpet * count} Money `, m)
                        } else conn.reply(m.chat, `Money Anda Tidak Cukup `, m)
                    
                    break
                case 'common':
                        if (global.db.data.users[m.sender].money >= Bcommon * count) {
                            global.db.data.users[m.sender].common += count * 1
                            global.db.data.users[m.sender].money -= Bcommon * count
                            conn.reply(m.chat, `Sukses Membeli ${count} Common Crate Dengan Harga ${Bcommon * count} Money `, m)
                        } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Common Crate Dengan Harga ${Bcommon * count} Money \n\nBuka Crate Dengan Ketik : *${usedPrefix}open common*`, m)
                    
                    break
                case 'uncommon':
                        if (global.db.data.users[m.sender].money >= Buncommon * count) {
                            global.db.data.users[m.sender].uncommon += count * 1
                            global.db.data.users[m.sender].money -= Buncommon * count
                            conn.reply(m.chat, `Sukses Membeli ${count} Uncommon Crate Dengan Harga ${Buncommon * count} Money `, m)
                        } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Uncommon Crate Dengan Harga ${Buncommon * count} Money \n\nBuka Crate Dengan Ketik: *${usedPrefix}open uncommon*`, m)
                   
                    break
                case 'mythic':
                        if (global.db.data.users[m.sender].money >= Bmythic * count) {
                            global.db.data.users[m.sender].mythic += count * 1
                            global.db.data.users[m.sender].money -= Bmythic * count
                            conn.reply(m.chat, `Sukses Membeli ${count} Mythic Crate Dengan Harga ${Bmythic * count} Money `, m)
                        } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Mythic Crate Dengan Harga ${Bmythic* count} money\n\nBuka Crate Dengan Ketik: *${usedPrefix}open mythic*`, m)
                    
                    break
                case 'legendary':
                        if (global.db.data.users[m.sender].money >= Blegendary * count) {
                            global.db.data.users[m.sender].legendary += count * 1
                            global.db.data.users[m.sender].money -= Blegendary * count
                            conn.reply(m.chat, `Sukses Membeli ${count} Legendary Crate Dengan Harga ${Blegendary * count} Money`, m)
                        } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Legendary Crate Dengan Harga ${Blegendary * count} Money \n\nBuka Crate Dengan Ketik: *${usedPrefix}open legendary*`, m)
                    
                    break
                case 'sampah':
                        if (global.db.data.users[m.sender].money >= Bsampah * count) {
                            global.db.data.users[m.sender].sampah += count * 1
                            global.db.data.users[m.sender].money -= Bsampah * count
                            conn.reply(m.chat, `Sukses Membeli ${count} Sampah Dengan Harga ${Bsampah * count} money`, m)
                        } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Sampah Dengan Harga ${Bsampah * count} Money `.trim(), m)
                    
                    break
                case 'kucing':
                        if (global.db.data.users[m.sender].money >= Bpet * count) {
                            global.db.data.users[m.sender].kucing += count * 1
                            global.db.data.users[m.sender].money -= Bpet * count
                            conn.reply(m.chat, `Sukses Membeli ${count} kucing Dengan Harga ${Bpet * count} Money `, m)
                        } else conn.reply(m.chat, `Money Anda Tidak Cukup `, m)
                    
                    break
                case 'armor':
                        if (global.db.data.users[m.sender].armor == 5) return conn.reply(m.chat, 'Armormu Telah *Level Max*', m)
                        if (global.db.data.users[m.sender].money > armor * 1) {
                            global.db.data.users[m.sender].armor += 1
                            global.db.data.users[m.sender].money -= armor * 1
                            conn.reply(m.chat, `Sukses Membeli Armor Seharga ${armor} Money` ,m)
                          
                        } else conn.reply(m.chat, `Uang Mu Tidak Cukup Untuk Membeli Armor Seharga ${armor} Money`, m)
                    
                    break
                default:
                    return conn.reply(m.chat, Kchat, m)
            }
        } else if (/sell|jual|/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'potion':
                    if (global.db.data.users[m.sender].potion >= count * 1) {
                        global.db.data.users[m.sender].money += Spotion * count
                        global.db.data.users[m.sender].potion -= count * 1
                        conn.reply(m.chat, `Sukses Menjual ${count} Potion Dengan Harga ${Spotion * count} Money`.trim(), m)
                    } else conn.reply(m.chat, `Potion Kamu Tidak Cukup `.trim(), m)
                    break
                case 'common':
                    if (global.db.data.users[m.sender].common >= count * 1) {
                        global.db.data.users[m.sender].money += Scommon * count
                        global.db.data.users[m.sender].common -= count * 1
                        conn.reply(m.chat, `Sukses Menjual ${count} Common Crate Dengan Harga ${Scommon * count} Money`.trim(), m)
                    } else conn.reply(m.chat, `Common Crate Kamu Tidak Cukup `.trim(), m)
                    break

                case 'uncommon':
                    if (global.db.data.users[m.sender].uncommon >= count * 1) {
                        global.db.data.users[m.sender].money += Suncommon * count
                        global.db.data.users[m.sender].uncommon -= count * 1
                        conn.reply(m.chat, `Sukses Menjual ${count} Uncommon Crate Dengan Harga ${Suncommon * count} Money`.trim(), m)
                    } else conn.reply(m.chat, `Uncommon Crate Kamu Tidak Cukup`.trim(), m)
                    break
                case 'mythic':
                    if (global.db.data.users[m.sender].mythic >= count * 1) {
                        global.db.data.users[m.sender].money += Smythic * count
                        global.db.data.users[m.sender].mythic -= count * 1
                        conn.reply(m.chat, `Sukses Menjual ${count} Mythic Crate Dengan Harga ${Smythic * count} Money`.trim(), m)
                    } else conn.reply(m.chat, `Mythic Crate Kamu Tidak Cukup `.trim(), m)
                    break
                case 'legendary':
                    if (global.db.data.users[m.sender].legendary >= count * 1) {
                        global.db.data.users[m.sender].money += Slegendary * count
                        global.db.data.users[m.sender].legendary -= count * 1
                        conn.reply(m.chat, `Sukses Menjual ${count} Legendary Crate Dengan Harga ${Slegendary * count} Money`.trim(), m)
                    } else conn.reply(m.chat, `Legendary Crate Kamu Tidak Cukup`.trim(), m)
                    break
                case 'sampah':
                    if (global.db.data.users[m.sender].sampah >= count * 1) {
                        global.db.data.users[m.sender].sampah -= count * 1
                        global.db.data.users[m.sender].money += Ssampah * count
                        conn.reply(m.chat, `Sukses Menjual ${count} Sampah, Dan Anda Mendapatkan ${Ssampah * count} Money`.trim(), m)
                    } else conn.reply(m.chat, `Sampah Anda Tidak Cukup`.trim(), m)
                    break           
                 case 'diamond':
                    if (global.db.data.users[m.sender].diamond >= count * 1) {
                        global.db.data.users[m.sender].diamond -= count * 1
                        global.db.data.users[m.sender].money += Sdiamond * count
                        conn.reply(m.chat, `Sukses Menjual ${count} Diamond, Dan Anda Mendapatkan ${Sdiamond * count} Money`, m)
                    } else conn.reply(m.chat, `Diamond Anda Tidak Cukup `, m)
                    break
                default:
                    return conn.reply(m.chat, Kchat, m)
            }
        }
    } catch (e) {
        conn.reply(m.chat, Kchat, m)
        console.log(e)
        if (DevMode) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, 'shop.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
}

handler.help = ['shop <sell|buy> <args>', 'toko <sell|buy> <args>']
handler.tags = ['rpg']
    
handler.command = /^(shop|toko|buy|beli|sell|jual)$/i
module.exports = handler
