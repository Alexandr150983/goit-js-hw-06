const elInput = document.getElementById('name-input');
const elOutput = document.getElementById('name-output');

elInput.addEventListener('input', () => {
    elOutput.textContent = elInput.value.trim() || "Anonymous";
});


