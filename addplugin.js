//By Rizky

const fs = require("fs")

let handler = async(m, { conn, usedPrefix, command, text }) => {
  let args = text.includes(" | ") ? text.split(" | ") : text.includes("|") ? text.split("|") : []
  if(!args[0]) return m.reply("salah gan harusnya" + usedPrefix + "addplugin command|tag|kode disini")
  if(!args[1]) return m.reply("salah gan harusnya" + usedPrefix + "addplugin command|tag|kode disini")
  if(!args[2]) return m.reply("salah gan harusnya" + usedPrefix + "addplugin uji|coba|kode disini")


  let filename = args[0]
  let helpt = `[${args[0]}]`.split("[").join("[\"").split(",").join("\",\"").split("]").join("\"]")
  let tag = `[${args[1]}]`.split("[").join("[\"").split(",").join("\",\"").split("]").join("\"]")
  if(fs.existsSync("./plugins/" + filename + ".js")) return m.reply(`${filename} sudah ada!`)

  let cmd = args[2]

  let str = `let handler = async(m, { conn, usedPrefix, command, text }) => {
  ${cmd}
}

handler.help = ${helpt}
handler.tags = ${tag}
handler.command = /^(${filename})/i

module.exports = handler`

  fs.createWriteStream("./plugins/" + filename + ".js")
  fs.writeFileSync("./plugins/" + filename + ".js", str)
  m.reply("Done!")
}
handler.help = ['addplugin command|tag|kode"]
handler.tags = ['owner','database']
handler.command = /^(addplugin)/i

module.exports = handler
