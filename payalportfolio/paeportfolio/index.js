// Typing Animation
const texts = ["Front-End Developer", "UI/UX Designer", "Freelancer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === texts.length) count = 0;
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typing-text").textContent = letter;

    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 1200);
    } else {
        setTimeout(type, 100);
    }
})();



// Animate skill cards on scroll
const skillCards = document.querySelectorAll('.skill-card');

function revealSkills() {
    skillCards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            card.style.animationDelay = `${index * 0.15}s`;
            card.classList.add('fade-in-up');
        }
    });
}

window.addEventListener('scroll', revealSkills);
revealSkills();



// Animate project cards on scroll
const projectCards = document.querySelectorAll('.project-card');

function revealProjects() {
    projectCards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            card.style.animationDelay = `${index * 0.2}s`;
            card.classList.add('fade-in-up');
        }
    });
}

window.addEventListener('scroll', revealProjects);
revealProjects();
