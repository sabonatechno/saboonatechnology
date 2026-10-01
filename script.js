const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".nav-menu a");


// ================= MOBILE MENU =================

menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");

    // Change hamburger icon
    if (navbar.classList.contains("active")) {
        menuToggle.innerHTML = "✕";
    } else {
        menuToggle.innerHTML = "☰";
    }
});


// ================= CLOSE MENU AFTER CLICK =================

navLinks.forEach((link) => {
    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        menuToggle.innerHTML = "☰";

    });
});


// ================= CLOSE MENU WHEN CLICKING OUTSIDE =================

document.addEventListener("click", (event) => {

    const clickedInsideMenu =
        navbar.contains(event.target);

    const clickedMenuButton =
        menuToggle.contains(event.target);

    if (
        !clickedInsideMenu &&
        !clickedMenuButton &&
        navbar.classList.contains("active")
    ) {
        navbar.classList.remove("active");

        menuToggle.innerHTML = "☰";
    }

});
