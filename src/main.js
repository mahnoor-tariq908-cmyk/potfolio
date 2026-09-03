let button = document.getElementById("themeBtn");

button.addEventListener("click", function () {

    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {

        button.innerHTML = '<i class="fa-solid fa-moon"></i>';

    } else {

        button.innerHTML = '<i class="fa-solid fa-sun"></i>';

    }

});