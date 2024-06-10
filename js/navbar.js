const menuButtons = document.querySelectorAll(".menuButton");
const pagesMenu = document.getElementById("pagesMenu");

menuButtons.forEach( (button) => {
    button.addEventListener("click", function() {
        console.log(pagesMenu.style.right);
        if (pagesMenu.style.right === '-350px') {
            pagesMenu.style.right = 0 + 'px';
        } else {
            console.log("click");
            pagesMenu.style.right = -350 + 'px';
        }
    })
});
    
    
    
    