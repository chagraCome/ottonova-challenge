const greetingDiv = document.getElementById("greeting");
const showFormBtn = document.getElementById("showFormBtn");
const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const messageDiv = document.getElementById("message");

// Function to show the form and hide the greeting div
const showForm = () => {
  const fadeOutAndUp = `@keyframes fadeOutAndUp {
      0% { opacity: 1; transform: translateY(0); }
      100% { opacity: 0; transform: translateY(-20px); }
    }`;

  const fadeInAndDown = `@keyframes fadeInAndDown {
      0% { opacity: 0; transform: translateY(-20px); }
      100% { opacity: 1; transform: translateY(0); }
    }`;

  const style = document.createElement("style");
  style.innerHTML = `${fadeOutAndUp} ${fadeInAndDown}`;
  document.head.appendChild(style);

  greetingDiv.style.animation = "fadeOutAndUp 0.4s ease-in-out forwards";
  form.style.display = "block";
  form.style.animation = "fadeInAndDown 0.4s ease-in-out forwards";
};

// Attach showForm function to the "Get a free consultation" button's click event
showFormBtn.addEventListener("click",function() {
    greetingDiv.style.display = "none";
    showForm()
}) ;

const ValideEmail = () => {
  const re =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const emailVal = email.value.trim();
  if (emailVal === "") {
    sendError(email, "email is required");
  } else if (!re.test(emailVal)) {
    sendError(email, "Provide a correct form of E-mail");
  } else {
    sendSuccess(email);
    return true;
  }
};
//validate First Name
const ValideFirstName = () => {
  const firstNameVal = firstname.value.trim();
  const re = /^[A-Za-z]+$/;

  if (firstNameVal === "") {
    sendError(firstname, "first name is required");
  } else if (!re.test(firstNameVal)) {
    sendError(firstname, "Provide a valid name");
  } else {
    sendSuccess(firstname);
    return true;
  }
};
//validate Last Name
const ValideLastName = () => {
  const lastNameVal = lastname.value.trim();
  const re = /^[A-Za-z]+$/;

  if (lastNameVal === "") {
    sendError(lastname, "last name is required");
  } else if (!re.test(lastNameVal)) {
    sendError(lastname, "Provide a valid name");
  } else {
    sendSuccess(lastname);
    return true;
    console.log("lname done");
  }
};
//validate phone number

const Validtelefone = () => {
  const telefoneVal = telefone.value;
  const re =
    /^(?:\+49|0)(?:(?:(30|69|89|162|172|174|176|177|178|179|151|152|155|156|157|158|159|160|162|163|171|173|162|170|171|173|174|175|176|177|178|179|180|181|182|183|184|185|186|187|188|189)\d{6,8})|(69|69|89|162|172|174|176|177|178|179|151|152|155|156|157|158|159|160|162|163|171|173|162|170|171|173|174|175|176|177|178|179|180|181|182|183|184|185|186|187|188|189)\d{6,8})$/;

  if (telefoneVal.value === "") {
    sendError(telefone, "phone number is required");
  } else if (!re.test(telefoneVal)) {
    sendError(telefone, "Provide a valid phone number");
  } else {
    sendSuccess(telefone);
    return true;
  }
};

const sendError = (element, msg) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = msg;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const sendSuccess = (element, msg) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const validateInputs = () => {
  ValideFirstName();
  ValideLastName();
  ValideEmail();
  Validtelefone();

  if (
    ValideFirstName() == true &&
    ValideLastName() == true &&
    ValideEmail() == true &&
    Validtelefone() == true
  ) {
    return true;
  } else {
    return false;
  }
};

//add event listner on the button submit to control the inputs

form.addEventListener("submit", (e) => {
  // we prevent the form from submitting until we validate the data if it is in the right form
  e.preventDefault();

  validateInputs();
  // If all inputs are valid, show the message and hide the form
  if (validateInputs()) {
    form.style.animation = "fadeOutAndUp 0.4s ease-in-out forwards";
    setTimeout(() => {
      form.style.display = "none";
      messageDiv.style.display = "block";
      messageDiv.style.animation = "fadeInAndDown 0.4s ease-in-out forwards";
    }, 400);
  }
});
// CSS keyframes for the animation
const style = document.createElement("style");
style.innerHTML = `
@keyframes fadeInAndDown {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeOutAndUp {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-20px);
  }
}
`;
document.head.appendChild(style);
