import React from 'react';
import { Code, TrendingUp, Briefcase, ArrowRight } from 'lucide-react';

const users = [
  {
    role: "For Developers",
    desc: "Real-time coding help, algorithm explanations, and system design support when you get stuck.",
    icon: Code,
    color: "bg-blue-50 text-blue-600"
  },
  {
    role: "For Marketing Pros",
    desc: "Behavioral question assistance, campaign strategy answers, and storytelling support on the fly.",
    icon: TrendingUp,
    color: "bg-purple-50 text-purple-600"
  },
  {
    role: "For Sales Reps",
    desc: "Objection handling, persuasive responses, and pitch optimization to close the deal.",
    icon: Briefcase,
    color: "bg-emerald-50 text-emerald-600"
  }
];

export const TargetUsers: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Tailored Support for Every Profession</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Our AI adapts to your specific industry context and needs.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {users.map((user, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-brand-900/5 transition-all duration-300 hover:-translate-y-1">
              <div className={`w-14 h-14 ${user.color} rounded-xl flex items-center justify-center mb-6`}>
                <user.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{user.role}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {user.desc}
              </p>
              <a href="#" className="inline-flex items-center text-sm font-semibold text-slate-900 hover:text-brand-600 transition-colors group">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};