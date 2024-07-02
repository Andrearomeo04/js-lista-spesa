const ingredients = ['uova', 'pecorino', 'guanciale', 'pepe nero', 'pasta'];

const grocery_list = document.getElementById('grocery_list');

let i = 0;

while (i < ingredients.length) {
    const li = document.createElement('li');
    li.innerText = ingredients[i];
    grocery_list.append(li);
    i++
}