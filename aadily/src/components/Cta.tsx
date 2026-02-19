import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 bg-[#050505] overflow-hidden">
      
      {/* Bulb Glow Effect */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] pointer-events-none transition-all duration-[1.5s] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* Filament Line */}
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 h-[1px] bg-gradient-to-r from-transparent via-indigo-300 to-transparent shadow-[0_0_15px_rgba(165,180,252,1)] transition-all duration-[1.5s] ease-out ${isVisible ? 'w-[70%]' : 'w-0'}`}></div>
        
        {/* Intense Core Glow */}
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 h-37.5 bg-linear-to-b from-indigo-500/50 to-transparent blur-[50px] rounded-[100%] transition-all duration-[1.5s] delay-100 ease-out ${isVisible ? 'w-[60%] opacity-100' : 'w-0 opacity-0'}`}></div>
        
        {/* Wide Ambient Glow */}
        <div className={`absolute top-[-50px] left-1/2 -translate-x-1/2 w-full h-[500px] bg-purple-600/10 blur-[90px] rounded-[50%] transition-all duration-[2s] delay-300 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
          Step into the Future of AI <br />
          <span className="text-slate-300">Interview Prep</span>
        </h2>
        
        <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Unlock the future of career advancement with our cutting-edge, AI-powered platform. 
          Let AI do the heavy lifting for your preparation, so you can focus on what matters most—your confidence.
        </p>
        
        <button className="bg-white text-slate-950 hover:bg-slate-200 font-medium px-8 py-3.5 rounded-full inline-flex items-center gap-2 transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(255,255,255,0.1)] group">
          Get started for free
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Decorative side fades to blend edges */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#050505] to-transparent pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#050505] to-transparent pointer-events-none"></div>
    </section>
  );
};

export default CTA;