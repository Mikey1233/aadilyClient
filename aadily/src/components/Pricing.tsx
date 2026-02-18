import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    price: "Free",
    desc: "Perfect for testing the waters.",
    features: ["5 Interview Sessions", "Basic Behavioral Q&A", "Community Support", "Zoom Support"],
    cta: "Start Free Trial",
    popular: false
  },
  {
    name: "Pro",
    price: "$29",
    period: "/mo",
    desc: "For serious job seekers.",
    features: ["Unlimited Sessions", "Technical & Coding Mode", "Priority Support", "All Platforms Supported", "Answer History"],
    cta: "Get Pro",
    popular: true
  },
  {
    name: "Premium",
    price: "$59",
    period: "/mo",
    desc: "Ultimate career acceleration.",
    features: ["Everything in Pro", "1-on-1 Mock Interview", "Resume Review AI", "Salary Negotiation Helper"],
    cta: "Get Premium",
    popular: false
  }
];

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 border-t border-slate-100 bg-white relative overflow-hidden">
       {/* Background blob */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-brand-50 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-slate-600">Invest in your career. The ROI is one paycheck away.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative bg-white rounded-2xl p-8 border ${plan.popular ? 'border-brand-500 shadow-2xl scale-105 z-10' : 'border-slate-200 shadow-sm'} transition-transform`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-linear-to-r from-brand-600 to-accent-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
              <div className="mt-4 mb-2 flex items-baseline">
                <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                {plan.period && <span className="text-slate-500 ml-1">{plan.period}</span>}
              </div>
              <p className="text-sm text-slate-500 mb-6">{plan.desc}</p>
              
              <button className={`w-full py-3 rounded-xl font-semibold mb-8 transition-colors ${
                plan.popular 
                  ? 'bg-slate-900 text-white hover:bg-slate-800' 
                  : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
              }`}>
                {plan.cta}
              </button>

              <div className="space-y-4">
                {plan.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-slate-600">
                    <Check className="w-4 h-4 text-brand-500 mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};