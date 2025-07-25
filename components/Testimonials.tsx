"use client";

import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Chị Sarah Wilson",
    pet: "Max (Chó Golden Retriever)",
    rating: 5,
    comment: "Phòng Khám PawCare đã cứu sống chú chó của tôi trong tình huống cấp cứu. Đội ngũ nhân viên vô cùng chuyên nghiệp và tận tâm. BS. Johnson đã giải thích mọi thứ rất rõ ràng và đảm bảo Max được thoải mái trong suốt quá trình điều trị."
  },
  {
    name: "Anh David Chen",
    pet: "Luna (Mèo Ba Tư)",
    rating: 5,
    comment: "Tôi đã đưa Luna đến đây trong 3 năm. Đội ngũ luôn cung cấp dịch vụ chăm sóc tuyệt vời và cơ sở vật chất luôn sạch sẽ, hiện đại. Họ thực sự quan tâm đến thú cưng và chủ nuôi."
  },
  {
    name: "Chị Maria Rodriguez",
    pet: "Charlie (Chó Labrador lai)",
    rating: 5,
    comment: "Dịch vụ thú y xuất sắc! Họ đã giúp Charlie với ca phẫu thuật và quá trình hồi phục nhanh hơn dự kiến. Đội ngũ thường xuyên theo dõi để kiểm tra tiến triển của bé. Rất đáng tin cậy!"
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
      />
    ));
  };

  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Khách Hàng Nói Gì Về Chúng Tôi
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Đừng chỉ tin lời chúng tôi - hãy lắng nghe từ những chủ thú cưng tin tưởng giao phó những người bạn thân yêu cho chúng tôi
          </p>
        </div>

        {/* Desktop View - Grid */}
        <div className="hidden md:grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.pet}</p>
                  <div className="flex mt-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.comment}"</p>
            </div>
          ))}
        </div>

        {/* Mobile View - Carousel */}
        <div className="md:hidden">
          <div className="relative">
            <div className="bg-white p-6 rounded-lg shadow-lg mx-4">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonials[currentIndex].name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonials[currentIndex].name}</h4>
                  <p className="text-sm text-gray-600">{testimonials[currentIndex].pet}</p>
                  <div className="flex mt-1">
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonials[currentIndex].comment}"</p>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg text-primary-600 hover:bg-primary-50"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg text-primary-600 hover:bg-primary-50"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => isClient && document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-primary"
            suppressHydrationWarning
          >
            Gia Nhập Khách Hàng Hạnh Phúc
          </button>
        </div>
      </div>
    </section>
  );
}