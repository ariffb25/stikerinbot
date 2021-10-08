let fetch = require("node-fetch");
let handler = async (m, { conn, args }) => {
  let res = await fetch(
    global.API("https://uselessfacts.jsph.pl/", "/random.json", {
      language: "en",
    })
  );
  if (!res.ok) throw await `${res.status} ${res.statusText}`;
  let json = await res.json();
  if (json.text) m.reply(json.text);
  else throw eror
};
handler.help = ["uselessfacts", "ulf"];
handler.tags = ["fun"];

handler.command = /^(uselessfacts|ulf)$/i;

module.exports = handler;
