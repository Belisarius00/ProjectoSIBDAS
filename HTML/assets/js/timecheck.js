document.querySelector('form').addEventListener('submit', function(event) {
    const durationInputs = document.querySelectorAll('.duration-input');
    let isValid = true;

    durationInputs.forEach(input => {
        if (!/^([0-5]\d):([0-5]\d)$/.test(input.value)) {
            isValid = false;
            input.classList.add('is-invalid');
        } else {
            input.classList.remove('is-invalid');
            input.classList.add('is-valid');
        }
    });

    if (!isValid) {
        event.preventDefault();
        alert('Please ensure all duration inputs are in the format mm:ss');
    }
});