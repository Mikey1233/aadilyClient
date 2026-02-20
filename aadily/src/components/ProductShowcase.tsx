//

import React, { useEffect, useState } from "react";
import { Zap, Triangle, LayoutGrid, User2, Bot } from "lucide-react";
import { Ripple } from "@/components/ui/ripple";

const ProductShowcase: React.FC = () => {
  const [animationStep, setAnimationStep] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);

  const fullMessage =
    " Use the Q3 Brand Relaunch example. Mention how you reallocated the $50k budget toward social media. Highlight finishing 2 days early and a 25% reach increase.";

  /* -------------------------------
     Intersection Observer Trigger
  -------------------------------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && animationStep === 0) {
          setAnimationStep(1);
        }
      },
      { threshold: 0.5 },
    );

    const element = document.getElementById("chat-demo-trigger");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [animationStep]);

  /* -------------------------------
     Step Progression
  -------------------------------- */
  useEffect(() => {
    if (animationStep === 1) {
      const timer = setTimeout(() => setAnimationStep(2), 800);
      return () => clearTimeout(timer);
    }

    if (animationStep === 2) {
      const timer = setTimeout(() => {
        setAnimationStep(3);
        setIsStreaming(true);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [animationStep]);

  /* -------------------------------
     Streaming Effect
  -------------------------------- */
  useEffect(() => {
    if (!isStreaming) return;

    let index = 0;

    const streamText = () => {
      if (index < fullMessage.length) {
        setDisplayedText((prev) => prev + fullMessage.charAt(index));
        index++;

        const currentChar = fullMessage.charAt(index - 1);

        const delay =
          currentChar === "."
            ? 400
            : currentChar === ","
              ? 200
              : Math.random() * 35 + 25;

        setTimeout(streamText, delay);
      } else {
        setIsStreaming(false);
      }
    };

    streamText();
  }, [isStreaming]);

  return (
    <section className="pt-12 pb-24 border-t border-slate-100 bg-white">
      <div className=" w-full h-full p-5 md:p-7">
        <div className="max-w-xl mx-auto flex flex-col items-center justify-center gap-2">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-1">
            Never Miss a Beat During Your Interview
          </h2>
          <p className="text-muted-foreground text-center text-balance font-medium">
            Aadily acts as your real-time memory bank, so you can recall your
            best achievements under pressure.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* ================= CHAT COLUMN ================= */}
          <div className="flex  flex-col">
            <div
              id="chat-demo-trigger"
              className="bg-white  p-8 h-105 relative mb-8 border border-slate-100 overflow-hidden flex items-center"
            >
              {/* Decorative Background */}
              <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000000_1px,transparent_1px)] bg-size-[16px_16px]" />

              <div className="relative z-10 w-full max-w-md mx-auto space-y-6">
                {/* USER MESSAGE */}
                <div
                  className={`flex items-end justify-end gap-3 transition-all duration-500 transform ${
                    animationStep >= 1
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  <div className="bg-blue-600 text-white p-3 rounded-2xl  shadow-md  text-[14px] font-normal leading-relaxed max-w-70 wrap-break-word">
                    Michael, can you walk me through a situation where you were
                    under a tight deadline? What steps did you take to deliver
                    successfully?
                  </div>

                  <User2 className="w-10 h-10 rounded-full p-1 border-2 border-white shadow-sm shrink-0" />
                </div>

                {/* AI RESPONSE */}
                <div
                  className={`flex items-end justify-start gap-3 transition-all duration-500 ${
                    animationStep >= 2
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  <div className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center shadow-sm shrink-0 text-blue-600">
                    {/* <LinkIcon size={18} /> */}
                    <Bot size={18} />
                  </div>

                  <div className="relative">
                    {/* TYPING INDICATOR */}
                    {animationStep === 2 && (
                      <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 w-fit h-fit flex items-center justify-center">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.32s]" />
                          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.16s]" />
                          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" />
                        </div>
                      </div>
                    )}

                    {/* STREAMING MESSAGE */}
                    {animationStep >= 3 && (
                      <div className="bg-white text-slate-500 p-3 rounded-2xl shadow-sm border border-slate-100 text-[14px] leading-relaxed max-w-[320px] wrap-break-word transition-all duration-300">
                        {displayedText}

                        {isStreaming && (
                          <span className="inline-block w-0.5 h-4 bg-slate-400 ml-1 animate-pulse" />
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="px-2">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Experience live AI assistance
              </h3>
              <p className="text-slate-500 leading-relaxed text-base">
                Aadily shows CV-based bullet points instantly, eliminating
                awkward pauses and “umms” during interviews.
              </p>
            </div>
          </div>

          {/* ================= RIGHT COLUMN ================= */}
          <div className="flex flex-col">
            <div className="   h-105  relative mb-8 border border-slate-100 overflow-hidden flex items-center justify-center">
              <div className="relative z-20 w-16 h-16 bg-blue-600 rounded-2xl shadow-xl flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                <Zap className="text-white fill-white" size={32} />
              </div>

              <div className="absolute top-[18%] animate-float">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                  <Triangle className="text-white fill-white" size={18} />
                </div>
              </div>

              <div className="absolute top-[28%] right-[22%] animate-float-delayed">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg border border-slate-100">
                  <LayoutGrid size={16} className="text-orange-500" />
                </div>
              </div>

              <div className="absolute bottom-[25%] left-[25%] animate-float-slow">
                <div className="w-12 h-12 b rounded-full flex items-center justify-center ">
                  {/* <Zap size={20} className="text-green-400 fill-green-400" /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="96"
                    height="96"
                    viewBox="0 0 48 48"
                  >
                    <rect
                      width="16"
                      height="16"
                      x="12"
                      y="16"
                      fill="#fff"
                      transform="rotate(-90 20 24)"
                    ></rect>
                    <polygon
                      fill="#1e88e5"
                      points="3,17 3,31 8,32 13,31 13,17 8,16"
                    ></polygon>
                    <path
                      fill="#4caf50"
                      d="M37,24v14c0,1.657-1.343,3-3,3H13l-1-5l1-5h14v-7l5-1L37,24z"
                    ></path>
                    <path
                      fill="#fbc02d"
                      d="M37,10v14H27v-7H13l-1-5l1-5h21C35.657,7,37,8.343,37,10z"
                    ></path>
                    <path
                      fill="#1565c0"
                      d="M13,31v10H6c-1.657,0-3-1.343-3-3v-7H13z"
                    ></path>
                    <polygon fill="#e53935" points="13,7 13,17 3,17"></polygon>
                    <polygon
                      fill="#2e7d32"
                      points="38,24 37,32.45 27,24 37,15.55"
                    ></polygon>
                    <path
                      fill="#4caf50"
                      d="M46,10.11v27.78c0,0.84-0.98,1.31-1.63,0.78L37,32.45v-16.9l7.37-6.22C45.02,8.8,46,9.27,46,10.11z"
                    ></path>
                  </svg>
                </div>
              </div>

              <Ripple
                numCircles={7}
                mainCircleOpacity={0.24}
                mainCircleSize={220}
              />
            </div>

            <div className="px-2">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Smart, Seamless Interview Intelligence
              </h3>
              <p className="text-slate-500 leading-relaxed text-base">
                Analyzes your resume and delivers seamless integration with
                Google meet, Zoom, Team. Get personalized interview prompts in
                real time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
