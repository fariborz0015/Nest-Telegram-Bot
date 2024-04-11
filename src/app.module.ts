import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BotModule } from './modules/bot/bot.module';
import { CustomConfigModule } from './CustomConfig.module';

@Module({
  imports: [BotModule, CustomConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
