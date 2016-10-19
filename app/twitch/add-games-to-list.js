import createGameElement from './create-game-element';

export default function showGamesInList(parentEl, data) {
  for (let i = 0; i < data.top.length; i++) {
    const gameItem = data.top[i];
    const el = createGameElement(gameItem);
    parentEl.appendChild(el);
  }
}
