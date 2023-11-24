let input_username = document.querySelector("#email");
let input_password = document.querySelector("#password");
let login_btn = document.querySelector("#login_btn");

login_btn.addEventListener("click", function () {
  let list_user_registered = JSON.parse(localStorage.getItem("User"));
  console.log(list_user_registered);

  let check = checkUser(
    input_username.value,
    input_password.value,
    list_user_registered
  );

  alert(check);
});

function checkUser(input_email, input_password, list_user_registered) {
  for (let i = 0; i < list_user_registered.length; i++) {
    if (
      input_email == list_user_registered[i].email &&
      input_password == list_user_registered[i].password
    ) {
      return true;
    }
  }

  return false;
}