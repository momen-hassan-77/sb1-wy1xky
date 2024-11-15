import React from 'react';
import { Clock, Users, Award, Shield } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'خدمة 24/7',
    description: 'متواجدون على مدار الساعة لخدمتكم'
  },
  {
    icon: Users,
    title: 'طاقم طبي متميز',
    description: 'نخبة من الأطباء والممرضين ذوي الخبرة'
  },
  {
    icon: Award,
    title: 'معايير عالمية',
    description: 'نلتزم بأعلى معايير الجودة في الرعاية الصحية'
  },
  {
    icon: Shield,
    title: 'تجهيزات حديثة',
    description: 'أحدث الأجهزة والمعدات الطبية المتطورة'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">مميزاتنا</h2>
          <p className="text-gray-600 text-lg">نسعى دائماً لتقديم أفضل خدمة طبية لمرضانا</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-full p-6 w-20 h-20 mx-auto mb-6 shadow-lg">
                <feature.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}