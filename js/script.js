let subBtn = document.querySelector('.subscribe-button')
let modContainer = document.querySelector('.header-subscribe-modal-container');
let cBtn = document.querySelector('.closeBtn')


subBtn.addEventListener('click', function(){
    modContainer.classList.add('modal-active')
})

cBtn.addEventListener('click', function() {
    modContainer.classList.remove('modal-active')
})