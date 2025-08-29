const accordion = document.getElementsByClassName('content-container');

for(let item of accordion){
    item.addEventListener('click', function(){
        // first, close all other accordian items
        for(let otherItem of accordion){
            if(otherItem !== this){
                otherItem.classList.remove('active')
            }
        }
        // then, toggle 'active' class on the clicked item
        this.classList.toggle('active');
    })
}