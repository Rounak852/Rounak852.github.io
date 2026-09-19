/* =================================
   ROUNAK PORTFOLIO
   INTERACTIVE EFFECTS
================================= */


/* ================================
   MOUSE GLOW
================================ */

const glow = document.createElement("div");

glow.style.position = "fixed";
glow.style.width = "250px";
glow.style.height = "250px";
glow.style.borderRadius = "50%";
glow.style.pointerEvents = "none";
glow.style.zIndex = "-1";
glow.style.background =
    "radial-gradient(circle, rgba(0,217,255,0.12), transparent 70%)";
glow.style.transform = "translate(-50%, -50%)";

document.body.appendChild(glow);


document.addEventListener("mousemove", (event) => {

    glow.style.left = event.clientX + "px";
    glow.style.top = event.clientY + "px";

});


/* ================================
   PARTICLE BACKGROUND
================================ */

const particleContainer =
    document.querySelector(".particles");

const particleCount = 70;


for (let i = 0; i < particleCount; i++) {

    const particle =
        document.createElement("span");

    particle.style.position = "fixed";

    particle.style.width =
        Math.random() * 3 + 1 + "px";

    particle.style.height =
        particle.style.width;

    particle.style.borderRadius = "50%";

    particle.style.background = "#00d9ff";

    particle.style.opacity =
        Math.random() * 0.6 + 0.2;

    particle.style.left =
        Math.random() * 100 + "vw";

    particle.style.top =
        Math.random() * 100 + "vh";

    particle.style.boxShadow =
        "0 0 8px #00d9ff";

    particle.style.pointerEvents = "none";

    particleContainer.appendChild(particle);


    animateParticle(particle);

}


/* ================================
   PARTICLE ANIMATION
================================ */

function animateParticle(particle) {

    const duration =
        Math.random() * 10 + 8;

    const distance =
        Math.random() * 150 + 50;

    particle.animate(

        [
            {
                transform: "translateY(0px)",
                opacity: 0.2
            },

            {
                transform:
                    `translateY(-${distance}px)`,
                opacity: 0.8
            },

            {
                transform: "translateY(0px)",
                opacity: 0.2
            }
        ],

        {
            duration: duration * 1000,

            iterations: Infinity,

            easing: "ease-in-out"
        }

    );

}


/* ================================
   TYPING EFFECT
================================ */

const statusText =
    document.querySelector(".system-status");

const originalText =
    statusText.innerText;

statusText.innerText = "";


let index = 0;


function typeStatus() {

    if (index < originalText.length) {

        statusText.innerText +=
            originalText.charAt(index);

        index++;

        setTimeout(typeStatus, 70);

    }

}


setTimeout(typeStatus, 700);


/* ================================
   BUTTON RIPPLE
================================ */

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", function(event) {

        const ripple =
            document.createElement("span");

        ripple.style.position = "absolute";

        ripple.style.width = "10px";
        ripple.style.height = "10px";

        ripple.style.borderRadius = "50%";

        ripple.style.background =
            "rgba(255,255,255,0.5)";

        ripple.style.left =
            event.offsetX + "px";

        ripple.style.top =
            event.offsetY + "px";

        ripple.style.transform =
            "translate(-50%, -50%)";

        ripple.style.pointerEvents =
            "none";

        this.style.position = "relative";
        this.style.overflow = "hidden";

        this.appendChild(ripple);


        ripple.animate(

            [
                {
                    width: "10px",
                    height: "10px",
                    opacity: 1
                },

                {
                    width: "300px",
                    height: "300px",
                    opacity: 0
                }
            ],

            {
                duration: 600
            }

        );


        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});


/* ================================
   CONSOLE MESSAGE
================================ */

console.log(
    "%c ROUNAK BHARDWAJ ",
    "color:#00d9ff;font-size:20px;font-weight:bold;"
);

console.log(
    "%c AI SYSTEM ONLINE 🚀",
    "color:#00ff9d;font-size:14px;"
);
/* ================================
   PROJECT MODAL SYSTEM
================================ */

const projectModal =
    document.getElementById("projectModal");

const modalClose =
    document.getElementById("modalClose");

const modalTitle =
    document.getElementById("modalTitle");

const modalSubtitle =
    document.getElementById("modalSubtitle");

const modalDescription =
    document.getElementById("modalDescription");

const modalTech =
    document.getElementById("modalTech");

const modalGithub =
    document.getElementById("modalGithub");


