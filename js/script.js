const list =['Pecorino', 'Pasta' , 'Uova','Passata ', 'Acqua']
const list_container = document.querySelector('.shopping-list')
let item = 0;
let item_add, item_up, spesa_item, count, list_item;

// Ciclo per visualizzare gli elementi nell'array
while( item < list.length){
  
    // Creo l'elemento html

    list_item = document.createElement('li');

    list_item.innerText = list[item];

    // Aggiungo la classe all'elemento

    list_item.classList.add('list-class', 'animate__headShake');

    list_container.append(list_item);
    // Contatore
    item++

}

// Bottone con funzione di inserimento di nuovi elementi nell'array
let button = document.getElementById('item_up')
button.addEventListener('click', function(){

    spesa_item = document.getElementById("item_add").value; 

    // Controllo del campo di testo se vuoto
    if (spesa_item == "") {
        alert("Inserisci un'elemento");
        return false;
      }
    
    else{
    // Inserimento elementi da input
    count = list.push(spesa_item);
    
    while( item < list.length){

        // Creo l'elemento html
        list_item = document.createElement('li');
    
        list_item.innerText = list[item];

        // Aggiungo la classe all'elemento
        list_item.classList.add('list-class', 'animate__headShake');
    
        list_container.append(list_item);

        // Contatore
        item++
    }
}
    
})

