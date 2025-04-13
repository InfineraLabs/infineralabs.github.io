// === Progress Counter Setting ===
const targetProgress = 60; // Change this value (0-100) to set the progress percentage

// Initialize AOS
AOS.init({
    duration: 1000,
    once: true
});

// Particles.js Configuration
particlesJS('particles-js', {
    particles: {
        number: { value: 50, density: { enable: true, value_area: 800 } },
        color: { value: '#FFFFFF' },
        shape: { type: 'circle' },
        opacity: { value: 0.3, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: false },
        move: { enable: true, speed: 1, direction: 'none', random: true }
    },
    interactivity: {
        detect_on: 'canvas',
        events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' } },
        modes: { repulse: { distance: 100 }, push: { particles_nb: 4 } }
    },
    retina_detect: true
});

// Progress Counter Animation
const progressBar = document.getElementById('progress-bar');
const progressPercent = document.getElementById('progress-percent');

function setProgress(percent) {
    progressBar.style.width = `${percent}%`;
    progressBar.setAttribute('aria-valuenow', percent);
    progressPercent.textContent = `${percent}%`;
}

// Animate progress from 0 to target
let currentProgress = 0;
const animateProgress = setInterval(() => {
    if (currentProgress >= targetProgress) {
        clearInterval(animateProgress);
    } else {
        currentProgress += 1;
        setProgress(currentProgress);
    }
}, 30);

// Newsletter Form Submission (Mock)
document.getElementById('newsletter-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    const messageEl = document.getElementById('form-message');

    if (email) {
        messageEl.textContent = 'Thank you for subscribing!';
        messageEl.style.color = '#FFFFFF';
        e.target.reset();
    } else {
        messageEl.textContent = 'Please enter a valid email.';
        messageEl.style.color = '#A389FF';
    }
});