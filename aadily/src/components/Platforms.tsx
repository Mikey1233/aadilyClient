import React from 'react';
import { Video, Cast, Monitor, Code2, Terminal, Cloud } from 'lucide-react';

const platforms = [
  { name: "Zoom", icon: Video },
  { name: "Google Meet", icon: Cast },
  { name: "Microsoft Teams", icon: Monitor },
  { name: "Hackerrank", icon: Code2 },
  { name: "CoderPad", icon: Terminal },
  { name: "Amazon Chime", icon: Cloud },
];

export const Platforms: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
           <h2 className="text-2xl font-bold text-slate-900">Invisible Assistance on Every Interview Platform</h2>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
           {platforms.map((p, i) => (
             <div key={i} className="flex items-center gap-2 group cursor-default">
               <div className="p-3 bg-slate-50 rounded-lg group-hover:bg-brand-50 transition-colors">
                  <p.icon className="w-6 h-6 text-slate-600 group-hover:text-brand-600" />
               </div>
               <span className="font-semibold text-lg text-slate-600 group-hover:text-brand-700">{p.name}</span>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};