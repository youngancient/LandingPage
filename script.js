document.addEventListener('DOMContentLoaded', function(){
    window.onscroll = function(){
        checkCards();
    };
});

function checkCards(){
    const triggerPoint = window.innerHeight/ 5*4;
    document.querySelectorAll('.card').forEach(card =>{
        const cardTop = card.getBoundingClientRect().top;
        if(cardTop < triggerPoint){
            card.classList.add('show');
        }else{
            card.classList.remove('show');
        }
    })
}