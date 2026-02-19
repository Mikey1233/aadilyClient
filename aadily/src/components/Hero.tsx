import React from 'react';
import { ArrowRight, PlayCircle, CheckCircle2, Star } from 'lucide-react';
// import heroBg from "../assets/hero-mockup.png";
import { Safari } from './ui/safari';
import notebook from "../assets/notebook.png";
import chat from "../assets/chat.png"

import { Button } from "@/components/ui/button"
import { BorderBeam } from "@/components/ui/border-beam"


const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-10 lg:pt-48 lg:pb-10 overflow-hidden selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-200/40 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] bg-blue-200/40 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] bg-indigo-100/40 rounded-full blur-[120px]" />
      </div>

      {/* Floating 3D Objects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden max-w-480 mx-auto">
        {/* Left Side Elements */}
        <div className="hidden lg:block absolute top-[20%] left-[5%] animate-float hover:scale-110 transition-transform duration-500">
          <div className="relative w-20 h-20 bg-white rounded-2xl shadow-[0_20px_40px_-15px_rgba(79,70,229,0.3)] flex items-center justify-center transform -rotate-12 border border-slate-100/50 backdrop-blur-sm z-10">
            <div className="absolute inset-0 bg-linear-to-br from-indigo-50/50 to-white/50 rounded-2xl"></div>
            {/* <Code2 className="text-indigo-600 relative z-10 drop-shadow-sm" size={40} strokeWidth={1.5} /> */}
            <img src={chat}/>
          </div>
        </div>

        {/* <div className="hidden lg:block absolute bottom-[30%] left-[12%] animate-float-delayed hover:scale-110 transition-transform duration-500">
          <div className="relative w-16 h-16 bg-white rounded-2xl shadow-[0_20px_40px_-15px_rgba(236,72,153,0.3)] flex items-center justify-center transform rotate-6 border border-slate-100/50 backdrop-blur-sm z-10">
            <div className="absolute inset-0 bg-linear-to-br from-pink-50/50 to-white/50 rounded-2xl"></div>
            <BookOpen className="text-pink-500 relative z-10 drop-shadow-sm" size={32} strokeWidth={1.5} />
          </div>
        </div> */}

        {/* Right Side Elements */}
        <div className="hidden lg:block absolute top-[25%] right-[5%] animate-float-slow hover:scale-110 transition-transform duration-500">
          <div className="relative w-24 h-24 bg-white rounded-3xl shadow-[0_20px_40px_-15px_rgba(245,158,11,0.3)] flex items-center justify-center transform rotate-12 border border-slate-100/50 backdrop-blur-sm z-10">
             <div className="absolute inset-0 bg-linear-to-br from-amber-50/50 to-white/50 rounded-3xl"></div>
             {/* <Headphones className="text-amber-500 relative z-10 drop-shadow-sm" size={48} strokeWidth={1.5} /> */}
             <img src={notebook}/>
          </div>
        </div>

        <div className="hidden lg:block absolute bottom-[25%] right-[15%] animate-float hover:scale-110 transition-transform duration-500">
           <div className="relative w-14 h-14 bg-white rounded-xl shadow-[0_20px_40px_-15px_rgba(16,185,129,0.3)] flex items-center justify-center transform -rotate-6 border border-slate-100/50 backdrop-blur-sm z-10">
              <div className="absolute inset-0 bg-linear-to-br from-emerald-50/50 to-white/50 rounded-xl"></div>
              <Star className="text-emerald-500 relative z-10 drop-shadow-sm" size={28} fill="currentColor" strokeWidth={0} />
           </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center relative z-10">
        
        {/* Pill Badge */}
        <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s' }}>
          <a href="#" className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-colors group shadow-sm mb-8">
            <span className="text-xs font-semibold bg-linear-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              ✨ Introducing Intervue AI
            </span>
            <ArrowRight size={12} className="text-slate-400 group-hover:text-indigo-500 group-hover:translate-x-0.5 transition-all" />
             <BorderBeam
        size={40}
        initialOffset={20}
        className="from-transparent via-yellow-500 to-transparent"
        transition={{
          type: "spring",
          stiffness: 60,
          damping: 20,
        }}
      />
          </a>
          {/* <BorderBeam/> */}
         

        </div>

        {/* Main Headline */}
        <h1 className="animate-fade-in-up opacity-0 max-w-4xl text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6" style={{ animationDelay: '0.2s' }}>
          Ace Your Interviews <br className="hidden sm:block" />
          With <span className="bg-linear-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">Real-Time AI</span>
        </h1>

        {/* Subheadline */}
        <p className="animate-fade-in-up opacity-0 max-w-2xl text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed" style={{ animationDelay: '0.3s' }}>
          Your personal AI copilot for technical and behavioral interviews. 
          Get instant feedback, coding hints, and confidence boosters live.
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-in-up opacity-0 flex flex-col sm:flex-row items-center gap-4 mb-16" style={{ animationDelay: '0.4s' }}>
          <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-medium text-base transition-all transform hover:-translate-y-0.5 shadow-lg shadow-slate-900/20 flex items-center justify-center gap-2 group">
            Start preparing for free
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 font-medium text-base transition-all flex items-center justify-center gap-2">
            <PlayCircle size={18} className="text-slate-400" />
            Watch Demo
          </button>
        </div>

        {/* Trust Badges */}
        <div className="animate-fade-in-up opacity-0 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-slate-500 font-medium mb-20" style={{ animationDelay: '0.5s' }}>
          <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" /> No credit card required</span>
          <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" /> 14-day free trial</span>
          <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" /> Cancel anytime</span>
        </div>

        {/* Interactive Demo Section - The "Functional" Part */}
        <div className="w-full backdrop:backdrop-blur-2xl bg-white/20 p-2 rounded-2xl relative animate-fade-in-up opacity-0" style={{ animationDelay: '0.6s' }}>
        <div className="bg-[conic-gradient(from_230.29deg_at_51.63%_52.16%,#2400ff_0deg,#0087ff_67.5deg,#6c279d_198.75deg,#1826a3_251.25deg,#3667c4_301.88deg,#691eff_1turn)] -translate-x-1/2 absolute inset-0 left-1/2 h-1/4 w-3/4 animate-image-glow blur-[5rem] md:top-[10%] md:h-1/3"></div>
          

         <Safari
          url="aadily.com"
          className='object-fit'
        imageSrc={''}
          />
          
        
          </div>
        
             
        </div>

      </div>
    // </div>
  );
};

export default Hero;