const aSection = document.getElementById('affirmation-section');
const aItem = document.getElementById('item-template');
const aList = document.getElementById('list-template');

fetch('/affirmations/affirmations.json')
  .then(res => res.ok && res.json())
  .then(res => {
    if (!res) affirmationList.textContent = "Sorry there was a problem loading. Try again soon.";
    else renderList(res);
  });

function renderList (items) {
  const list = document.importNode(aList.content, true).querySelector('ul');
  items.forEach(function (item) {
    const li = document.importNode(aItem.content, true);
    li.querySelector('p').textContent = item.text;
    list.appendChild(li);
  });

  aSection.replaceWith(list);
}
