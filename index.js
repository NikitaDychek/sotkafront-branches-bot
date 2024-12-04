const env = require('dotenv');
env.config();
const { Telegraf } = require('telegraf')
const bot = new Telegraf(process.env.BOT_TOKEN)
const commands = [
    {
        command: "start",
        description: "Запуск бота"
    },
    {

        command: "help",
        description: "Раздел помощи"
    },
]

bot.start((ctx) => ctx.reply('Welcome!'))
bot.help((ctx) => ctx.reply('Для того чтобы получить номер своей ветки, просто введи в сообщении краткое описание своей задачи'))
bot.launch()
// const bot = new TelegramBot(API_KEY, {
//     polling: {
//         interval: 300,
//         autoStart: true
//     }
// })
//
// bot.setMyCommands(commands);
//
// bot.on("polling_error", err => console.log(err.data.error.message));
// bot.on('text', async msg => {
//     try {
//         switch (msg.text) {
//             case '/start':
//                 return await bot.sendMessage(msg.chat.id, `Привет, ${msg.from.first_name} ${msg.from.last_name}!`);
//             case '/help':
//                 return await bot.sendMessage(msg.chat.id, `Для того чтобы получить номер своей ветки, просто введи в сообщении краткое описание своей задачи`);
//             // case '/menu':
//             //     return await bot.sendMessage(msg.chat.id, `Меню бота`, {
//             //         reply_markup: {
//             //             keyboard: [
//             //                 ['⭐️ Картинка', '⭐️ Видео'],
//             //                 ['⭐️ Аудио', '⭐️ Голосовое сообщение']
//             //             ]
//             //         }
//             //     })
//             default:
//                return await bot.sendMessage(msg.chat.id, `Привет, ${msg.from.first_name} ${msg.from.last_name}!`);
//         }
//     } catch (error) {
//         console.log(error);
//     }
// })
