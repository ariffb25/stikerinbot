let handler = m => m

handler.before = function (m) {
  let user = global.db.data.users[m.sender]
        let rtrofi = (user.trofi <= 10) ? 'perunggu V'
          : ((user.trofi >= 10) && (user.trofi <= 200)) ? 'perunggu IV'
          : ((user.trofi >= 200) && (user.trofi <= 400)) ? 'perunggu III'
          : ((user.trofi >= 400) && (user.trofi <= 600)) ? 'perunggu II'
          : ((user.trofi >= 600) && (user.trofi <= 800)) ? 'perunggu I'
          : ((user.trofi >= 800) && (user.trofi <= 1000)) ? 'perak IV'
          : ((user.trofi >= 1000) && (user.trofi <= 1200)) ? 'perak III'
          : ((user.trofi >= 1200) && (user.trofi <= 1400)) ? 'perak II'
          : ((user.trofi >= 1400) && (user.trofi <= 1600)) ? 'perak I'
          : ((user.trofi >= 1600) && (user.trofi <= 1800)) ? 'Emas III'
          : ((user.trofi >= 1800) && (user.trofi <= 2000)) ? 'Emas II'
          : ((user.trofi >= 2000) && (user.trofi <= 2200)) ? 'Emas I'
          : 'Platinum'
  user.rtrofi = rtrofi
  return true
}

module.exports = handler
