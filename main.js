//Menu
const mobileNav = document.querySelector('.navigation');
const menuIcon = document.querySelector('.menu');

menuIcon.addEventListener('click', ()=> {
    mobileNav.classList.toggle('active');
    menuIcon.classList.toggle('active');
})

//LightBox
const btnOpenEl = document.querySelector('.btn');
const btnCloseEl = document.querySelector('.close');
const btnNextEl = document.querySelector('.next');
const btnPrevEl = document.querySelector('.prev');
let slideIndex = 1;
showSlides(slideIndex);


btnOpenEl.addEventListener('click', ()=> {
    document.querySelector('.modal').style.display = 'block';
});

btnCloseEl.addEventListener('click', ()=> {
    document.querySelector('.modal').style.display = 'none';
});

btnNextEl.addEventListener('click', ()=> {
    plusSlides(1);
});

btnPrevEl.addEventListener('click', ()=> {
    plusSlides(-1);
});

function showSlides(n) {
    const slides = document.querySelectorAll('.slide');
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (let i =0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex-1].style.display = 'block';
}

function plusSlides(n) {
    showSlides(slideIndex+=n);
}

