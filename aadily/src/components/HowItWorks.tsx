import React from "react";
import { FileText, Check } from "lucide-react";

const HowItWorks: React.FC = () => {
  return (
    <section className="bg-white  border-t border-slate-100">
      <div className="mx-auto space-y-5 py-6 text-center">
        <h2 className="text-blue-500 font-mono text-[14px] font-medium tracking-tight">
          How it works
        </h2>
        <h2 className="mx-auto  max-w-3xl text-balance text-[42px] font-medium leading-tight tracking-tighter">
          Smarter Interview Prep in 3 Simple Steps
        </h2>
      </div>
      <div className="mx-auto flex max-w-6xl items-center pt-10 justify-center pb-24 px-4 sm:px-6 lg:px-8">
        <div className="grid h-full gap-8 lg:grid-cols-3 w-full">
          {/* Card 1: Configure */}
          <div className="relative h-full min-h-125 rounded-[20px] bg-[#f7f7f8] p-0 lg:col-span-1 overflow-hidden group hover:shadow-md transition-shadow duration-300">
            {/* Step 1 Arrow */}
            <div className="absolute -top-20 left-1/2 hidden size-fit -translate-x-1/2 items-center justify-center object-contain lg:flex flex-col">
              <span className="font-medium text-slate-500 mb-2">Step 1</span>
              <svg
                width="72"
                height="72"
                viewBox="0 0 72 72"
                fill="none"
                className="size-14 text-slate-400"
              >
                <path
                  d="M15.9441 15.8748C19.7179 15.0705 23.7632 14.8586 27.5765 15.5585C36.0702 17.1174 42.6422 22.0592 46.8543 29.5804C50.5526 36.1843 52.4659 44.153 52.3442 51.7058C52.3153 53.4997 51.9273 55.4879 51.2695 57.1085"
                  stroke="currentColor"
                  strokeOpacity="0.65"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
                <path
                  d="M42.5383 48.4746L50.5848 57.731C50.8387 58.0231 51.2814 58.0541 51.5735 57.8002L61.3588 49.2939"
                  stroke="currentColor"
                  strokeOpacity="0.65"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="flex size-full flex-col items-center justify-between gap-y-3.5 p-5 pt-10">
              <p className="flex items-center justify-center text-xl font-semibold text-slate-900">
                Personalize
              </p>

              {/* Visual Container */}
              <div className="relative z-1 mx-auto flex w-full max-w-60 flex-col items-start gap-y-2 rounded-[10px] bg-white p-2.5 shadow-sm border border-slate-100/50">
                {/* Background Decoration */}
                <div className="absolute left-1/2 top-1/2 z-[-1] size-[calc(100%+20px)] -translate-x-1/2 -translate-y-1/2 border border-slate-100 bg-linear-to-b from-slate-50/50 to-transparent rounded-xl"></div>

                {/* Document */}
                <div className="relative aspect-3/4 w-full overflow-hidden rounded-md bg-slate-50 border border-slate-100">
                  {/* Scanning Effect */}
                  <div className="absolute inset-x-0 top-0 z-20 h-14 w-full rounded-md border-b border-indigo-500/20 bg-linear-to-b from-indigo-500/5 via-indigo-500/10 to-transparent animate-scan"></div>

                  {/* Content Skeleton */}
                  <div className="flex w-full flex-col gap-3 p-4">
                    <div className="h-2 w-1/2 rounded-full bg-slate-200"></div>
                    <div className="h-1.5 w-3/4 rounded-full bg-slate-100"></div>
                    <div className="h-1.5 w-full rounded-full bg-slate-100"></div>
                    <div className="h-16 w-full rounded-lg bg-slate-100 mt-2"></div>
                    <div className="space-y-2 mt-2">
                      <div className="h-1.5 w-full rounded-full bg-slate-100"></div>
                      <div className="h-1.5 w-5/6 rounded-full bg-slate-100"></div>
                      <div className="h-1.5 w-full rounded-full bg-slate-100"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex w-full items-start justify-center text-center pb-6">
                <p className="text-base font-normal text-slate-500 leading-relaxed max-w-xs">
                Upload your resume and job description. Aadily analyzes your experience and matches it to the role’s key requirements.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Practice */}
          <div className="relative h-full min-h-125 rounded-[20px] bg-[#f7f7f8] p-0 lg:col-span-1 overflow-hidden group hover:shadow-md transition-shadow duration-300">
            {/* Step 2 Arrow (Bottom) */}
            <div className="absolute -bottom-20 left-1/2 hidden size-fit -translate-x-1/2 items-center justify-center object-contain lg:flex flex-col-reverse">
              <span className="font-medium text-slate-500 mt-2">Step 2</span>
              <svg
                width="71"
                height="72"
                viewBox="0 0 71 72"
                fill="none"
                className="size-14 text-slate-400"
              >
                <path
                  d="M15.2749 55.7165C19.0488 56.5207 23.094 56.7327 26.9073 56.0328C35.401 54.4739 41.973 49.5321 46.1851 42.0108C49.8834 35.407 51.7967 27.4383 51.675 19.8855C51.6461 18.0915 51.2581 16.1034 50.6003 14.4828"
                  stroke="currentColor"
                  strokeOpacity="0.65"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
                <path
                  d="M41.8691 23.1166L49.9156 13.8603C50.1695 13.5681 50.6122 13.5372 50.9043 13.7911L60.6896 22.2974"
                  stroke="currentColor"
                  strokeOpacity="0.65"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="flex size-full flex-col items-center justify-between gap-y-3.5 p-5 pt-10">
              <p className="flex items-center justify-center text-xl font-semibold text-slate-900">
                Practice
              </p>

              {/* Visual Container */}
              <div className="relative flex size-full items-center justify-center py-8">
                <div className="relative w-full max-w-65 aspect-square">
                  {/* Nodes */}
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 z-20 bg-white p-3 rounded-xl shadow-md border border-slate-100 animate-bounce"
                    style={{ animationDuration: "3s" }}
                  >
                    <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                      <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                    </div>
                  </div>

                  <div className="absolute bottom-12 left-2 z-20 bg-white p-3 rounded-xl shadow-md border border-slate-100 animate-pulse-slow">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    </div>
                  </div>

                  <div
                    className="absolute bottom-12 right-2 z-20 bg-white p-3 rounded-xl shadow-md border border-slate-100 animate-pulse-slow"
                    style={{ animationDelay: "1s" }}
                  >
                    <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center">
                      <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                    </div>
                  </div>

                  {/* Connecting Lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-30">
                    <path
                      d="M130 50 Q 130 100 40 200"
                      stroke="#94a3b8"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="6 4"
                    />
                    <path
                      d="M130 50 Q 130 100 220 200"
                      stroke="#94a3b8"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="6 4"
                    />
                  </svg>

                  {/* Bar Chart at bottom */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-full max-w-45 h-16 flex items-end justify-between gap-1 opacity-50">
                    {[40, 70, 50, 90, 60, 30].map((h, i) => (
                      <div
                        key={i}
                        className="w-full bg-slate-300 rounded-t-sm animate-bar-grow"
                        style={{
                          height: `${h}%`,
                          animationDelay: `${i * 0.1}s`,
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex w-full items-start justify-center text-center pb-6">
                <p className="text-base font-normal text-slate-500 leading-relaxed max-w-xs">
                  Engage in AI-led voice conversations. We simulate real
                  interview pressure and dynamics.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Analyze */}
          <div className="relative h-full min-h-125 rounded-[20px] bg-[#f7f7f8] p-0 lg:col-span-1 overflow-hidden group hover:shadow-md transition-shadow duration-300">
            {/* Step 3 Arrow */}
            <div className="absolute -top-20 left-1/2 hidden size-fit -translate-x-1/2 items-center justify-center object-contain lg:flex flex-col">
              <span className="font-medium text-slate-500 mb-2">Step 3</span>
              <svg
                width="71"
                height="72"
                viewBox="0 0 71 72"
                fill="none"
                className="size-14 text-slate-400"
              >
                <path
                  d="M55.1528 15.8747C51.379 15.0705 47.3337 14.8585 43.5204 15.5584C35.0267 17.1173 28.4547 22.0591 24.2427 29.5803C20.5444 36.1842 18.631 44.1529 18.7527 51.7057C18.7816 53.4996 19.1696 55.4878 19.8275 57.1084"
                  stroke="currentColor"
                  strokeOpacity="0.65"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
                <path
                  d="M28.5586 48.4745L20.5121 57.7309C20.2582 58.023 19.8155 58.054 19.5234 57.8001L9.7381 49.2938"
                  stroke="currentColor"
                  strokeOpacity="0.65"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="flex size-full flex-col items-center justify-between gap-y-3.5 p-5 pt-10">
              <p className="flex items-center justify-center text-xl font-semibold text-slate-900">
                Improve
              </p>

              {/* Visual Container */}
              <div className="relative flex size-full items-center justify-center py-8">
                <div className="relative flex items-center justify-center scale-110">
                  {/* Circle BG */}
                  <div className="absolute size-48 bg-white rounded-full shadow-sm border border-slate-100"></div>

                  {/* Paper Mockups */}
                  <div className="relative z-10 flex items-center gap-[-20px]">
                    {/* Paper Left */}
                    <div className="w-22 h-32 bg-white border border-slate-200 rounded-lg shadow-sm transform -rotate-12 translate-x-4 flex flex-col p-2 opacity-80">
                      <div className="w-full h-2 bg-slate-100 rounded mb-1"></div>
                      <div className="w-2/3 h-2 bg-slate-100 rounded"></div>
                    </div>
                    {/* Paper Right */}
                    <div className="w-22 h-32 bg-white border border-slate-200 rounded-lg shadow-sm transform rotate-12 -translate-x-4 flex flex-col p-2 opacity-80">
                      <div className="w-full h-2 bg-slate-100 rounded mb-1"></div>
                      <div className="w-2/3 h-2 bg-slate-100 rounded"></div>
                    </div>
                    {/* Paper Center */}
                    <div className="w-26 h-36 bg-white border mr-6 border-indigo-100 rounded-lg shadow-lg transform -translate-y-4 z-20 flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <FileText className="text-indigo-500 mb-2" size={24} />
                      <div className="w-16 h-2 bg-indigo-50 rounded mb-2"></div>
                      <div className="w-12 h-2 bg-indigo-50 rounded"></div>

                      {/* Checkmark */}
                      <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white border-4 border-white shadow-sm">
                        <Check size={14} strokeWidth={4} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex w-full items-start justify-center text-center pb-6">
                <p className="text-base font-normal text-slate-500 leading-relaxed max-w-xs">
                  Receive detailed feedback scores, transcripts, and actionable
                  improvement plans instantly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
