/* ==========================================
    GSAP
========================================== */

gsap.registerPlugin(ScrollTrigger);


/* ==========================================
    LENIS SMOOTH SCROLL
========================================== */

const lenis = new Lenis({

    duration: 1.2,

    smoothWheel: true,

    touchMultiplier: 1.5,

});

function raf(time) {

    lenis.raf(time);

    requestAnimationFrame(raf);

}

requestAnimationFrame(raf);



/* ==========================================
    LOADER
========================================== */

window.addEventListener("load", () => {

    const tl = gsap.timeline();

    tl.to(".loading-progress", {

        width: "100%",

        duration: 1.3,

        ease: "power2.out"

    })

    .to(".loader-text", {

        y: -15,

        opacity: 0,

        duration: .6

    })

    .to(".loading-bar", {

        opacity: 0,

        duration: .3

    })

    .to("#loader", {

        y: "-100%",

        duration: 1,

        ease: "power4.inOut"

    })

    .from(

        ".navbar",

        {

            y: -80,

            opacity: 0,

            duration: 1

        },

        "-=.5"

    )

    .from(

        ".hero-tag",

        {

            opacity: 0,

            y: 30,

            duration: .7

        },

        "-=.7"

    )

    .from(

        ".hero h1",

        {

            opacity: 0,

            y: 50,

            duration: .8

        },

        "-=.5"

    )

    .from(

        ".hero p",

        {

            opacity: 0,

            y: 40,

            duration: .7

        },

        "-=.5"

    )

    .from(

        ".hero-buttons",

        {

            opacity: 0,

            y: 40,

            duration: .7

        },

        "-=.4"

    )

    .from(

        ".hero-image",

        {

            opacity: 0,

            scale: .8,

            duration: 1.2,

            ease: "back.out(1.7)"

        },

        "-=.7"

    );

});



/* ==========================================
    FLOATING HERO IMAGE
========================================== */

gsap.to(".hero-image", {

    y: -20,

    repeat: -1,

    yoyo: true,

    duration: 3,

    ease: "sine.inOut"

});



/* ==========================================
    PARALLAX GRADIENTS
========================================== */

document.addEventListener("mousemove", (e) => {

    const x = e.clientX / window.innerWidth;

    const y = e.clientY / window.innerHeight;

    gsap.to(".gradient-1", {

        x: x * 50,

        y: y * 50,

        duration: 2

    });

    gsap.to(".gradient-2", {

        x: -x * 50,

        y: -y * 50,

        duration: 2

    });

});
/* ==========================================
   CUSTOM CURSOR
========================================== */

const cursor = document.querySelector(".cursor");
const cursorOutline = document.querySelector(".cursor-outline");

let mouseX = 0;
let mouseY = 0;

let outlineX = 0;
let outlineY = 0;

document.addEventListener("mousemove", (e) => {

    mouseX = e.clientX;
    mouseY = e.clientY;

    cursor.style.left = mouseX + "px";
    cursor.style.top = mouseY + "px";

});

function animateCursor() {

    outlineX += (mouseX - outlineX) * 0.18;
    outlineY += (mouseY - outlineY) * 0.18;

    cursorOutline.style.left = outlineX + "px";
    cursorOutline.style.top = outlineY + "px";

    requestAnimationFrame(animateCursor);

}

animateCursor();



/* ==========================================
   CURSOR HOVER EFFECT
========================================== */

const hoverElements = document.querySelectorAll(

    "a, button, .btn, .project-card, .skill-card, .service-card"

);

hoverElements.forEach((element) => {

    element.addEventListener("mouseenter", () => {

        gsap.to(cursorOutline, {

            width: 70,

            height: 70,

            borderColor: "#7c5cff",

            duration: 0.25,

            ease: "power2.out"

        });

        gsap.to(cursor, {

            scale: 0.6,

            duration: 0.2

        });

    });

    element.addEventListener("mouseleave", () => {

        gsap.to(cursorOutline, {

            width: 38,

            height: 38,

            borderColor: "rgba(255,255,255,.4)",

            duration: 0.25,

            ease: "power2.out"

        });

        gsap.to(cursor, {

            scale: 1,

            duration: 0.2

        });

    });

});



/* ==========================================
   CURSOR CLICK EFFECT
========================================== */

document.addEventListener("mousedown", () => {

    gsap.to(cursorOutline, {

        scale: 0.8,

        duration: 0.12

    });

});

document.addEventListener("mouseup", () => {

    gsap.to(cursorOutline, {

        scale: 1,

        duration: 0.12

    });

});
/* ==========================================
   NAVBAR SCROLL EFFECT
========================================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.padding = "12px 8%";

        document.querySelector(".navbar").style.background =
            "rgba(10,10,10,.82)";

        document.querySelector(".navbar").style.backdropFilter =
            "blur(25px)";

        document.querySelector(".navbar").style.boxShadow =
            "0 12px 35px rgba(0,0,0,.35)";

    }

    else {

        header.style.padding = "18px 8%";

        document.querySelector(".navbar").style.background =
            "rgba(255,255,255,.04)";

        document.querySelector(".navbar").style.boxShadow =
            "none";

    }

});



/* ==========================================
   ACTIVE NAV LINKS
========================================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});



/* ==========================================
   MOBILE MENU
========================================== */

const menuBtn = document.querySelector(".menu-btn");

const navMenu = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("show-menu");

    const icon = menuBtn.querySelector("i");

    if (navMenu.classList.contains("show-menu")) {

        icon.classList.remove("ri-menu-3-line");

        icon.classList.add("ri-close-line");

    }

    else {

        icon.classList.remove("ri-close-line");

        icon.classList.add("ri-menu-3-line");

    }

});



/* ==========================================
   CLOSE MENU WHEN LINK IS CLICKED
========================================== */

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show-menu");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("ri-close-line");

        icon.classList.add("ri-menu-3-line");

    });

});
