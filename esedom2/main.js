let input = document.querySelector('input');
let text = document.querySelector('textArea');
let button = document.querySelector('button');
let container = document.querySelector('.row');

button.addEventListener('click' , ()=>{

    let date = new Date();
    let formatDate = date.toLocaleDateString()

    if(input.value == `` && text.value == ``){
        alert('metti qualcosa o non si crea nulla');

    }else{
        let div = document.createElement('div');
        div.innerHTML = `<h2>${input.value}</h2> <p>${text.value}</p> <i>${formatDate}</i>`;
        
        container.appendChild(div);

    }
})
