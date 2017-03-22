export default function (message) {
  const createMessageItem = document.createElement('li');
  createMessageItem.innerHTML = `
    <span class="message-item__username">${message.username}</span>
    ${message.message}`;

  return createMessageItem;
}
