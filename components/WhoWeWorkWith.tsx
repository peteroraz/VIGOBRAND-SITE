
import React from 'react';
import { Landmark, HeartPulse, Building2, Terminal } from 'lucide-react';

const ClientCard: React.FC<{ icon: React.ReactNode, title: string, text: string }> = ({ icon, title, text }) => (
  <div className="bg-slate-50 p-10 rounded-3xl border border-slate-200 hover:border-blue-300 transition-colors">
    <div className="text-blue-600 mb-6">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-slate-900 mb-4">{title}</h3>
    <p className="text-slate-600">{text}</p>
  </div>
);

export const WhoWeWorkWith: React.FC = () => {
  return (
    <section id="clients" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4">Our Partners</h2>
          <p className="text-4xl md:text-5xl font-extrabold text-slate-900">Who We Work With</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ClientCard 
            icon={<Landmark size={40} />}
            title="Government"
            text="Helping public agencies deliver secure, efficient digital citizen services."
          />
          <ClientCard 
            icon={<HeartPulse size={40} />}
            title="Healthcare"
            text="Modernizing systems in highly regulated environments where security is paramount."
          />
          <ClientCard 
            icon={<Building2 size={40} />}
            title="Enterprises"
            text="Modernizing access, platforms, and legacy architectures for scale."
          />
          <ClientCard 
            icon={<Terminal size={40} />}
            title="Special Projects"
            text="Stepping in to fix complex systems that others left behind."
          />
        </div>
      </div>
    </section>
  );
};
