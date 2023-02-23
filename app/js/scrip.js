const btnSubmit = document.querySelector("#btnSubmit");
const errorImage = document.querySelector(".error-image");
const errorMsg = document.querySelector(".error-msg");
let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
btnSubmit.addEventListener("click", () => {
  const emailField = document.querySelector("#emailField");
  if (emailField.value.match(mailformat)) {
    errorImage.style.display = "none";
    errorMsg.style.display = "none";
  } else if (emailField.value === "") {
    errorImage.style.display = "block";
    errorMsg.style.display = "block";
    errorMsg.innerHTML = "Email cannot be empty";
  } else {
    errorImage.style.display = "block";
    errorMsg.style.display = "block";
    errorMsg.innerHTML = "Please provide a valid email";
  }
});
