import { registerAs } from '@nestjs/config';

export enum Configkeys {
  App = 'App',
  Db = 'Db',
  Bot = 'Bot',
}

const AppConfig = registerAs(Configkeys.App, () => ({
  port: 3000,
}));
const BotToken = registerAs(Configkeys.Bot, () => ({
  token: '',
}));

const DbConfig = registerAs(Configkeys.Db, () => ({
  port: 5432,
  host: 'localhost',
  username: 'postgres',
  password: 'root',
  database: 'bot',
}));

export const Configuration = [AppConfig, DbConfig, BotToken];
