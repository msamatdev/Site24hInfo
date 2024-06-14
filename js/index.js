

document.getElementById("lang").addEventListener("click", function() {
    let lang = window.location.href.split("/")[4];
    console.log(lang);
    let newLang = lang === "fr" ? "en" : "fr";
    let newUrl = window.location.href.replace(lang, newLang);
    window.location.href = newUrl;
});
