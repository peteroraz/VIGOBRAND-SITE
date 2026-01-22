
import React from 'react';
import { ArrowRight, ShieldCheck, Zap } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 bg-dots overflow-hidden">
      {/* Background blobs for depth */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-8 animate-bounce">
            <ShieldCheck size={16} />
            <span>Digital Systems that Work. Delivery you can Trust.</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-8">
            The partner for <span className="gradient-text">secure digital systems</span> that actually deliver.
          </h1>
          
          <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl">
            We help organizations design, build, and run secure digital systems—without the chaos, rework, or handoffs that slow teams down.
          </p>

          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={onContactClick}
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white text-lg font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center justify-center space-x-2 group"
            >
              <span>Talk to Us</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="#services"
              className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 text-lg font-bold rounded-2xl border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all flex items-center justify-center space-x-2"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
