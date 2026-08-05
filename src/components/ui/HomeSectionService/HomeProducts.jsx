'use client'

import React from "react";


const HomeProducts = () => {
  return (
    <div className="py-20 bg-[#F6F2EA] text-slate-800 overflow-hidden relative bg-[repeating-linear-gradient(45deg,rgba(120,113,108,0.08)_0px,rgba(120,113,108,0.08)_1px,transparent_1px,transparent_32px)]">
      <section className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-black"></span>
              </span>
              <span className="text-xs font-bold tracking-widest text-black uppercase">
                Ecosystem Architecture
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-stone-900">
              Flagship{" "}
              <span className=" text-sky animate-[gradient_6s_ease_infinite]">
                SaaS Platforms
              </span>
            </h2>
            <p className="mt-4 text-stone-600 max-w-xl text-base leading-relaxed">
              Enterprise-grade tools engineered for scale, security, and
              seamless integration into your existing modern workflows.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-bold text-black hover:transition-colors group"
          >
            <span>Explore Full Suite</span>
            <svg
              className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300 ease-out"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 group relative rounded-3xl bg-white/80 backdrop-blur-xl border border-stone-200/80  hover:border-stone-400/50 p-8 md:p-10  hover:shadow-[0_20px_50px_-15px_rgba(217,119,6,0.12)] transition-all duration-500 hover:-translate-y-1.5 overflow-hidden flex flex-col justify-between">
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-stone-400/10 group-hover:bg-stone-400/20 rounded-full blur-3xl  transition-all duration-700 pointer-events-none group-hover:scale-125"></div>

            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="px-3 py-1 text-xs font-semibold bg-black text-white border border-amber-200/60 rounded-full shadow-inner">
                  Data Analytics
                </span>
                <span className="text-xs font-mono text-stone-500  flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-gray-600"></span>
                  v4.2.0-prod
                </span> 
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-3 group-hover:text-stone-700 transition-colors duration-300">
                Nexus Analytics Suite
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed max-w-md">
                Real-time predictive modeling and big data processing engine
                engineered specifically for high-frequency financial
                institutions.
              </p>
            </div>

            <div className="mt-12 pt-6 border-t border-stone-200/80 flex items-center justify-between">
              <div className="flex items-center gap-4 text-xs text-stone-500 font-mono">
                <span>
                  Latency: <strong className="text-stone-800">&lt;2ms</strong>
                </span>
                <span>•</span>
                <span>
                  Throughput: <strong className="text-stone-800">10M/s</strong>
                </span>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-semibold text-stone-800 group-hover:text-stone-700 transition-colors"
              >
                <span>Explore Platform</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="md:col-span-4 group relative rounded-3xl bg-white/80 backdrop-blur-xl border border-stone-200/80  hover:border-stone-400/50  p-8 md:p-10 hover:shadow-[0_20px_50px_-15px_rgba(120,113,108,0.12)] transition-all duration-500 hover:-translate-y-1.5 overflow-hidden flex flex-col justify-between">
            <div className="absolute -top-24 -right-24 w-60 h-60 bg-stone-400/10 group-hover:bg-stone-400/20 rounded-full blur-3xl  transition-all duration-700 pointer-events-none group-hover:scale-125"></div>

            <div>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-stone-100 border border-stone-200 mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-sm">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-3 group-hover:text-stone-700 transition-colors duration-300">
                Aegis Auth
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Zero-trust enterprise identity management with seamless
                biometric authentication and RBAC.
              </p>
            </div>

            <div className="mt-12 pt-6 border-t border-stone-200/80 flex items-center justify-between">
              <span className="text-xs text-stone-500 font-mono border border-stone-300/80 rounded-md px-2 py-0.5 bg-stone-100/50">
                SOC2 Type II
              </span>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-semibold text-stone-800 group-hover:text-stone-600 transition-colors"
              >
                <span>Access Docs</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="md:col-span-5 group relative rounded-3xl bg-white/80 backdrop-blur-xl border border-stone-200/80  hover:border-stone-400/50 p-8 md:p-10  hover:shadow-[0_20px_50px_-15px_rgba(180,83,9,0.12)] transition-all duration-500 hover:-translate-y-1.5 overflow-hidden flex flex-col justify-between">
            <div className="absolute -top-24 -right-24 w-60 h-60 bg-stone-400/10 group-hover:bg-stone-400/20 rounded-full blur-3xl  transition-all duration-700 pointer-events-none group-hover:scale-125"></div>

            <div>
              <div className="w-12 h-12 rounded-2xl bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-800 mb-8 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300 shadow-sm">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-3 group-hover:text-stone-700 transition-colors duration-300">
                CloudOps Pro
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Automated multi-cloud infrastructure orchestration, CI/CD
                pipeline management, and telemetry.
              </p>
            </div>

            <div className="mt-12 pt-6 border-t border-stone-200/80 flex items-center justify-between">
              <span className="text-xs text-stone-500 font-mono border border-stone-300/80 rounded-md px-2 py-0.5 bg-stone-100/50">
                Kubernetes Native
              </span>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-semibold text-stone-800 group-hover:text-stone-700 transition-colors"
              >
                <span>Deploy Now</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="md:col-span-7 group relative rounded-3xl bg-white/80 backdrop-blur-xl border border-stone-200/80  hover:border-stone-400/50 p-8 md:p-10  hover:shadow-[0_20px_50px_-15px_rgba(217,119,6,0.12)] transition-all duration-500 hover:-translate-y-1.5 overflow-hidden flex flex-col justify-between">
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-stone-400/10 group-hover:bg-stone-400/20 rounded-full blur-3xl  transition-all duration-700 pointer-events-none group-hover:scale-125"></div>

            <svg
              className="absolute -bottom-8 -right-8 w-48 h-48 text-stone-300/30 group-hover:text-amber-600/10 transition-all duration-700 group-hover:rotate-12 group-hover:scale-110 pointer-events-none"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>

            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="px-3 py-1 text-xs font-semibold bg-black text-white border border-amber-200/60 rounded-full shadow-inner">
                  Integration
                </span>
                <span className="text-xs font-mono text-stone-500">
                  GraphQL / REST API
                </span>
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-3 group-hover:text-stone-700 transition-colors duration-300">
                OmniConnect Gateway
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed max-w-lg">
                Unified API management layer built to modernize legacy software
                systems and bridge third-party microservices instantly.
              </p>
            </div>

            <div className="mt-12 pt-6 border-t border-stone-200/80 flex items-center justify-between relative z-10">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-600 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-gray-600"></span>
                </span>
                <span className="text-xs text-stone-500 font-mono">
                  99.999% Uptime SLA
                </span>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-semibold text-stone-800 group-hover:text-stone-700 transition-colors"
              >
                <span>View Endpoints</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeProducts;
