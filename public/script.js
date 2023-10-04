const formSubmit = document.getElementById("trial-button");
const form = document.getElementById("input-form");

const firstNameError = document.getElementById("error-first-name");
const lastNameError = document.getElementById("error-last-name");
const emailError = document.getElementById("error-email");
const passwordError = document.getElementById("error-password");

const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name__input");
const email = document.getElementById("email__input");
const password = document.getElementById("password__input");

const validEmailValue =
  /^[a-zA-Z0-9.!#$%&'*+\/=z^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

function validateForm() {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (firstNameValue.length === 0 || firstNameValue === null) {
    firstName.classList.add("error");
    firstNameError.innerText = "First name cannot be empty";
    return false;
  } else {
    firstName.classList.remove("error");
    firstNameError.innerText = "";
  }

  if (lastNameValue.length === 0 || lastNameValue === null) {
    lastName.classList.add("error");
    lastNameError.innerText = "Last Name cannot be empty";
    return false;
  } else {
    lastName.classList.remove("error");
    lastNameError.innerText = "";
  }

  if (!validEmailValue.test(emailValue)) {
    email.classList.add("error");
    emailError.innerText = "Looks like this is not an email";
    return false;
  } else {
    email.classList.remove("error");
    emailError.innerText = "";
  }

  if (passwordValue.length === 0 || passwordValue === null) {
    password.classList.add("error");
    passwordError.innerText = "Password cannot be empty";
    return false;
  } else {
    password.classList.remove("error");
    passwordError.innerText = "";
  }
  return true;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!validateForm()) {
    return false;
  }
  document.getElementById("intro").style.display = "none";
  document.getElementById("interactive").style.display = "none";
  document.getElementById("succes").style.display = "flex";
  return true;
});
