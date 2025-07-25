# Phòng Khám Thú Y PawCare

Trang web hiện đại, chuyên nghiệp cho phòng khám thú y gia đình được xây dựng bằng Next.js 15, Tailwind CSS và TypeScript. Tính năng đặt lịch hẹn, giới thiệu dịch vụ, đánh giá khách hàng và phần liên hệ tương tác.

## 🌟 Tính Năng

- **Thiết Kế Hiện Đại**: Bảng màu xanh dương và trắng chuyên nghiệp với typography thanh lịch
- **Bố Cục Responsive**: Tối ưu cho thiết bị di động, máy tính bảng và desktop
- **Đặt Lịch Hẹn**: Form tích hợp với dịch vụ email Resend
- **Giới Thiệu Dịch Vụ**: Danh sách dịch vụ chi tiết với giá cả minh bạch
- **Đánh Giá Khách Hàng**: Đánh giá của khách hàng với tính năng carousel
- **Bản Đồ Tương Tác**: Tích hợp Google Maps cho vị trí
- **Nút Gọi Cố Định**: Thanh cố định phía dưới để liên hệ dễ dàng
- **Điều Hướng Mượt**: Điều hướng cuộn mượt với menu di động
- **Tối Ưu SEO**: Meta tags và structured data

## 🚀 Công Nghệ

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Email Service**: Resend
- **Icons**: Lucide React
- **Image Optimization**: Next.js Image component

## 📱 Các Phần

1. **Header**: Điều hướng, thông tin liên hệ và liên kết mạng xã hội
2. **Hero**: Tiêu đề chính với form đặt lịch hẹn
3. **Services**: Danh sách dịch vụ với giá bằng VNĐ (₫)
4. **About**: Thông tin phòng khám và hồ sơ đội ngũ
5. **Testimonials**: Đánh giá khách hàng với điểm số sao
6. **Contact**: Bản đồ tương tác và thông tin liên hệ
7. **Footer**: Liên kết bổ sung và thông tin
8. **Sticky CTA**: Nút gọi luôn hiển thị

## 🛠️ Hướng Dẫn Cài Đặt

### Yêu Cầu

- Node.js 18+ đã cài đặt
- npm hoặc yarn package manager
- Tài khoản Resend cho chức năng email

### Cài Đặt

1. **Clone repository**:
   ```bash
   git clone https://github.com/HoangBao1302/vet-clinic-vietnamese.git
   cd vet-clinic-vietnamese
   ```

2. **Cài đặt dependencies**:
   ```bash
   npm install
   ```

3. **Cấu hình Environment**:
   - Tạo `.env.local` và thêm Resend API key
   - Lấy API key từ [Resend Dashboard](https://resend.com/api-keys)
   - Cập nhật địa chỉ email trong `app/api/appointment/route.ts`

4. **Development Server**:
   ```bash
   npm run dev
   ```

5. **Mở trình duyệt**:
   Truy cập [http://localhost:3000](http://localhost:3000)

## 🌐 Thông Tin Doanh Nghiệp

- **Địa chỉ**: 74 Lê Trọng Tấn, Phường Tây Thạnh, TP. Hồ Chí Minh
- **Điện thoại**: +84765452515
- **Email**: info@pawcareclinic.com

## 🚀 Triển Khai

### Vercel (Được Khuyến Nghị)

1. **Kết nối GitHub**: 
   - Push code lên GitHub repository
   - Kết nối repository với Vercel

2. **Environment Variables**:
   - Thêm `RESEND_API_KEY` trong Vercel dashboard
   - Cấu hình custom domain (cần thiết cho Resend)

3. **Deploy**:
   - Triển khai tự động khi git push
   - URL production sẽ được tạo

---

**Được xây dựng với ❤️ cho Phòng Khám PawCare**