const TicTacToe = require("../lib/tictactoe")

let handler = async (m, { conn, usedPrefix, command, text }) => {
    conn.game = conn.game ? conn.game : {}
    if (/leave|exit|keluar/i.test(command)) {
        delete conn.game[Object.values(conn.game).find(room => room.state === 'WAITING').id]
        throw '_Successfully exit the game_'
    } else {
        if (Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return conn.sendButton(m.chat, '_You are still in the game_', '', 'Go out', ',tttexit', m)
        let room = Object.values(conn.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
        // m.reply('[WIP Feature]')
        if (room) {
            m.reply('_Partners found!_')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
                return {
                    X: '❌',
                    O: '⭕',
                    1: '1️⃣',
                    2: '2️⃣',
                    3: '3️⃣',
                    4: '4️⃣',
                    5: '5️⃣',
                    6: '6️⃣',
                    7: '7️⃣',
                    8: '8️⃣',
                    9: '9️⃣',
                }[v]
            })
            let str = `
Room ID: ${room.id}
${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Waiting @${room.game.currentTurn.split('@')[0]}
Type *giveup* to give up
`.trim()
            if (room.x !== room.o) await conn.sendButton(room.x, str, '© MilfBOT', 'Giveup', 'giveup', m, {
                contextInfo: {
                    mentionedJid: conn.parseMention(str)
                }
            })
            await conn.sendButton(room.o, str, '© MilfBOT', 'Giveup', 'giveup', m, {
                contextInfo: {
                    mentionedJid: conn.parseMention(str)
                }
            })
        } else {
            room = {
                id: 'tictactoe-' + (+new Date),
                x: m.chat,
                o: '',
                game: new TicTacToe(m.sender, 'o'),
                state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('_Waiting for partner_' + (text ? ` _type the command below_
${usedPrefix}${command} ${text}` : ''))
            conn.game[room.id] = room
        }
    }
}

handler.help = ['tictactoe', 'ttt', 'tttexit'].map(v => v + ' [room name]')
handler.tags = ['game']
handler.command = /^(tictactoe|t{3})(exit)?$/

module.exports = handler
