export default function createGameElement(data) {
  const item = document.createElement('div');
  item.classList.add('game-item');

  item.innerHTML = `
 <div className="frame">
   <h3 class="game-item__name"></h3>
   <h4 class="game-item__popularity"></h4>
 </div>
 <img src="" alt="" class="game-item__pic"/>`;

  const title = item.querySelector('.game-item__name');
  title.innerText = data.name;

  const popularity = item.querySelector('.game-item__popularity');
  popularity.innerText = data.popularity;

  const pic = item.querySelector('.game-item__pic');
  pic.src = data.box.large;
  pic.alt = data.name;

  return item;
}
