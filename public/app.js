
/*const init = () => {
  console.log("Window loaded");
  // Import the functions you need from the SDKs you need

  // import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  let firebaseConfig = {
    apiKey: "AIzaSyAX5z0vvKHMxG9Jo4kvaPKEzKBJW2het1I",
    authDomain: "fir-test-fd2ba.firebaseapp.com",
    projectId: "fir-test-fd2ba",
    storageBucket: "fir-test-fd2ba.appspot.com",
    messagingSenderId: "591099878183",
    appId: "1:591099878183:web:54973e199ef25dcd2b6702"
  };

  // Initialize Firebase
  // @ts-ignore
  firebase.initializeApp(firebaseConfig)
  // const app = initializeApp(firebaseConfig);
  // @ts-ignore
  console.log(firebase.app().name); //DEFAULT
  // console.log(firebase.app().name);


  // Chạy hàm này
  firestoreFunction();

}



window.onload = init;



///// Viết hàm riêng thao tác thử với firebase Database
const firestoreFunction = async () => {

  // get one document
  const documentId = "ycpwtMNJmhMtPo6l0h5W";
  // @ts-ignore
  const response = await firebase.firestore().collection('users').doc(documentId).get();
  console.log("response: ", response);

  const user = getDataFromDoc(response);
  console.log("user: ", user);
}


const getDataFromDoc = (doc) => {
  const data = doc.data();
  data.id = doc.id;
  return data;
}
  */
 // Giả định bạn đã có một biến userIsLoggedIn để kiểm tra trạng thái đăng nhập
let userIsLoggedIn = false; // Thay thế bằng cách kiểm tra thực tế

// Thêm sự kiện click cho logo
// @ts-ignore
document.getElementById('logo').addEventListener('click', () => {
    if (userIsLoggedIn) {
        // Hiển thị trang cá nhân
        // @ts-ignore
        document.getElementById('home-section').style.display = 'none';
        // @ts-ignore
        document.getElementById('dashboard-section').style.display = 'block';
        // @ts-ignore
        document.getElementById('welcome-message').innerText = `Welcome, ${user.displayName || user.email}!`;
    } else {
        // Điều hướng đến trang đăng nhập
        window.location.href = '/login'; // Giả định bạn có một route đăng nhập
    }
});

// Xử lý đăng xuất
// @ts-ignore
document.getElementById('logout-button').addEventListener('click', () => {
    // Xử lý đăng xuất ở đây
    userIsLoggedIn = false; // Đặt lại trạng thái đăng nhập
    // @ts-ignore
    document.getElementById('home-section').style.display = 'block';
    // @ts-ignore
    document.getElementById('dashboard-section').style.display = 'none';
});
// @ts-ignore
document.getElementById('logout-button').addEventListener('click', function() {
  logoutUser();
});

function logoutUser() {
  // Hiện phần đăng nhập và đăng ký
  // @ts-ignore
  document.getElementById('user-bar').style.display = 'block';

  // Ẩn navbar
  // @ts-ignore
  document.getElementById('navbar').style.display = 'none';

  // Cập nhật thông tin người dùng về null
  // @ts-ignore
  document.getElementById('user-name').innerText = `Name: `;
  // @ts-ignore
  document.getElementById('user-email').innerText = `Email: `;
  
  // Có thể gọi API để xử lý đăng xuất nếu cần
  /*
  fetch('/api/users/logout', {
      method: 'POST',
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Logout failed');
      }
      // Hiển thị thông báo đăng xuất thành công (nếu cần)
      displayMessage('Logged out successfully');
  })
  .catch((error) => {
      displayMessage(`Error: ${error.message}`); // Hiển thị lỗi nếu có
  });*/
}