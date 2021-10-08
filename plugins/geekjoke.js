let fetch = require("node-fetch");
let handler = async (m, { conn, args }) => {
  let res = await fetch(
    global.API("https://geek-jokes.sameerkumar.website", "/api")
  );
  if (!res.ok) throw await `${res.status} ${res.statusText}`;
  let json = await res.json();
  if (json) m.reply(json);
  else throw eror
};
handler.help = ["geekjokes", "ulf"];
handler.tags = ["fun"];

handler.command = /^(geekjokes|geekjoke)$/i;

module.exports = handler;
