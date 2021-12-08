let fetch = require("node-fetch");
let axios = require("axios");

let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `Linknya mana?`;
  let vidurl = args[0].replace("xnxx", "onlineonlineoxnn");
  let res = axios
    .get(
      API("https://www.online-downloader.com", "/DL/YT.php", {
        videourl: vidurl,
        mstr: "9773",
        _: "1633710434836",
      })
    )
    .then((res) => {
      if (res.status != 200) throw `${res.status} ${res.statusText}`;
      let data = JSON.parse(res.data.replace(/[()]/g, ""));
      conn.sendFile(m.chat, data.Video_6_Url, "bokep.mp4", "bokep", m);
    });
};
handler.help = ["xnxx"].map((v) => v + " <Link>");
handler.tags = ["internet"];
handler.command = /^(xnxx)$/i;

handler.premium = true

handler.limit = true;

module.exports = handler;