// DOM Manipulation

// GetElementById()


// GetElementsByClassName()


// GetElementsByTagName()


// querySelector()


// querySelectorAll()


// styling elements
const title =  document.querySelector('#title');
title.style.color = 'red';
// console.log(title)

const listItems =  document.querySelectorAll('.list-items')
for(let item of listItems){
    item.style.fontSize = '2rem'
}
// console.log(listItems)


