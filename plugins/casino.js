// cuma tes
// gk tau bisa atau nggak
// kalo error baikin aja sendiri

const role1 = []
const role2 = []

console.log('Player 1 Silahkan Spin Nomornya Dengan Ketik *.casino*');
console.log('Roullet Berputar'):
const role11 = Math.floor(Math.random() * 3);
role1.push(role11);
console.log ('Number Player 1 = ' ,role1);

console.log('Player 2 Silahkan Spin Nomornya Dengan Ketik *.casino2*);
console.log('Roullet Berputar');
const role12 = Math.floor(Math.random() * 3);
role2.push(role12);
console.log ('Number Player 2 = ' ,role2);

if (role1 == '0') {
	console.log('Player 1 Telah Memenangkan Pertandingan');
} else if ('role2 == '0'){
	console.log('Player 1 Telah Memenangkan Pertandingan')
}
else if (role1 > role2){
	console.log('Player 1 Telah Memenangkan Pertandingan');
}
else if (role1 < role2){
	console.log('Player 2  Telah Memenangkan Pertandingan');
}
else {
	console.log('Seri');
}
handler.help = ['casino']
handler.tags = ['game']
handler.command = /^(casino)?)$/i

module.exports = handler
