export default function sumFromList(list) {
  for (let i = 0; i < list.children.length; i++) {
    console.log(list.children[i].innerText);
  }

  let count = 0;
  for (let i = 0; i < list.children.length; i++) {
    count = count + parseInt(list.children[i].innerText);
  }
  return count;
}
