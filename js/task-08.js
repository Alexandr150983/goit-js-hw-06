const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', el => {
    el.preventDefault();

    const emailInput = loginForm.elements.email;
    const passwodrInput = loginForm.elements.password;
    const formData = {
        email: emailInput.value,
        password: passwodrInput.value,
    }

    if (emailInput.value === '' || passwodrInput.value === '') {
        alert("Усі поля повинні бути заповнені!");
    } else {
        formData;

        console.log(formData);

        loginForm.reset();
    
    };

});
