const list =['cioccolata', 'guanciale', 'pecorino', 'pasta', 'uova','passata di pomodoro', 'piatti', 'acqua']
const list_container = document.querySelector('.shopping-list')

let item = 0;
console.log(list.length)

while( item < list.length){

    let list_item = document.createElement('li');

    list_item.innerText = list[item];

    list_item.classList.add('list-class');

    list_container.append(list_item);

    item++
 }
