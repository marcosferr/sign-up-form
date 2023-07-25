const campo1 = document.getElementById("password");
const campo2 = document.getElementById("cpassword");
const email = document.getElementById("email");
const nameField = document.getElementById("name");
const lastName = document.getElementById("lastname");
const phone = document.getElementById("phone");

const submitBtn = document.getElementById("submitBtn");
const form = document.getElementById("submit");
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    campo1.checkValidity() &&
    campo2.checkValidity() &&
    nameField.checkValidity() &&
    lastName.checkValidity() &&
    phone.checkValidity() &&
    checkPassword()
  ) {
    alert("Datos ingresados correctamente!");
  } else {
    alert("Rellene los campos correctamente");
  }
});

function checkPassword() {
  if (campo1.value !== campo2.value) {
    return true;
  } else {
    return false;
  }
}

campo2.addEventListener("focusout", () => {
  if (checkPassword()) {
    alert("Contraseñas no coinciden");
  }
});

email.addEventListener("change", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an email address!");
  } else {
    email.setCustomValidity("");
  }
});

phone.addEventListener("change", (event) => {
  if (phone.validity.typeMismatch) {
    phone.setCustomValidity("I am expecting a phone number");
  } else {
    phone.setCustomValidity("");
  }
});
