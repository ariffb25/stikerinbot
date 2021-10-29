const axios = require('axios')

let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw " please provide place or location name"
  let res = await axios.get(
    API("https://api.openweathermap.org", "/data/2.5/weather", {
      q: args[0],
      units: "metric",
      appid: "060a6bcfa19809c2cd4d97a212b19273",
    })
  );
  if (res.status !== 200) throw await `${res.status} ${res.statusText}`
  if (res.data.cod == 200) await m.reply(`🌸 Name: ${res.data.name}
💮 Country: ${res.data.sys.country}
🌈 Weather: ${res.data.weather[0].description}
🎋 Temperature: ${res.data.main.temp}°C
💠 Minimum temperature: ${res.data.main.temp_min}°C
📛 Maximum temperature: ${res.data.main.temp_max}°C
💦 Humidity: ${res.data.main.humidity}%
🎐 Wind: ${res.data.wind.speed}km/h`.trim());
    else throw res.data
};
handler.help = ["weather", "cuaca"].map((v) => v + " <Country>");
handler.tags = ["internet"];
handler.command = /^(weather|wthr|cuaca)$/i;

module.exports = handler;
