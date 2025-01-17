//  Crea la tua To-Do List mediante i metodi visti nel video.
// Crea una funzione che ti permetterà di:
// Creare una lista aggiungendo il task desiderato mediante il bottone Aggiungi.
// Creare un checkbox per ogni task aggiunto. 


const addProduct = () => {
  //preparo selettori
  const lista= document.querySelector("ul");
  const button= document.querySelector("input");
 //creo gli elementi richiesti 
  const elementoLista= document.createElement("li");  
  const checkbox= document.createElement("input")
  //valore di default di imput è text devo cambiarlo
  checkbox.setAttribute("type","checkbox");

 //button.value = elementoLista.innerHTML;
 elementoLista.innerText = button.value

  //inserire gli elementi nell'html
  lista.appendChild(elementoLista);
  elementoLista.appendChild(checkbox)
};
