const fetch = require('node-fetch')
const { facebook, igdl, tiktok, twitter, pin } = require('../lib/scrape')
const { servers, yta } = require('../lib/y2mate')
let handler = m => m

handler.all = async function (m, { isPrems, isOwner }) {

    if (m.isGroup) return
    let buf = { thumbnail: Buffer.alloc(0) }

    if (/^.*tiktok/i.test(m.text)) {
        // tiktok(m.text).then(async res => {
        //     let tiktok = JSON.stringify(res)
        //     let json = JSON.parse(tiktok)
        //     // m.reply(require('util').format(json))
        //     await this.sendVideo(m.chat, json.nowm, '*© stikerin*', m, { thumbnail: buf })
        // }).catch(_ => _)
        let res = await fetch(global.API('hardianto', '/api/download/tiktok', { url: m.text }, 'apikey'))
        if (!res.ok) throw await `${res.status} ${res.statusText}`
        let json = await res.json()
        await conn.sendVideo(m.chat, json.wm, '© stikerin', m, buf)
    }

    if (/^.*cocofun/i.test(m.text)) {
        let res = await fetch(global.API('jojo', '/api/cocofun-no-wm', { url: m.text }))
        if (!res.ok) throw await res.text()
        let json = await res.json()
        await this.sendVideo(m.chat, json.download, `*© stikerin*`, m, { thumbnail: buf })
    }

    if (/^.*(fb.watch|facebook.com)/i.test(m.text)) {
        facebook(m.text).then(async res => {
            let fb = JSON.stringify(res)
            let json = JSON.parse(fb)
            m.reply(require('util').format(json))
            if (!json.status) throw json
            await this.sendVideo(m.chat, json.data[1].url, '*© stikerin*', m, buf)
        }).catch(_ => _)
    }

    if (/^.*instagram.com\/(p|reel|tv)/i.test(m.text)) {
        igdl(m.text).then(async res => {
            let igdl = JSON.stringify(res)
            let json = JSON.parse(igdl)
            for (let { downloadUrl, type } of json) {
                this.sendFile(m.chat, downloadUrl, 'ig' + (type == 'image' ? '.jpg' : '.mp4'), '*© stikerin*', m, { thumbnail: buf })
            }
        }).catch(_ => _)
    }

    if (/^.*(pinterest.com\/pin|pin.it)/i.test(m.text)) {
        pin(m.text).then(async res => {
            let pin = JSON.stringify(res)
            let json = JSON.parse(pin)
            if (!json.status) throw `Tidak dapat diunduh`
            await this.sendVideo(m.chat, json.data.url, `*© stikerin*`, m, { thumbnail: buf })
        }).catch(_ => _)
    }

    if (/^.*twitter.com\//i.test(m.text)) {
        twitter(m.text).then(async res => {
            let twit = JSON.stringify(res)
            let json = JSON.parse(twit)
            let pesan = json.data.map((v) => `Link: ${v.url}`).join('\n------------\n')
            m.reply(pesan)
            for (let { url } of json.data) {
                this.sendFile(m.chat, url, 'ig' + (/mp4/i.test(url) ? '.mp4' : '.jpg'), `*© stikerin*`, m, false, { thumbnail: buf })
            }
        }).catch(_ => _)
    }

    if (/^https?:\/\/.*youtu/i.test(m.text)) {
        let server = (servers[0]).toLowerCase()
        let { dl_link, thumb, title, filesize, filesizeF } = await yta(m.text, servers.includes(server) ? server : servers[0])
        let isLimit = (isPrems || isOwner ? 99 : 30) * 1024 < filesize
        this.sendFile(m.chat, thumb, 'thumbnail.jpg', `
*Judul:* ${title}
*Ukuran File:* ${filesizeF}${isLimit ? `\n*Ukuran file diatas 30 MB, download aja sendiri:* ${dl_link}
` : ''}`.trim(), m, false, { thumbnail: await (await fetch(thumb)).buffer() })
        if (!isLimit) this.sendFile(m.chat, dl_link, title + '.mp3', `
*Judul:* ${title}
*Ukuran File:* ${filesizeF}
`.trim(), m)
    }

}

handler.limit = true
module.exports = handler