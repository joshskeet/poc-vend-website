
document.getElementById('suggestionForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const successMessage = document.getElementById('successMessage');
    successMessage.classList.remove('hidden');
    successMessage.classList.add('show');

    this.reset();

    setTimeout(() => {
        successMessage.classList.remove('show');
        setTimeout(() => {
            successMessage.classList.add('hidden');
        }, 500);
    }, 5000);
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const successMessage = document.getElementById('contactSuccessMessage');
    successMessage.classList.remove('hidden');
    successMessage.classList.add('show');

    this.reset();

    setTimeout(() => {
        successMessage.classList.remove('show');
        setTimeout(() => {
            successMessage.classList.add('hidden');
        }, 500);
    }, 5000);
});
