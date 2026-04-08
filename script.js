// Simple console log to confirm navigation works
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', (e) => {
        const destination = card.getAttribute('href');
        console.log(`Heading to: ${destination}`);
    });
});