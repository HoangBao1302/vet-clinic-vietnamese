"use client";

import { useState, useEffect } from "react";
import { Award, Clock, Heart, Users } from "lucide-react";

export default function About() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Về Phòng Khám PawCare
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Trong hơn 15 năm, Phòng Khám PawCare đã là lựa chọn đáng tin cậy của các chủ thú cưng tại TP. Hồ Chí Minh. 
              Cơ sở vật chất hiện đại và đội ngũ có kinh nghiệm của chúng tôi cung cấp dịch vụ thú y toàn diện với 
              lòng tận tâm và tính chuyên nghiệp.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Chúng tôi tin rằng mỗi thú cưng đều xứng đáng nhận được sự chăm sóc tốt nhất có thể. Trang thiết bị hiện đại, 
              các thủ thuật y tế tiên tiến và cách tiếp cận chu đáo của chúng tôi đảm bảo những người bạn thân yêu của bạn 
              nhận được sự điều trị vượt quá mong đợi của bạn.
            </p>

            {/* Stats/Features */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <Users className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">5000+</div>
                  <div className="text-sm text-gray-600">Thú Cưng Hạnh Phúc</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <Award className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">15+</div>
                  <div className="text-sm text-gray-600">Năm Kinh Nghiệm</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">24/7</div>
                  <div className="text-sm text-gray-600">Cấp Cứu</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <Heart className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">100%</div>
                  <div className="text-sm text-gray-600">Tận Tâm & Yêu Thương</div>
                </div>
              </div>
            </div>

            <button 
              onClick={() => isClient && document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-primary"
              suppressHydrationWarning
            >
              Gặp Gỡ Đội Ngũ
            </button>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <Heart className="w-16 h-16 mx-auto mb-4 text-primary-600" />
                <p className="text-lg font-medium">Chăm sóc thú cưng tận tâm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}