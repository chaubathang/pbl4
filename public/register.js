document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('register-form');
    
    if (registerForm instanceof HTMLFormElement) {  
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // Lấy giá trị từ các trường
            const firstName = registerForm.elements['firstName'].value.trim();
            const lastName = registerForm.elements['lastName'].value.trim();
            const email = registerForm.elements['email'].value.trim();
            const password = registerForm.elements['password'].value.trim();
            const confirmPassword = registerForm.elements['confirmPassword'].value.trim();

            // Xác thực dữ liệu
            let isValid = true;
            const clearErrorTexts = () => {
                setErrorText('first-name-error', "");
                setErrorText('last-name-error', "");
                setErrorText('email-error', "");
                setErrorText('password-error', "");
                setErrorText('confirm-password-error', "");
            };

            const setErrorText = (elementId, message) => {
                const element = document.getElementById(elementId);
                if (element) {
                    element.innerText = message;
                }
            };

            clearErrorTexts(); // Xóa thông báo lỗi cũ

            // Kiểm tra các trường dữ liệu
            if (!firstName) {
                setErrorText('first-name-error', "First name is required.");
                isValid = false;
            }
            if (!lastName) {
                setErrorText('last-name-error', "Last name is required.");
                isValid = false;
            }
            if (!email) {
                setErrorText('email-error', "Email is required.");
                isValid = false;
            }
            if (!password) {
                setErrorText('password-error', "Password is required.");
                isValid = false;
            }
            if (password !== confirmPassword) {
                setErrorText('confirm-password-error', "Passwords do not match.");
                isValid = false;
            }

            // Nếu tất cả dữ liệu hợp lệ, gửi tới server
            if (isValid) {
                const userData = {
                    firstName,
                    lastName,
                    email,
                    password
                };

                fetch('/api/users/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
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
                    // Hiển thị thông báo thành công
                    displayMessage(data.message);
                })
                .catch((error) => {
                    displayMessage(`Error: ${error.message}`); // Hiển thị lỗi
                });
            }
        });
    } else {
        console.error('Phần tử register-form không tồn tại!');
    }
});

// Hàm để hiển thị thông báo
function displayMessage(message) {
    const messageElement = document.getElementById('message');
    if (messageElement) {
        messageElement.innerText = message;
        messageElement.style.display = 'block';
    }
}
