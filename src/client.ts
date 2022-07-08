import TelegramBot from 'node-telegram-bot-api';
import { isDebug, logger } from './utils';

export class Client {
    
    constructor(
        private bot: TelegramBot
    ) {
        if (isDebug) {
            this.onMessage = logger(this.onMessage).bind(this);
        }
    }

    initHandlers() {
        this.bot.on('message', (message) => this.onMessage(message));
    }

    public async onMessage(message: TelegramBot.Message) {
        const chatId = message.chat.id;
        if (/\/start/i.test(message.text)) {
        await  this.bot.sendMessage(chatId, 'I\'m alive!');
        }
        if (/\/echo/i.test(message.text)) {
            await this.bot.sendMessage(chatId, 'Chat_id is ' + chatId);
        }
        else if (/привет/i.test(message.text)) {
            await this.sendHi(message);
        }
    }

    async sendHi(message: TelegramBot.Message) {
        const chatId = message.chat.id;
        await this.bot.sendMessage(chatId, 'Привет')
    }

}
