let lang = "ar";

function toggleLang(){
    lang = lang === "ar" ? "en" : "ar";

    document.querySelectorAll("[data-ar]").forEach(el => {
        el.innerText = el.dataset[lang];
    });

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
}
