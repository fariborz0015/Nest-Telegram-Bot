import { BotCommandScope } from 'node-telegram-bot-api';
import { BotPublicCommandEnums } from './enums/piblicCommand.enum';

interface CustomCommands<T> {
  commands: {
    command: T;
    description: string;
  }[];
  options?: {
    language_code?: string;
    scope: BotCommandScope;
  };
}
export const PublicCommand: CustomCommands<BotPublicCommandEnums> = {
  commands: [
    {
      command: BotPublicCommandEnums.SayMayName,
      description: 'Breaking bad Dialog : Say My Name ',
    },
  ],
  options: {
    scope: {
      type: 'all_group_chats',
    },
  },
};
