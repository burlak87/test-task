import Notification from "./Notification.js"
import TelegramBot from "node-telegram-bot-api";

class NotificationService {
    async sending(not, token) {
        const bot = new TelegramBot(token, {polling: true})
        const createdNotification = await Notification.create(not)

        bot.sendMessage(not.chat, not.text)
        .then(() => {
            console.debug('Уведомление отправлено')
        })
        .catch((error) => {
            console.error('ошибка при отправке уведомления', error.message)
        })

        return createdNotification
    }
}