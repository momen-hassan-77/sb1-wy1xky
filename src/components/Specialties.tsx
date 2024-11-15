import React from 'react';
import { Heart, Brain, Bone, Eye, Tooth, Baby, Activity, Stethoscope } from 'lucide-react';

const specialties = [
  {
    icon: Heart,
    title: 'القلب والأوعية الدموية',
    description: 'علاج أمراض القلب والشرايين بأحدث التقنيات والأجهزة'
  },
  {
    icon: Brain,
    title: 'المخ والأعصاب',
    description: 'تشخيص وعلاج اضطرابات الجهاز العصبي والدماغ'
  },
  {
    icon: Bone,
    title: 'العظام',
    description: 'علاج كسور العظام والمفاصل وإصابات الرياضة'
  },
  {
    icon: Eye,
    title: 'العيون',
    description: 'رعاية شاملة للعين وعلاج جميع مشاكل الإبصار'
  },
  {
    icon: Tooth,
    title: 'طب الأسنان',
    description: 'خدمات طب الأسنان التجميلية والعلاجية المتكاملة'
  },
  {
    icon: Baby,
    title: 'النساء والولادة',
    description: 'رعاية متكاملة للأم والجنين قبل وأثناء وبعد الولادة'
  },
  {
    icon: Activity,
    title: 'الباطنة',
    description: 'تشخيص وعلاج الأمراض الداخلية بكفاءة عالية'
  },
  {
    icon: Stethoscope,
    title: 'الأطفال',
    description: 'رعاية صحية متكاملة للأطفال منذ الولادة'
  }
];

export default function Specialties() {
  return (
    <section id="specialties" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">تخصصاتنا الطبية</h2>
          <p className="text-gray-600 text-lg">نقدم مجموعة واسعة من التخصصات الطبية لتلبية احتياجاتكم</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialties.map((specialty, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition duration-300">
              <specialty.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{specialty.title}</h3>
              <p className="text-gray-600">{specialty.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}