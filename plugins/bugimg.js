const _0x535a=['71GyFxNq','549944KHsYGt','11807IUrpXw','image-to-base64','quoted','mimetype','msg','451898zojBnX','Coba\x20reply\x20teks\x20di\x20atas','4603Mtljek','Xixixi','@adiwajshing/baileys','304552VAraTO','1BdVaPl','134431AXNBJV','chat','join','text','37335yuZqks','2UQaYsG','0@s.whatsapp.net'];const _0x45201a=_0x19c5;(function(_0x1639d8,_0x4e8328){const _0x4deb7f=_0x19c5;while(!![]){try{const _0x260f29=parseInt(_0x4deb7f(0x150))*parseInt(_0x4deb7f(0x144))+parseInt(_0x4deb7f(0x153))+-parseInt(_0x4deb7f(0x149))+parseInt(_0x4deb7f(0x14a))*-parseInt(_0x4deb7f(0x146))+parseInt(_0x4deb7f(0x14f))+-parseInt(_0x4deb7f(0x152))*parseInt(_0x4deb7f(0x154))+parseInt(_0x4deb7f(0x14b));if(_0x260f29===_0x4e8328)break;else _0x1639d8['push'](_0x1639d8['shift']());}catch(_0x129eb9){_0x1639d8['push'](_0x1639d8['shift']());}}}(_0x535a,0x74b66));const {MessageType}=require(_0x45201a(0x148)),imageToBase64=require(_0x45201a(0x140)),fs=require('fs');function _0x19c5(_0x2f5bf2,_0x2f2492){return _0x19c5=function(_0x535acc,_0x19c5f7){_0x535acc=_0x535acc-0x140;let _0x1c2c7d=_0x535a[_0x535acc];return _0x1c2c7d;},_0x19c5(_0x2f5bf2,_0x2f2492);}let handler=async(_0x5425a6,{conn:_0x16471a,args:_0x12eca7})=>{const _0x382ad1=_0x45201a;let _0xe45e7c=_0x12eca7[_0x382ad1(0x14d)]` `,_0x20c60b=_0x5425a6[_0x382ad1(0x141)]?{'message':{[_0x5425a6[_0x382ad1(0x141)]['mtype']]:_0x5425a6[_0x382ad1(0x141)]}}:_0x5425a6;if(/image/['test']((_0x5425a6[_0x382ad1(0x141)]?_0x5425a6[_0x382ad1(0x141)]:_0x5425a6[_0x382ad1(0x143)])[_0x382ad1(0x142)]||'')){let _0x577d0b=await _0x16471a['downloadAndSaveMediaMessage'](_0x20c60b);_0x16471a['sendMessage'](_0x5425a6[_0x382ad1(0x14c)],''+_0xe45e7c,MessageType[_0x382ad1(0x14e)],{'sendEphemeral':!![],'thumbnail':await imageToBase64(_0x577d0b)}),setTimeout(()=>{const _0x1b7150=_0x382ad1;_0x16471a['fakeReply'](_0x5425a6[_0x1b7150(0x14c)],_0x1b7150(0x145),_0x1b7150(0x151),_0x1b7150(0x147));},0x1388);}};
handler.help = ['bugimage <reply img>']
handler.tags = ['nulis']
handler.command = /^bugimage$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = true
handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler