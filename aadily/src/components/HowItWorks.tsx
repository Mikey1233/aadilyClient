import React from 'react';
import { Download, Mic, MessageSquareQuote } from 'lucide-react';

const steps = [
  {
    icon: Download,
    title: "1. Open the App",
    desc: "Launch Interview Hammer on your desktop or via the web browser before your call."
  },
  {
    icon: Mic,
    title: "2. Activate Assistant",
    desc: "Start listening mode. We support Zoom, Teams, Meet and more seamlessly."
  },
  {
    icon: MessageSquareQuote,
    title: "3. Get Instant Support",
    desc: "Receive discreet, context-aware answers and guidance in real-time as you speak."
  }
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Conquer Your Interviews the Effortless Way</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Three simple steps to your dream job. No complex setup required.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-brand-200 via-accent-200 to-brand-200 -z-10"></div>

          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-white rounded-2xl shadow-xl shadow-brand-900/5 flex items-center justify-center mb-8 relative border border-slate-100 group-hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute inset-0 bg-brand-50 rounded-2xl transform rotate-6 scale-90 -z-10 transition-transform group-hover:rotate-12"></div>
                <step.icon className="w-10 h-10 text-brand-600" />
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm border-4 border-white">
                  {idx + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};