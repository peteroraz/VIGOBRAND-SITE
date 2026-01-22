
import React from 'react';
import { CheckCircle } from 'lucide-react';

const Reason: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 mt-1">
      <CheckCircle className="text-blue-600" size={24} />
    </div>
    <span className="text-xl font-semibold text-slate-800 leading-tight">{text}</span>
  </div>
);

export const WhyVigobrand: React.FC = () => {
  return (
    <section id="why-vigobrand" className="py-24 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4">Why Vigobrand</h2>
          <p className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8">Built for systems that last.</p>
          <p className="text-xl text-slate-600 leading-relaxed mb-10">
            We bridge the gap between high-level strategy and technical execution—so your systems don’t just launch, they thrive and evolve with your organization.
          </p>
          
          <div className="space-y-6">
            <Reason text="Enterprise-grade delivery for mission-critical systems" />
            <Reason text="Deep hands-on experience across modern tech stacks" />
            <Reason text="Security and identity-first philosophy" />
            <Reason text="Clear, direct communication—no consulting noise" />
            <Reason text="Built for long-term, accountable partnerships" />
          </div>
        </div>
        
        <div className="relative">
          <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000" 
              alt="Team collaborating" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Floating stat card */}
          <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-2xl shadow-xl border border-slate-100 max-w-xs hidden md:block">
            <p className="text-4xl font-extrabold text-blue-600 mb-2">100%</p>
            <p className="text-slate-900 font-bold">Outcome Accountability</p>
            <p className="text-sm text-slate-600 mt-2">We don't just deliver code; we deliver results you can measure.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
