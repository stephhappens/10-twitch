import 'whatwg-fetch';
import data from './data.json';
import showGamesInList from './twitch/add-games-to-list';
import createGameElement from './twitch/create-Game-Element';
 // Add games to the results list based on the data from `data.json`
//
const ul = document.querySelector('.results');

const list = showGamesInList(ul, data);
