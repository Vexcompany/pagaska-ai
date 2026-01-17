const config = require("../config");

module.exports = (bot) => {
  bot.onText(/^\/warning$/, (msg) => {
    if (!config.admins.includes(msg.from.id)) return;
    bot.sendMessage(msg.chat.id, "⚠️ WARNING DIBERIKAN");
  });

  bot.onText(/^\/broadcast (.+)/, (msg, match) => {
    if (!config.admins.includes(msg.from.id)) return;
    bot.sendMessage(msg.chat.id, `📢 ${match[1]}`);
  });
};
