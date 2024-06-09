// Loading page animation
const titre = document.querySelectorAll('#top > div > p');

window.getComputedStyle(titre[0]).color; 

titre[0].style.color = 'black';
setTimeout(() => {
    titre[1].style.color = 'black';
}, 1000)

setTimeout(() => {
    window.scrollBy({
        left: 0,
        top: window.innerHeight,
        behavior: "smooth"
    });
}, 2500);