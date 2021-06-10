let handler = async (m, { conn }) => {
  let link = "https://instagram.com/ghostenixe?igshid=ih72auzos5gl"
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  for (let i=0;i<5;i++){
    conn.reply(m.chat, `👑NIXE👑 ⚠⚠⚠⚠Instagram⚠⚠⚠⚠ !\n\n${link}`)
    await sleep(1250)
  }
}
handler.help = ['spam']
handler.tags = []
handler.command = /^(spam)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null
module.exports = handler
