let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.puisi)}”`, m)
}
handler.help = ['puisi','syair']
handler.tags = ['quotes']
handler.command = /^(puisi|syair)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.puisi = [
'Sontak\n\nSetiap hendak menulis sajak sketsa wajahmu itu selalu saja merebak udara menjadi sesak penaku henti mendadak serangkaian kosakata di benakku pun luluh-lantak setiap itu pula aku tak tahu harus apa selain menunda dan menyaksikan tiap imaji yang tersisa malihrupa jadi jelaga.',
'Menyerah\n\nMaaf, aku harus menyerah telah lama kucoba untuk bertahan namun aku semakin terluka maaf, aku harus menyerah kuat inginku untuk bertahan namun hati tak bisa lagi menerima maaf, aku harus menyerah luka ini sudah terlalu dalam hingga membuat hatiku pecah bergelimang darah maaf, aku harus menyerah menghentikan langkah menutup semua lembar kisah mimpi indah sepasang anak manusia yang bercerita tentang cinta maaf, aku menyerah…. Doaku Untukmu Selalu tersebut namamu, Diantara 7 titik kerendahan diri, Diatas lembar permadani, Berangkat semoga sampai langit untuk kembali turun kebumi sebagai karunia.',
'Sepi\n\nTersebab, Tak mungkin bisa bersama, Maka aku selalu menuliskan syair hati, Dimana kehidupan dunia bisa diatur sesuai mauku, Lantas kau dan aku menjadi kita… Hanya bisa memanggil ingatan untuk mengusir kesunyian, Tapi ia datang tak pernah sendirian, Selalu beserta kerinduan. Terbayang suatu hari tangan kita terkait, Terlelap bersama dibawah saku langit. Sepi ini slalu menghantarkanku padamu',
'Ini Tentangmu\n\nKatamu kau tak pandai berkata-kata, namun kata-katamu mampu membuatku terbata-bata… Bagimu kau tak terlalu suka mengungkap rasa, namun yang kau isyaratkan membuatku tak mungkin lupa… Menurutmu apa yang kau perbuat bukanlah apa-apa, namun tanpa kau sadari, bagiku kau begitu istimewa… Demikian tentangmu, dan sungguh! aku bukan sedang memujimu…',
'Jejak Dalam Udara\n\nDan lihatlah, Sekumpulan burung-burung melintas dikotaku Dilangit senja yang perlahan pekat ditelan malam Beriringan mereka terbang pergi dan berlalu Sedang aku, Menyesap rindu dijejak-jejak yang semakin hilang Kuingin kau mencintai aku seperti udara, Meski kasat tapi kau hirup selamanya…',
'Rasa\n\nLantas, biarlah sementara begini Tepatnya kan kubiarkan seperti ini Mungkin hati ini perlu waktu tuk menghapusnya Karena sesungguhnya aku telah terbiasa oleh keberadaanmu Dan sesungguhnya ada rindu yang mulai tertata Karenamupun, kini aku benar-benar tak sanggup mengelabui rasa',
'Isyarat Yang Entah\n\nPada undakan anak tangga kelima Seorang perindu duduk menatap awan senja Ia tabah menunggu isyarat yang entah Tapi kau salah puan… Jika menganggapku setabah itu Justru karena tak sanggup menahan rindu Aku senantiasa mencurahkannya pada aksaraku Dan sementara di keningnya Waktu terus melukis kerut perlahan…',
'Aku dan Hujan\n\nJalan itu menghitam,basah oleh hujan.Namun aku, muram, Kering oleh kerinduan.Gerimis ini menghapus jejak apapun,Namun kasihmu tak hilang dalam hitungan tahun.Lebih dari hancur Seperti pisau tajam yang menusuk hatitak pernah bisa dilepas lagimenusuk sampai nurani tempat aku bingkai indah namamu Aku hanyalah serpihan puing yang rapuh ingin aku ceritakan kehancuran ini tapi, kau seolah tak peduli, tak mampu kusatukan lagi kepingan hati',
'Sudut Pandang\n\nKita lahir dari rahim yang sama Membuka mata di saat berbeda Aku menolongnya kau mencacinya Tapi kau yang jeli dan aku tertipu belaka Ini hanya masalah sudut pandang Menganggap kaya berlebihan atau miskin keterlaluan Mata rahim melihat itu semua seimbang Kita semua lahir dari rahim yang sama, rahim keadilan.',
'Sebutir Debu\n\nAku hanya sebutir debu yang memburamkan kilau tak pantas berada diatas suci tak bisa menghindar saat angin hembuskan aku untukmu, lalu terbang Aq hanya kecewa bagai hampa mengharap udara, atau debu ditengah gersang mengharap hujan hentikan angin membawaku terbang.',
'Kesabaran\n\nGubung bambu istana baginya, Perut yang selalu bernyanyi dalam hidupnya, Walau pahit telan untuk manis, Bersyukur kunci agar tak menangis, Melangkah kaki ini hingga membentuk garis pecahan, Duri-duri selalu menghadang raga, Wajah menahan kesakitan, Menyebut namaNya dalam jiwa.',
]
