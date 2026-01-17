module.exports = (bot) => {
  bot.onText(/^\/struktur$/, (msg) => {
    bot.sendMessage(msg.chat.id,
`🧑‍✈️ *STRUKTUR PAGASKA*
- Pembina
- Ketua Umum
- Wakil Ketua Umum
- Sekretaris
- Bendahara
- Anggota`);
  });

  bot.onText(/^\/visi$/, (msg) => {
    bot.sendMessage(msg.chat.id,
`🎯 *VISI*
Membentuk paskibraka yang disiplin, berjiwa nasionalis, dan berakhlak.`);
  });

  bot.onText(/^\/misi$/, (msg) => {
    bot.sendMessage(msg.chat.id,
`📌 *MISI*
- Disiplin
- Loyalitas
- Tanggung jawab`);
  });

  bot.onText(/^\/sejarah$/, (msg) => {
    bot.sendMessage(msg.chat.id,
`📜 *SEJARAH*
PAGASKA adalah organisasi Paskibra yang menjunjung tinggi kehormatan.`);
  });

  bot.onText(/^\/motto$/, (msg) => {
    bot.sendMessage(msg.chat.id,
`🔥 *MOTTO*
Sekali hormat, tetap hormat.`);
  });
};
