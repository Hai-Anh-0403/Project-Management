# Hệ thống Quản lý Sản phẩm (Product Management)

Dự án này là một hệ thống quản lý sản phẩm được xây dựng bằng **Node.js**, **Express.js**, **MongoDB**, và sử dụng **Pug** làm template engine. Hệ thống bao gồm hai giao diện chính: Giao diện dành cho Khách hàng (Client) và Trang quản trị dành cho Admin (Admin Panel).

## 🚀 Tính năng nổi bật

### Dành cho Admin (Trang quản trị)
- **Dashboard**: Trang tổng quan dành cho quản trị viên.
- **Quản lý Sản phẩm**: Xem danh sách, thêm, sửa, xóa (CRUD), và thay đổi trạng thái (Hoạt động/Dừng hoạt động) của các sản phẩm.
- **Flash Messages**: Hiển thị thông báo (thành công/lỗi) cho người dùng ngay trên giao diện nhờ `express-flash`.

### Dành cho Client (Người dùng cuối)
- **Trang chủ**: Giao diện hiển thị trang chủ cơ bản.
- **Danh sách Sản phẩm**: Hiển thị các sản phẩm đang được kinh doanh (dựa trên trạng thái và cờ `deleted`).

## 🛠️ Công nghệ sử dụng

- **Backend**: [Node.js](https://nodejs.org/) & [Express.js](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) & [Mongoose](https://mongoosejs.com/)
- **Template Engine**: [Pug](https://pugjs.org/)
- **Các thư viện/Middleware khác**:
  - `dotenv`: Quản lý các biến môi trường (Environment variables).
  - `body-parser` & `cookie-parser`: Xử lý và phân tích dữ liệu từ các request gửi lên.
  - `express-session` & `express-flash`: Quản lý phiên làm việc (session) và hiển thị thông báo động.
  - `method-override`: Hỗ trợ ghi đè các HTTP methods như PUT, PATCH, DELETE trực tiếp từ HTML Form.
  - `nodemon`: Môi trường phát triển giúp tự động khởi động lại server khi có thay đổi trong mã nguồn.

## ⚙️ Hướng dẫn cài đặt và chạy dự án

### 1. Yêu cầu hệ thống
- Máy tính đã cài đặt **Node.js**.
- Đã cài đặt **MongoDB** (có thể chạy local hoặc sử dụng MongoDB Atlas).

### 2. Các bước cài đặt

Clone dự án hoặc mở thư mục dự án trong terminal của bạn:
```bash
cd Project-Managemter
```

Cài đặt các gói thư viện (dependencies) thông qua npm:
```bash
npm install
```

### 3. Cấu hình biến môi trường
Dự án yêu cầu một file `.env` ở thư mục gốc (nơi chứa file `package.json`). Hãy chắc chắn rằng bạn có các cấu hình tương tự như sau:
```env
PORT=3000
MONGO_URL=mongodb://localhost:27017/ten_database_cua_ban
```

### 4. Khởi chạy dự án

Khởi chạy ứng dụng với chế độ phát triển (Sử dụng `nodemon` để tự động cập nhật nếu có thay đổi code):
```bash
npm start
```
Nếu thành công, server sẽ lắng nghe trên cổng đã chỉ định, ví dụ: `http://localhost:3000`

## 📁 Cấu trúc thư mục (Project Structure)
```
├── config/        # Cấu hình hệ thống (Database, biến toàn cục, hằng số...)
├── controllers/   # Xử lý logic nghiệp vụ cho các router (Admin & Client)
├── helpers/       # Các hàm tiện ích dùng chung (Ví dụ: tính toán, lọc dữ liệu...)
├── models/        # Định nghĩa các Schema để tương tác với MongoDB (vd: Product)
├── public/        # Chứa các tài nguyên tĩnh như CSS, JS, hình ảnh, tài liệu...
├── routes/        # Định nghĩa các đường dẫn (Endpoints) điều hướng cho Admin và Client
├── views/         # Chứa các file giao diện được viết bằng Pug
├── .env           # File chứa các biến môi trường cấu hình (Bảo mật, không nên push lên git)
├── index.js       # File khởi chạy ứng dụng chính (Entry point)
└── package.json   # Chứa thông tin mô tả dự án và quản lý các thư viện NPM
```

## 📝 Giấy phép
Dự án được tạo ra với mục đích học tập và xây dựng hệ thống web với Node.js cơ bản.
