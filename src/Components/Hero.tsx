import React from "react";

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[90vh] pt-40 pb-20 flex items-center justify-center bg-gradient-to-b from-blue-50/20 via-white to-white overflow-hidden px-4 font-sans">
      {/* ─── GRID MESH BACKGROUND ─── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Static Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage:
              "linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)",
            backgroundSize: "100px 100px",
          }}
        />

        {/* Left Side Grid Structure */}
        <div className="absolute left-[8%] top-[10%] w-[250px] h-[350px] border-l-2 border-b border-dashed border-blue-400 rounded-bl-3xl hidden lg:block">
          <div className="absolute top-0 left-0 w-2 h-2 bg-blue-500 rounded-full -translate-x-[5px]" />
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-blue-500 rounded-full translate-y-[5px]" />
        </div>
        <div className="absolute left-[2%] top-[45%] w-[300px] h-[150px] border-l border-t border-dashed border-blue-400 hidden lg:block rounded-tl-xl">
          <div className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-blue-500 rounded-full -translate-x-[4px]" />
        </div>
        <div className="absolute top-[28%] left-1/2 -translate-x-1/2 w-[700px] h-[600px] bg-blue-100/20 rounded-full blur-3xl pointer-events-none" />
        {/* ─── FIX 2: Right Side Lines & Additional Depth Structure ─── */}

        {/* Rearranged Primary Right Line (Bigger, more fluid loop)
           Humne width 300px hi rakhi hai, lekin initial node reposition ki hai balance karne ke liye.
        */}
        <div className="absolute right-[8%] top-[15%] w-[300px] h-[300px] border-r-2 border-b border-dashed border-blue-400/90 rounded-br-[40px] hidden lg:block">
          {/* Initial Node */}
          <div className="absolute top-0 right-0 w-2 h-2 bg-blue-500 rounded-full translate-x-[5px]" />
          {/* Loop Endpoint Node */}
          <div className="absolute bottom-0 left-0 w-2 h-2 bg-blue-500 rounded-full translate-y-[5px]" />
        </div>

        {/* Humne ek nayi, intricate intersecting line apply ki hai jo loop ke andar se passing flow degi.
           Yeh mazeed professional aur dynamic background design feel karega.
        */}
        <div className="absolute right-[3%] top-[38%] w-[280px] h-[180px] border-r border-t border-dashed border-blue-400 hidden lg:block rounded-tr-xl opacity-70">
          <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-blue-500 rounded-full -translate-y-[4px]" />
        </div>

        {/* Soft Radial Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* ─── HERO CONTENT ─── */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Tagline Badge */}
        <div className="inline-flex items-center gap-2 bg-white/60 border border-slate-200/70 px-4 py-1.5 rounded-full mb-15 shadow-sm">
          <span className="text-sm font-medium text-slate-600 tracking-wide">
            Smarter Supply Chain Solutions
          </span>
        </div>

        {/* Main Heading (Stylish with animation and subtle gradient) */}
        <h1
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-950 tracking-tight leading-[1.12] mb-8
                       animate-[fadeInDown_1.2s_ease-out_0s_forwards] opacity-0 -translate-y-8 font-sans"
        >
          Smart solutions for <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-950 via-slate-900 to-slate-800 font-extrabold">
            complex supply chains.
          </span>
        </h1>

        {/* Description (With animation and delay) */}
        <p
          className="text-base sm:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed mb-14 px-2
                      animate-[fadeInDown_1.2s_ease-out_0.3s_forwards] opacity-0 -translate-y-6"
        >
          Unlock efficiency across your entire operation with expert-driven
          strategies. We help businesses transform their logistics, reduce
          costs, and enhance performance from end to end.
        </p>

        {/* Call to Actions (With animation and delay) */}
        <div
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto
                        animate-[fadeInDown_1.2s_ease-out_0.6s_forwards] opacity-0 -translate-y-4"
        >
          <button className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-xl transition-all shadow-sm active:scale-98 cursor-pointer">
            Request a Consultation
          </button>
          <button className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-lg shadow-blue-200 active:scale-98 cursor-pointer">
            Explore Services
          </button>
        </div>

        {/* ─── ULTRA-PREMIUM HEAVY DEPTH SECTION ─── */}
        <div className="relative w-full max-w-6xl mx-auto mt-36 md:mt-48 px-6 group">
          {/* 
      1. THE BEAM GLOW (Pic ke piche ek solid blue roshni)
      Ye "light" feel ko khatam karke depth add karega.
  */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 blur-[100px] rounded-[4rem] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

          <div className="relative animate-fade-in-up [animation-delay:400ms] opacity-0">
            {/* 
        2. THE HEAVY FRAME:
        - Humne border ko '2px' kiya hai aur color ko thoda 'Solid' (slate-900).
        - Shadow ko 'Ultra-Heavy' kiya hai.
    */}
            <div className="relative bg-slate-950 p-1.5 md:p-2 rounded-[2.2rem] md:rounded-[3.2rem] shadow-[0_60px_120px_-20px_rgba(0,0,0,0.5)] transform transition-transform duration-700 group-hover:-rotate-1 group-hover:scale-[1.01]">
              {/* Inner Container with Inset Glow */}
              <div className="relative overflow-hidden rounded-[1.8rem] md:rounded-[2.8rem] bg-slate-900">
                {/* 
            3. IMAGE ZOOM & OVERLAY:
            Image thodi dark rakhi hai taaki dashboard ke colors "pop" karein.
        */}
                <img
                  src="/images/hero.avif"
                  alt="Premium Dashboard"
                  className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transform transition-all duration-[2s] ease-out group-hover:scale-110"
                />

                {/* 
            4. THE NEON BORDER (Inner):
            Image ke bilkul andar ek chamakti hui line.
        */}
                <div className="absolute inset-0 rounded-[1.8rem] md:rounded-[2.8rem] border-[1.5px] border-white/10 pointer-events-none" />

                {/* 5. VIGNETTE (Edges ko dark karne ke liye) */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/40 pointer-events-none" />
              </div>

              {/* 
          6. DYNAMIC UI OVERLAY (The "Heavy" Element):
          Ek floating badge jo screen se bahar nikalta hua mehsoos ho.
      */}
              <div className="absolute -top-10 -left-6 hidden lg:flex items-center gap-4 bg-white p-5 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.2)] border border-slate-100 animate-float">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">
                    AI Processing
                  </p>
                  <p className="text-lg font-black text-slate-900 leading-none">
                    Active Now
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
