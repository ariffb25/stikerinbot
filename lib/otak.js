const axios = require('axios')
const cheerio = require('cheerio')


const onGoing = async (p) => {
const res = await axios.get(`https://otakudesu.moe/ongoing-anime`)
const $ = cheerio.load(res.data)
const result = []
$('.venz').find('li > div.detpost').each(function(c, d) {
const judul = $(d).find('div.thumb > a > div.thumbz > h2.jdlflm').text()
const thumb = $(d).find('div.thumb > a > div.thumbz > img').attr('src')
const eps = $(d).find('div.epz').text()
const hri = $(d).find('div.epztipe').text()
const tgl = $(d).find('div.newnime').text()
result.push({ judul, thumb, eps, hri, tgl })
})
return result
}

module.exports = { onGoing }