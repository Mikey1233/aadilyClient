import React from 'react';
import { Ear, Zap, EyeOff, Laptop, MessageCircle, Cpu } from 'lucide-react';

const features = [
  {
    title: "Real-Time AI Listening",
    desc: "Advanced audio processing captures every word with low latency.",
    icon: Ear
  },
  {
    title: "Instant Smart Responses",
    desc: "Get context-aware answers generated in milliseconds.",
    icon: Zap
  },
  {
    title: "Discreet Interface",
    desc: "A floating window that only you can see. Completely invisible to screen sharing.",
    icon: EyeOff
  },
  {
    title: "Cross-Platform Support",
    desc: "Works seamlessly on top of any video conferencing application.",
    icon: Laptop
  },
  {
    title: "Behavioral Assistance",
    desc: "STAR method structuring for all your 'tell me about a time' questions.",
    icon: MessageCircle
  },
  {
    title: "Technical Interview Mode",
    desc: "Specialized mode for code syntax, algorithms, and system design.",
    icon: Cpu
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">From Technical Assessments to Case Analyses</h2>
          <p className="text-lg text-slate-600">
            Interview Hammer is packed with features designed to give you the upper hand in any high-pressure situation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="shrink-0">
                <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center text-brand-600">
                  <feature.icon className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};