import { Module } from '@nestjs/common';
import { BotService } from './bot.service';
import { ConfigService } from '@nestjs/config';
 

@Module({
 
  providers: [BotService,ConfigService],
})
export class BotModule {}
