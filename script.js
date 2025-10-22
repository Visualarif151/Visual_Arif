document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add animation classes when elements are in viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section, .project-card').forEach(section => {
        observer.observe(section);
    });

    // Form submission handling
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Terima kasih! Pesan Anda telah terkirim. Saya akan menghubungi Anda segera.');
            this.reset();
        });
    }
});

// Replace photo functionality
function updateProfilePhoto(newPhotoUrl) {
    const profilePhoto = document.querySelector('.profile-photo');
    if (profilePhoto && newPhotoUrl) {
        profilePhoto.src = newPhotoUrl;
    }
}
