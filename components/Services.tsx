
import React from 'react';
import { Compass, Hammer, Activity, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  items: string[];
  color: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, items, color }) => (
  <div className="group bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
    <div className={`w-16 h-16 rounded-2xl ${color} flex items-center justify-center text-white mb-6 transform group-hover:scale-110 transition-transform`}>
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-slate-900 mb-4">{title}</h3>
    <p className="text-slate-600 mb-8 flex-grow">{description}</p>
    
    <div className="space-y-4 mb-8">
      {items.map((item, idx) => (
        <div key={idx} className="flex items-center space-x-3 text-sm font-semibold text-slate-700">
          <ArrowRight size={14} className="text-blue-500" />
          <span>{item}</span>
        </div>
      ))}
    </div>
    
    <button className="flex items-center space-x-2 text-blue-600 font-bold hover:underline">
      <span>Learn more</span>
      <ArrowRight size={16} />
    </button>
  </div>
);

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4">What We Do</h2>
          <p className="text-4xl md:text-5xl font-extrabold text-slate-900">Three pillars of digital excellence.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard 
            title="Advisory"
            color="bg-indigo-600"
            icon={<Compass size={32} />}
            description="We bring clarity before code. Assessments, strategy, and architecture reviews that cut through complexity and give leaders confidence."
            items={['Digital Readiness', 'Identity & Access Reviews', 'Delivery Assessments']}
          />
          <ServiceCard 
            title="Build"
            color="bg-blue-600"
            icon={<Hammer size={32} />}
            description="We design and implement secure, scalable systems—then stay accountable for outcomes."
            items={['Identity & Access (Okta, Azure AD)', 'Power Platform & Portals', 'Integrations & Automation', 'Program Delivery']}
          />
          <ServiceCard 
            title="Run"
            color="bg-cyan-600"
            icon={<Activity size={32} />}
            description="We don’t disappear after go-live. Our managed services keep systems stable, secure, and improving over time."
            items={['Application Support', 'Identity Operations', 'Managed Power Platform', 'Fractional Leadership']}
          />
        </div>
      </div>
    </section>
  );
};
