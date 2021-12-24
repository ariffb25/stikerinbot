const { default: fetch } = require('node-fetch')
const { createWriteStream, existsSync } = require('fs')
const { promisify } = require('util')
const { join } = require('path')

let confirmation = {}
let repository = 'ariffb25/stikerinbot'
let branch = 'main'

async function handler(m, { text }) {
    let res = await fetch(`https://raw.githubusercontent.com/${repository}/${branch}/${text}`)
    if (!res.ok) throw await res.text()
    let filename = join(__dirname, '..', text)
    if (existsSync(filename)) {
        confirmation[m.sender] = {
            res,
            filename,
            text,
            timeout: setTimeout(() => (m.reply('timed out'), delete confirmation[m.sender]), 60000)
        }
        throw 'File sudah ada, yakin ingin menimpa? (Y/n) (60s Timeout)'
    }
    res.body.pipe(createWriteStream(filename))
    res.body.once('end', () => {
        m.reply('Berhasil memperbaharui!')
        conn.sendFile(m.chat, filename, text, null, m).catch(console.error)
    })
}

handler.all = async m => {
    if (!(m.sender in confirmation)) return
    let { res, filename, text, timeout } = confirmation[m.sender]
    if (/^y(es|a)?$/i.test(m.text)) {
        res.body.pipe(createWriteStream(filename))
        res.body.once('end', () => {
            m.reply('Done overwrite!')
            conn.sendFile(m.chat, filename, text, null, m).catch(console.error)
        })
        clearTimeout(timeout)
        delete confirmation[m.sender]
        return !0
    } else if (/^no?$/i.test(m.text)) {
        delete confirmation[m.sender]
        m.reply('Rejected')
        clearTimeout(timeout)
        return !0
    }
}
handler.help = ['update2']
handler.tags = ['host']
handler.command = ['update2']

handler.rowner = true

module.exports = handler