const projectData = {

    agrisentinel: {

        title: "AgriSentinel",

        subtitle: "AI Smart Farming Rover",

        description:
            "An intelligent agricultural rover designed " +
            "to detect crop disease, pests and water stress " +
            "using Edge AI, computer vision and agricultural " +
            "sensors. The system combines sensor information " +
            "with AI analysis to generate a Field Health Score " +
            "and GPS-tagged crop health zones.",

        technologies: [
            "Python",
            "AI / ML",
            "Computer Vision",
            "Raspberry Pi",
            "ESP32",
            "IoT",
            "GPS"
        ],

        github: "#"

    },


    trustlens: {

        title: "TrustLens",

        subtitle:
            "Trust Scoring for the Credit-Invisible",

        description:
            "An AI-powered alternative trust scoring system " +
            "designed for users with limited traditional credit " +
            "history. TrustLens combines behavioural signals, " +
            "alternative data and anti-gaming mechanisms to " +
            "produce a more reliable trust profile.",

        technologies: [
            "Python",
            "AI",
            "FastAPI",
            "Behavioural Analysis",
            "FinTech"
        ],

        github:
            "https://github.com/Rounak852/trustlens"

    },


    echoforge: {

        title: "EchoForge-Coach",

        subtitle:
            "Real-Time AI Voice Coach",

        description:
            "A conversational AI voice coach designed for " +
            "real-time interaction. The project combines " +
            "voice AI, LLM processing and vector memory to " +
            "create a more natural conversational experience.",

        technologies: [
            "Python",
            "LLM",
            "Rime",
            "Qdrant",
            "Groq",
            "Gradio"
        ],

        github:
            "https://github.com/Rounak852/EchoForge-Coach"

    },


    markl: {

        title: "Mark-L",

        subtitle:
            "AI-Powered Intelligent System",

        description:
            "An AI-focused project exploring intelligent " +
            "automation and practical AI capabilities through " +
            "a local Python-based development environment.",

        technologies: [
            "Python",
            "AI / ML",
            "Automation"
        ],

        github: "#"

    }

};



/* ================================
   OPEN PROJECT
================================ */

document
    .querySelectorAll(".project-open")
    .forEach(button => {

        button.addEventListener("click", function(event) {

            event.preventDefault();

            const projectName =
                this.dataset.project;

            const project =
                projectData[projectName];

            if (!project) return;


            modalTitle.textContent =
                project.title;

            modalSubtitle.textContent =
                project.subtitle;

            modalDescription.textContent =
                project.description;


            modalTech.innerHTML = "";

            project.technologies.forEach(tech => {

                const tag =
                    document.createElement("span");

                tag.textContent = tech;

                modalTech.appendChild(tag);

            });


            modalGithub.href =
                project.github;


            if (project.github === "#") {

                modalGithub.style.display =
                    "none";

            } else {

                modalGithub.style.display =
                    "inline-block";

            }


            projectModal.classList.add("active");

            document.body.style.overflow =
                "hidden";

        });

    });


/* ================================
   CLOSE PROJECT
================================ */

function closeProjectModal() {

    projectModal.classList.remove("active");

    document.body.style.overflow =
        "";

}


modalClose.addEventListener(
    "click",
    closeProjectModal
);


/* Click outside modal */

projectModal.addEventListener(
    "click",
    function(event) {

        if (event.target === projectModal) {

            closeProjectModal();

        }

    }
);


/* ESC key */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape" &&
            projectModal.classList.contains("active")
        ) {

            closeProjectModal();

        }

    }
);
/* ================= DESIGN FILTER ================= */

const designButtons = document.querySelectorAll(".design-filter-btn");
const designCards = document.querySelectorAll(".design-card");

designButtons.forEach(button => {

    button.addEventListener("click", () => {

        designButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const filter = button.dataset.filter;

        designCards.forEach(card => {

            if (filter === "all" || card.dataset.category === filter) {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }

        });

    });

});
/* ================= CONTACT FORM ================= */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function() {

        const button = contactForm.querySelector(".contact-submit");

        button.textContent = "SENDING...";

        button.disabled = true;

    });

}
/* ================================
   ACTIVE NAVIGATION
================================ */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 180;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
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
/* ================================
   SCROLL REVEAL
================================ */

const revealElements = document.querySelectorAll(
    ".section-title, .about-card, .skill-card, .project-card, .achievement-card, .certificate-card, .design-card, .contact-card"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});

const revealObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.12
    }
);

revealElements.forEach(element => {
    revealObserver.observe(element);
});