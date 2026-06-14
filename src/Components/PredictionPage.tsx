import React, { useState, forwardRef } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts";

interface PredictionInput {
  paymentType: string;
  actualDays: string;
  scheduledDays: string;
  benefitPerOrder: string;
  salesPerCustomer: string;
}

// Static dynamic historical dashboard data matrix matching premium theme
const performanceData = [
  { name: "Batch Alpha", Scheduled: 15, Actual: 25, Benefit: 200 },
  { name: "Batch Beta", Scheduled: 18, Actual: 10, Benefit: 450 },
  { name: "Batch Gamma", Scheduled: 20, Actual: 20, Benefit: 300 },
  { name: "Batch Delta", Scheduled: 12, Actual: 14, Benefit: 150 },
  { name: "Batch Epsilon", Scheduled: 22, Actual: 15, Benefit: 600 },
];

const riskDistribution = [
  { name: "Late Delivery", value: 40, color: "#ef4444" },
  { name: "Advance Dispatch", value: 35, color: "#10b981" },
  { name: "On Time Perfect", value: 25, color: "#3b82f6" },
];

export const PredictionPage = forwardRef<HTMLDivElement>((_, ref) => {
  const [formData, setFormData] = useState<PredictionInput>({
    paymentType: "DEBIT",
    actualDays: "",
    scheduledDays: "",
    benefitPerOrder: "",
    salesPerCustomer: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<string | null>(null);

  const numericFields = [
    {
      name: "actualDays",
      label: "Actual Shipping Days",
      placeholder: "e.g., 24",
    },
    {
      name: "scheduledDays",
      label: "Scheduled Shipping Days",
      placeholder: "e.g., 20",
    },
    {
      name: "benefitPerOrder",
      label: "Benefit Per Order ($)",
      placeholder: "e.g., 890",
    },
    {
      name: "salesPerCustomer",
      label: "Sales Per Customer ($)",
      placeholder: "e.g., 1250",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // =========================================================
  // 🔗 REAL BACKEND CONNECTIVITY LOGIC (UI UNTOUCHED)
  // =========================================================
  const handlePredict = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    const payload = {
      payment_method: formData.paymentType,
      actual_days: Number(formData.actualDays),
      scheduled_days: Number(formData.scheduledDays),
      benefit_per_order: Number(formData.benefitPerOrder),
      sales_per_customer: Number(formData.salesPerCustomer),
    };

    try {
      const response = await fetch("https://supplychain-ai-engine-production.up.railway.app//predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data && data.prediction) {
        const statusUpper = data.prediction.toUpperCase();

        if (statusUpper === "LATE DELIVERY") {
          setResult("LATE");
        } else if (statusUpper === "ADVANCE DISPATCH") {
          setResult("ADVANCE");
        } else {
          setResult("ON_TIME");
        }
      } else {
        alert("ML Engine Error: Invalid prediction response format.");
      }
    } catch (error) {
      console.error("Backend server connection failed:", error);
      alert(
        "Could not connect to Python AI Server. Make sure FastAPI is running!",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      ref={ref}
      className="relative w-full py-28 lg:py-36 bg-slate-50/60 px-6 md:px-12 font-sans overflow-hidden border-t border-slate-100 flex flex-col items-center justify-center"
    >
      {/* ─── PREMIUM LAYERED GRID MESH BACKGROUND ─── */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.55]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(#e2e8f0 1.5px, transparent 1.5px), linear-gradient(90deg, #e2e8f0 1.5px, transparent 1.5px)",
            backgroundSize: "44px 44px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-slate-50" />
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto space-y-24">
        {/* ─── CONTROLS INTERACTIVE PANEL GRID ─── */}
        <div>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2.5 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-[11px] font-black text-blue-600 tracking-widest uppercase">
                LogixChain AI Intelligence Network
              </span>
            </div>

            <h2 className="text-5xl sm:text-6xl font-[1000] text-slate-950 tracking-[-0.04em] leading-none uppercase">
              Predict Operational <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-700 italic font-[900]">
                Risk & Status
              </span>
            </h2>
            <p className="text-sm md:text-base text-slate-500 max-w-xl mx-auto mt-5 font-medium leading-relaxed">
              Fill the shipment telemetry metrics below to simulate our raw
              intelligence machine learning diagnostics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch w-full">
            {/* ─── LEFT CARD: ULTRA-DEFINED TACTILE FORM CONTAINER ─── */}
            <div className="lg:col-span-7 bg-white border-2 border-slate-200/90 p-8 sm:p-10 rounded-[2.5rem] shadow-[0_20px_40px_-15px_rgba(15,23,42,0.06),0_1px_3px_rgba(0,0,0,0.02)] flex flex-col justify-between relative group overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <form onSubmit={handlePredict} className="space-y-6">
                <div className="relative flex flex-col">
                  <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2.5">
                    Payment Method Channel
                  </label>
                  <div className="relative">
                    <select
                      name="paymentType"
                      value={formData.paymentType}
                      onChange={handleChange}
                      className="w-full bg-slate-50/90 border-2 border-slate-200 text-slate-900 rounded-2xl px-5 py-4 text-sm font-black tracking-wide shadow-[inset_0_2px_4px_rgba(0,0,0,0.03)] focus:outline-none focus:border-blue-600 focus:bg-white focus:shadow-[0_0_0_4px_rgba(37,99,235,0.1)] transition-all cursor-pointer appearance-none"
                    >
                      {["DEBIT", "CASH", "PAYMENT", "TRANSFER"].map((type) => (
                        <option
                          key={type}
                          value={type}
                          className="bg-white text-slate-900 font-bold"
                        >
                          {type}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-500">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {numericFields.map((field) => (
                    <div key={field.name} className="relative flex flex-col">
                      <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2.5">
                        {field.label}
                      </label>
                      <input
                        type="number"
                        name={field.name}
                        required
                        placeholder={field.placeholder}
                        value={(formData as any)[field.name]}
                        onChange={handleChange}
                        className="w-full bg-slate-50/90 border-2 border-slate-200 text-slate-900 rounded-2xl px-5 py-4 text-sm font-black tracking-wide shadow-[inset_0_2px_4px_rgba(0,0,0,0.03)] focus:outline-none focus:border-blue-600 focus:bg-white focus:shadow-[0_0_0_4px_rgba(37,99,235,0.1)] transition-all placeholder:text-slate-300"
                      />
                    </div>
                  ))}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full group relative inline-flex items-center justify-center gap-3 bg-slate-950 text-white py-4.5 rounded-2xl font-black text-xs uppercase tracking-widest overflow-hidden transition-all shadow-[0_10px_25px_-5px_rgba(15,23,42,0.15)] active:scale-[0.99] cursor-pointer mt-6"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {loading
                      ? "Processing Neural Vectors..."
                      : "Run Intelligence Diagnostic"}
                  </span>
                  {!loading && (
                    <svg
                      className="relative z-10 w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 5l7 7-7 7M5 5l7 7-7 7"
                      />
                    </svg>
                  )}
                  <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>
              </form>
            </div>

            {/* ─── RIGHT CARD: HIGH-CONTRAST DIAGNOSTIC REPORT ─── */}
            <div className="lg:col-span-5 w-full flex flex-col items-stretch">
              {!result && !loading && (
                <div className="flex-1 bg-white border-2 border-slate-200 border-dashed p-10 rounded-[2.5rem] flex flex-col items-center justify-center text-center min-h-[380px] shadow-[inset_0_4px_12px_rgba(15,23,42,0.02)]">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 border-2 border-slate-200 flex items-center justify-center mb-5 text-sm shadow-sm text-slate-400 font-black font-mono">
                    //
                  </div>
                  <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest">
                    Awaiting Telemetry
                  </h3>
                  <p className="text-xs text-slate-400 max-w-[260px] mt-3 leading-relaxed font-semibold">
                    Provide operational metrics on the dynamic control deck to
                    initialize inference calculation tracking.
                  </p>
                </div>
              )}

              {loading && (
                <div className="flex-1 bg-slate-950 p-10 rounded-[2.5rem] flex flex-col items-center justify-center text-center min-h-[380px] shadow-[0_25px_50px_-12px_rgba(15,23,42,0.25)] border-2 border-slate-900 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15),transparent_70%)] animate-pulse" />
                  <div className="relative w-14 h-14 mb-6 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full border-4 border-blue-500/10" />
                    <div className="absolute inset-0 rounded-full border-4 border-t-blue-500 animate-spin" />
                  </div>
                  <p className="text-xs font-black text-blue-500 tracking-widest uppercase animate-pulse relative z-10">
                    Processing Neural Vectors...
                  </p>
                </div>
              )}

              {result && !loading && (
                <div
                  className={`flex-1 p-8 sm:p-10 rounded-[2.5rem] border-2 transition-all duration-500 flex flex-col justify-between relative overflow-hidden ${
                    result === "LATE"
                      ? "border-red-200 bg-gradient-to-b from-red-50/30 via-white to-white shadow-[0_25px_50px_-12px_rgba(239,68,68,0.06)]"
                      : result === "ADVANCE"
                        ? "border-emerald-200 bg-gradient-to-b from-emerald-50/30 via-white to-white shadow-[0_25px_50px_-12px_rgba(16,185,129,0.06)]"
                        : "border-blue-200 bg-gradient-to-b from-blue-50/30 via-white to-white shadow-[0_25px_50px_-12px_rgba(37,99,235,0.06)]"
                  }`}
                >
                  <div>
                    <div className="flex justify-between items-start border-b-2 border-slate-100 pb-6">
                      <div>
                        <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                          System Diagnostics
                        </h3>
                        <p className="text-lg font-black text-slate-950 mt-0.5">
                          Inference Generated
                        </p>
                      </div>
                      <span
                        className={`text-[10px] font-black tracking-widest px-3 py-1.5 rounded-xl uppercase border-2 shadow-sm ${
                          result === "LATE"
                            ? "bg-red-50 text-red-600 border-red-100"
                            : result === "ADVANCE"
                              ? "bg-emerald-50 text-emerald-600 border-emerald-100"
                              : "bg-blue-50 text-blue-600 border-blue-100"
                        }`}
                      >
                        {result === "LATE"
                          ? "Risk Alert"
                          : result === "ADVANCE"
                            ? "Optimal Speed"
                            : "In Sync"}
                      </span>
                    </div>

                    <div className="my-10">
                      <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase block mb-1.5">
                        Classification Output
                      </span>
                      <h4
                        className={`text-4xl sm:text-5xl font-[1000] uppercase tracking-[-0.04em] leading-none ${
                          result === "LATE"
                            ? "text-red-600"
                            : result === "ADVANCE"
                              ? "text-emerald-600"
                              : "text-blue-600"
                        }`}
                      >
                        {result === "LATE"
                          ? "Late Delivery"
                          : result === "ADVANCE"
                            ? "Advance Dispatch"
                            : "On Time Perfect"}
                      </h4>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 bg-slate-50 border-2 border-slate-100 p-4 rounded-2xl">
                    <div className="flex flex-col">
                      <span className="text-[9px] font-black text-slate-400 uppercase tracking-wide">
                        Channel
                      </span>
                      <span className="text-[13px] font-black text-slate-950 mt-1 font-mono">
                        {formData.paymentType}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] font-black text-slate-400 uppercase tracking-wide">
                        Margin
                      </span>
                      <span className="text-[13px] font-black text-emerald-600 mt-1">
                        ${formData.benefitPerOrder || "0"}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] font-black text-slate-400 uppercase tracking-wide">
                        Target
                      </span>
                      <span className="text-[13px] font-black text-slate-950 mt-1 font-mono">
                        {formData.scheduledDays || "0"} Days
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ─── 📊 NEW VISUALIZATION SECTION: CHARTS SYSTEM ─── */}
        <div className="w-full space-y-8 pt-12 border-t-2 border-slate-100">
          <div>
            <h3 className="text-3xl font-[1000] text-slate-950 uppercase tracking-tight">
              Real-Time Supply Chain{" "}
              <span className="text-blue-600 italic">Neural Analytics</span>
            </h3>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mt-1">
              Predictive telemetry visualizations & historical matrix
              performance
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full">
            {/* 1. BAR CHART: SLA GAP */}
            <div className="lg:col-span-7 bg-white border-2 border-slate-200/90 p-6 rounded-[2rem] shadow-sm flex flex-col justify-between">
              <div>
                <h4 className="text-sm font-black text-slate-900 uppercase tracking-wide mb-1">
                  SLA Delivery Gap Analysis
                </h4>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-4">
                  Comparing promised timeline vs actual execution metrics
                </span>
              </div>
              <div className="w-full h-64 text-[10px] font-black font-mono">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                    <XAxis dataKey="name" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip />
                    <Legend />
                    <Bar
                      dataKey="Scheduled"
                      fill="#3b82f6"
                      radius={[4, 4, 0, 0]}
                      name="Scheduled Days"
                    />
                    <Bar
                      dataKey="Actual"
                      fill="#ef4444"
                      radius={[4, 4, 0, 0]}
                      name="Actual Days"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* 2. PIE CHART: RISK DISTRIBUTION */}
            <div className="lg:col-span-5 bg-white border-2 border-slate-200/90 p-6 rounded-[2rem] shadow-sm flex flex-col justify-between">
              <div>
                <h4 className="text-sm font-black text-slate-900 uppercase tracking-wide mb-1">
                  AI Risk Classifier Share
                </h4>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-4">
                  Proportional distribution of operations model inferences
                </span>
              </div>
              <div className="w-full h-64 flex items-center justify-center text-[10px] font-black font-mono">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={riskDistribution}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {riskDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend verticalAlign="bottom" height={36} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* 3. AREA CHART: REVENUE MARGINS */}
            <div className="lg:col-span-12 bg-white border-2 border-slate-200/90 p-6 rounded-[2rem] shadow-sm">
              <div>
                <h4 className="text-sm font-black text-slate-900 uppercase tracking-wide mb-1">
                  Financial Margin Velocity
                </h4>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-4">
                  Tracking net pipeline benefit yields relative to dynamic
                  scaling
                </span>
              </div>
              <div className="w-full h-60 text-[10px] font-black font-mono">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={performanceData}>
                    <defs>
                      <linearGradient
                        id="colorBenefit"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#10b981"
                          stopOpacity={0.2}
                        />
                        <stop
                          offset="95%"
                          stopColor="#10b981"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                    <XAxis dataKey="name" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="Benefit"
                      stroke="#10b981"
                      strokeWidth={3}
                      fillOpacity={1}
                      fill="url(#colorBenefit)"
                      name="Benefit Yield ($)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

PredictionPage.displayName = "PredictionPage";
