import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import TelegramBotType, { Message } from 'node-telegram-bot-api';
import { PublicCommand } from 'src/enums/bot-enums/command/PuplicCommand.command';
import { ExtractCommandPipe } from 'src/pipes/ExtractCommand.pipe';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const TelegramBot = require('node-telegram-bot-api');

@Injectable()
export class BotService implements OnModuleInit {
  bot: TelegramBotType = new TelegramBot(this.configService.get('Bot.token'), {
    polling: true,
  });

  constructor(
    private configService: ConfigService,
    private readonly extractCommandPipe: ExtractCommandPipe,
  ) {}

  onModuleInit() {
    this.bot.on(
      'message',
      this.onReceivedMessageHandler.bind(this) as (
        message: TelegramBotType.Message,
        metadata: TelegramBotType.Metadata,
      ) => void,
    );

    //adding public commands
    this.bot.setMyCommands(PublicCommand.commands, PublicCommand.options);
  }

  private async onReceivedMessageHandler(message: Message) {
    try {
      return true;
    } catch {
      await this.bot.sendMessage(
        message.chat.id,
        'You have not correct access 🚫✋',
      );
    }
  }

  async extractCommand(message: Message) {
    return this.extractCommandPipe.transform(message);
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
