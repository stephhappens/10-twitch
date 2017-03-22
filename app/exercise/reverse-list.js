export default function reverseList(list, output) {
  const children = list.children;

  for (let i = children.length - 1; i >= 0; i--) {
    const copy = children[i].cloneNode(true);

    output.appendChild(copy);
  }
}
