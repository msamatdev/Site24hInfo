document.querySelector(".lang").addEventListener("click", function() {
    let currentLang = document.querySelector(".lang .active").textContent;
    console.log(currentLang);
    let newLang = currentLang == "FR" ? "en" : "fr";
    console.log(newLang);
    let newUrl = window.location.href.replace(currentLang.toLowerCase(), newLang);
    console.log(newUrl);
    window.location.href = newUrl;
});
