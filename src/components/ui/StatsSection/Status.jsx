"use client";

import { ShieldCheck, Zap, Globe2, Cpu, ArrowUpRight } from "lucide-react";

const Status = () => {
  const stats = [
    {
      value: "99.9%",
      label: "System Uptime",
      description: "Enterprise-grade reliability",
    },
    {
      value: "250+",
      label: "Projects Delivered",
      description: "Across global markets",
    },
    {
      value: "15M+",
      label: "Active Users",
      description: "Engaged with our software",
    },
    {
      value: "24/7",
      label: "Managed Support",
      description: "Dedicated engineering team",
    },
  ];

  const features = [
    {
      title: "High-Performance Architecture",
      description:
        "Engineered for micro-second latencies and massive horizontal scalability using modern cloud infrastructure.",
      icon: Zap,
      tag: "Performance",
      badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    },
    {
      title: "Bank-Grade Security",
      description:
        "End-to-end encryption, SOC2 compliance, and automated vulnerability scanning built into every layer.",
      icon: ShieldCheck,
      tag: "Security",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    },
    {
      title: "AI & Automation Ready",
      description:
        "Seamlessly integrate machine learning models and automated workflows directly into existing systems.",
      icon: Cpu,
      tag: "Intelligence",
      badgeColor: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    },
    {
      title: "Global Distribution",
      description:
        "Edge-computed deployment ensures ultra-fast response times for users regardless of geographical location.",
      icon: Globe2,
      tag: "Scale",
      badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    },
  ];
  return (
    <section className="relative bg-white py-24 sm:py-32 overflow-hidden text-slate-900 border-t border-slate-100">
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
        >
          <defs>
            <pattern
              id="ultra-light-grid"
              width="120"
              height="120"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 120 30 L 120 90 L 60 120 L 0 90 L 0 30 Z"
                fill="none"
                stroke="#0284c7"
                strokeWidth="1"
              />
              <path
                d="M 60 0 L 60 120 M 0 30 L 120 90 M 0 90 L 120 30"
                fill="none"
                stroke="#0284c7"
                strokeWidth="0.8"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ultra-light-grid)" />
        </svg>
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute left-[10%] top-0 bottom-0 w-[1px] bg-slate-100/50">
          <div
            className="w-full h-24 bg-gradient-to-b from-transparent via-sky-400 to-transparent"
            style={{
              animation: "dropLine 6s infinite linear",
            }}
          />
        </div>

        <div className="absolute left-[26%] top-0 bottom-0 w-[1px] bg-slate-100/50">
          <div
            className="w-full h-24 bg-gradient-to-b from-transparent via-blue-500 to-transparent"
            style={{
              animation: "dropLine 8s infinite linear 2s",
            }}
          />
        </div>

        <div className="absolute left-[42%] top-0 bottom-0 w-[1px] bg-slate-100/50">
          <div
            className="w-full h-24 bg-gradient-to-b from-transparent via-sky-400 to-transparent"
            style={{
              animation: "dropLine 5s infinite linear 1s",
            }}
          />
        </div>

        <div className="absolute left-[58%] top-0 bottom-0 w-[1px] bg-slate-100/50">
          <div
            className="w-full h-24 bg-gradient-to-b from-transparent via-indigo-400 to-transparent"
            style={{
              animation: "dropLine 7s infinite linear 3.5s",
            }}
          />
        </div>

        <div className="absolute left-[74%] top-0 bottom-0 w-[1px] bg-slate-100/50">
          <div
            className="w-full h-24 bg-gradient-to-b from-transparent via-sky-500 to-transparent"
            style={{
              animation: "dropLine 6.5s infinite linear 1.5s",
            }}
          />
        </div>

        <div className="absolute left-[90%] top-0 bottom-0 w-[1px] bg-slate-100/50">
          <div
            className="w-full h-24 bg-gradient-to-b from-transparent via-blue-400 to-transparent"
            style={{
              animation: "dropLine 5.5s infinite linear 2.8s",
            }}
          />
        </div>
    
      </div>

      <style>{`
        @keyframes dropLine {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          100% {
            transform: translateY(800%);
            opacity: 0;
          }
        }
      `}</style>

      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-sky-100/40 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative container mx-auto px-4 z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pb-20 border-b border-slate-200/80">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="relative group p-6 rounded-2xl bg-white/80 border border-slate-200/70 backdrop-blur-md hover:border-sky-400 hover:shadow-xl hover:shadow-sky-500/5 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight group-hover:text-sky-600 transition-colors">
                {stat.value}
              </div>
              <div className="mt-2 font-semibold text-slate-800 text-sm sm:text-base">
                {stat.label}
              </div>
              <div className="mt-1 text-xs text-slate-500">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        <div className="pt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-bold tracking-widest text-sky-700 uppercase bg-sky-50 border border-sky-200/80 px-3 py-1 rounded-full">
                Engineering Excellence
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight leading-tight">
                Built for standard enterprise requirements.
              </h2>
            </div>
            <p className="text-slate-600 text-sm sm:text-base max-w-md leading-relaxed">
              We engineer scalable software architectures designed to process
              millions of transactions while maintaining zero-downtime
              reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group relative p-8 rounded-2xl bg-white/90 border border-slate-200/80 hover:border-sky-400 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/5 backdrop-blur-sm"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${item.badgeColor}`}
                      >
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-slate-500 group-hover:text-sky-600 transition-colors">
                    <span>Learn technical specs</span>
                    <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Status;
