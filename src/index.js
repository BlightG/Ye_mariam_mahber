// const telegrambot = require('node-telegram-bot-api');
import telegramBot from 'node-telegram-bot-api';
// require('dotenv').config();
import 'dotenv/config';
import {EthDateTime, limits} from 'ethiopian-calendar-date-converter';

const TOKEN = process.env.TOKEN;
const bot = new telegramBot(TOKEN, { polling: true });
const list = ["amiyew", "beti", "lebo", "beza", "leul", "betsi", "miki", "melak", "Edel", "😎"]
const intervalId = setInterval(mycallback, 86400000)
let index = 0;
let lastMonth = 6;
const mariam = 21;

function mycallback() {
	const ethDateTime = EthDateTime.now()
	if (ethDateTime.month === lastMonth && ethDateTime.date === mariam) {
		bot.sendMessage(398069506, `የዚህ ወር የማሪያም ማህበር የ ${list[index]} ነው።`)
		index++;
		if (lastMonth < 11) {
			lastMonth += 2;
		} else if (lastMonth == 11) {
			lastMonth = 1;
		} else {
			lastMonth = 0
		}

	} 
	if (index >= list.length) {
		index = 0;
	}
	
}
