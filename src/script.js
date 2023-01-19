const header = document.querySelector('header')
const navBtn = document.documentElement.querySelector('.fa-bars');
const overlay = document.documentElement.querySelector('.overlay');
const closeBtn = document.querySelector('.fa-xmark')

navBtn.addEventListener('click', ()=> {
    overlay.classList.toggle('active')
})

closeBtn.addEventListener('click', ()=> {
    overlay.classList.remove('active')
})