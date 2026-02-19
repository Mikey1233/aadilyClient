import React, { useRef, useEffect } from "react";

const FooterSignature: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const maskRef = useRef<SVGRadialGradientElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!maskRef.current) return;

      const rect = svg.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Map mouse position to SVG percentage coordinates
      const xPct = (x / rect.width) * 100;
      const yPct = (y / rect.height) * 100;

      maskRef.current.setAttribute("cx", `${xPct}%`);
      maskRef.current.setAttribute("cy", `${yPct}%`);
    };

    svg.addEventListener("mousemove", handleMouseMove);
    return () => svg.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="bg-white border-t border-slate-100 py-2 md:py-12 select-none relative z-10">

      <div className="w-full h-80 flex items-center justify-center overflow-hidden">
        <svg
          ref={svgRef}
          width="100%"
          height="100%"
          viewBox="0 0 1000 300"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            {/* Colorful gradient for the revealed strokes */}
            <linearGradient
              id="textGradient"
              gradientUnits="userSpaceOnUse"
              cx="50%"
              cy="50%"
              r="25%"
            >
              <stop offset="0%" stopColor="#6366f1" /> {/* Indigo */}
              <stop offset="50%" stopColor="#d946ef" /> {/* Fuchsia */}
              <stop offset="100%" stopColor="#ec4899" /> {/* Pink */}
            </linearGradient>

            {/* The flashlight beam mask - white reveals, black hides */}
            <radialGradient
              id="revealMask"
              ref={maskRef}
              gradientUnits="userSpaceOnUse"
              r="25%"
              cx="50%"
              cy="50%"
            >
              <stop offset="0%" stopColor="white" />
              <stop offset="100%" stopColor="black" />
            </radialGradient>

            <mask id="textMask">
              <rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                fill="url(#revealMask)"
              />
            </mask>
          </defs>

          {/* Base Text (Inactive state) - Faint grey outline */}
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            strokeWidth="1.5"
            className=" font-bold text-[210px] fill-transparent stroke-slate-200"
            style={{ letterSpacing: "-0.01em" }}
          >
            Aadily
          </text>

          {/* Active Text (Flashlight effect) - Gradient stroke revealed by mask */}
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            strokeWidth="1.5"
            className=" font-bold text-[210px] fill-transparent troke-slate-200"
            stroke="url(#textGradient)"
            mask="url(#textMask)"
            style={{ letterSpacing: "-0.01em" }}
          >
            Aadily
          </text>
        </svg>
      </div>
    </section>
  );
};

export default FooterSignature;

