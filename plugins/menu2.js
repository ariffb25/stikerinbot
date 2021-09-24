let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
    "listMessage": {
        "title": "𝐌𝐄𝐍𝐔 𝐀𝐑𝐈𝐀𝐁𝐎𝐓𝐙",
        "description":"Bot Aktif Di Jam\n06.00-08.00\n12.00-14.00\n21.00-23.00\n\nBagi Yang Mau Join Ke Group Silahkan Klik Link Dibawah\nhttps://chat.whatsapp.com/IdK7gOMQQpC7WdfIgtuQtn\n\n Script Botz: https://github.com/iniariaaa/botwea\n\n*THANKS TO*\n• Nurutomo\n• Ariffb25\n• Aria Putra Pratama",
        "buttonText": "𝐊𝐥𝐢𝐤 𝐃𝐢𝐬𝐢𝐧𝐢 ⌕",
        "listType": "SINGLE_SELECT",
        "sections": [
            {
                "title": "◉ Menu Ke - 1",
                "rows": [
                    {
                        "title": '► ALL MENU',
                        "description": "\n𝗜 𝗪𝗮𝗻𝘁 𝗧𝗼 𝗨𝘀𝗲 𝐀𝐋𝐋 𝐌𝐄𝐍𝐔",
                        "rowId": ".? all"
                    }
                ]
            },
            {
                "title": "◉ Menu ke - 2",
                "rows": [
                    {
                        "title": '► GAME MENU',
                        "description": "\n𝙄 𝙒𝙖𝙣𝙩 𝙏𝙤 𝙐𝙨𝙚 𝐆𝐀𝐌𝐄 𝐌𝐄𝐍𝐔",
                        "rowId": ".? game"
                    }
                ]
            },
            {
                "title": "◉ Menu ke - 3",
                "rows": [
                    {
                        "title": '► XP MENU',
                        "description": "\n𝗜 𝗪𝗮𝗻𝘁 𝗧𝗼 𝗨𝘀𝗲 𝐗𝐏 𝐌𝐄𝐍𝐔",
                        "rowId": ".? xp"
                    }
                ]
            },
            {
                "title": "◉ Menu ke - 4",
                "rows": [
                    {
                        "title": '► STIKER MENU',
                        "description": "\n𝙄 𝙒𝙖𝙣𝙩 𝙏𝙤 𝙐𝙨𝙚 𝐒𝐓𝐈𝐂𝐊𝐄𝐑 𝙈𝙀𝙉𝙐",
                        "rowId": ".? stiker"
                    }
                ]
            },
            {
                "title": "◉ Menu ke - 5",
                "rows": [
                    {
                        "title": '► KERANG AJAIB MENU',
                        "description": "\n𝙄 𝙒𝙖𝙣𝙩 𝙏𝙤 𝙐𝙨𝙚 𝐊𝐄𝐑𝐀𝐍𝐆 𝐀𝐉𝐀𝐈𝐁 𝙈𝙀𝙉𝙐",
                        "rowId": ".? kerangajaib"
                    }
                ]
            },
            {
                "title": "◉ Menu ke - 6",
                "rows": [
                    {
                        "title": '► QUOTES MENU',
                        "description": "\n𝙄 𝙒𝙖𝙣𝙩 𝙏𝙤 𝙐𝙨𝙚 𝐐𝐔𝐎𝐓𝐄𝐒 𝙈𝙀𝙉𝙐",
                        "rowId": ".? quotes"
                    }
                ]
            },
            {
                "title": "◉ Menu ke - 7",
                "rows": [
                    {
                        "title": '► ADMIN MENU',
                        "description": "\n𝙄 𝙒𝙖𝙣𝙩 𝙏𝙤 𝙐𝙨𝙚 𝐀𝐃𝐌𝐈𝐍 𝙈𝙀𝙉𝙐",
                        "rowId": ".? admin"
                    }
                ]
            },
            {
                "title": "◉ Menu ke - 8",
                "rows": [
                    {
                        "title": '► DATABASE MENU',
                        "description": "\n𝙄 𝙒𝙖𝙣𝙩 𝙏𝙤 𝙐𝙨𝙚 𝗗𝗔𝗧𝗔𝗕𝗔𝗦𝗘 𝙈𝙀𝙉𝙐",
                        "rowId": ".? database"
                    }
                ]
            },
            {
                "title": "◉ Menu ke - 9",
                "rows": [
                    {
                        "title": '► AL-QUR\'AN MENU',
                        "description": "\n𝙄 𝙒𝙖𝙣𝙩 𝙏𝙤 𝙐𝙨𝙚 𝐀𝐋-𝐐𝐔𝐑𝐀𝐍 𝙈𝙀𝙉𝙐",
                        "rowId": ".? quran"
                    }
                ]
            },
            {
                "title": "◉ Menu ke - 10",
                "rows": [
                    {
                        "title": '► VOTE & ABSEN MENU',
                        "description": "\n𝙄 𝙒𝙖𝙣𝙩 𝙏𝙤 𝙐𝙨𝙚 𝐕𝐎𝐓𝐄 & 𝘼𝘽𝙎𝙀𝙉 𝙈𝙀𝙉𝙐",
                        "rowId": ".? vote"
                    }
                ]
            },
            {
                "title": "◉ Menu ke - 11",
                "rows": [
                    {
                        "title": '► GROUP MENU',
                        "description": "\n𝙄 𝙒𝙖𝙣𝙩 𝙏𝙤 𝙐𝙨𝙚 𝐆𝐑𝐎𝐔𝐏 𝙈𝙀𝙉𝙐",
                        "rowId": ".? grup"
                    }
                ]
            },
            {
                "title": "◉ Menu ke - 12",
                "rows": [
                    {
                        "title": '► PREMIUM MENU',
                        "description": "\n𝙄 𝙒𝙖𝙣𝙩 𝙏𝙤 𝙐𝙨𝙚 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 𝙈𝙀𝙉𝙐",
                        "rowId": ".? premium"
                    }
                ]
            },
            {
                "title": "◉ Menu ke - 13",
                "rows": [
                    {
                        "title": '► INTERNET MENU',
                        "description": "\n𝙄 𝙒𝙖𝙣𝙩 𝙏𝙤 𝙐𝙨𝙚 𝐆𝐑𝐎𝐔𝐏 𝙈𝙀𝙉𝙐",
                        "rowId": ".? internet"
                    }
                ]
            },
            {
                "title": "◉ Menu ke - 14",
                "rows": [
                    {
                        "title": '► ANONYMOUS MENU',
                        "description": "\n𝙄 𝙒𝙖𝙣𝙩 𝙏𝙤 𝙐𝙨𝙚 𝐀𝐍𝐎𝐍𝐘𝐌𝐎𝐔𝐒 𝙈𝙀𝙉𝙐",
                        "rowId": ".? anonymous"
                    }
                ]
            },
            {
                "title": "◉ Menu ke - 15",
                "rows": [
                    {
                        "title": '► NULIS & LOGO MENU',
                        "description": "\n𝙄 𝙒𝙖𝙣𝙩 𝙏𝙤 𝙐𝙨𝙚 𝐍𝐔𝐋𝐈𝐒 & 𝐋𝐎𝐆𝐎 𝙈𝙀𝙉𝙐",
                        "rowId": ".? nulis"
                    }
                ]
            },
            {
                "title": "◉ Menu ke - 16",
                "rows": [
                    {
                        "title": '► DOWNLOADER MENU',
                        "description": "\n𝙄 𝙒𝙖𝙣𝙩 𝙏𝙤 𝙐𝙨𝙚 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑 𝙈𝙀𝙉𝙐",
                        "rowId": ".? downloader"
                    }
                ]
            },
            {
                "title": "◉ Menu ke - 17",
                "rows": [
                    {
                        "title": '► TOOLS MENU',
                        "description": "\n𝙄 𝙒𝙖𝙣𝙩 𝙏𝙤 𝙐𝙨𝙚 𝐓𝐎𝐎𝐋𝐒 𝙈𝙀𝙉𝙐",
                        "rowId": ".? tools"
                    }
                ]
            },
            {
                "title": "◉ Menu ke - 18",
                "rows": [
                    {
                        "title": '► FUN MENU',
                        "description": "\n𝙄 𝙒𝙖𝙣𝙩 𝙏𝙤 𝙐𝙨𝙚 𝐅𝐔𝐍 𝙈𝙀𝙉𝙐",
                        "rowId": ".? fun"
                    }
                ]
            },
            {
                "title": "◉ Menu ke - 19",
                "rows": [
                    {
                        "title": '► JADIBOT MENU',
                        "description": "\n𝙄 𝙒𝙖𝙣𝙩 𝙏𝙤 𝙐𝙨𝙚 𝐉𝐀𝐃𝐈𝐁𝐎𝐓 𝙈𝙀𝙉𝙐",
                        "rowId": ".? jadibot"
                    }
                ]
            },
            {
                "title": "◉ Menu ke - 20",
                "rows": [
                    {
                        "title": '► INFO MENU',
                        "description": "\n𝙄 𝙒𝙖𝙣𝙩 𝙏𝙤 𝙐𝙨𝙚 𝐈𝐍𝐅𝐎 𝙈𝙀𝙉𝙐",
                        "rowId": ".? info"
                    }
                ]
            },
            {
                "title": "◉ Menu ke - 21",
                "rows": [
                    {
                        "title": '► TANPA KATEGORI MENU',
                        "description": "\n𝙄 𝙒𝙖𝙣𝙩 𝙏𝙤 𝙐𝙨𝙚 𝐓𝐀𝐍𝐏𝐀 𝐊𝐀𝐓𝐄𝐆𝐎𝐑𝐘 𝙈𝙀𝙉𝙐",
                        "rowId": ".? tanpakategori"
                    }
                ]
            },
            {
                "title": "◉ Menu ke - 22",
                "rows": [
                    {
                        "title": '► SOUND MENU',
                        "description": "\n𝙄 𝙒𝙖𝙣𝙩 𝙏𝙤 𝙐𝙨𝙚 𝐒𝐎𝐔𝐍𝐃 𝙈𝙀𝙉𝙐",
                        "rowId": ".? audio"
                    }
                ]
            },
            {
                "title": "◉ Menu ke - 23",
                "rows": [
                    {
                        "title": '► OWNER MENU',
                        "description": "\n𝙄 𝙒𝙖𝙣𝙩 𝙏𝙤 𝙐𝙨𝙚 𝐎𝐖𝐍𝐄𝐑 𝙈𝙀𝙉𝙐",
                        "rowId": ".? owner"
                    }
                ]
            },
        ]
    }
  }, {}), {waitForAck: true})
handler.command = ['menu']
handler.register = true
module.exports = handler
