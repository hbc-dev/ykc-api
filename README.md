![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
<a href="https://paypal.me/pagos3217">
![PayPal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white) 
</a>
<a href="https://discord.gg/yokaiworld">
![Discord](https://img.shields.io/badge/YoKai_Cards-%237289DA.svg?style=for-the-badge&logo=discord&logoColor=white)
</a><a href="https://twitter.com/YokaiWorld1">
![Twitter](https://img.shields.io/badge/Twitter-%231DA1F2.svg?style=for-the-badge&logo=Twitter&logoColor=white)
</a>

# Yo-Kai Cards API
Welcome to the API of Yo-Kai Cards. You can obviously see how your information are used in this repository.

In any time, we can made private this repository.

![](https://media.discordapp.net/attachments/941714539018321961/1034182743476670495/2140_sin_titulo_20221024211233.png?width=453&height=659)

# Endpoints

## Base => `http://localhost:3000/`
Redirect to the [Yo-Kai World](https://discord.gg/yokaiworld) server in Discord.

## Oauth => `/oauth/`
Middleware to give access to the API.
Requires the body.

| Property | Description | Required |
| - | - | - |
| token | The token to access to the API | ✅

## Accounts => `/oauth/accounts/:id?limit=number`
Route to get accounts.

| Property | Description | Required
| - | - | - |
| id | The id of the user to get his account. If the id wasn't provided, the API return all accounts | ❌
| limit | The number of accounts to return. If the id was provided, this limit won't work | ✅

## AccountsCreate => `/oauth/accounts/create`
Route to create accounts.
Requires the body.

| Property | Description | Required
| - | - | - |
| mail | The mail of the user | ✅
| password | The mail of the user | ✅
| username | The username of the user | ✅
| language | The language of the user | ❌

Yo-Kai Cards ©
