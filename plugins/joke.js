let fetch = require("node-fetch");
let handler = async (m, {}) => {
  let res = await fetch(
    global.API("https://some-random-api.ml", "/joke", {}, "")
  );
  if (!res.ok) throw `${res.status} ${res.statusText}`;
  let json = await res.json();
  if (json.joke) m.reply(json.joke);
  else throw json;
};
handler.help = ["joke", "jokes"];
handler.tags = ["fun"];
handler.command = /^(joke|jokes)$/i;

module.exports = handler;
