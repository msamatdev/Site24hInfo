// Loading page animation
const titre = document.querySelectorAll('#top > div > p');
const imgAccueil = document.querySelector('#top > img');

window.getComputedStyle(titre[0]).color; 
window.getComputedStyle(imgAccueil);

titre[0].style.color = 'black';
setTimeout(() => {
    titre[1].style.color = 'black';
}, 1000)

setTimeout(() => {
    imgAccueil.style.opacity = '1';
}, 1600)
