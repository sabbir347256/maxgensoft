"use client";

import React from "react";
import {
  Compass,
  Code2,
  Cpu,
  Layers,
  ShieldCheck,
  Rocket,
  CheckCircle2,
  ArrowRight,
  Zap,
  Sparkles,
} from "lucide-react";

const HeroSection = () => {
  const steps = [
    {
      num: "01",
      title: "Discovery & Architecture",
      desc: "Deep dive into enterprise scope, technical audit, and defining system scalability roadmap.",
      icon: Compass,
      tags: ["Tech Audit", "Roadmap", "Scope Definition"],
      cardBg:
        "bg-[#1e2838] border-slate-800 text-white hover:border-sky-500/50",
      accentColor: "bg-sky-500/10 text-sky-400 border-sky-500/20",
      numColor: "text-slate-700 group-hover:text-sky-400",
      tagBg: "bg-slate-900 text-slate-300 border border-slate-800",
    },
    {
      num: "02",
      title: "Agile Development & Sprint",
      desc: "High-velocity iterative cycles with continuous integration, modular engineering, and clean code.",
      icon: Code2,
      tags: ["CI/CD", "Modular Code", "Agile Sprints"],
      cardBg:
        "bg-[#1e2838] border-slate-800 text-white hover:border-sky-400/50",
      accentColor: "bg-sky-400/10 text-sky-300 border-sky-400/20",
      numColor: "text-slate-700 group-hover:text-sky-300",
      tagBg: "bg-[#131b26] text-slate-300 border border-slate-800",
    },
    {
      num: "03",
      title: "Quality Assurance & Security",
      desc: "Rigorous automated testing, security compliance checks, and stress testing for max uptime.",
      icon: ShieldCheck,
      tags: ["PenTesting", "Uptime Guarantee", "SOC2 Readiness"],
      cardBg:
        "bg-[#1e2838] border-slate-700 text-white hover:border-sky-400/50",
      accentColor: "bg-sky-400/20 text-sky-200 border-sky-300/30",
      numColor: "text-slate-600 group-hover:text-sky-200",
      tagBg: "bg-slate-900 text-slate-200 border border-slate-700",
    },
    {
      num: "04",
      title: "Deployment & Scaling",
      desc: "Zero-downtime release onto enterprise cloud infrastructure with continuous monitoring.",
      icon: Rocket,
      tags: ["Multi-Cloud", "DevOps", "24/7 Monitoring"],
      cardBg:
        "bg-[#1e2838] border-slate-700 text-white hover:border-sky-400/60",
      accentColor: "bg-sky-500/20 text-sky-200 border-sky-400/30",
      numColor: "text-slate-600 group-hover:text-sky-200",
      tagBg: "bg-slate-900 text-slate-200 border border-slate-700",
    },
  ];

  return (
    <div className="w-full bg-[#030712] text-white overflow-hidden relative">
      <style flex-inline="true">{`
        @keyframes floatGrid {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-15px) scale(1.01); }
        }
        @keyframes lineGlow {
          0%, 100% { opacity: 0.25; }
          50% { opacity: 0.85; }
        }
        @keyframes dashMove {
          to { stroke-dashoffset: -100; }
        }
        .animate-grid-float {
          animation: floatGrid 10s ease-in-out infinite;
        }
        .animate-line-glow {
          animation: lineGlow 4s ease-in-out infinite;
        }
        .animate-dash-flow {
          stroke-dasharray: 10, 15;
          animation: dashMove 20s linear infinite;
        }
      `}</style>

      <section className="relative bg-white py-24 px-4 border-b border-slate-800/80">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-[#060b19]/60 to-blue-900 z-0" />

        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-50 z-0 animate-grid-float">
          <svg
            className="w-full h-full"
            viewBox="0 0 1000 800"
            preserveAspectRatio="none"
            fill="none"
          >
            <g stroke="#38bdf8" strokeWidth="1" className="animate-line-glow">
              <line x1="50" y1="0" x2="50" y2="800" opacity="0.3" />
              <line x1="120" y1="0" x2="120" y2="800" opacity="0.3" />
              <line x1="190" y1="0" x2="190" y2="800" opacity="0.4" />
              <line x1="260" y1="0" x2="260" y2="800" opacity="0.3" />
              <line x1="330" y1="0" x2="330" y2="800" opacity="0.2" />

              <path d="M 0 500 L 260 420 L 260 800" fill="none" opacity="0.6" />
              <path
                d="M 120 460 L 330 390 L 330 800"
                fill="none"
                opacity="0.4"
              />

              <path
                d="M 400 300 L 980 100 L 980 650 L 400 850 Z"
                fill="none"
                opacity="0.5"
                className="animate-dash-flow"
              />
              <path
                d="M 580 180 L 980 50 L 980 500"
                fill="none"
                opacity="0.3"
              />
              <path
                d="M 190 440 L 400 370 L 400 850"
                fill="none"
                opacity="0.5"
              />
            </g>
          </svg>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="relative p-8 md:p-14 rounded-3xl bg-[#091122]/80 border border-slate-800/80 backdrop-blur-xl shadow-2xl overflow-hidden transition-all duration-700 hover:border-slate-700">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6 transition-all duration-700 ease-out transform translate-y-0 opacity-100">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider animate-bounce">
                  <Zap className="w-3.5 h-3.5" /> Industrial-Grade Execution
                </div>

                <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  Our Process: <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-sky-400">
                    Agile, Transparent & Scalable
                  </span>
                </h1>

                <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-xl">
                  We engineer high-performance B2B SaaS and enterprise IT
                  solutions through a rigorous, proven methodology designed for
                  speed, security, and absolute reliability.
                </p>

                <div className="pt-2 flex flex-wrap gap-4 text-xs font-medium text-slate-300">
                  <span className="flex items-center gap-1.5 bg-[#080e1a] px-3.5 py-2 rounded-xl border border-slate-800 transition-all duration-300 hover:scale-105 hover:bg-[#10192e]">
                    <CheckCircle2 className="w-4 h-4 text-sky-400" /> High
                    Velocity
                  </span>
                  <span className="flex items-center gap-1.5 bg-[#080e1a] px-3.5 py-2 rounded-xl border border-slate-800 transition-all duration-300 hover:scale-105 hover:bg-[#10192e]">
                    <CheckCircle2 className="w-4 h-4 text-sky-400" /> Enterprise
                    Reliability
                  </span>
                  <span className="flex items-center gap-1.5 bg-[#080e1a] px-3.5 py-2 rounded-xl border border-slate-800 transition-all duration-300 hover:scale-105 hover:bg-[#10192e]">
                    <CheckCircle2 className="w-4 h-4 text-sky-400" /> End-to-End
                    Control
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="relative w-full aspect-square rounded-2xl bg-[#070c18] border border-slate-800 p-6 flex flex-col justify-between overflow-hidden shadow-2xl group transition-all duration-500 hover:border-sky-500/50">
                  <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/10 via-transparent to-slate-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="flex justify-between items-center z-10">
                    <div className="flex gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-slate-700" />
                      <span className="w-3 h-3 rounded-full bg-slate-600" />
                      <span className="w-3 h-3 rounded-full bg-sky-400 animate-ping" />
                    </div>
                    <Cpu className="w-5 h-5 text-sky-400 animate-pulse" />
                  </div>

                  <div className="my-auto py-8 flex flex-col items-center justify-center relative z-10">
                    <div className="relative">
                      <div className="w-24 h-24 rounded-full border-2 border-dashed border-sky-400/40 flex items-center justify-center animate-[spin_12s_linear_infinite]" />
                      <Layers className="w-10 h-10 text-white absolute inset-0 m-auto transition-transform duration-500 group-hover:scale-125" />
                    </div>
                    <span className="mt-4 text-xs tracking-widest text-slate-400 uppercase font-mono">
                      System Architecture
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-[#0d1627] border border-slate-800 z-10 flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-mono">
                      Status: Deploying...
                    </span>
                    <span className="text-sky-400 font-semibold font-mono animate-pulse">
                      99.99% Uptime
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#F2F6FA] py-28 px-4 border-b border-slate-200/80 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-400/15 rounded-full blur-[140px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[300px] bg-amber-300/15 rounded-full blur-[120px] pointer-events-none animate-pulse" />
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

        <div className="container mx-auto max-w-7xl relative z-10 space-y-16">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#2b58b8] text-xs font-semibold tracking-wide uppercase shadow-sm">
              <Sparkles className="w-3.5 h-3.5" /> Our Workflow
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              How We Deliver <span className="text-[#2b58b8]">Success</span>
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Our end-to-end framework guarantees seamless integration,
              bulletproof security, and modern tech stack deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className={`group relative p-7 rounded-3xl border border-white/80 bg-white/70 backdrop-blur-xl transition-all duration-500 ease-out flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(43,88,184,0.12)] hover:border-[#2b58b8]/30 hover:-translate-y-2 overflow-hidden ${step.cardBg || ""}`}
                >
                  <div className="absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 bg-gradient-to-br from-[#2b58b8]/10 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />

                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <div
                        className={`w-14 h-14 rounded-2xl border border-blue-100/80 bg-gradient-to-br from-blue-50 to-white flex items-center justify-center text-[#2b58b8] shadow-sm group-hover:scale-110 group-hover:bg-[#2b58b8] group-hover:text-white group-hover:border-[#2b58b8] transition-all duration-500 ${step.accentColor || ""}`}
                      >
                        <Icon className="w-7 h-7" />
                      </div>
                      <span
                        className={`text-3xl font-black font-mono text-slate-300 group-hover:text-[#2b58b8] transition-colors duration-300 ${step.numColor || ""}`}
                      >
                        {step.num}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3 transition-colors duration-300 group-hover:text-[#2b58b8]">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-8">
                      {step.desc}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-5 border-t border-slate-200/60">
                    {step.tags?.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-blue-50/80 text-[#2b58b8] border border-blue-100/80 transition-all duration-300 hover:bg-[#2b58b8] hover:text-white hover:border-[#2b58b8] ${step.tagBg || ""}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative bg-[#F2F6FA] py-24 px-4 overflow-hidden">
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

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="p-10 md:p-16 rounded-[2.5rem] bg-gradient-to-br from-white via-white to-blue-50/50 border border-slate-200/80 text-center space-y-8 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_rgba(43,88,184,0.12)] transition-all duration-500 group">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-300/20 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

            <div className="max-w-2xl mx-auto space-y-4">
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Ready to Build Your Industrial IT Infrastructure?
              </h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                Let’s discuss your architecture, software requirements, or
                digital transformation vision with our technical experts.
              </p>
            </div>

            <div>
              <a
                href="/contact"
                className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-[#2b58b8] hover:bg-blue-700 text-white font-bold text-sm shadow-[0_10px_25px_rgba(43,88,184,0.3)] hover:shadow-[0_15px_30px_rgba(43,88,184,0.4)] transition-all duration-300 transform hover:-translate-y-1"
              >
                Start Project Inquiry
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
