'use client'

import React from "react";
import {
  Box,
  Code2,
  Smartphone,
  Infinity,
  Palette,
  TrendingUp,
  Briefcase,
  Search,
  Globe,
  Network,
  ShieldCheck,
  Brain,
  ArrowUpRight,
} from "lucide-react";

const ExpartSection = () => {
  const experts = [
    {
      icon: Box,
      title: "Software Architect",
      description:
        "Designs the overall structure of software systems, ensuring scalability, performance, and maintainability across platforms.",
    },
    {
      icon: Code2,
      title: "Software Engineer",
      description:
        "Develops, tests, and maintains software applications, ensuring they meet user requirements and function efficiently.",
    },
    {
      icon: Smartphone,
      title: "Mobile Application Developer",
      description:
        "Builds and maintains mobile applications for iOS and Android, focusing on user experience and performance.",
    },
    {
      icon: Infinity,
      title: "DevOps Specialist",
      description:
        "Integrates development and operations to streamline software deployment, automate processes, and improve system reliability.",
    },
    {
      icon: Palette,
      title: "UI/UX Designer",
      description:
        "Creates intuitive interfaces and seamless experiences, blending usability, creativity, and visual consistency.",
    },
    {
      icon: TrendingUp,
      title: "Data Scientist",
      description:
        "Analyzes complex data sets to extract meaningful insights, enabling informed decision-making and predictive modeling.",
    },
    {
      icon: Briefcase,
      title: "IT Project Manager",
      description:
        "Manages IT projects, coordinating resources, timelines, and teams to ensure successful project completion.",
    },
    {
      icon: Search,
      title: "Quality Assurance (QA) Engineer",
      description:
        "Tests software to identify bugs and ensure it meets quality standards before deployment to users.",
    },
    {
      icon: Globe,
      title: "Web Developer",
      description:
        "Designs, develops, and maintains websites, ensuring they are responsive, functional, and user-friendly across devices.",
    },
    {
      icon: Network,
      title: "Network Engineer",
      description:
        "Designs, installs, and maintains network infrastructure, ensuring efficient communication and security across systems.",
    },
    {
      icon: ShieldCheck,
      title: "Cybersecurity Analyst",
      description:
        "Protects systems and networks from cyber threats, implementing security protocols and monitoring vulnerabilities.",
    },
    {
      icon: Brain,
      title: "AI/Machine Learning Engineer",
      description:
        "Designs and implements machine learning models and algorithms to solve complex problems using data-driven insights.",
    },
  ];
  return (
  <section className="relative w-full bg-[#E8EDF2] text-slate-800 overflow-hidden py-24 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-200/30 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute top-2/3 right-1/4 w-[600px] h-[400px] bg-blue-300/20 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute inset-[-100%] w-[300%] h-[300%] opacity-40 animate-[spin_120s_linear_infinite]">
          <svg className="w-full h-full" fill="none">
            <defs>
              <pattern
                id="geometric-line-pattern"
                width="240"
                height="200"
                patternUnits="userSpaceOnUse"
              >
                <line x1="0" y1="100" x2="240" y2="20" stroke="#d9d0c1" strokeWidth="1" />
                <line x1="0" y1="200" x2="240" y2="120" stroke="#d9d0c1" strokeWidth="1" />
                <line x1="120" y1="60" x2="120" y2="160" stroke="#d9d0c1" strokeWidth="1" />
                <line x1="240" y1="20" x2="240" y2="120" stroke="#d9d0c1" strokeWidth="1" strokeDasharray="4,4" />
                
                <path d="M 60 80 L 180 40 L 180 140" fill="none" stroke="#cbbd9a" strokeWidth="1.2" opacity="0.6" />
                <path d="M -60 180 L 60 140 L 60 240" fill="none" stroke="#cbbd9a" strokeWidth="1.2" opacity="0.6" />
              </pattern>
            </defs>

            <rect width="100%" height="100%" fill="url(#geometric-line-pattern)" />
          </svg>
        </div>
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
            Our <span className="text-[#2b58b8]">Experts</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Empowering your digital transformation with our specialized tech professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experts.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-white/70 border border-amber-900/10 backdrop-blur-md transition-all duration-300 hover:bg-[#2b58b8] hover:border-[#2b58b8] hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/20 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#2b58b8] group-hover:bg-white/20 group-hover:border-white/30 group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors duration-300" />
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-white transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed group-hover:text-blue-100 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExpartSection;
