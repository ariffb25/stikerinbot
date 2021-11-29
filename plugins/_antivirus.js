let handler = m => m

handler.all = async function (m) {
    /* 
    otomatis membersihkan percakapan ketika terdapat pesan OVERSIZED
    https://github.com/adiwajshing/Baileys/blob/3507f8f/WAMessage/WAMessage.d.ts#L18605
    */
    if (m.messageStubType === 68) {
        await this.modifyChat(m.chat, 'clear', {
            includeStarred: false
        }).catch(console.log)
    }
}

module.exports = handler