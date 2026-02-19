//

import React, { useEffect, useState } from "react";
import {
  Zap,
  Triangle,
  
  LayoutGrid,
  User2,
  Bot,
} from "lucide-react";
import { Ripple } from "@/components/ui/ripple";

const ProductShowcase: React.FC = () => {
  const [animationStep, setAnimationStep] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);

  const fullMessage =
    " Based on your calendar patterns and preferences, I recommend scheduling the team meeting for Tuesday at 2pm. This time slot has historically had the highest attendance rate, and it avoids conflicts with other recurring meetings.";

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
            Empower Your Workflow with AI
          </h2>
          <p className="text-muted-foreground text-center text-balance font-medium">
            Ask your AI Agent for real-time collaboration, seamless
            integrations, and actionable insights to streamline your operations.
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
                    Hey, I need help scheduling a team meeting that works well
                    for everyone. Any suggestions for finding an optimal time
                    slot?
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
                Real-time AI Collaboration
              </h3>
              <p className="text-slate-500 leading-relaxed text-base">
                Experience real-time assistance. Ask your AI Agent to coordinate
                tasks, answer questions, and maintain team alignment.
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
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center shadow-lg border-2 border-gray-700">
                  <Zap size={20} className="text-green-400 fill-green-400" />
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
                Seamless Integrations
              </h3>
              <p className="text-slate-500 leading-relaxed text-base">
                Unite your favorite tools for effortless connectivity. Boost
                productivity through interconnected workflows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
