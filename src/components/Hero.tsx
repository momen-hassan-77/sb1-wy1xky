import React from 'react';

export default function Hero() {
  return (
    <div className="relative h-[600px] bg-gradient-to-r from-blue-600 to-blue-400">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="text-white max-w-2xl">
          <h1 className="text-5xl font-bold mb-6">رعاية صحية متكاملة بمعايير عالمية</h1>
          <p className="text-xl mb-8">نقدم خدمات طبية متميزة على يد نخبة من الأطباء المتخصصين باستخدام أحدث التقنيات الطبية</p>
          <div className="space-x-4 space-x-reverse">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">احجز موعد</button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">اتصل بنا</button>
          </div>
        </div>
      </div>
    </div>
  );
}