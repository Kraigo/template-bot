import { Client } from "./client";
import TelegramBot from "node-telegram-bot-api";

export async function app()  {
    const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, {polling: true});
    const client = new Client(bot);
    client.initHandlers();
}

app();