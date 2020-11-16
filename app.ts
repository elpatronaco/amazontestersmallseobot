require('dotenv').config()
const Markup = require('telegraf/markup')
const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')

const bot = new Telegraf('1488232289:AAG9XzHtIG7cSdJIUE_3lVIeWpE68D4TQcg')

// EMOJIS
const boxEmote = "\u{1F4E6}";

bot.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const resp_time = new Date().getMilliseconds() - start.getMilliseconds()
  const chat_from = `${ctx.message.chat.first_name} (id: ${ctx.message.chat.id})`
  console.log(
    `Chat de ${chat_from}. Mensaje: '${ctx.message.text}' (Response Time: ${resp_time})`
  )
})

bot.command('start', (ctx) => {
    ctx.reply(
      '¿Qué quieres hacer?',
      Markup.keyboard([[`${boxEmote} Hacer pedido ${boxEmote}`]]).oneTime().resize().extra(),
      Extra.markup(Markup.removeKeyboard())
    )
  }
)

bot.hears(`${boxEmote} Hacer pedido ${boxEmote}`, ctx => ctx.reply('Que te calles ya'))

bot.launch()
