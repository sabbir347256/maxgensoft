"use client";

import React, { useEffect } from "react";

import {
  Mail,
  Code2,
  Sparkles,
  Terminal,
  Cpu,
  Globe,
  CheckCircle2,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

import web_developer from "../../../../../public/web-developer.jpeg";

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Sabbir Ahmmed",
      role: "Lead Full-Stack Developer",
      bio: "Specializing in MERN stack, Next.js, and cloud infrastructure with a focus on high-performance SaaS solutions.",
      image:
        "https://res.cloudinary.com/dunn8qryc/image/upload/v1786092253/web-developer_thkhq6.jpg",
      skills: ["React", "Node.js", "TypeScript", "AWS"],
      socials: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "sabbir@example.com",
      },
    },
    {
      name: "Adnan Chowdhury",
      role: "Product Strategist & Co-Founder",
      bio: "Driving product roadmap, UX strategy, and business scaling for cutting-edge digital platforms.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
      skills: ["Product Management", "UI/UX", "SaaS Strategy", "Marketing"],
      socials: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "adnan@example.com",
      },
    },
    {
      name: "Tanvir Hossain",
      role: "Backend & Cloud Engineer",
      bio: "Expert in microservices architecture, Docker containerization, and PostgreSQL performance tuning.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600",
      skills: ["Express", "PostgreSQL", "Docker", "Nginx"],
      socials: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "tanvir@example.com",
      },
    },
    {
      name: "Nusrat Jahan",
      role: "UI/UX & Frontend Engineer",
      bio: "Creating clean, accessible, and high-converting web applications with Tailwind CSS and Next.js.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600",
      skills: ["Tailwind CSS", "Next.js", "Figma", "Framer Motion"],
      socials: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "nusrat@example.com",
      },
    },
  ];
  return (
    <div className="w-full text-slate-800 overflow-hidden bg-slate-50 relative">
      <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-sky-50 via-slate-50 to-white">
        <div className="absolute inset-0 pointer-events-none z-0 opacity-30">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="tech-grid"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 60 0 L 0 0 0 60"
                  fill="none"
                  stroke="#0284c7"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
                <circle cx="60" cy="60" r="2" fill="#f97316" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#tech-grid)" />
          </svg>
        </div>

        <div className="container relative z-10 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-6">
              <div
                data-aos="fade-down"
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/90 border border-blue-200 text-blue-900 text-xs font-semibold uppercase tracking-wider shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5 text-orange-600" /> Innovators
                & Engineers
              </div>

              <h1
                data-aos="fade-up"
                data-aos-delay="100"
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight"
              >
                Meet the Minds Behind <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-sky-600 to-orange-500">
                  Our Technology Solutions
                </span>
              </h1>

              <p
                data-aos="fade-up"
                data-aos-delay="200"
                className="text-slate-600 text-base md:text-lg max-w-xl leading-relaxed"
              >
                We are a passionate team of full-stack engineers, cloud
                architects, and product designers dedicated to crafting
                enterprise-ready SaaS products and high-impact web services.
              </p>
            </div>

            <div
              data-aos="fade-left"
              data-aos-delay="300"
              className="relative flex justify-end items-center "
            >
              <div className="relative w-full max-w-lg">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 to-orange-500 opacity-30 blur-xl"></div>
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
                  alt="IT Team Collaboration"
                  className="relative rounded-3xl shadow-2xl border border-slate-200/80 object-cover w-full h-[380px] md:h-[420px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 border-y border-slate-200/80 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="circuit-bg"
                width="80"
                height="80"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 10 10 L 70 10 L 70 70 M 30 50 L 50 30"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="1.5"
                />
                <circle cx="10" cy="10" r="3" fill="#f97316" />
                <circle cx="70" cy="70" r="3" fill="#38bdf8" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit-bg)" />
          </svg>
        </div>

        <div className="container  grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
          <div data-aos="zoom-in" data-aos-delay="100" className="space-y-1">
            <h3 className="text-3xl md:text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-sky-200 to-white">
              100%
            </h3>
            <p className="text-sky-100 text-xs md:text-sm font-medium uppercase tracking-wider">
              In-House Engineers
            </p>
          </div>
          <div data-aos="zoom-in" data-aos-delay="200" className="space-y-1">
            <h3 className="text-3xl md:text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-sky-200 to-white">
              5+ Yrs
            </h3>
            <p className="text-sky-100 text-xs md:text-sm font-medium uppercase tracking-wider">
              Avg. Tech Experience
            </p>
          </div>
          <div data-aos="zoom-in" data-aos-delay="300" className="space-y-1">
            <h3 className="text-3xl md:text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-sky-200 to-white">
              50+
            </h3>
            <p className="text-sky-100 text-xs md:text-sm font-medium uppercase tracking-wider">
              Projects Shipped
            </p>
          </div>
          <div data-aos="zoom-in" data-aos-delay="400" className="space-y-1">
            <h3 className="text-3xl md:text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-sky-200 to-white">
              24/7
            </h3>
            <p className="text-sky-100 text-xs md:text-sm font-medium uppercase tracking-wider">
              Support & Maintenance
            </p>
          </div>
        </div>
      </section>

      <section className="py-24  relative bg-orange-50/30 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="hex-grid"
                width="50"
                height="43.3"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 25 0 L 50 14.4 L 50 43.3 L 25 57.7 L 0 43.3 L 0 14.4 Z"
                  fill="none"
                  stroke="#f97316"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hex-grid)" />
          </svg>
        </div>

        <div className="container space-y-16 relative z-10">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2
              data-aos="fade-up"
              className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900"
            >
              Our Core <span className="text-blue-700">Team</span>
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-slate-600 text-sm md:text-base leading-relaxed"
            >
              The talented developers, designers, and thinkers who make our
              cloud software and web development services world-class.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 150}
                className="bg-white/90 cursor-pointer backdrop-blur-md border border-slate-200 rounded-3xl p-6 flex flex-col justify-between hover:border-sky-400 hover:-translate-y-2 transition-all duration-300 shadow-md group"
              >
                <div className="space-y-6">
                  <div className="relative overflow-hidden rounded-2xl h-64 w-full">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div className="flex gap-3 text-white">
                        <a
                          href={member.socials.github}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 bg-white/20 hover:bg-white/40 rounded-full backdrop-blur-md transition-colors"
                        >
                          <FaGithub className="w-4 h-4" />
                        </a>
                        <a
                          href={member.socials.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 bg-white/20 hover:bg-white/40 rounded-full backdrop-blur-md transition-colors"
                        >
                          <FaLinkedin className="w-4 h-4" />
                        </a>
                        <a
                          href={member.socials.twitter}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 bg-white/20 hover:bg-white/40 rounded-full backdrop-blur-md transition-colors"
                        >
                          <FaTwitter className="w-4 h-4" />
                        </a>
                        <a
                          href={`mailto:${member.socials.email}`}
                          className="p-2 bg-white/20 hover:bg-white/40 rounded-full backdrop-blur-md transition-colors"
                        >
                          <Mail className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-orange-600 uppercase tracking-wider">
                      {member.role}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed pt-1">
                      {member.bio}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <div className="flex flex-wrap gap-1.5">
                    {member.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] font-medium bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20  bg-slate-100/80 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-25">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="wave-lines"
                width="100"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 0 10 Q 25 20, 50 10 T 100 10"
                  fill="none"
                  stroke="#0284c7"
                  strokeWidth="1.2"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#wave-lines)" />
          </svg>
        </div>

        <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          <div
            data-aos="fade-right"
            data-aos-delay="100"
            className="p-8 cursor-pointer rounded-3xl bg-white/90 backdrop-blur-md border border-slate-200 space-y-4 shadow-sm"
          >
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700">
              <Code2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Agile Engineering
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We follow fast, iterative sprint cycles with automated testing and
              continuous integration to ship feature-complete code consistently.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="p-8 cursor-pointer rounded-3xl bg-white/90 backdrop-blur-md border border-slate-200 space-y-4 shadow-sm"
          >
            <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600">
              <Terminal className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Modern Tech Stack
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Leveraging React, Next.js, Node.js, Cloudflare, and PostgreSQL to
              deliver high-concurrency SaaS apps with near-zero latency.
            </p>
          </div>

          <div
            data-aos="fade-left"
            data-aos-delay="300"
            className="p-8 cursor-pointer rounded-3xl bg-white/90 backdrop-blur-md border border-slate-200 space-y-4 shadow-sm"
          >
            <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-700">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Client-Centric Growth
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We work directly alongside your team to engineer custom software
              that solves business bottlenecks and drives measurable ROI.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
