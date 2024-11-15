import React from 'react';
import { Phone, Clock } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="text-2xl font-bold text-blue-600">مستشفى الشفاء</div>
          
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            <a href="#" className="text-gray-700 hover:text-blue-600">الرئيسية</a>
            <a href="#specialties" className="text-gray-700 hover:text-blue-600">التخصصات</a>
            <a href="#features" className="text-gray-700 hover:text-blue-600">خدماتنا</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">اتصل بنا</a>
          </div>

          <div className="hidden md:flex items-center space-x-4 space-x-reverse">
            <div className="flex items-center text-gray-600">
              <Phone className="w-5 h-5 ml-2" />
              <span>19999</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock className="w-5 h-5 ml-2" />
              <span>24/7</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}