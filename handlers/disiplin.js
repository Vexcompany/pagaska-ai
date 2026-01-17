module.exports = (bot) => {
  bot.onText(/^\/jadwal$/, (msg) => {
    bot.sendMessage(msg.chat.id,
`⏰ *JADWAL*
Latihan rutin setiap minggu.`);
  });

  bot.onText(/^\/latihan$/, (msg) => {
    bot.sendMessage(msg.chat.id,
`🏋️ *LATIHAN*
Fokus disiplin & kekompakan.`);
  });

  bot.onText(/^\/reminder$/, (msg) => {
    bot.sendMessage(msg.chat.id,
`🔔 Reminder aktif.`);
  });
};
