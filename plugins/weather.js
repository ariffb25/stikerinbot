
let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `Countrynya mana?`;
  let res = await fetch(
    API("https://api.openweathermap.org", "/data/2.5/weather", {
      q: args[0],
      units: "metric",
      appid: "060a6bcfa19809c2cd4d97a212b19273",
    })
  );
  if (!res.ok) throw `${res.status} ${res.statusText}`;
  let json = await res.json();
  let weath = `
Name: ${json.name}
Country: ${json.sys.country}
Weather: ${json.weather[0].description}
Temperature: ${json.main.temp}°C
Minimum temperature: ${json.main.temp_min}°C
Maximum temperature: ${json.main.temp_max}°C
Humidity: ${json.main.humidity}%
Wind: ${json.wind.speed}km/h
  `.trim();

  await m.reply(weath);
};
handler.help = ["weather"].map((v) => v + " <Country>");
handler.tags = ["internet"];
handler.command = /^(weather|wthr)$/i;

module.exports = handler;
