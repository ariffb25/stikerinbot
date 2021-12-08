let fetch = require("node-fetch");
let handler = async (m, { text, usedPrefix, command }) => {
  if (!text)
    throw `uhm.. teksnya mana?\n\ncontoh:\n${usedPrefix + command} hai`;
  let res = await fetch(
    global.API(
      "https://api.simsimi.net",
      "/v2/",
      {
        text: encodeURIComponent(text),
        lc: "id",
      },
      ""
    )
  );
  if (!res.ok) throw `${res.status} ${res.statusText}`;
  let json = await res.json();
  if (
    json.success == "Aku tidak mengerti apa yang kamu katakan.Tolong ajari aku."
  )
    await m.reply(
      "siminya blom diajarin jadi gatau t_t custom pesannya di https://simsimi.com/teach"
    );
  await m.reply(json.success);
};
handler.help = ["simi", "simsimi", "simih"].map((v) => v + " <teks>");
handler.tags = ["fun"];
handler.command = /^((sim)?simi|simih)$/i;

module.exports = handler;