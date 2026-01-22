
import React from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';

interface CTAProps {
  onContactClick: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onContactClick }) => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-600"></div>
      {/* Abstract circles */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-blue-500 rounded-full opacity-30"></div>
      
      <div className="max-w-5xl mx-auto relative text-center">
        <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center mx-auto mb-8 backdrop-blur-sm">
          <MessageSquare className="text-white" size={36} />
        </div>
        
        <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-8">
          Ready to simplify your <br className="hidden md:block" /> digital systems?
        </h2>
        
        <p className="text-xl md:text-2xl text-blue-100 font-medium mb-12 max-w-2xl mx-auto">
          Let’s talk about what’s working, what isn’t, and how we can help you fix it for good.
        </p>
        
        <button 
          onClick={onContactClick}
          className="px-10 py-5 bg-white text-blue-600 text-xl font-bold rounded-2xl hover:bg-slate-50 transition-all shadow-2xl flex items-center justify-center space-x-3 mx-auto group"
        >
          <span>Schedule a Conversation</span>
          <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};
