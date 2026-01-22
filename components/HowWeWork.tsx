
import React from 'react';

const Step: React.FC<{ number: string, title: string, description: string }> = ({ number, title, description }) => (
  <div className="relative flex flex-col items-center text-center p-8">
    <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mb-6 shadow-lg shadow-blue-200 z-10">
      {number}
    </div>
    <h3 className="text-2xl font-bold text-slate-900 mb-4">{title}</h3>
    <p className="text-slate-600">{description}</p>
  </div>
);

export const HowWeWork: React.FC = () => {
  return (
    <section id="process" className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4">How We Work</h2>
          <p className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Plan. Build. Run.</p>
          <p className="text-lg text-slate-600">A simple model that removes handoffs and finger-pointing. One partner. One accountable team.</p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-slate-200 z-0"></div>
          
          <Step 
            number="1" 
            title="Plan" 
            description="Assess, design, and align. We define the roadmap that makes sense for your business, not just your IT." 
          />
          <Step 
            number="2" 
            title="Build" 
            description="Implement with discipline. We build secure, resilient systems using modern architecture and agile delivery." 
          />
          <Step 
            number="3" 
            title="Run" 
            description="Operate, support, and improve. We stay for the long haul, ensuring stability and continuous evolution." 
          />
        </div>
      </div>
    </section>
  );
};
