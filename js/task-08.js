const form = document.querySelector("form.login-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  } else {
    const formFilled = {
      [email.name]: email.value,
      [password.name]: password.value,
    };
    console.log(formFilled);
    form.reset();
  }
}
