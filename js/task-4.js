const form = document.querySelector("form.login-form");
form.addEventListener("submit", e => {
    e.preventDefault();
    const form = e.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    const formValue = {
        email: email.trim(),
        password: password.trim(),
    };

    if (email === "" || password === "") {
        alert('All form fields must be filled in');
    } else if (email !== "" && password !== "") {
        console.log(formValue);
        form.reset();
    }
});