let input_email = document.querySelector("#input_email");
let input_password = document.querySelector("#input_password");
let input_confirm = document.querySelector("#confirm_password");
let button = document.querySelector("button");

let data = JSON.parse(localStorage.getItem("User"));

if (data == null) {
  localStorage.setItem("User", JSON.stringify([]));
  location.reload();
}

function checkAvailableUser(input_email, arrayUserLocalStorage) {
  for (let i = 0; i < arrayUserLocalStorage.length; i++) {
    if (input_email == arrayUserLocalStorage[i].email) {
      alert("Tên người dùng đã tồn tại @@@");
      return false;
    }
  }

  return true;
}

function checkInputIsEmpty(input_email, input_password, input_confirm) {
  if (input_email == "" || input_password == "" || input_confirm == "") {
    if (input_email == "") {
      alert("Bạn thiếu user, bạn nhập lại vào ô user");
      return false;
    } else if (input_password == "") {
      alert("Bạn thiếu password, bạn nhập lại vào ô password");
      return false;
    } else if (input_confirm == "") {
      alert("Bạn thiếu confirm password, bạn nhập lại vào ô confirm");
      return false;
    }
  }

  return true;
}

button.addEventListener("click", function () {
  let checkEmpty = checkInputIsEmpty(
    input_email.value,
    input_password.value,
    input_confirm.value
  );

  let checkAvailable = checkAvailableUser(input_email.value, data);

  if (checkEmpty == true && checkAvailable == true) {
    if (input_password.value == input_confirm.value) {
      alert("Tạo tài khoản thành công");
      data.push({
        email: input_email.value,
        password: input_password.value,
      });
      
      localStorage.setItem("User", JSON.stringify(data));

      input_password.value = "";
      input_email.value = "";
      input_confirm.value = "";
      document.body.appendChild(newDiv);
    } else {
      alert("Mật khẩu và mật khẩu xác nhận không giống nhau");
    }
  }
});

console.log(data);