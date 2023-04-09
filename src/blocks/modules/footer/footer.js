(function () {
    function toggleTheme() {
        const html = document.getElementsByTagName("html");
        if (html[0].getAttribute("data-bs-theme") == "") {
            html[0].setAttribute("data-bs-theme", "dark");
        } else {
            html[0].setAttribute("data-bs-theme", "");
        }
    }

    const toggleButton = document.getElementById("toggle-theme");
    toggleButton.addEventListener("click", toggleTheme);


    // toggleTheme();
})();