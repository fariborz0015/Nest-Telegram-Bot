
 

<p align="center">
  <a href="https://github.com/fariborz0015/Nest-Telegram-Bot" target="blank"><img src="https://github.com/fariborz0015/Nest-Telegram-Bot/blob/master/public/cover.png?raw=true"  alt="Nest Logo" /></a>
</p>

[![Bot API](https://img.shields.io/badge/Bot%20API-v.7.1-00aced.svg?style=flat-square&logo=telegram)](https://core.telegram.org/bots/api)
[![npm package](https://img.shields.io/npm/v/node-telegram-bot-api?logo=npm&style=flat-square)](https://www.npmjs.org/package/node-telegram-bot-api)
 

# Nest.js Telegram Bot Bootostart

This project serves as a foundational framework for developing Telegram bots using Nest.js. It provides a streamlined structure and essential functionality for creating robust Telegram bots.

## Purpose
The purpose of this project is to offer a convenient starting point for developers who want to build Telegram bots with Nest.js. By leveraging Nest.js's powerful features and Telegram's API, developers can quickly create customized bots tailored to their specific requirements.
Target 

## Audience
This project is intended for developers familiar with Nest.js and interested in building Telegram bots. Whether you're a beginner looking to get started or an experienced developer seeking a structured approach, this bootstrap offers the tools and guidelines necessary to kickstart your Telegram bot development journey.











 

## Intallation  

Clone the project

```bash
  git clone https://github.com/fariborz0015/Nest-Telegram-Bot.git
```

Go to the project directory

```bash
  cd Nest-Telegram-Bot
```

Install dependencies

```bash
  npm install
```
## Get Telegram Token  


 - Start the BotFather from this link  [BotFather](https://t.me/BotFather) or `@BotFather` ID in Telegram 
 - Click `/newbot` in chat 
 - Enter the Bot Name 
 - Then Enter the a uniq user name that ending with `bot` word 
 - Copy the bot token from the botfather response 


Go to the project directory in `/src/config/config.ts`
replace the token in 

```ts
  const BotToken = registerAs(Configkeys.Bot, () => ({
     token: <REPLACE_TOKEN_HERE>,
  }));

```
## Run 

Start the server as deveopment 

```bash
  npm run start
```
build 

```bash
  npm run build
```


## Contact
For any questions or inquiries, please reach out to the project maintainer:

 [![MIT License](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:Fariborz0015@gmail.com)
 [![MIT License](https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/fariborzjs)



Feel free to open an issue on GitHub if you encounter any problems or have suggestions for improvement.

Happy coding! 👨‍💻
## Authors

- [@fariborz0015](https://www.github.com/fariborz0015)


## Tech Stack

[Nestjs](https://camo.githubusercontent.com/185fa4a995c155fffefe5b0db04f484ec69a80f7a72a89819e5f8d3be153601c/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f406e6573746a732f636f72652e737667)

