"use client";

import { Phone, MapPin, Clock, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Liên Hệ & Địa Điểm
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Đến thăm chúng tôi hoặc liên hệ để đặt lịch hẹn cho thú cưng của bạn
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Map Placeholder */}
          <div className="order-2 lg:order-1">
            <div className="bg-gray-200 h-96 rounded-lg overflow-hidden flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="w-16 h-16 mx-auto mb-4" />
                <p className="text-lg font-medium">Bản đồ Google Maps</p>
                <p className="text-sm">74 Lê Trọng Tấn, Phường Tây Thạnh</p>
                <p className="text-sm">TP. Hồ Chí Minh</p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Info */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Liên Hệ Với Chúng Tôi</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Địa Chỉ</h4>
                    <p className="text-gray-600">
                      74 Lê Trọng Tấn, Phường Tây Thạnh<br />
                      TP. Hồ Chí Minh, Việt Nam
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Điện Thoại</h4>
                    <p className="text-gray-600">+84765452515</p>
                    <p className="text-sm text-gray-500">Sẵn sàng 24/7 cho trường hợp cấp cứu</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600">info@pawcareclinic.com</p>
                    <p className="text-sm text-gray-500">Chúng tôi sẽ phản hồi trong vòng 24 giờ</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Giờ Làm Việc</h4>
                    <div className="text-gray-600 space-y-1">
                      <p>Thứ Hai - Thứ Sáu: 8:00 - 20:00</p>
                      <p>Thứ Bảy: 8:00 - 18:00</p>
                      <p>Chủ Nhật: 10:00 - 16:00</p>
                      <p className="text-sm text-primary-600 font-medium">
                        Dịch vụ cấp cứu 24/7
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t pt-8">
              <h4 className="font-semibold text-gray-800 mb-4">Quy Trình Cấp Cứu</h4>
              <p className="text-gray-600 mb-4">
                Với các trường hợp cấp cứu nguy hiểm tính mạng, hãy gọi ngay cho chúng tôi theo số{" "}
                <span className="font-semibold text-primary-600">+84765452515</span>. 
                Đội ngũ cấp cứu của chúng tôi luôn sẵn sàng 24/7 để cung cấp dịch vụ chăm sóc cấp cứu cho thú cưng của bạn.
              </p>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-700 font-medium">
                  🚨 Dấu hiệu cấp cứu: Khó thở, chảy máu nghiêm trọng, bất tỉnh, 
                  không thể đi tiểu, nghi ngờ bị ngộ độc hoặc chấn thương nghiêm trọng.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}