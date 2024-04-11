import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Configuration } from 'src/config/config';
import { BotModule } from './modules/bot/bot.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: Configuration,
      isGlobal: true,
    }),
    BotModule,
  ],
})
export class CustomConfigModule {}
