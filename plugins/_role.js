let handler = m => m

handler.before = function (m) {
    let user = global.db.data.users[m.sender]
    let role = ((user.level >= 1) && (user.level <= 10)) ? 'Bronze'
        : ((user.level >= 10) && (user.level <= 20)) ? 'Bronze I'
            : ((user.level >= 20) && (user.level <= 30)) ? 'Silver'
                : ((user.level >= 30) && (user.level <= 40)) ? 'Silver I'
                    : ((user.level >= 40) && (user.level <= 50)) ? 'Gold'
                        : ((user.level >= 50) && (user.level <= 60)) ? 'Platinum'
                            : ((user.level >= 60) && (user.level <= 70)) ? 'Diamond'
                                : ((user.level >= 70) && (user.level <= 80)) ? 'Master'
                                    : 'Pinnacle'
    user.role = role
    return true
}

module.exports = handler