import createMessage from './create-message-item';

export default function addMessageItem(list, data) {
  const ul = createMessage(data);
  list.appendChild(ul);
}
