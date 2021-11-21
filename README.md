# 🏓 Ping Pyoo 🐦  

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=for-the-badge&logo=prettier)](https://github.com/prettier/prettier)
[![version: v1.0.69](https://img.shields.io/github/package-json/v/spuuntries/pingpyoo?color=green&logo=semver&logoColor=green&style=for-the-badge)](https://github.com/spuuntries/pingpyoo)  
[![last commit](https://img.shields.io/github/last-commit/spuuntries/pingpyoo?color=yellow&style=flat-square)](https://github.com/spuuntries/pingpyoo)
[![license: agpl-3.0](https://img.shields.io/github/license/spuuntries/pingpyoo?color=red&logo=gpl&style=flat-square)](https://github.com/spuuntries/pingpyoo)  

> Copyright (C) 2021 by kekboi, Art Union org.  
> License Notice:  
> Any code within this repository and any derivatives thereof are to be licensed with Affero GPL as published by the FSF,  
> version 3 only, under `kekboi, Art Union org.`, see `LICENSE.md` for details.  


## Dependencies:
As we're running `d.js` v13 for this, it *is* ***required*** for you to install `node.js` v16 to run this module as is.  

However, you *can* remove all v13 changes and change the `package.json` to run this on v12.


## How it works:
This repo contains a hard fork of kek's welcoming module for Art Union for Pyoo's birbday, what it does is it:  
1. Gets a webhook.
2. Sends a randomized compliment for Piyo on a set interval,   
resulting in a fuckton of pings.  
3. ???
4. Profit.

Simple enough, lmao.


## Usage:
`mv` or rename `.env copy` to `.env` and change the variables accordingly.   

### Brief explanation of the configurable message:  
The `birbmotes` can be more than two emotes so long as they're all split by a `|`.  
The same thing goes for the `birbdae` messages, with the difference being the addition of `<ping>` placeholder.
