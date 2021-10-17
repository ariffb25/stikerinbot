let handler = async (m, { conn, usedPrefix, command }) => {
  await conn.sendButton(m.chat, `“${pickRandom(global.bucin)}”`, '© MilfBOT', 'Bucin', `${usedPrefix + command}`)
}
handler.help = ['love']
handler.tags = ['quotes']
handler.command = /^(bucin)$/i
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

// https://jalantikus.com/tips/kata-kata-bucin/
global.bucin = [
  "You choose to be alone, not because you are waiting for the perfect one, but need someone who never gives up.",
  "A single person is created with a partner he hasn't found yet.",
  "Single. Maybe it's God's way of saying 'Rest from wrong love'.",
  "Singles are young people who prioritize their personal development for a classier love later.",
  "I'm not looking for someone who is perfect, but I'm looking for someone who becomes perfect thanks to my strengths.",
  "People's boyfriends are our pending soul mates.",
  "Singles must pass. Everything has a time, when all loneliness becomes a togetherness with a halal lover. Be patient.",
  "Romeo was willing to die for juliet, Jack died to save Rose. The point is, if you want to live, be single.",
  "I look for people not from their strengths but I look for people from their sincerity.",
  "Madmates are not flip-flops, which are often confused. So continue to be in the proper struggle.",
  "If you become the guitar strings, I don't want to be the guitarist. Because I don't want to dump you.",
  "If loving you is an illusion, then let me imagine forever.",
  "Honey... My job is only to love you, not to fight fate.",
  "When I'm with you it feels like 1 hour is only 1 second, but when I'm away from you it feels like 1 day becomes 1 year.",
  "You may hold my hand for a while, but you hold my heart forever.",
  "I want to be the only one, not the one.",
  "I can't promise to be good. But I promise to always be by your side.",
  "If I become a representative of the people I will definitely fail, how can I think about the people if the only thing on my mind is you.",
  "Look at my garden, full of flowers. Look at your eyes, my heart is blooming.",
  "Promise to be with me now, tomorrow, and forever."
  "I know I am in love with you because my reality is finally better than my dreams.",
  "The first time you touched me, I knew I was born to be yours.",
  "If you live to be a hundred, I want to live to be a hundred minus one day, so I never have to live without you.",
  "'I love you' means that I will love you and stand by you even through the worst of times.",
  "Love never dies a natural death. It dies of blindness and errors and betrayals.",
  "Love is composed of a single soul inhabiting two bodies.",
  "Love looks not with the eyes, but with the mind, and therefore is winged Cupid painted blind.",
  "No matter how many fights you may get into, if you truly love someone it should never matter in the end.",
  "Love is a promise; love is a souvenir, once given never forgotten, never let it disappear.",
  "You don’t marry someone you can live with. You marry the person who you cannot live without.",
  "The most important thing in life is to learn how to give out love and to let it come in.",
  "The greatest happiness of life is the conviction that we are loved; loved for ourselves, or rather, loved in spite of ourselves.",
  "Missing doesn't only arise because of the distance apart. But also because of wishes that don't come true.",
  "You will never be far from me, wherever I go you are always there, because you are always in my heart, what is far is only our bodies, not our hearts.",
  "I know in every glance, we are hindered by distance and time. But I believe that later we will definitely be united.",
  "Missing you without ever meeting is the same as creating a song that's never been sung.",
  "There are times when distance is always a barrier between me and you, but still in my heart we are always close.",
  "If this heart is not able to stem all the longing, what can I do but pray for you.",
  "Maybe at this moment I can only hold back this longing. Until the time comes when I can meet and release this longing with you.",
  "Through the turbulent longing in my heart, there sometimes I really need your loving hugs.",
  "In the cold night, I don't remember anymore; How often I think of you miss you too.",
  "Missing you is like rain that comes suddenly and lasts a long time. And even after the rain stops, I still miss you.",
  "Since getting to know you, I want to continue to learn, learn to be the best for you.",
  "Do you know the difference between a pencil and your face? If you can erase the writing pencil, but if your face nothing will be able to erase it from my mind.",
  "It's not the National Examination tomorrow that I have to worry about, but the life test I went through after you left me.",
  "One thing about happiness at school that keeps me motivated is being able to see your smile every day.",
  "Do you know the difference between going to school and going to your house? If you go to school, you must bring books and pens, but if you go to your house, I just bring my heart and love.",
  "I'm not sad if tomorrow is Monday, I'm sad if I don't meet you.",
  "My moment of love is perpendicular to your moment of love. Make our love a perfect equilibrium point.",
  "I'm willing to take part in a running race around the world, as long as you are the finish line.",
  "My homework is to miss you. Stronger than Maths, broader than Physics, stronger than Biology.",
  "My love for you is like a metabolism, which will not stop until death.",
  "If the jelangkung is like you, come and pick me up, I'll take you home.",
  "Eat whatever I like as long as it's with you, including eating liver.",
  "Love is like a death sentence. If you don't get shot, you hang it.",
  "Loving you is like a drug: once you try to be addicted, you don't try to make yourself curious, leave it to make you addicted.",
  "I like snacking the most because snacking is delicious. Moreover, having you completely ...",
  "This world belongs only to the two of us. Everything else is just a contract.",
  "For me, all those days are Tuesdays. Tuesdays in Heaven when close to you...",
  "What if we both become a gang of criminals? I stole your heart and you stole mine.",
  "You are like the coffee I drank this morning. Bitter, but addictive.",
  "I'm often jealous of your lipstick. He can kiss you every day, from morning to night.",
  "Just hearing your name can make me smile like a fool.",
  "I know your girlfriend is not the only one, and like you not only me.",
  "Ever since I stopped wishing on you, I've become unmotivated in everything..",
  "With you, falling in love is the most intentional heartbreak.",
  "It's very difficult to feel the happiness of life without you by my side.",
  "Through the turbulent longing in my heart, there sometimes I really need your loving hugs.",
  "If you know, until now I still love you.",
  "Sometimes I'm jealous of kites...the strings just break, they're still being chased and don't want to be taken over by other people...",
  "I didn't know what love was, until I finally met you. But, at that moment I knew how it felt to be heartbroken.",
  "Chasing is tiring, but even more tired waiting\nWaiting for you to notice my existence...",
  "Don't stop loving just because you've been hurt. Because there's no rainbow without rain, there's no true love without tears.",
  "I have a million reasons to forget you, but nothing can force me to stop loving you."
  "Sometimes one feels so stupid just to love someone.",
  "You are the best heartbreak I've never regretted.",
  "It's not that it's not worth the wait, it's just that it often gives false hope.",
  "Part of me hurts, Remembering her so close, yet untouchable.",
  "The best thing about loving someone is secretly praying for them."
  "I wish I could get rid of this feeling as soon as I lost you.",
  "For the sake of love we deceive ourselves. Trying to be strong turns out to be dishonorable.",
  "Think of me as your home, if you go you know where to go home. Stay if you want and leave if you are bored...",
  "I'm confused, should I be disappointed or not? If I'm disappointed, who am I to him?\n\nIf I'm not disappointed, but I'm waiting for his words.",
  "My longing is like a twig that remains standing. Even though there are no more leaves to accompany it, until it finally dries up, breaks, and dies.",
  "I guess we're just two strangers now having the same memories.",
  "Make me hate you even if it's only for a few minutes, so it's not too hard to forget you.",
  "I love you with all my heart, but you share your feelings with other people.",
  "Loving you might break me, but somehow leaving you doesn't fix me.",
  "You are first and foremost in my life. But, I am second to you.",
  "If we can only meet in a dream, I want to sleep forever.",
  "Seeing you happy is my happiness, even though your happy without me.",
  "I sometimes envy an object. It has no taste but is always needed. Unlike me, who has taste, but is abandoned and ignored...",
  "How can I move if only you my heart stops?",
  "Memories of you are like home to me. So every time my mind wanders, it will always come back to you.",
  "Why is tissue useful? Because love never runs dry. - Sujiwo Tejo",
  "If loving you is a mistake, fine, let me just keep being wrong.",
  "Ever since I met you, I want to keep learning. Learn to be the best for you.",
  "Some people act stupid just to see you smile. And he's happy about that.",
  "I'm not a good person, but will learn to be the best for you.",
  "We don't die, but it's the wounds that make us unable to walk like we used to.",
  "Your presence is like a cup of coffee that I need every morning, which can encourage me to stay excited about the day.",
  "I really want to give the world to you. But since that's not possible, then I will give you the most important thing in my life, which is my world.",
  "It's better to sing humorously but sweetly, rather than pretending to be romantic but having a tragic ending.",
  "Ben doesn't end up being disappointed, you have to know when to hope and when to stop.",
  "I, Ki wong Jowo, don't understand the meaning of 'I Love U'.
  "You don't need ayu and sugih, I'm pretty sure wes are happy and crazy.",
  "My love for your crew is shattered by the camera, focus on your crew, but it's blurry.",
  "Saben dino kegowo dreams but can't be stupid.",
  "When we Don't meet for 30 minutes, I feel like a month.",
  "Without you I am like a cat who lost his rubber. Ambyar.",
  "I want it, I'm playing games every time. Supoyo I'm iso nemokne kowe lewih hot. Ben Lewih dowo when I'm kanggo urip with your slira.",
  "I never knew what opo kui tresno was, kajaba sak bare to meet your slira.",
  "Love aa ka neng moal leungit-leungit sanajan aa geus marry deui.",
  "Your patience is limited, but your love, is unlimited.",
  "Kanyaah, I'm sick of fading eating Bayclean.",
  "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
  "You will always breathe alone, you will need a sejen jalmi relief.",
  "Nyaahna aa, you need tea if the bank clerk is still collecting debts (hayoh mumuntil).",
  "Urang's patience is the limit, but your love for urang is good for you.",
  "The best thing to hold onto in life is each other.",
  "Calm down wae neng, ari love brother mah sapertos krispatih song; timeless.",
  "I am happiest when I’m right next to you.",
  "It's enough just to lose the network, you don't.",
  "I'm often made to eat liver. But realizing you're still here makes me happy again.",
  "My enemies are those who want to have you too.",
  "Many are always there, but if you're the only one I want, then what?",
  "My sleeping hours are ruined by longing.",
  "Love is that condition in which the happiness of another person is essential to your own.",
  "When you realize you want to spend the rest of your life with somebody, you want the rest of your life to start as soon as possible.",
  "Sometimes all you need is a hug from the right person and all your stress will melt away.",
  "Love is when you sit beside someone doing nothing, yet you feel perfectly happy.",
  "What is love? It is the morning and the evening star.",
  "The real lover is the man who can thrill you by kissing your forehead or smiling into your eyes or just staring into space.",
  "Romance is the glamour which turns the dust of everyday life into a golden haze.",
  "Life is not the amount of breaths you take, it’s the moments that take your breath away.",
  "For thousands of nights I dreamed of making love to you. No man on earth has ever hated sunrise as I do.",
  "A soul mate is someone who understands you like no other, loves you like no other, will be there for you forever, no matter what.",
  "It's enough that China is far away, don't love us.",
  "What's important is your happiness, I'm not important ..",
  "My only wish is to be loved by you...",
  "Me without you is like an ambulance without wiuw wiuw wiuw.",
  "It's enough that Antarctica is far away. Not Antarctica."
]
