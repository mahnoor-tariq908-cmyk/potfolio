// ==============================
// MOBILE MENU
// ==============================

let menuBtn = document.getElementById("menuBtn");
let mobileMenu = document.getElementById("mobileMenu");

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", function () {
        mobileMenu.classList.toggle("hidden");
    });
}


// ==============================
// THEME TOGGLE + LOCAL STORAGE
// ==============================

let themeBtn = document.getElementById("themeBtn");
let body = document.getElementById("body");


// ==============================
// LIGHT THEME STYLE
// ==============================

const themeStyle = document.createElement("style");

themeStyle.innerHTML = `
    /* NAVBAR LIGHT MODE */
    body.light-theme header {
        background: rgba(255, 255, 255, 0.92) !important;
        border-color: rgba(0, 0, 0, 0.10) !important;
    }

    body.light-theme #mobileMenu {
        background: #ffffff !important;
        border-color: rgba(0, 0, 0, 0.10) !important;
    }

    body.light-theme header .text-gray-400 {
        color: #4b5563 !important;
    }

    body.light-theme header .text-gray-300 {
        color: #374151 !important;
    }

    body.light-theme header .border-white\\/10 {
        border-color: rgba(0, 0, 0, 0.10) !important;
    }


    /* SKILLS SECTION LIGHT MODE */
    body.light-theme #skills {
        background: #f8f7fb !important;
        border-color: rgba(0, 0, 0, 0.10) !important;
    }

    body.light-theme #skills > div {
        color: #111827;
    }

    body.light-theme #skills .border-white\\/10 {
        border-color: rgba(0, 0, 0, 0.10) !important;
    }

    body.light-theme #skills .bg-white\\/\\[0\\.02\\] {
        background: rgba(255, 255, 255, 0.85) !important;
    }

    body.light-theme #skills .text-gray-500 {
        color: #6b7280 !important;
    }

    body.light-theme #skills h2,
    body.light-theme #skills h3 {
        color: #111827 !important;
    }
`;

document.head.appendChild(themeStyle);


// ==============================
// APPLY THEME
// ==============================

function applyTheme(theme) {

    if (theme === "light") {

        // BODY
        body.classList.remove("bg-[#08070d]", "text-white");
        body.classList.add("bg-white", "text-gray-900");

        // LIGHT THEME
        body.classList.add("light-theme");

        // ICON
        if (themeBtn) {
            themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        }

    } else {

        // BODY
        body.classList.remove("bg-white", "text-gray-900");
        body.classList.add("bg-[#08070d]", "text-white");

        // DARK THEME
        body.classList.remove("light-theme");

        // ICON
        if (themeBtn) {
            themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        }
    }
}


// ==============================
// LOAD SAVED THEME
// ==============================

let savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    applyTheme("light");
} else {
    applyTheme("dark");
}


// ==============================
// THEME BUTTON
// ==============================

if (themeBtn) {

    themeBtn.addEventListener("click", function () {

        let currentTheme = localStorage.getItem("theme");

        if (currentTheme === "light") {

            // DARK MODE
            localStorage.setItem("theme", "dark");
            applyTheme("dark");

        } else {

            // LIGHT MODE
            localStorage.setItem("theme", "light");
            applyTheme("light");
        }

    });

}