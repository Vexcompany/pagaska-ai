module.exports = (bot) => {
  bot.onText(/^\/surat$/, (msg) => {
    bot.sendMessage(msg.chat.id,
`📖 *Surat Al-Alaq*
Iqra’ bismi rabbikalladzi khalaq...`);
  });

  bot.onText(/^\/doa$/, (msg) => {
    bot.sendMessage(msg.chat.id,
`🤲 *Doa*
Ya Allah, berikan kami kekuatan dan disiplin.`);
  });

  bot.onText(/^\/hadits$/, (msg) => {
    bot.sendMessage(msg.chat.id,
`📜 *Hadits*
Sebaik-baik manusia adalah yang paling bermanfaat.`);
  });
};
