window.addEventListener('DOMContentLoaded', () => {
    const card = document.getElementById('welcome-card');

    // Pequeno delay de 500ms para a animação começar após o load
    setTimeout(() => {
        card.classList.add('show');
    }, 500);
});