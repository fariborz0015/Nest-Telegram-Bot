import { Injectable, OnModuleInit } from '@nestjs/common';
import { BotService } from './bot.service';
import { Message, Metadata } from 'node-telegram-bot-api';
import { BotPublicCommandEnums } from 'src/enums/bot-enums/command/enums/piblicCommand.enum';

@Injectable()
export class GroupService implements OnModuleInit {
  constructor(private botService: BotService) {}

  onModuleInit() {
    this.botService.bot.on(
      'message',
      this.checkMessage.bind(this) as (
        message: Message,
        metadata: Metadata,
      ) => void,

    );

    this.botService.bot.on('callback_query', async (callbackQuery) => {
      const chatId = callbackQuery.message.chat.id;
      const data = callbackQuery.data;
    
      // Check if the data matches the callback data of the inline button
      if (data === BotPublicCommandEnums.SayMayName) {
        // Respond to the button click
        await this.botService.sendMessage(chatId, "You clicked the button!");
      }
    });
  }
  async checkMessage(message: Message) {
    console.log(message);
    const command = await this.botService.extractCommand(message);
    if (command) {
      if (command == BotPublicCommandEnums.SayMayName) {
        this.botService.sendMessage(
          message.chat.id,
          `you are Heisenberg  🎩🕶️`,
          {
            reply_markup: {
              inline_keyboard: [
                [
                  {
                    text: "You're goddamn right",
                    callback_data: BotPublicCommandEnums.SayMayName,
                  },
                ],
              ],
            },
          },
        );
      }
    }
  }

  async createQuies(message: Message) {
    this.botService.sendMessage(message.chat.id, 'پرسش شما ایجاد شد ');
  }
}
