let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
╭═══ *〘 𝗣𝗮𝘆𝗺𝗲𝗻𝘁 〙*
║ ┅ ๑————————————๑
║┊ ⌲ *Dana* : _085712420674_ (diutamakan)
║┊ ⌲ *Ovo* : _085712420674_
║┊ ⌲ *GOPAY* : _085712420674_
║┊ ⌲ *Shopepay* : _085712420674_
║┊ ⌲ *Telkomsel* : _083143393763_
║┊ ⌲ *Smartfren* : _089508025343_
╰═ ┅ ═══════
▌│█║▌║▌║║▌║▌║█│▌
`.trim()
await this.send3ButtonLoc(m.chat, await (await fetch(fla + 'payment')).buffer(), 'Nomor Owner', '.owner', 'Buy Premium', '.premium', 'Sewa Bot', '.sewa', m)

}
handler.help = ['payment']
handler.tags = ['info']
handler.command = /^(payment|pay)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

let wm = global.wm
