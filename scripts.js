// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const testimonialCarousel = document.querySelector('.testimonial-carousel');
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    let currentIndex = 0;

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burger.classList.toggle('toggle');
    });

    // Initialize ScrollReveal
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '50px',
        duration: 1000,
        delay: 200,
        reset: true
    });

    // Reveal sections
    sr.reveal('.hero-content', { delay: 300 });
    sr.reveal('.about-content', { delay: 400 });
    sr.reveal('.project-card', { delay: 500, interval: 100 });
    sr.reveal('.skill-card', { delay: 600, interval: 100 });
    sr.reveal('.goal-item', { delay: 700, interval: 100 });
    sr.reveal('.testimonial-card', { delay: 800, interval: 100 });
    sr.reveal('.blog-card', { delay: 900, interval: 100 });
    sr.reveal('.contact-form', { delay: 1000 });

    // Loader
    const loader = document.getElementById('loader');
    loader.style.display = 'none';

    // Skill bars animation
    const skillCards = document.querySelectorAll('.skill-card');
    const skillObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBars = entry.target.querySelectorAll('.progress');
                progressBars.forEach(bar => {
                    const skillLevel = bar.getAttribute('data-skill-level');
                    bar.style.width = skillLevel + '%';
                });
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.5
    });

    skillCards.forEach(card => {
        skillObserver.observe(card);
    });

    // Testimonial carousel
    function showTestimonial(index) {
        testimonialCards.forEach((card, i) => {
            card.style.display = i === index ? 'flex' : 'none';
        });
    }

    function nextTestimonial() {
        currentIndex = (currentIndex + 1) % testimonialCards.length;
        showTestimonial(currentIndex);
    }

    function prevTestimonial() {
        currentIndex = (currentIndex - 1 + testimonialCards.length) % testimonialCards.length;
        showTestimonial(currentIndex);
    }

    showTestimonial(currentIndex);
});

function toggleDetails(card) {
    card.classList.toggle('expanded');
}

function handleSubmit(event) {
    event.preventDefault();
    document.getElementById('success-message').style.display = 'block';
    // Add code to handle form submission
}
