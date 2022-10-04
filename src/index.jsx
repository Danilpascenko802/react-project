/*
document.getElementById("submit_bttn").addEventListener("click", function () {
  let registrationPassword = document.getElementById(
    "regisrtation_form_password"
  );
  registrationPassword.value += " after clicking";
  
  let registraitionEmail = document.getElementById("regisrtation_form_email");
  alert(
    "Проверьте ввели вы ли вашу почту правильно :",
    registraitionEmail.value
  );
  console.log(registrationPassword.textContent);
});
console.log("Pizda");

/*----------------------------*/

document.getElementsByClassName("entrance_btn").onclick = function () {
  location.pathname = "./html/contacts.html";
};

document.getElementById("submit_bttn").addEventListener("click", function () {
  let registraitionEmail_value = document.getElementById(
    "regisrtation_form_email"
  ).value;
  let registrationPassword_value = document.getElementById(
    "regisrtation_form_password"
  ).value;
  let questionPass = ["Это правельный пароль? - ", registrationPassword_value];
  let questionEmail = ["Это ваша почта? - ", registraitionEmail_value];
  if ((registraitionEmail_value, registrationPassword_value != "")) {
    alert("Проверте правильно ли вы указали свои данные");
    if (confirm(questionEmail)) {
      if (confirm(questionPass)) {
        alert("Вы прошли регестрацию!");
      } else {
        alert("Введите правельный пароль! блять");
      }
    } else {
      alert("Введите правельный адрес електоронной почты! блять");
    }
  } else {
    alert("Введи свои данные! сука");
  }
  console.log(registraitionEmail_value, registrationPassword_value);
});
let regisrtation_form_password_type = document.getElementById(
  "regisrtation_form_password"
);
regisrtation_form_password_type.type = "password";
document
  .getElementById("showPass_box_checkbox")
  .addEventListener("click", function () {
    let x = document.getElementById("regisrtation_form_password");
    if (x.type != "password") {
      x.type = "password";
    } else {
      x.type = "text";
    }
  });
