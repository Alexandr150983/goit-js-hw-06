const validationInput = document.getElementById("validation-input");

validationInput.addEventListener('blur', () => {
    const inputLength = validationInput.value.trim().length;
    const dataLength = validationInput.getAttribute('data-length');

    validationInput.classList.remove('valid', 'invalid');

    inputLength === Number(dataLength) ? validationInput.classList.add('valid') : validationInput.classList.add('invalid');

});


