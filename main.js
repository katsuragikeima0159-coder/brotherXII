/* ==========================================================
   CINEMATIC BROTHER XII – MAIN.JS
   Smooth Scroll + Active Nav + AOS Init
========================================================== */

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            const offset = 70; // height offset for sticky nav
            const bodyRect = document.body.getBoundingClientRect().top;
            const targetRect = target.getBoundingClientRect().top;
            const targetPosition = targetRect - bodyRect - offset;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });
        }
    });
});


// Highlight Active Nav Link on Scroll
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let scrollPos = window.scrollY + 200; // tracking offset

    sections.forEach(section => {
        if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
            const id = section.getAttribute("id");

            navLinks.forEach(link => {
                link.classList.remove("active-link");
                if (link.getAttribute("href") === `#${id}`) {
                    link.classList.add("active-link");
                }
            });
        }
    });
});


// AOS Init
document.addEventListener("DOMContentLoaded", () => {
    AOS.init({
        duration: 900,
        once: true,
        easing: "ease-out"
    });
});
