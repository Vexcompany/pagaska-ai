module.exports = (bot) => {
  bot.onText(/^\/pagaska$/, (msg) => {
    bot.sendMessage(msg.chat.id,
`🐉 *PAGASKA AI*
Paskibra Gala Taksaka 🇮🇩

📌 MENU:
🏠 /pagaska
🧑‍✈️ /struktur
🎺 /peraturan
⏰ /jadwal
🧠 /ai
📖 /surat
🏅 /poin
`, { parse_mode: "Markdown" });
  });
};
