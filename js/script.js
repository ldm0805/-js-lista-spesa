const list =['pecorino', 'pasta' , 'uova','passata ', 'acqua']
const list_container = document.querySelector('.shopping-list')
let item = 0;
let item_add = 0;
let item_up = 0;
let spesa_item
let count = 0;

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
    
        let list_item = document.createElement('li');
    
        list_item.innerText = list[item];
    
        list_item.classList.add('list-class', 'animate__headShake');
    
        list_container.append(list_item);
        
        item++
    }
}
    
})

while( item < list.length){
  
      let list_item = document.createElement('li');
  
      list_item.innerText = list[item];
  
      list_item.classList.add('list-class', 'animate__headShake');
  
      list_container.append(list_item);
      
      item++

  }



