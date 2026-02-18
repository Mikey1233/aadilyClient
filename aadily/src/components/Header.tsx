import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3 mt-0' : 'bg-transparent py-5 mt-10'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-slate-900">
          <div className="w-8 h-8 bg-gradient-to-br from-brand-600 to-accent-500 rounded-lg flex items-center justify-center text-white shadow-lg shadow-brand-500/30">
            <Sparkles className="w-5 h-5" />
          </div>
          <span>Aadily</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#features" className="hover:text-brand-600 transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-brand-600 transition-colors">How it Works</a>
          <a href="#pricing" className="hover:text-brand-600 transition-colors">Pricing</a>
          <a href="#reviews" className="hover:text-brand-600 transition-colors">Reviews</a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm font-semibold text-slate-700 hover:text-brand-600 transition-colors">
            Log in
          </button>
          <button className="bg-slate-900 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-slate-800 transition-all hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0">
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-4 md:hidden shadow-xl flex flex-col gap-4">
          <a href="#features" className="text-slate-600 font-medium py-2">Features</a>
          <a href="#how-it-works" className="text-slate-600 font-medium py-2">How it Works</a>
          <a href="#pricing" className="text-slate-600 font-medium py-2">Pricing</a>
          <div className="h-px bg-slate-100 my-2"></div>
          <button className="w-full text-center py-2.5 font-semibold text-slate-700">Log in</button>
          <button className="w-full bg-brand-600 text-white py-3 rounded-lg font-semibold shadow-lg shadow-brand-500/30">
            Get Started
          </button>
        </div>
      )}
    </header>
  );
};