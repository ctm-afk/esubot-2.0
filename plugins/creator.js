let handler = function (m) {
  // this.sendContact(m.chat, '6281515860089', 'Nurutomo', m)
  this.sendContact(m.chat, '5219984907794', '👑Samu330👑', ' Editor: CTM  Hack The World', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
