
import React from 'react';
import { AlertCircle } from 'lucide-react';

export const TrustStatement: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent"></div>
      
      <div className="max-w-5xl mx-auto relative text-center">
        <AlertCircle className="mx-auto mb-8 text-blue-400 opacity-80" size={48} />
        
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium leading-tight mb-10">
          Modern organizations don’t fail because of lack of tools. 
          They fail because systems are <span className="text-blue-400 font-bold">fragmented</span>, 
          access is <span className="text-blue-400 font-bold">fragile</span>, and delivery breaks under pressure.
        </h2>
        
        <div className="h-1 w-24 bg-blue-500 mx-auto mb-10 rounded-full"></div>
        
        <p className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Vigobrand exists to fix that.
        </p>
      </div>
    </section>
  );
};
