const elementosAnimar = document.querySelectorAll('[data-animar]');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('ativo');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2
});

elementosAnimar.forEach(el => observer.observe(el));
