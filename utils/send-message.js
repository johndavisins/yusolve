import axios from "axios";

export const sendMessageToTelegramGroup = async (message) => {
  const botToken = "7897025726:AAGmQhfOLXodLwSPUqwYgoBT43CFb-T9jok";
  const chatId = "-1002544288821"; // O'zingizning guruh ID'ingizni yozing (negative ID bo'lishi mumkin)
  const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

  try {
    const response = await axios.post(telegramApiUrl, {
      chat_id: chatId,
      text: message,
      parse_mode: "HTML", // HTML formatda xabar yuborish uchun
    });

    console.log("Message sent successfully:", response.data);
  } catch (error) {
    console.error(
      "Failed to send message:",
      error.response?.data || error.message
    );
    return false;
  }
};

// Foydalanish
// sendMessageToTelegramGroup("Hello, this is a test message from my app!");
