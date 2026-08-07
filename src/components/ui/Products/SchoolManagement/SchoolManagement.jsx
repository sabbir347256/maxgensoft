"use client";

import React, { useState } from "react";
import {
  GraduationCap,
  Users,
  BookOpen,
  Calendar,
  CreditCard,
  BarChart3,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  LayoutDashboard,
  UserCheck,
  Receipt,
  FileSpreadsheet,
  Settings,
  Bell,
  Search,
} from "lucide-react";
import Image from "next/image";

const SchoolManagement = () => {
  const [activeTab, setActiveTab] = useState(0);

  const adminScreenshots = [
    {
      title: "Main Admin Dashboard",
      subtitle:
        "Real-time metrics, attendance overview, and financial summaries",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
      tag: "Executive View",
    },
    {
      title: "Student Information System",
      subtitle: "Comprehensive profiles, gradebooks, and behavioral tracking",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
      tag: "Data Management",
    },
    {
      title: "Fee Collection & Billing Portal",
      subtitle: "Automated invoicing, online payments, and ledger management",
      image:
        "https://niftysol.com/wp-content/uploads/2020/04/1ST.png",
      tag: "Finance ERP",
    },
    {
      title: "Exam & Report Card Engine",
      subtitle:
        "Custom grading scales, transcript generation, and result publishing",
      image:
        "https://gegok12.com/wp-content/uploads/2021/08/student-activity.png",
      tag: "Academic Control",
    },
  ];

  const features = [
    {
      icon: Users,
      title: "Student & Staff Management",
      desc: "Complete digital profiles, attendance tracking, and portal access for students, teachers, and parents.",
    },
    {
      icon: BookOpen,
      title: "Academics & Exams",
      desc: "Manage syllabus, class schedules, online assignments, and automated report card generation.",
    },
    {
      icon: CreditCard,
      title: "Fees & Online Billing",
      desc: "Automated fee reminders, online payment gateway integration, and digital invoice generation.",
    },
    {
      icon: Calendar,
      title: "Smart Attendance",
      desc: "RFID and manual attendance marking with instant SMS/email alerts sent directly to parents.",
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      desc: "Real-time dashboards for student performance, financial growth, and institutional progress.",
    },
    {
      icon: ShieldCheck,
      title: "Role-Based Security",
      desc: "Encrypted databases with fine-grained permissions for admins, teachers, and guardians.",
    },
  ];

  return (
    <div className="w-full text-slate-800 font-sans overflow-hidden bg-slate-50 relative">
      <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-sky-50 via-slate-50 to-white">
        <div className="absolute inset-0 pointer-events-none z-0 opacity-30">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="school-grid"
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
            <rect width="100%" height="100%" fill="url(#school-grid)" />
          </svg>
        </div>

        <div className="container relative z-10 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-6">
              <div
                data-aos="fade-down"
                className="inline-flex items-center gap-2 py-1.5 rounded-full bg-blue-100/90 border border-blue-200 text-blue-900 text-xs font-semibold uppercase tracking-wider shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5 text-orange-600" /> Enterprise
                SaaS ERP
              </div>

              <h1
                data-aos="fade-up"
                data-aos-delay="100"
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight"
              >
                Next-Gen School <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-sky-600 to-orange-500">
                  Management ERP
                </span>
              </h1>

              <p
                data-aos="fade-up"
                data-aos-delay="200"
                className="text-slate-600 text-base md:text-lg max-w-xl leading-relaxed"
              >
                Simplify campus operations, automate academic workflows, and
                deliver a seamless digital experience for administrators,
                teachers, students, and parents.
              </p>

              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="flex flex-wrap gap-4 pt-2"
              >
                <button className="px-6 py-3.5 cursor-pointer rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm shadow-lg shadow-blue-700/25 transition-all flex items-center gap-2 group">
                  Schedule Free Demo
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-6 py-3.5 cursor-pointer rounded-xl bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-semibold text-sm shadow-sm transition-all">
                  Explore Modules
                </button>
              </div>
            </div>

            <div
              data-aos="fade-left"
              data-aos-delay="300"
              className="relative flex justify-center items-center"
            >
              <div className="relative w-full max-w-lg">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 to-orange-500 opacity-30 blur-xl"></div>
                <div className="relative rounded-3xl bg-white p-4 shadow-2xl border border-slate-200/80 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1000"
                    alt="School Management Software Dashboard"
                    className="rounded-2xl object-cover w-full h-[320px] md:h-[380px]"
                  />
                  <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-100 shadow-lg flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-900">
                          EduCentral Portal
                        </p>
                        <p className="text-[10px] text-slate-500">
                          Live Campus Dashboard
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full">
                      Active SaaS
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="admin-grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="0.8"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#admin-grid)" />
          </svg>
        </div>

        <div className="container space-y-12 relative z-10">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div
              data-aos="fade-down"
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-800/80 border border-blue-700 text-sky-300 text-xs font-medium uppercase tracking-wider"
            >
              <LayoutDashboard className="w-3.5 h-3.5" /> Interactive Admin
              Console
            </div>
            <h2
              data-aos="fade-up"
              className="text-3xl md:text-5xl font-extrabold tracking-tight text-white"
            >
              Powerful{" "}
              <span className="text-sky-400">Admin Control Center</span>
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-slate-400 text-sm md:text-base leading-relaxed"
            >
              Get a complete 360-degree view of your institution. Manage
              students, staff, finances, and academic schedules with an
              intuitive, enterprise-grade admin panel.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="flex flex-wrap justify-center gap-3"
          >
            {adminScreenshots.map((screen, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  activeTab === idx
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                    : "bg-slate-800/80 text-slate-400 hover:bg-slate-800 hover:text-white border border-slate-700/60"
                }`}
              >
                {screen.title}
              </button>
            ))}
          </div>

          <div
            data-aos="zoom-in"
            data-aos-delay="300"
            className="relative rounded-3xl bg-slate-800/90 border border-slate-700 p-3 md:p-6 shadow-2xl overflow-hidden backdrop-blur-md"
          >
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-700/80 px-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                <span className="text-xs text-slate-400 font-mono ml-2 hidden sm:inline">
                  https://admin.school-erp.com/dashboard
                </span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Search className="w-4 h-4" />
                <Bell className="w-4 h-4" />
                <Settings className="w-4 h-4" />
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl group">
              <Image
                src={adminScreenshots[activeTab].image}
                alt={adminScreenshots[activeTab].title}
                width={1200}
                height={600}
                className="w-full h-[320px] sm:h-[450px] md:h-[550px] object-cover rounded-2xl transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90 flex flex-col justify-end p-6 md:p-8">
                <div className="space-y-2">
                  <span className="inline-block px-3 py-1 bg-sky-500/20 border border-sky-400/30 text-sky-300 text-[10px] font-bold uppercase tracking-wider rounded-md">
                    {adminScreenshots[activeTab].tag}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {adminScreenshots[activeTab].title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-300 max-w-2xl">
                    {adminScreenshots[activeTab].subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50 flex items-center gap-3"
            >
              <UserCheck className="w-8 h-8 text-sky-400 shrink-0" />
              <div>
                <p className="text-xs font-bold text-white">Live Attendance</p>
                <p className="text-[10px] text-slate-400">
                  Biometric & RFID Sync
                </p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50 flex items-center gap-3"
            >
              <Receipt className="w-8 h-8 text-emerald-400 shrink-0" />
              <div>
                <p className="text-xs font-bold text-white">
                  Automated Invoicing
                </p>
                <p className="text-[10px] text-slate-400">
                  Instant SMS Receipts
                </p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50 flex items-center gap-3"
            >
              <FileSpreadsheet className="w-8 h-8 text-orange-400 shrink-0" />
              <div>
                <p className="text-xs font-bold text-white">
                  Gradebook Generator
                </p>
                <p className="text-[10px] text-slate-400">
                  Custom Grading Scales
                </p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50 flex items-center gap-3"
            >
              <ShieldCheck className="w-8 h-8 text-purple-400 shrink-0" />
              <div>
                <p className="text-xs font-bold text-white">Multi-Branch ERP</p>
                <p className="text-[10px] text-slate-400">
                  Centralized Security
                </p>
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
                id="circuit-stats"
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
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit-stats)" />
          </svg>
        </div>

        <div className="container grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
          <div data-aos="zoom-in" data-aos-delay="100" className="space-y-1">
            <h3 className="text-3xl md:text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-sky-200 to-white">
              100K+
            </h3>
            <p className="text-sky-100 text-xs md:text-sm font-medium uppercase tracking-wider">
              Students Managed
            </p>
          </div>
          <div data-aos="zoom-in" data-aos-delay="200" className="space-y-1">
            <h3 className="text-3xl md:text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-sky-200 to-white">
              50+
            </h3>
            <p className="text-sky-100 text-xs md:text-sm font-medium uppercase tracking-wider">
              Institutions Onboarded
            </p>
          </div>
          <div data-aos="zoom-in" data-aos-delay="300" className="space-y-1">
            <h3 className="text-3xl md:text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-sky-200 to-white">
              99.9%
            </h3>
            <p className="text-sky-100 text-xs md:text-sm font-medium uppercase tracking-wider">
              System Uptime
            </p>
          </div>
          <div data-aos="zoom-in" data-aos-delay="400" className="space-y-1">
            <h3 className="text-3xl md:text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-sky-200 to-white">
              80%
            </h3>
            <p className="text-sky-100 text-xs md:text-sm font-medium uppercase tracking-wider">
              Paperwork Reduced
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 relative bg-orange-50/30 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="hex-pattern"
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
            <rect width="100%" height="100%" fill="url(#hex-pattern)" />
          </svg>
        </div>

        <div className="container space-y-16 relative z-10">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2
              data-aos="fade-up"
              className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900"
            >
              Powerful Core <span className="text-blue-700">Modules</span>
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-slate-600 text-sm md:text-base leading-relaxed"
            >
              An all-in-one school management system and learning platform
              digitizes administrative work, These integrated tools cut down
              paperwork and help schools run smoothly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                  className="bg-white/90 backdrop-blur-md border cursor-pointer border-slate-200 rounded-3xl p-8 flex flex-col justify-between hover:border-sky-400 hover:-translate-y-2 transition-all duration-300 shadow-md group"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-blue-700 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-blue-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Ready
                    to Deploy
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-100/80 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-25">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="wave-bg"
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
            <rect width="100%" height="100%" fill="url(#wave-bg)" />
          </svg>
        </div>

        <div className="container rounded-3xl bg-gradient-to-r from-blue-900 via-slate-900 to-blue-950 p-10 md:p-14 text-white text-center space-y-8 relative z-10 shadow-xl border border-blue-800/50">
          <div
            data-aos="zoom-in"
            className="inline-flex p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-orange-400"
          >
            <Zap className="w-8 h-8" />
          </div>

          <div data-aos="fade-up" className="space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Ready to Upgrade Your Institution?
            </h2>
            <p className="text-sky-100/80 text-sm md:text-base leading-relaxed">
              Upgrade your school's administration with powerful cloud ERP.
              Quick implementation, fully customizable modules, and 24/7
              technical assistance.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="pt-2 flex justify-center gap-4"
          >
            <button className="px-8 py-4 rounded-xl cursor-pointer bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm shadow-lg shadow-orange-500/25 transition-all">
              Request Live Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchoolManagement;
