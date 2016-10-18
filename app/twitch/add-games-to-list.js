import createGameElement from './create-game-element';

export default function showGamesInList(parentEl, data) {
  parentEl.innerHTML = '';

  for (let i = 0; i < data.length; i++) {
    const gameItem = data[i];
    const el = createGameElement(gameItem);
    parentEl.appendChild(el);
  }
}
