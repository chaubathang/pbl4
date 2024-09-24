const registerForm = document.getElementById("register-form");


registerForm.addEventListener("submit", function (event) {
  event.preventDefault(); // giải quyết vđề tự động reload web

  const data = {
    firstName: registerForm.firstName.value,
    lastName: registerForm.lastName.value,
    email: registerForm.email.value,
    password: registerForm.password.value,
    confirmPassword: registerForm.confirmPassword.value
  }

  console.log(data);

  controller.register(data);
  // Kiểm tra lỗi người dùng type tại trang đăng ký
})

document.getElementById("redirect-to-login").
  addEventListener("click", function () {
    window.location.href = '../html/login.html'
  })