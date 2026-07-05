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
