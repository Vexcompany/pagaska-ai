module.exports = (bot) => {
  bot.onText(/^\/peraturan$/, (msg) => {
    bot.sendMessage(msg.chat.id,
`📏 *PERATURAN*
- Tepat waktu
- Atribut lengkap
- Hormat kepada senior`);
  });

  bot.onText(/^\/larangan$/, (msg) => {
    bot.sendMessage(msg.chat.id,
`⛔ *LARANGAN*
- Terlambat tanpa izin
- Tidak disiplin
- Merusak nama baik organisasi`);
  });

  bot.onText(/^\/atribut$/, (msg) => {
    bot.sendMessage(msg.chat.id,
`🎽 *ATRIBUT*
- Seragam
- Sepatu hitam
- Topi & sabuk`);
  });

  bot.onText(/^\/posisi$/, (msg) => {
    bot.sendMessage(msg.chat.id,
`🧍 *POSISI*
- Sikap sempurna
- Istirahat di tempat`);
  });
};
