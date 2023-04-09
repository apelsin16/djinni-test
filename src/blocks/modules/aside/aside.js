(function () {
    const asideButtons = document.querySelectorAll(".aside .button");
    function setActiveClass() {
        if(this.classList.contains("active")) {
            return;
        } else {
            asideButtons.forEach(el => {
                el.classList.remove("active");
            });
            this.classList.add("active");
        }
    }

    document.addEventListener("DOMContentLoaded", () => {

        asideButtons.forEach(el => {
            el.addEventListener("click", setActiveClass);
        });
    });
})();