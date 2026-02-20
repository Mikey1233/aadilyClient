import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials: React.FC = () => {
const testimonials = [
    {
      quote: "I used to freeze up during behavioral rounds. Having Aadily sync to my phone was a game-changer; I could glance at my talking points without ever breaking eye contact with the recruiter.",
      name: "Sarah Jenkins",
      title: "Marketing Director",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150"
    },
    {
      quote: "The 'Private Command Center' on my phone is pure genius. It pulled specific metrics from my resume I'd completely forgotten about. Landed a senior role at a top firm in two weeks.",
      name: "Michael Chen",
      title: "Project Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150"
    },
    {
      quote: "Aadily is a lifesaver for the 'Tell me about a time' questions. It instantly mapped my past wins to the STAR method. My interviewer actually complimented how structured my answers were.",
      name: "Emily Rodriguez",
      title: "Operations Manager",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150"
    },
    {
      quote: "As a Sales Lead, confidence is everything. Knowing Aadily was in my browser sidebar analyzing the job description and suggesting rebuttals gave me the edge I needed to close the deal on my new job.",
      name: "James Patel",
      title: "Account Executive",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150"
    },
    {
      quote: "The stealth setup is perfect. I used the mobile extension during a Zoom call, and it felt like having a career coach whispering the right keywords in my ear. Got two offers in the same month!",
      name: "Lisa Nguyen",
      title: "Customer Success Manager",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150"
    },
    {
      quote: "I was terrified of the 'Business Case' round. Aadily broke down the prompt and gave me a framework to answer instantly on my second screen. I’ve never felt more prepared for an interview.",
      name: "David Kim",
      title: "Business Analyst",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150"
    }
];

  const CARDS_PER_PAGE = 3;
  const totalPages = Math.ceil(testimonials.length / CARDS_PER_PAGE);
  const [currentPage, setCurrentPage] = useState(0);
  // Track direction for the slide animation
  const [direction, setDirection] = useState(0);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const visibleTestimonials = testimonials.slice(
    currentPage * CARDS_PER_PAGE,
    currentPage * CARDS_PER_PAGE + CARDS_PER_PAGE
  );

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        {/* <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
            Don't Take Our Word for It. Hear<br />
            What Our Community Has to Say
          </h2>
        </div> */}
        <div className="mx-auto space-y-5 py-3 text-center"><h2 className="text-blue-500 font-mono text-[14px] font-medium tracking-tight">Testimonials</h2><h2 className="mx-auto mb-2 max-w-3xl text-balance text-[42px] font-medium leading-tight tracking-tighter">Don’t Take Our Word for It. Hear What Our Community Has to Say</h2></div>

        {/* Animated Cards Container */}
        <div className="relative mb-16 min-h-112.5">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentPage}
              custom={direction}
              variants={{
                enter: (direction: number) => ({
                  x: direction > 0 ? 50 : -50,
                  opacity: 0,
                }),
                center: {
                  x: 0,
                  opacity: 1,
                },
                exit: (direction: number) => ({
                  x: direction < 0 ? 50 : -50,
                  opacity: 0,
                }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {visibleTestimonials.map((item, _index) => (
                <div
                  key={item.name}
                  className="relative bg-white p-8 md:p-10 border border-slate-200 rounded-sm flex flex-col items-center text-center h-full hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Corner Dots Decoration */}
                  <div className="absolute top-3 left-3 w-1 h-1 bg-slate-900"></div>
                  <div className="absolute top-3 right-3 w-1 h-1 bg-slate-900"></div>
                  <div className="absolute bottom-3 left-3 w-1 h-1 bg-slate-900"></div>
                  <div className="absolute bottom-3 right-3 w-1 h-1 bg-slate-900"></div>

                  {/* Quote */}
                  <p className="text-slate-700 text-lg leading-relaxed mb-8 grow">
                    {item.quote}
                  </p>

                  {/* Author Info */}
                  <div className="mt-auto flex flex-col items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 rounded-xl object-cover mb-4 shadow-sm"
                    />
                    <h4 className="font-bold text-slate-900 text-lg">{item.name}</h4>
                    <p className="text-slate-500 text-sm mt-1">{item.title}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-95"
          >
            <ArrowLeft size={20} />
          </button>

          {/* Page Dots */}
          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > currentPage ? 1 : -1);
                  setCurrentPage(i);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === currentPage ? 'bg-slate-900 w-4' : 'bg-slate-300 w-2'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-95"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;