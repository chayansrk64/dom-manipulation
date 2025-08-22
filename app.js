// DOM Manipulation

// GetElementById()


// GetElementsByClassName()


// GetElementsByTagName()


// querySelector()


// querySelectorAll()


// styling elements ============

// const title =  document.querySelector('#title');
// title.style.color = 'red';
// console.log(title)

// const listItems =  document.querySelectorAll('.list-items')
// for(let item of listItems){
//     item.style.fontSize = '2rem'
// }
// console.log(listItems)



// creating elements ==============

const ul = document.querySelector('ul');
const li = document.createElement('li')

// adding elements
ul.append(li)

// modifying the text
li.innerText = 'X-men'

// const firstListItem = document.querySelector('.list-items')
// console.log(firstListItem.innerText)
// console.log(firstListItem.textContent)
// console.log(firstListItem.innerHTML)


// modifying attributes and classes

// li.setAttribute('id', 'title');
// li.removeAttribute('id');
// let title = document.querySelector('#title');
// title.getAttribute('id')


li.classList.add('list-items');
li.classList.remove('list-items');

// console.log(li.classList.contains('list-items')) 

// remove elements
li.remove()


