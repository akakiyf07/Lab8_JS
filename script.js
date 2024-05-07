const hamburger = document.querySelector('.hamburger');
const navIcons = document.querySelector('.nav-icons');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navIcons.classList.toggle('show');

    navIcons.innerHTML = '';

    navLinks.forEach(link => {
        const linkElement = document.createElement('a');
        linkElement.href = link.href;
        linkElement.textContent = link.textContent;
        navIcons.appendChild(linkElement);
    });
});

const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const indicators = document.querySelectorAll('.indicators span');
let currentSlide = 0;

function showSlide(n) {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        indicators[index].classList.remove('active');
    });
    slides[n].classList.add('active');
    indicators[n].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        showSlide(index);
        currentSlide = index;
    });
});

let slideInterval = setInterval(nextSlide, 5000);
