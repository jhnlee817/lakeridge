window.onload = (event) => {

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})


const images = ["images/stockbanner2.jpg","images/stockbanner3.jpg","images/stockbanner4.jpg"];
const carousel = document.querySelector(".carousel");
const interval = setInterval(function() {
    startCarousel();
}, 3000);
var index = 1;

startCarousel = () => {
    carousel.style.backgroundImage = `url(${images[index++]})`;
    carousel.classList.remove("fade");
    void carousel.offsetWidth;
    carousel.classList.add("fade");
    if(index > images.length - 1) index = 0;
};
}
