/danang-tourism-app/
│
├── /client/               # Tầng Presentation - giao diện người dùng (Frontend)
│   ├── /css/              # Tệp CSS cho frontend
│   ├── /js/               # Tệp JS cho frontend
│   ├── /images/           # Hình ảnh cho giao diện
│   └── index.html         # File HTML chính cho giao diện người dùng
│
├── /server/               # Tầng Application Logic - xử lý logic trên server (Backend)
│   ├── /controllers/      # Xử lý logic của ứng dụng (Controllers)
│   ├── /models/           # Định nghĩa các mô hình dữ liệu (Models)
│   ├── /routes/           # Định nghĩa các route của ứng dụng (Routes)
│   ├── /middlewares/      # Các middleware (Xử lý trước khi vào controller)
│   ├── /config/           # Cấu hình ứng dụng (DB, môi trường, ...)
│   └── app.js             # File chính cấu hình và khởi động Express
│
├── /database/             # Tầng Data Management - Quản lý cơ sở dữ liệu (Database)
│   ├── /migrations/       # Script để tạo và cập nhật cơ sở dữ liệu
│   └── /seeds/            # Dữ liệu mẫu để khởi tạo cơ sở dữ liệu
│
├── /logs/                 # Thư mục chứa file log theo dõi hoạt động của hệ thống
│
├── /tests/                # Thư mục chứa kiểm thử (unit tests, integration tests)
│   ├── /unit/             # Kiểm thử đơn vị
│   ├── /integration/      # Kiểm thử tích hợp
│
├── /scripts/              # Scripts để chạy các tác vụ như khởi tạo cơ sở dữ liệu
│
├── .env                   # Biến môi trường (API keys, thông tin kết nối cơ sở dữ liệu)
├── package.json           # Thông tin gói npm và các dependencies
└── README.md              # Tài liệu hướng dẫn
1. Thông tin cá nhân:
Họ tên: Tên đầy đủ của người dùng.
Ngày sinh: Ngày tháng năm sinh (có thể dùng để xác định độ tuổi).
Giới tính: Giới tính của người dùng.
2. Thông tin liên hệ:
Địa chỉ email: Địa chỉ email để gửi thông tin xác nhận, khôi phục mật khẩu, và thông báo.
Số điện thoại: Để liên hệ khi cần thiết, có thể sử dụng cho xác thực hai yếu tố hoặc thông báo quan trọng.
3. Thông tin tài khoản:
Tên người dùng (username): Một tên riêng để đăng nhập, có thể khác với địa chỉ email.
Mật khẩu: Mật khẩu để bảo vệ tài khoản.
Hình đại diện: Hình ảnh của người dùng (nếu có).
4. Thông tin thanh toán (tuỳ chọn):
Thông tin thẻ tín dụng: Nếu bạn tích hợp thanh toán trực tuyến, người dùng có thể lưu thông tin thẻ để thực hiện thanh toán nhanh hơn.
Địa chỉ thanh toán: Địa chỉ để sử dụng cho việc giao vé hoặc gửi thông tin xác nhận.
5. Lịch sử đặt chỗ:
Danh sách đặt vé: Thông tin về các hoạt động, tour đã đặt trước đó.
Đánh giá: Các đánh giá và phản hồi mà người dùng đã để lại cho các hoạt động.
6. Tùy chọn thông báo:
Thông báo qua email: Cài đặt để nhận thông báo về các hoạt động mới, khuyến mãi, và thông tin liên quan.
Thông báo qua ứng dụng: Tùy chọn để nhận thông báo qua ứng dụng di động (nếu có).
7. Tính năng bảo mật:
Xác thực hai yếu tố (2FA): Tùy chọn để thêm lớp bảo mật cho tài khoản bằng cách yêu cầu mã xác thực từ một ứng dụng hoặc số điện thoại.
////////////////////////////////////////////
///////////////////////////////////////////
1. Chức năng đặt vé:
Người dùng có thể chọn hoạt động hoặc điểm đến mà họ muốn tham gia.
Hiển thị thông tin chi tiết về hoạt động, bao gồm thời gian, địa điểm, giá vé, và số lượng chỗ còn trống.
2. Quy trình đặt vé:
Chọn hoạt động: Người dùng lựa chọn hoạt động hoặc tour du lịch.
Điền thông tin: Người dùng điền thông tin cá nhân và số lượng người tham gia.
Thanh toán: Tích hợp cổng thanh toán trực tuyến (như PayPal, thẻ tín dụng, hoặc thanh toán khi nhận vé).
Xác nhận: Sau khi thanh toán, người dùng nhận được xác nhận qua email hoặc tin nhắn.
3. Quản lý đặt vé:
Người dùng có thể xem lại các đặt vé đã thực hiện.
Cung cấp chức năng hủy đặt vé hoặc thay đổi thông tin (nếu cho phép).
4. Thông báo:
Gửi thông báo cho người dùng về các hoạt động đã đặt, cũng như các thông tin mới về sự kiện, chương trình khuyến mãi.
5. Đánh giá và phản hồi:
Sau khi tham gia, người dùng có thể để lại đánh giá và phản hồi về trải nghiệm của họ, giúp cải thiện dịch vụ.
//////////////////////////////////////////
///////////////////////////////////////////
1. Thông tin điểm đến:
Tên điểm đến: Tên của các địa điểm du lịch.
Mô tả: Thông tin chi tiết về điểm đến (lịch sử, đặc điểm nổi bật, hoạt động chính).
Địa chỉ: Vị trí cụ thể của điểm đến.
Hình ảnh: Hình ảnh minh họa cho điểm đến.
Giờ mở cửa: Thời gian mở cửa và đóng cửa của điểm đến.
Giá vé: Nếu có, thông tin về giá vé tham quan.
2. Thông tin hoạt động:
Tên hoạt động: Tên của các hoạt động (tour, sự kiện, lễ hội).
Mô tả hoạt động: Thông tin chi tiết về hoạt động.
Ngày giờ diễn ra: Thời gian cụ thể của hoạt động.
Địa điểm diễn ra: Địa điểm nơi diễn ra hoạt động.
Giá vé: Chi phí tham gia hoạt động.
3. Thông tin hướng dẫn viên:
Tên hướng dẫn viên: Họ tên của hướng dẫn viên.
Kinh nghiệm: Thông tin về kinh nghiệm và lĩnh vực chuyên môn.
Đánh giá: Nhận xét và đánh giá từ khách hàng.
4. Đánh giá và phản hồi:
ID người dùng: Để liên kết phản hồi với người dùng.
ID điểm đến hoặc hoạt động: Để biết phản hồi về cái gì.
Nội dung đánh giá: Phản hồi từ người dùng.
Số sao: Điểm đánh giá (thường từ 1 đến 5).
5. Thông tin đặt chỗ:
ID người dùng: Ai đã đặt chỗ.
ID hoạt động hoặc điểm đến: Hoạt động hoặc điểm đến đã đặt chỗ.
Ngày đặt chỗ: Thời gian người dùng thực hiện đặt chỗ.
Số lượng người: Số người tham gia đặt chỗ.
6. Thông tin khuyến mãi (nếu có):
Mã khuyến mãi: Mã sử dụng cho giảm giá.
Nội dung khuyến mãi: Chi tiết về khuyến mãi.
Thời gian hiệu lực: Thời gian mà mã khuyến mãi có hiệu lực.
7. Thông tin liên hệ:
Số điện thoại: Để người dùng có thể liên hệ.
Email: Địa chỉ email hỗ trợ khách hàng.
Ví dụ cấu trúc bảng dữ liệu:
Users: Lưu thông tin người dùng.
Destinations: Lưu thông tin về các điểm du lịch.
Activities: Lưu thông tin về các hoạt động.
Guides: Lưu thông tin về các hướng dẫn viên.
Reviews: Lưu đánh giá và phản hồi từ người dùng.
Bookings: Lưu thông tin đặt chỗ.
Promotions: Lưu thông tin khuyến mãi.

npm install mongoose
npm install dotenv
//////
/////
Git
git init
git remote add origin YOUR_GITHUB_URL (git remote add origin https://github.com/chaubathang/pbl4)
git add .
git commit -m "Initial commit"
git push -u origin master
git status
/////////
////////
->Sửa code thì 
git status
git add .
git commit -m "Ghi chú gì tuỳ"
git push
