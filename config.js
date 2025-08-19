import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone'

//─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─

global.botNumber = '' //Ejemplo: 13234207870

//─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─

global.owner = [
  ['13234207870', 'ZURDO-BOT', true]
];

//─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─

global.mods = []
global.suittag = ['13234207870']
global.prems = []

//─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─

global.namebot = 'ZURDO-BOT'
global.packname = 'KɪʟʟᴢN'
global.botname = 'nandoo_.15'
global.wm = '𝙺𝙸𝙻𝙻 𝙱𝙾𝚃'
global.author = 'nandoo_.15'
global.dev = 'KɪʟʟᴢN'
global.club = 'Mᴠʀᴄᴏ Sᴇxᴏ'
global.textbot = 'Mᴠʀᴄᴏ Sᴇxᴏ'
global.etiqueta = 'nandoo_.15'
global.jadi = 'JadiBots'
global.sessions = 'ZurdoSession'

//─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─

global.moneda = 'Diamantes 💎'
global.xanime = '🍮'
global.xmenus = '🍪'
global.xnable = '🧋'
global.xefects = '🥥'
global.xfrases = '🍯'
global.xgame = '🌹'
global.xsearch = '🌳'
global.xtools = '🍚'
global.xdownload = '🥞'
global.xconverter = '🪾'
global.xlist = '📑'
global.xff = '🥧'
global.xlogos = '🖼️'
global.xgc = '🍃'
global.xinfo = '☁️'
global.xnsfw = '🪼'
global.xowner = '☕'
global.xia = '💭'
global.xfun = '🥯'
global.xsticker = '🫓'
global.xrpg = '🍙'
global.xreg = '🪴'

//─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─

global.github = 'https://github.com/KillzN/ZURDO-BOT'
global.grupo = 'https://chat.whatsapp.com/HqhAoXS8TCcJIn0KrbJZKz'
global.comu = 'https://chat.whatsapp.com/Ehs4pdSEW4o9ub8G3SPVaT'
global.channel = 'https://www.whatsapp.com/channel/0029Vb4TKBCD38CNEkfHdj1z'
global.ig = 'https://www.instagram.com/nandoo_.15'

//─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─

global.catalogo = fs.readFileSync('./src/catalogo.jpg');
global.estilo = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "13234207870-120363046971143826@g.us" } : {}) }, message: { orderMessage: { itemCount: -999999, status: 1, surface: 1, message: 'Mvrco Sexo', orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net' } } }
global.multiplier = 70

//─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment

//─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})