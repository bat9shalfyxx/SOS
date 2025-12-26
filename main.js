const navListEl = document.querySelectorAll("nav a, .hader-scroll-down a");
for (const element of navListEl) {
    element.addEventListener("click", (event) => {
        event.preventDefault();
        const targetID = this.getAttribute("href");
        const targetEl = document.querySelector(targetID);
        if (targetEl) {
            targetEl.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    });
}

