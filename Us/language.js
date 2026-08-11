let currentLanguage = "en";

function toggleLanguage() {

    currentLanguage =
        currentLanguage === "en"
            ? "he"
            : "en";

    document.documentElement.lang = currentLanguage;

    document.body.classList.toggle(
        "rtl",
        currentLanguage === "he"
    );

    const elements =
        document.querySelectorAll("[data-en]");

    elements.forEach(element => {

        element.textContent =
            element.dataset[currentLanguage];

    });

    document.getElementById("languageButton").textContent =
        currentLanguage === "en"
            ? "עברית"
            : "English";
}
