import React from "react";
interface PartnersProps {
  onExploreClick?: () => void; // Prop register kiya
}

export const Partners: React.FC<PartnersProps> = ({ onExploreClick }) => {
  const logos = [
    "/images/logoipsum-426.png",
    "/images/logoipsum-386.png",
    "/images/logoipsum-327.png",
    "/images/logoipsum-289.png",
    "/images/logoipsum-246.png",
    "/images/logoipsum-338.png",
    "/images/logoipsum-389.png",
    "/images/logoipsum-358.png",
  ];

  return (
    <section className="bg-white py-24 lg:py-32 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6">
        {/* ─── IMPROVED TOP HEADING ─── */}
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="h-[2px] w-8 md:w-12 bg-blue-600"></span>
            <h2 className="text-sm md:text-base font-[1000] text-slate-900 uppercase tracking-[0.5em]">
              Powering Global Logistics
            </h2>
            <span className="h-[2px] w-8 md:w-12 bg-blue-600"></span>
          </div>
          <p className="text-slate-400 text-xs font-bold tracking-widest">
            TRUSTED BY 500+ ENTERPRISES WORLDWIDE
          </p>
        </div>

        {/* ─── LOGO MARQUEE (Tailwind 4 Ready) ─── */}
        <div className="marquee-container relative mb-40">
          <div className="relative flex overflow-hidden">
            <div className="animate-marquee-infinite flex items-center gap-20 md:gap-32">
              {[...logos, ...logos].map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt="Partner"
                  className="h-7 md:h-9 w-auto object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
                />
              ))}
            </div>
            {/* Soft Fades on Edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent"></div>
          </div>
        </div>

        {/* ─── MAIN SOLUTIONS SECTION ─── */}
        <div className="text-center max-w-5xl mx-auto">
          {/* Niche wali heading ka naya unique style */}
          <h3 className="text-6xl sm:text-7xl lg:text-[110px] font-[1000] text-slate-950 tracking-[-0.05em] leading-[0.85] uppercase text-center">
            Streamline your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 italic font-[900] tracking-tight">
              entire operations
            </span>
          </h3>

          <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto leading-tight font-bold tracking-tight mb-12">
            We build precision-engineered supply chain tools that transform
            complex logistics into actionable data.
          </p>

          <button
            onClick={onExploreClick} // Yeh line attach kar dein bas!
            className="group relative inline-flex items-center gap-3 bg-slate-950 text-white px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest overflow-hidden transition-all cursor-pointer"
          >
            <span className="relative z-10">Explore solutions</span>
            <svg
              className="relative z-10 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
            <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
};
