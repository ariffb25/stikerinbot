let handler = m => m

handler.before = function (m) {
  let user = global.db.data.users[m.sender]
        let role = (user.level <= 10) ? 'Warrior'
          : ((user.level >= 10) && (user.level <= 20)) ? 'Elite'
          : ((user.level >= 20) && (user.level <= 30)) ? 'Master'
          : ((user.level >= 30) && (user.level <= 40)) ? 'Grandmaster'
          : ((user.level >= 40) && (user.level <= 50)) ? 'Epic'
          : ((user.level >= 50) && (user.level <= 60)) ? 'Legend'
          : ((user.level >= 60) && (user.level <= 70)) ? 'Mythic'
          : ((user.level >= 70) && (user.level <= 80)) ? 'Mythical Glory'
          : 'Legend'
  user.role = role
  return true
}

module.exports = handler