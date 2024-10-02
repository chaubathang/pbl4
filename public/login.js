

// @ts-ignore
document.getElementById("redirect-to-register").addEventListener("click", function () {
  window.location.assign('register.html');

});

document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('login-form');

  if (loginForm instanceof HTMLFormElement) {  
      loginForm.addEventListener('submit', function(event) {
          event.preventDefault();

          // Lấy giá trị từ các trường
          const email = loginForm.elements['email'].value.trim();
          const password = loginForm.elements['password'].value.trim();

          // Xác thực dữ liệu
          let isValid = true;

          const clearErrorTexts = () => {
              setErrorText('email-error', "");
              setErrorText('password-error', "");
          };

          const setErrorText = (elementId, message) => {
              const element = document.getElementById(elementId);
              if (element) {
                  element.innerText = message;
              }
          };

          clearErrorTexts(); // Xóa thông báo lỗi cũ

          // Kiểm tra các trường dữ liệu
          if (!email) {
              setErrorText('email-error', "Email is required.");
              isValid = false;
          }
          if (!password) {
              setErrorText('password-error', "Password is required.");
              isValid = false;
          }

          // Nếu tất cả dữ liệu hợp lệ, gửi tới server
          if (isValid) {
              const userData = { email, password };

              fetch('/api/users/login', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(userData),
              })
              .then(response => {
                  if (!response.ok) {
                      return response.json().then(errData => {
                          throw new Error(errData.message || 'Network response was not ok');
                      });
                  }
                  return response.json();
              })
              .then(data => {
                  // Hiển thị thông báo thành công và cập nhật giao diện người dùng
                  displayMessage(data.userInfo.name);
                  
                  replaceUserBar();
                  setTimeout(() => {
                      window.location.replace('index.html');
                  }, 2000);
              })
              .catch((error) => {
                  displayMessage(`Error: ${error.message}`); // Hiển thị lỗi
              });
          }
      });
  } else {
      console.error('Phần tử login-form không tồn tại!');
  }
});


// Hàm để hiển thị thông báo

// Hàm cập nhật thông tin người dùng
function updateUserInfo(data) {
  const userBar = document.getElementById('user-bar');
  const userName = document.getElementById('user-name');
  const userEmail = document.getElementById('user-email');
  const userInfo = document.getElementById('user-info');
  const avatar = document.getElementById('avatar');
  const loginLink = document.querySelector('.bar__user-login'); // Lấy phần tử đăng nhập
  const registerLink = document.querySelector('.bar__user-regis'); // Lấy phần tử đăng ký

  if (userBar && userName && userEmail && userInfo && avatar) {
      // Ẩn phần đăng nhập và đăng ký
      // @ts-ignore
      if (loginLink) loginLink.style.display = 'none';
      // @ts-ignore
      if (registerLink) registerLink.style.display = 'none';

      // Hiển thị thông tin người dùng
      userName.innerText = `Name: ${data.userInfo.name}`; // Thay đổi tên
      userEmail.innerText = `Email: ${data.userInfo.email}`; // Thay đổi email
      // @ts-ignore
      avatar.src = data.userInfo.avatar || avatar.src; // Cập nhật ảnh đại diện nếu có

      // Hiển thị thông tin người dùng
      // Hiển thị thông tin người dùng
      avatar.style.display = 'block'; // Hiển thị avatar
  } else {
      console.log("Một hoặc nhiều phần tử không tồn tại trong DOM.");
  }
}
function replaceUserBar() {
  const userBar = document.getElementById('user-bar');

  if (userBar) {
      // Xóa user-bar hoàn toàn
      userBar.remove(); // Loại bỏ user-bar khỏi DOM

      // Tạo div mới để thay thế
      const newDiv = document.createElement('div');
      
      newDiv.innerHTML = `
          
          <img id="new-avatar" src="styles/images/new_avatar.jpg" alt="User Avatar" style="width: 10px; height: 10px; border-radius: 50%;" />
         
      `;

      // Thêm div mới vào body hoặc một phần tử khác trong DOM
      document.body.appendChild(newDiv); // Thay thế `document.body` bằng phần tử bạn muốn thêm vào
  } else {
      console.error("Phần tử user-bar không tồn tại!");
  }
}

    // @ts-ignore
    document.getElementById('logout-button').addEventListener('click', function() {
        // Xử lý đăng xuất
        console.log('Logging out...');
        // Có thể gọi API để đăng xuất nếu cần
    });
    function displayMessage(message) {
      const messageElement = document.getElementById('message');
      if (messageElement) {
          messageElement.innerText = message;
          messageElement.style.display = 'block';
      }
    }