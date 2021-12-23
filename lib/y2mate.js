let fetch = require('node-fetch')
let { JSDOM } = require('jsdom')

function post(url, formdata) {
  return fetch(url, {
    method: 'POST',
    headers: {
      accept: "*/*",
      'accept-language': "en-US,en;q=0.9",
      'content-type': "application/x-www-form-urlencoded; charset=UTF-8"
    },
    body: new URLSearchParams(Object.entries(formdata))
  })
}
const ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)?youtube(?:\-nocookie|)\.com\/(?:shorts\/)?(?:watch\?.*(?:|\&)v=|embed\/|v\/)?|youtu\.be\/)([-_0-9A-Za-z]{11})/

/**
 * Download YouTube Video via y2mate
 * @param {String} url YouTube Video URL
 * @param {String} quality (avaiable: `144p`, `240p`, `360p`, `480p`, `720p`, `1080p`, `1440p`, `2160p`)
 * @param {String} type (avaiable: `mp3`, `mp4`)
 * @param {String} bitrate (avaiable for video: `144`, `240`, `360`, `480`, `720`, `1080`, `1440`, `2160`)
 * (avaiable for audio: `128`)
 * @param {String} server (avaiable: `id4`, `en60`, `en61`, `en68`)
 */
async function yt(url, quality, type, bitrate, server = 'en68') {
  if (!ytIdRegex.test(url)) throw 'Invalid URL'
  let ytId = ytIdRegex.exec(url)
  url = 'https://youtu.be/' + ytId[1]
  let res = await post(`https://www.y2mate.com/mates/${server}/analyze/ajax`, {
    url,
    q_auto: 0,
    ajax: 1
  })
  let json = await res.json()
  let { document } = (new JSDOM(json.result)).window
  let tables = document.querySelectorAll('table')
  let table = tables[{ mp4: 0, mp3: 1 }[type] || 0]
  let list
  switch (type) {
    case 'mp4':
      list = Object.fromEntries([...table.querySelectorAll('td > a[href="#"]')].filter(v => !/\.3gp/.test(v.innerHTML)).map(v => [v.innerHTML.match(/.*?(?=\()/)[0].trim(), v.parentElement.nextSibling.nextSibling.innerHTML]))
      break
    case 'mp3':
      list = {
        '128kbps': table.querySelector('td > a[href="#"]').parentElement.nextSibling.nextSibling.innerHTML
      }
      break
    default:
      list = {}
  }
  let filesize = list[quality]
  let id = /var k__id = "(.*?)"/.exec(document.body.innerHTML) || ['', '']
  let thumb = document.querySelector('img').src
  let title = document.querySelector('b').innerHTML
  let res2 = await post(`https://www.y2mate.com/mates/${server}/convert`, {
    type: 'youtube',
    _id: id[1],
    v_id: ytId[1],
    ajax: '1',
    token: '',
    ftype: type,
    fquality: bitrate
  })
  let json2 = await res2.json()
  let KB = parseFloat(filesize) * (1000 * /MB$/.test(filesize))
  return {
    dl_link: /<a.+?href="(.+?)"/.exec(json2.result)[1],
    thumb,
    title,
    filesizeF: filesize,
    filesize: KB
  }
}

module.exports = {
  yt,
  ytIdRegex,
  /**
   * Download YouTube Video as Audio via y2mate
   * @param {String} url YouTube Video URL
   * @param {String} server (avaiable: `id4`, `en60`, `en61`, `en68`)
   */
  yta(url, server = 'en68') { return yt(url, '128kbps', 'mp3', '128', server) },
  /**
   * Download YouTube Video as Video via y2mate
   * @param {String} url YouTube Video URL
   * @param {String} server (avaiable: `id4`, `en60`, `en61`, `en68`)
   */
  ytv(url, server = 'en68') { return yt(url, '360p', 'mp4', '360', server) },
  servers: ['id4', 'id11', 'de14', 'en60', 'en61', 'en68', 'en88', 'es27', 'fr15', 'hi13', 'it13', 'jp8', 'kr7', 'mm7', 'my9', 'pt15', 'ru8', 'th8', 'tr8', 'vi12', 'zh-cn5', 'zh-tw5', 'sa12', 'bn9']
}