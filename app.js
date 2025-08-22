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

// const ul = document.querySelector('ul');
// const li = document.createElement('li')

// adding elements  =============
// ul.append(li)

// modifying the text ===========
// li.innerText = 'X-men'

// const firstListItem = document.querySelector('.list-items')
// console.log(firstListItem.innerText)
// console.log(firstListItem.textContent)
// console.log(firstListItem.innerHTML)


// modifying attributes and classes ===============

// li.setAttribute('id', 'title');
// li.removeAttribute('id');
// let title = document.querySelector('#title');
// title.getAttribute('id')


// li.classList.add('list-items');
// li.classList.remove('list-items');

// console.log(li.classList.contains('list-items')) 

// remove elements  ===============
// li.remove(li.classList.contains('list-items'))








// Traverse the DOM  ==============

// Parent Node Traversal  ===============

// const ul = document.querySelector('ul')
// console.log(ul.parentNode.parentNode)
// console.log(ul.parentElement.parentElement)
// const html = document.documentElement;
// console.log(html.parentNode) // #document
// console.log(html.parentElement) // null


// Child Node Traversal  ================


// const ul = document.querySelector('ul');
// console.log(ul.childNodes)
// console.log(ul.firstChild)
// console.log(ul.lastChild)
// ul.childNodes[1].style.backgroundColor = 'green';
// console.log(ul.children)
// console.log(ul.firstElementChild)
// console.log(ul.lastElementChild)



// Sibling Node Traversal  ===========
// const ul = document.querySelector('ul');
// const div = document.querySelector('div');
// console.log(div.childNodes)
// console.log(ul.previousSibling)
// console.log(ul.nextSibling)
// console.log(ul.previousElementSibling)
// console.log(ul.nextElementSibling)


