import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import TelegramBotType from 'node-telegram-bot-api';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const TelegramBot = require('node-telegram-bot-api');

@Injectable()
export class BotService implements OnModuleInit {
  bot = new TelegramBot(this.configService.get('Bot.token'), { polling: true });

  constructor(private configService: ConfigService) {}

  onModuleInit() {
    this.bot.on(
      'message',
      this.onReceivedMessageHandler.bind(this) as (
        message: TelegramBotType.Message,
        metadata: TelegramBotType.Metadata,
      ) => void,
    );
  }

  checkHasCorrectAccess(message: TelegramBotType.Message) {
    if (message.chat.type !== 'private') {
      throw new Error('You have not correct access');
    }
  }

  private async onReceivedMessageHandler(message: TelegramBotType.Message) {
    try {
      this.checkHasCorrectAccess(message);
    } catch {
      await this.bot.sendMessage(
        message.chat.id,
        'You have not correct access 🚫✋',
      );
    }
  }

  async sendMessage(
    chatId: TelegramBotType.ChatId,
    text: string,
    options?: TelegramBotType.SendMessageOptions,
  ): Promise<TelegramBotType.Message> {
    return await this.bot.sendMessage(
      chatId,
      text,
      options || {
        reply_markup: {
          remove_keyboard: true,
          keyboard: [],
        },
      },
    );
  }
}
