import { Injectable, PipeTransform } from '@nestjs/common';
import { Message } from 'node-telegram-bot-api';

@Injectable()
export class ExtractCommandPipe implements PipeTransform {
  transform(value: Message): string | null {
    const commandEntities = value?.entities?.find(
      (entity) => entity.type == 'bot_command',
    );
    const text = value.text;
    if (commandEntities) {
      let command: string;
      if (value.chat.type == 'group' || value.chat.type == 'supergroup') {
        command = text.split('@')[0];
        command=command.replace('/','')
      } else {
        command = text.slice(
          commandEntities.offset,
          commandEntities.offset + commandEntities.length,
        );
        command=command.replace('/','')
      }
      return command;
    }
    return null; // اگر پیام حاوی دستور نباشد، مقدار null را برگردانید
  }
}
