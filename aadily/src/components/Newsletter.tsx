import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

export const Newsletter: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-600/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 mb-8 backdrop-blur-sm">
            <Mail className="w-8 h-8 text-brand-300" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay in the Loop</h2>
          <p className="text-slate-300 mb-8 text-lg">
            Join our newsletter to get top interview tips, market trends, and product updates before anyone else.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent backdrop-blur-sm transition-all"
            />
            <button className="px-6 py-3.5 bg-brand-600 hover:bg-brand-500 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors">
              Subscribe
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
          <p className="mt-4 text-xs text-slate-500">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </div>
    </section>
  );
};