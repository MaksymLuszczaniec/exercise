const itemsWeapon = ["Glock Austria ", "Mosin Russia", "AK-47 Russia"];

const listOrder = document.createElement("ol");

itemsWeapon.forEach(text => {
const listWeapon = document.createElement("li");
listWeapon.textContent = text;
listOrder.appendChild(listWeapon);
});

const listContainer = document.getElementById('list-container');

listContainer.appendChild(listOrder);
// next task
const divElement = document.createElement('div')

const h2Element = document.createElement('h2');
h2Element.textContent = "Good Job";

const pElement = document.createElement("p")
pElement.textContent = "You did good job";

divElement.appendChild(h2Element);
divElement.appendChild(pElement);

const container = document.getElementById('content');

container.appendChild(divElement);

document.addEventListener('DOMContentLoaded', function() {
  const listContainer = document.getElementById('list-container');
  const contentDiv = document.getElementById('content');


  listContainer.appendChild(contentDiv);
});

const div10 = document.createElement('div');
const div20 = document.createElement('div');
const div30 = document.createElement('div');
const div40 = document.createElement('div');

div10.textContent = 'Thanks for trening10'
div20.textContent = 'Thanks for trening20'
div30.textContent = 'Thanks for trening30'
div40.textContent = 'Thanks for trening40'

container.appendChild(div10);
container.appendChild(div20);
container.appendChild(div30);
container.appendChild(div40);

