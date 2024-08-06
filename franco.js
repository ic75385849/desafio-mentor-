let currentIndex = 0;
const intervalTime = 3000; 
let slideInterval;

function showSlide(index) {
    const slides = document.querySelectorAll('.carrusel-slide');
    const totalSlides = slides.length;
    

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }
    

    const offset = -currentIndex * 100;
    

    document.querySelector('.carrusel-container').style.transform = `translateX(${offset}%)`;
}


function startCarousel() {
    slideInterval = setInterval(() => {
        showSlide(currentIndex + 1);
    }, intervalTime);
}


function moveSlide(step) {
    clearInterval(slideInterval); 
    showSlide(currentIndex + step);
    startCarousel(); 
}


document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
document.querySelector('.next').addEventListener('click', () => moveSlide(1));

startCarousel();
