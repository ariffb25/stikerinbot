let axios = require("axios")
let fetch = require("node-fetch")
let cheerio = require("cheerio")
async function wikipedia(querry) {
  try {
    const link = await axios.get(`https://en.wikipedia.org/wiki/${querry}`)
    const $ = cheerio.load(link.data)
    let judul = $('#firstHeading').text().trim()
    let thumb = $('#mw-content-text').find('div.mw-parser-output > div:nth-child(1) > table > tbody > tr:nth-child(2) > td > a > img').attr('src') || `//i.ibb.co/nzqPBpC/http-error-404-not-found.png`
    let isi = []
    $('#mw-content-text > div.mw-parser-output').each(function (rayy, Ra) {
      let penjelasan = $(Ra).find('p').text().trim()
      isi.push(penjelasan)
    })
    for (let i of isi) {
      const data = {
        status: link.status,
        result: {
          judul: judul,
          thumb: 'https:' + thumb,
          isi: i
        }
      }
      return data
    }
  } catch (err) {
    var notFond = {
      status: link.status,
      Pesan: eror
    }
    return notFond
  }
}
let handler = async (m, { conn, text }) => {
  if (!text) throw `uhm.. what are you looking for?\n\nexample:\n.wiki nodejs`
  wikipedia(`${text}`).then(res => {
    m.reply(res.result.isi)
  }).catch(() => { m.reply('Not found') })
}
handler.help = ['wikipedia <query>']
handler.tags = ['internet']
handler.command = /^(wiki(pedia)?)$/i

module.exports = handler
