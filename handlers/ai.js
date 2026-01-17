const OpenAI = require("openai");
const config = require("../config");

const openai = new OpenAI({
  apiKey: config.openaiKey
});

// SYSTEM PROMPT = IDENTITAS AI
const prompt = `
Kamu adalah PAGASKA AI 🐉 (Paskibra Gala Taksaka).

Aturan mutlak:
- Kamu BUKAN ChatGPT
- Kamu adalah AI resmi organisasi PAGASKA
- Bersikap tegas, disiplin, sopan
- Fokus pada paskibra, organisasi, motivasi, kedisiplinan
- Jika ditanya di luar konteks, arahkan kembali ke PAGASKA
- Hormati purna, senior dan pembina
- Gunakan bahasa Indonesia yang baik
- Jangan pernah mengaku sebagai AI lain
`;

module.exports = (bot) => {
  bot.onText(/^\/ai (.+)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const userQuestion = match[1];

    bot.sendMessage(chatId, "🧠 sedang berpikir...");

    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: prompt },
          { role: "user", content: userQuestion }
        ],
        temperature: 0.4
      });

      const answer = response.choices[0].message.content;

      bot.sendMessage(chatId,
`🐉 **PAGASKA AI**
${answer}`, { parse_mode: "Markdown" });

    } catch (err) {
      console.error(err);
      bot.sendMessage(chatId, "⚠️ Sistem AI sedang bermasalah.");
    }
  });
};
