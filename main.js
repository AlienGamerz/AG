let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    let audios = document.getElementsByClassName("audio");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        audios[i].pause();
        audios[i].currentTime = 0; // Reset audio
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex - 1].style.display = "block";
    audios[slideIndex - 1].play();
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

const textPhrases = ["Tech Reveal's Here", "Tech Engine", "Innovations", "Future"];
let currentPhraseIndex = 0;
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000;
const dynamicText = document.getElementById("dynamicText");

function type() {
    const currentPhrase = textPhrases[currentPhraseIndex];
    dynamicText.textContent = currentPhrase.slice(0, dynamicText.textContent.length + 1);

    if (dynamicText.textContent.length === currentPhrase.length) {
        setTimeout(erase, newTextDelay);
    } else {
        setTimeout(type, typingDelay);
    }
}

function erase() {
    dynamicText.textContent = dynamicText.textContent.slice(0, -1);

    if (dynamicText.textContent.length === 0) {
        currentPhraseIndex = (currentPhraseIndex + 1) % textPhrases.length;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, erasingDelay);
    }
}

// Start the typing effect after a delay
setTimeout(type, 2000);
