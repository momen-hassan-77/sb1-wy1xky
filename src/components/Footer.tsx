import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">مستشفى الشفاء</h3>
            <p className="text-gray-400 mb-6">نقدم رعاية صحية متكاملة بمعايير عالمية على يد نخبة من الأطباء المتخصصين</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">معلومات الاتصال</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 ml-3 text-blue-400" />
                <span>القاهرة، مصر</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 ml-3 text-blue-400" />
                <span>19999</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 ml-3 text-blue-400" />
                <span>info@alshifa-hospital.com</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 ml-3 text-blue-400" />
                <span>24/7</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">روابط سريعة</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition">الرئيسية</a></li>
              <li><a href="#specialties" className="text-gray-400 hover:text-white transition">التخصصات</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-white transition">خدماتنا</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition">اتصل بنا</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} مستشفى الشفاء. جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  );
}