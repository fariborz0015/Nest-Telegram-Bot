import { Module } from '@nestjs/common';
import { BotService } from './bot.service';
import { ConfigService } from '@nestjs/config';
import { GroupService } from './group.service';
import { ExtractCommandPipe } from 'src/pipes/ExtractCommand.pipe';
 

@Module({
 
  providers: [BotService,ConfigService,GroupService,ExtractCommandPipe],
})
export class BotModule {}
