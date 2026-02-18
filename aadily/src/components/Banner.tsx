import  { useState, useEffect } from 'react';
import { Timer } from 'lucide-react';

export function Banner() {
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 59, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 4, minutes: 59, seconds: 0 }; 
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-linear-to-r from-slate-900 via-indigo-950 to-violet-900 text-slate-50 py-2.5 px-4 text-center text-sm font-medium relative z-50 shadow-lg border-b border-white/5">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
        
        {/* Promo Section */}
        <div className="flex items-center gap-3">
          <span className="bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-widest">
            Special Offer
          </span>
          <p className="text-slate-200">
            Get 20% OFF 'Aadily' — Use code 
            <span className="ml-2 font-bold text-amber-400 font-mono tracking-tighter">20RN</span>
          </p>
        </div>
        
        {/* Timer Section */}
        <div className="flex items-center gap-2.5 bg-white/5 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-mono border border-white/10 shadow-inner">
          <Timer className="w-4 h-4 text-violet-400" />
          <span className="text-violet-100">
            {String(timeLeft.hours).padStart(2, '0')}h
            <span className="animate-pulse mx-0.5">:</span>
            {String(timeLeft.minutes).padStart(2, '0')}m
            <span className="animate-pulse mx-0.5">:</span>
            {String(timeLeft.seconds).padStart(2, '0')}s
          </span>
        </div>
      </div>
    </div>
  );
}