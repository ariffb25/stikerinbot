let handler = async (m, { conn, usedPrefix, command }) => {
    await conn.sendButton(m.chat, `“${pickRandom(global.galau)}”`, '© MilfBOT', 'Sad', `${usedPrefix + command}`, m)
}
handler.help = ['sad']
handler.tags = ['quotes']
handler.command = /^(sad)$/i
module.exports = handler

function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
}

global.galau = [
    "It's not wrong if I expect more from someone who is more certain without breaking promises",
    "If I really don't love you why do I think about you. But all of you think I don't love you",
    "Don't be jealous and sad if you don't have the ability that other people have. Rest assured that other people don't have the ability like you",
    "Only you can make my steps stop, while saying in my heart how can I leave you",
    "Keep smiling even though I'm still made to wait and miss you, but it's for you",
    "It's not that easy to forget you"
    "You are indifferent to me, I still love you because you have accepted me as I am",
    "I am very happy if you are happy near me, not near him",
    "Be yourself, don't follow others, but can't live it"
    "Try to pause for a moment to think about how we can solve this problem together",
    "Can we not be enemies after parting, I want us to be like we used to be before we started having fun together, joking and others",
    "I want you to be with me forever and I hope you can be my soul mate",
    "Love can't be described in words, because love can only be felt by the heart."
    "The biggest problem in a person is not being able to fight his fear"
    "Good morning to people I love and people who hate me, I hope today is a better day than yesterday for me and you",
    "Don't give up on your current situation, be optimistic because it is optimism that makes us strong",
    "To the man who is always in my prayers I love you sincerely as it is",
    "Please don't go when I really love you"
    "Try to be in my position, then you just leave it like that with the person you really love",
    "I'm afraid you're okay, I panic if you're sick, it's because I love and care for you",
    "It hurts when the love I give you don't appreciate",
    "You suddenly changed for no reason but if there is a reason you changed please tell me so I can fix the mistake",
    "Because of you I know true love"
    "Your sweet smile is very beautiful, so don't be sad"
    "Starting from acquaintances, joking together, ridicule then turned into likes, comfort and finally love and love each other",
    "Smile at the person who has hurt you so that you will know the meaning of extraordinary patience"
    "I will remember that bitter memory and I will make it a lesson for a sweet future",
    "If you really can't keep your promise, at least you remember and try not to let your promise until you forget it",
    "You can only be silent and think, why are loyal and good people left behind, the naughty ones are being chased, they are left behind, they say that all men are the same",
    "Even though it's only for a moment you make me happy, but the happiness that he doesn't forget quickly."
    "I didn't expect you to go and forget me so quickly",
    "Singles don't have to stay at home while on weekends, go out, right, singles can be free to be close to anyone, girlfriend, ex-friend, even alone or with the devil,"
    "You are a friend who is always by my side in happy and difficult circumstances. Thank you for always being by my side",
    "I don't really know in your heart it's me or him",
    "It's not easy to forget you because I love you so much even though you have hurt me many times",
    "Life is short so just let go of those who hurt you, Love those who care about you and their struggles that mean a lot to you"
    "Please don't leave me I still love and care for you"
    "I love you and love you so please don't you go and leave me alone",
    "I already know enough about your nature you can only give me false hope",
    "I tried to get love from you but you are insensitive",
    "I rise from my fall after you drop me and I will start over again without you",
    "Maybe now my soul mate is still far away and I can't get it but I'm sure that mate will not go anywhere and I will get it",
    "Just come first and then insult others if you are and are better than the one you insulted",
    "Turning your back on him might be better than seeing him cheating in front of your own eyes",
    "Can your heart be like a swan who is only loyal to one person"
    "I'm standing here alone waiting for you"
    "I only smile at you after you hurt me so you know the meaning of patience",
    "Sorry I forgot that I'm nothing"
    "To keep your promise, there must be proof, don't let it be just a false promise",
    "I never thought you would be a temporary one",
    "The match is not how close you are to him but how sure you are with Allah",
    "Don't force me to be a girl like your taste",
    "Only the patient can get through all the disappointments"
    "Getting back with you is the same as committing suicide and hurting my own feelings",
    "There's no need to retaliate by hurting so that Karma will take care of all that",
    "I still remember you but my feelings don't hurt like before",
    "Have your own sentence & want to add it? chat *.owner*"
]
