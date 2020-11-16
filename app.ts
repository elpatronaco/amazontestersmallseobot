require('dotenv').config();

const Telegraf = require('telegraf');

const bot = new Telegraf('1488232289:AAG9XzHtIG7cSdJIUE_3lVIeWpE68D4TQcg');

bot.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const resp_time = new Date().getMilliseconds()- start.getMilliseconds();
  const chat_from = `${ctx.message.chat.first_name} (id: ${ctx.message.chat.id})`;
  console.log(`Chat de ${chat_from}. Mensaje: '${ctx.message.text}' (Response Time: ${resp_time})`);
});

bot.command('start', (ctx) => ctx.reply('Puto calvo'));
bot.launch();