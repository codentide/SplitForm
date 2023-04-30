// obtener elementos del DOM
const formContainer = document.querySelector(".form-container");
const signupContainer = document.querySelector(".signup-container");
const loginContainer = document.querySelector(".login-container");
const toggleLinks = document.querySelectorAll(".toggle");
const submit = document.querySelector(".submit-btn");

// agregar evento de clic a cada enlace "toggle"
toggleLinks.forEach((toggleLink) => {
  toggleLink.addEventListener("click", () => {
    // intercambiar la clase "hidden" entre los dos fieldsets
    formContainer.classList.toggle("sign");
    formContainer.classList.toggle("log");

    if (submit.value === "Signup") {
      submit.value = "Login";
    } else if (submit.value === "Login") {
      submit.value = "Signup";
    }
  });
});
