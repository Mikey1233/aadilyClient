import React from 'react';
import { Sparkles, Twitter, Linkedin, Github, Instagram } from 'lucide-react';

const links = {
  Product: ["Features", "Pricing", "Download", "Desktop App", "Web App"],
  Resources: ["Help Center", "Getting Started", "Troubleshooting", "Discord Community"],
  Company: ["Careers", "About Us", "Anti-Spam Policy", "Contact Support"]
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-slate-900 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-brand-600 to-accent-500 rounded-lg flex items-center justify-center text-white">
                <Sparkles className="w-5 h-5" />
              </div>
              <span>Aadily</span>
            </div>
            <p className="text-slate-500 mb-6 max-w-xs leading-relaxed">
              Empowering job seekers with real-time intelligence to land their dream roles with confidence.
            </p>
            <div className="flex gap-4">
               {[Twitter, Linkedin, Github, Instagram].map((Icon, i) => (
                 <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-brand-50 hover:text-brand-600 transition-colors">
                   <Icon className="w-5 h-5" />
                 </a>
               ))}
            </div>
          </div>

          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="font-bold text-slate-900 mb-6">{title}</h4>
              <ul className="space-y-3">
                {items.map(item => (
                  <li key={item}>
                    <a href="#" className="text-slate-500 hover:text-brand-600 transition-colors text-sm">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Aadily.com. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-900">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900">Terms of Service</a>
            <a href="#" className="hover:text-slate-900">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};