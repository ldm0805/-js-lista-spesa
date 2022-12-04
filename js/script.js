const list =['Pecorino', 'Pasta' , 'Uova','Passata ', 'Acqua']
const list_container = document.querySelector('.shopping-list')
let item = 0;
let item_add, item_up, spesa_item, count, list_item;


while( item < list.length){
  
    list_item = document.createElement('li');

    list_item.innerText = list[item];

    list_item.classList.add('list-class', 'animate__headShake');

    list_container.append(list_item);
    
    item++

}


let button = document.getElementById('item_up')
button.addEventListener('click', function(){

    spesa_item = document.getElementById("item_add").value; 
    
    if (spesa_item == "") {
        alert("Inserisci un'elemento");
        return false;
      }
    
    else{

    count = list.push(spesa_item);
    
    while( item < list.length){
    
        list_item = document.createElement('li');
    
        list_item.innerText = list[item];
    
        list_item.classList.add('list-class', 'animate__headShake');
    
        list_container.append(list_item);
        
        item++
    }
}
    
})

