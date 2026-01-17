const TelegramBot = require("node-telegram-bot-api");
const config = require("./config");

const bot = new TelegramBot(config.token, { polling: true });

// handlers
require("./handlers/menu")(bot);
require("./handlers/organisasi")(bot);
require("./handlers/paskibra")(bot);
require("./handlers/disiplin")(bot);
require("./handlers/ai")(bot);
require("./handlers/islami")(bot);
require("./handlers/poin")(bot);
require("./handlers/admin")(bot);

console.log("✅ PAGASKA AI RUNNING");
