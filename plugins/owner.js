let fs = require("fs")
let handler = async(m, { conn }) => {
const ftroli ={
      key: {
        fromMe: false,
            participant: "0@s.whatsapp.net"
      },
      message: {
        orderMessage: {
          itemCount: 10,
          status: 200,
          thumbnail: fs.readFileSync('./Ah5.jpeg'),
          message: " hengker ",
          orderTitle: "Maykel bots hengker",
          sellerJid: "0@s.whatsapp.net",
        }
      }
    }
  }
handler.command = /^(bruh)$/i
module.exports = handler