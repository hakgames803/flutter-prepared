/* ================= لیستی مۆبایل ================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("open");

    const icon = menuToggle.querySelector("i");

    if (navMenu.classList.contains("open")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


/* ================= داخستنی لیست ================= */

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* ================= Dark / Light Mode ================= */

const themeToggle =
    document.getElementById("themeToggle");

const savedTheme =
    localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light-theme");

    themeToggle.innerHTML =
        '<i class="fa-solid fa-sun"></i>';

}


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-theme");

    const isLight =
        document.body.classList.contains("light-theme");

    if (isLight) {

        localStorage.setItem("theme", "light");

        themeToggle.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    } else {

        localStorage.setItem("theme", "dark");

        themeToggle.innerHTML =
            '<i class="fa-solid fa-moon"></i>';

    }

});


/* ================= Active Navigation ================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-link");

function updateActiveLink() {

    const scrollPosition =
        window.scrollY + 180;

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop;

        const sectionHeight =
            section.offsetHeight;

        const sectionId =
            section.getAttribute("id");

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {

            navLinks.forEach(link => {

                link.classList.remove("active");

                if (
                    link.getAttribute("href") ===
                    '#' + sectionId
                ) {

                    link.classList.add("active");

                }

            });

        }

    });

}

window.addEventListener(
    "scroll",
    updateActiveLink
);


/* ================= گەڕانەوە بۆ سەرەتا ================= */

const backToTop =
    document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* ================= ساڵی ئێستا ================= */

document.getElementById("currentYear").textContent =
    new Date().getFullYear();


/* ================= Animation ================= */

const revealElements =
    document.querySelectorAll(
        ".section-heading, .about-text, .stat-card, .skill-card, .project-card, .contact-box"
    );


const revealStyle =
    document.createElement("style");

revealStyle.textContent = `
    .reveal {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity .7s ease, transform .7s ease;
    }

    .reveal.revealed {
        opacity: 1;
        transform: translateY(0);
    }
`;

document.head.appendChild(revealStyle);


const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "revealed"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* ================= دوگمەکانی بەتاڵ ================= */

document.querySelectorAll('a[href="#"]').forEach(link => {

    link.addEventListener("click", event => {

        event.preventDefault();

    });

});
