const formElem = document.querySelector('.form')
const inputElem = document.querySelector('.input')
const buttonElem = document.querySelector('.button')
const todoListElem = document.querySelector('.todoList')
todoListElem.addEventListener('click', deleteLi)

const checkElem = document.querySelector('.check')
const liElem = document.querySelector('.todoList__item')
const p = document.querySelector('.pelem')
const divelem = document.querySelector('.divelem')

// let local = JSON.parse(localStorage.getItem('data'))
// let tanlangan
// // (local) ? local :
// let data = {
//     baza: [{
//         id:1,
//         plans: 'chiqdi',
//         toTime: 11+':'+00
//     }
        
//     ]
// }
// console.log(local);
// localStorage.setItem('data', JSON.stringify(data))

function create(plans, time){
    const liElem = document.createElement('li')
    const pElem = document.createElement('p')
    const timeElme =document.createElement('time')
    const chakboxElem = document.createElement('input')
    const buttonElem = document.createElement('button')
    const divElem = document.createElement('div')

    pElem.innerText = plans
    timeElme.innerText = time

    liElem.classList.add('todoList__item')
    chakboxElem.classList.add('check')
    chakboxElem.type= 'checkbox'
    buttonElem.innerText = 'remove'
    buttonElem.classList.add('btndelet')
    pElem.classList.add('pelem')

    liElem.appendChild(pElem)
    liElem.appendChild(divElem)

    divElem.appendChild(timeElme)
    divElem.appendChild(chakboxElem)
    liElem.appendChild(buttonElem)
    divElem.classList.add('divelem')

    todoListElem.appendChild(liElem)

    inputElem.value = ''

    return liElem

}
function  render(text, time){
    
    create()
}

form.addEventListener('submit', event=>{
    
    event.preventDefault();
    const mydate = new Date();

    let timedata = `${mydate.getHours()}:${mydate.getMinutes()}`

    create(inputElem.value, timedata)
    checkElem.addEventListener('change', (e)=>{
        console.log(e);
    })
    form.reset()


})


console.log(liElem);
 
function deleteLi(e){
    
    let item = e.target
    if(item.classList[0]==='btndelet'){
        item.parentElement.remove()     
    }

    if(item.classList[0]==='check'){
        item.parentElement.classList.toggle('.opos')
        
    }
}
