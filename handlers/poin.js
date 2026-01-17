const fs = require("fs");
const file = "./data/poin.json";

if (!fs.existsSync(file)) fs.writeFileSync(file, "{}");

module.exports = (bot) => {
  bot.onText(/^\/poin$/, (msg) => {
    const data = JSON.parse(fs.readFileSync(file));
    const id = msg.from.id;
    bot.sendMessage(msg.chat.id,
`🏅 POIN KAMU: ${data[id] || 0}`);
  });
};
