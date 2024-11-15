import React from 'react';
import { Heart, Stethoscope, Brain, Bone, Eye, Tooth, Baby, Activity, Calendar, Phone, MapPin, Clock } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Specialties from './components/Specialties';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans" dir="rtl">
      <Navbar />
      <Hero />
      <Specialties />
      <Features />
      <Footer />
    </div>
  );
}

export default App;