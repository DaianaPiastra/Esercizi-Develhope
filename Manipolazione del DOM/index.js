const ul = document.querySelector("ul")
console.log(ul);

const addProduct = () => {
  const li1= document.createElement('li');
  li1.innerText = 'Go to school';
  ul.appendChild(li1);
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  li1.appendChild(checkbox)

  const li2= document.createElement('li');
  li2.innerText = 'Do my homework';
  ul.appendChild(li2);
  const checkbox1 = document.createElement('input');
  checkbox1.type = 'checkbox';
  li2.appendChild(checkbox1)

  const li3= document.createElement('li');
  li3.innerText = 'Go to bed';
  ul.appendChild(li3);
  const checkbox2 = document.createElement('input');
  checkbox2.type = 'checkbox';
  li3.appendChild(checkbox2)
}

addProduct();

