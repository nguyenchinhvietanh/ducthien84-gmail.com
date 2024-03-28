const submit = document.querySelector(".submit");
const loginForm = document.querySelector("#login-form");
const regisForm = document.querySelector("#regis-form");
const password = document.querySelector(".password");
const confirmPassword = document.querySelector(".confirm-password");
const confirmMsg = document.querySelector(".confirm-msg");
const valid = confirmPassword.nextElementSibling;
const invalid = valid.nextElementSibling;
const regisLink = document.querySelector(".regis-link");
const loginLink = document.querySelector(".login-link");
const confirmForm = () => {
  confirmPassword.addEventListener("input", () => {
    if (password.value === confirmPassword.value) {
      confirmMsg.innerHTML = "Password is matches";
      confirmMsg.classList.remove("text-danger");
      confirmMsg.classList.add("text-success");
    } else {
      confirmMsg.innerHTML = "Password is not same";
      confirmMsg.classList.add("text-danger");
      confirmMsg.classList.remove("text-success");
      valid.classList.add("d-none");
      invalid.classList.add("d-none");
    }
  });
};
confirmForm();
regisLink.addEventListener("click", () => {
  loginForm.classList.add("d-none");
  regisForm.classList.remove("d-none");
});
loginLink.addEventListener("click", () => {
  loginForm.classList.remove("d-none");
  regisForm.classList.add("d-none");
});

