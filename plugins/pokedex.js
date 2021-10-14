let fetch = require("node-fetch");

let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `Where's the Pokemon??`;
  let res = await fetch(
    API("https://some-random-api.ml", "/pokedex", { pokemon: args[0] })
  );
  if (!res.ok) throw `${res.status} ${res.statusText}`;
  let json = await res.json();
  let pokedex = `
*Name:* ${json.name}
Id: ${json.id}
Type: ${json.type}
Species: ${json.species}
Abilites: ${json.abilities}
Height: ${json.height}
Weight: ${json.weight}
Base experience: ${json.base_experience}
Gender: ${json.gender}
Egg groups: ${json.egg_groups}\n
*STATS*
Hp: ${json.stats.hp}
Attack: ${json.stats.attack}
Defense: ${json.stats.defense}
Sp atk: ${json.stats.sp_atk}
Sp def: ${json.stats.sp_def}
Speed: ${json.stats.speed}
Total: ${json.stats.total}\n
*FAMILY*
Evolution Stage: ${json.family.evolutionStage}
Evolution Line: ${json.family.evolutionLine}\n
*DESCRIPTION*
${json.description}
Generation: ${json.generation}\n\n
~fatur
  `.trim();
  if (!json.error)
    await conn.sendFile(
      m.chat,
      json.sprites.animated,
      "pokemon.gif",
      pokedex,
      m
    );
  else throw json.error;
};
handler.help = ["pokemon"].map((v) => v + " <pokemon>");
handler.tags = ["internet"];
handler.command = /^(pokemon|pokedex)$/i;

module.exports = handler;
