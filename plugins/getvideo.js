let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `uhm.. url nya mana?\n\ncontoh:\n${usedPrefix + command} http://link.com/video.mp4`
    if (isUrl(args[0])) { await conn.sendVideo(m.chat, args[0]) }
    else throw `url salah`
}

handler.command = /^(getv)$/i

handler.limit = true

module.exports = handler

const isUrl = (text) => {
    return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(mp4|mkv|avi|mpg|3gp)/, 'gi'))
}