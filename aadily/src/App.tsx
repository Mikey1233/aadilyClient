import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "./components/Hero";
import ProductShowcase from "./components/ProductShowcase";
import Quote from "./components/Quote";
import { Pricing } from "./components/Pricing";
import HowItWorks from "./components/HowItWorks";
import { ToolsConnect } from "./components/ToolsConnect";
import Testimonials from "./components/Testimonials";
import Cta from "./components/Cta";
import FooterSignature from "./components/FooterSignature";


const App: React.FC = () => {
  return ( 
   
 <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />

      <main>
        <Hero />
        <ProductShowcase />
        <HowItWorks />
        <Quote />
        <ToolsConnect />
        <Testimonials />
        <Pricing />
        <Cta/>

        {/* Features Section to pad out the landing page */}
        {/* <section id="features" className="py-24 bg-slate-50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Everything you need to succeed</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Our AI-powered platform gives you the unfair advantage in today's competitive job market.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Mic className="text-indigo-600" size={24} />,
                  title: "Real-time Voice Analysis",
                  desc: "Get instant feedback on your tone, pace, and clarity during mock interviews."
                },
                {
                  icon: <Code2 className="text-purple-600" size={24} />,
                  title: "Live Coding Assistance",
                  desc: "Stuck on a LeetCode problem? Copilot offers subtle hints without giving away the answer."
                },
                {
                  icon: <Brain className="text-pink-600" size={24} />,
                  title: "Behavioral Coaching",
                  desc: "Master the STAR method with AI that analyzes your storytelling and impact."
                },
                {
                  icon: <Zap className="text-yellow-600" size={24} />,
                  title: "Instant Feedback Loop",
                  desc: "Receive a detailed scorecard immediately after every practice session."
                },
                 {
                  icon: <Shield className="text-green-600" size={24} />,
                  title: "Private & Secure",
                  desc: "Your practice sessions are private. We never share your data with employers."
                },
                 {
                  icon: <Globe className="text-blue-600" size={24} />,
                  title: "Company Specific",
                  desc: "Practice with questions curated from specific companies like Google, Meta, and Amazon."
                },
              ].map((feature, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow group">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section> */}
      </main>

      <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>
                  <a href="#" className="hover:text-indigo-600">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-600">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-600">
                    Enterprise
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>
                  <a href="#" className="hover:text-indigo-600">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-600">
                    Interview Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-600">
                    Question Bank
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>
                  <a href="#" className="hover:text-indigo-600">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-600">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-600">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>
                  <a href="#" className="hover:text-indigo-600">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-600">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-100">
            <p className="text-slate-500 text-sm">
              © 2026 Aadily AI. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
             
              {/* <AnimatedThemeTogglerDemo/> */}
              {/* Social placeholders */}
              <div className="w-5 h-5 bg-slate-200 rounded-full"></div>
              <div className="w-5 h-5 bg-slate-200 rounded-full"></div>
              <div className="w-5 h-5 bg-slate-200 rounded-full"></div>
            </div>
          </div>
        </div>
      </footer>
     <FooterSignature/>
    </div>
   
   
  );
};

export default App;
