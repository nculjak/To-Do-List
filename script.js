function addItem(){

    let title = document.querySelector('#title');
    title = title.value 


    if (title !== ' ') {
        let newElement = document.createElement ('div')
        newElement.className = 'item'
        newElement.innerHTML = title
        document.querySelector('.items').appendChild(newElement)  

        newElement.innerHTML += `<button onclick="removeItem(this)" class='btn'>Ukloni</button>`
    
    }

}
function removeItem(element){
    let mainEl = element.closest('.item')
    mainEl.remove()
}