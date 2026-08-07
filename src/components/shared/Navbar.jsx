"use client";

import {
  Anchor,
  ArrowRight,
  Bot,
  Briefcase,
  Building2,
  ChevronDown,
  Cloud,
  Code,
  Cpu,
  GraduationCap,
  HeartPulse,
  Hourglass,
  LayoutGrid,
  LineChart,
  Menu,
  Newspaper,
  Radio,
  Send,
  ShieldCheck,
  TrendingUp,
  UserCheck,
  Users,
  Wallet,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "../../../public/logo.png";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpandedMenu, setMobileExpandedMenu] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    checkScroll();
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  const industriesData = [
    {
      title: "E-Gov Solutions",
      desc: "Digitizing Governance, Empowering Citizens.",
      icon: Building2,
      href: "/industries/e-gov",
    },
    {
      title: "EdTech",
      desc: "Smart Education for a Smarter Generation.",
      icon: GraduationCap,
      href: "/industries/edtech",
    },
    {
      title: "Maritime and PortTech",
      desc: "Navigating the Future with Technology.",
      icon: Anchor,
      href: "/industries/maritime",
    },
    {
      title: "FinTech",
      desc: "Finance Simplified, Growth Amplified.",
      icon: Wallet,
      href: "/industries/fintech",
    },
    {
      title: "HealthTech",
      desc: "Better Technology, Better Health.",
      icon: HeartPulse,
      href: "/industries/healthtech",
    },
    {
      title: "Telecom & Media",
      desc: "Innovating Connectivity for the Digital Age.",
      icon: Radio,
      href: "/industries/telecom",
    },
  ];

  const servicesData = [
    {
      category: "Build With Us",
      icon: Code,
      items: [
        { name: "Custom Software", href: "/services/custom-software" },
        { name: "Mobile App Development", href: "/services/mobile-app" },
        { name: "Web Design & Development", href: "/services/web-development" },
        { name: "MVPs & Product Design", href: "/services/mvp-design" },
      ],
    },
    {
      category: "Integrate & Automate",
      icon: Cpu,
      items: [
        { name: "System Integration", href: "/services/system-integration" },
        { name: "Workflow Automation", href: "/services/workflow-automation" },
        { name: "Data & Analytics", href: "/services/data-analytics" },
        { name: "IoT Solutions", href: "/services/iot-solutions" },
      ],
    },
    {
      category: "Power with AI",
      icon: Bot,
      items: [
        { name: "AI & Machine Learning", href: "/services/ai-ml" },
        { name: "Generative AI", href: "/services/generative-ai" },
        { name: "Virtual Assistants", href: "/services/virtual-assistants" },
        { name: "Predictive Engines", href: "/services/predictive-engines" },
      ],
    },
    {
      category: "Cloud Engineering",
      icon: Cloud,
      items: [
        { name: "Cloud-Native Applications", href: "/services/cloud-native" },
        { name: "DevOps & CI/CD", href: "/services/devops" },
        { name: "Cloud Migration", href: "/services/cloud-migration" },
        { name: "Multi-Cloud Setup", href: "/services/multi-cloud" },
      ],
    },
    {
      category: "Stay Secure & Supported",
      icon: ShieldCheck,
      items: [
        { name: "Cybersecurity", href: "/services/cybersecurity" },
        { name: "System Monitoring", href: "/services/system-monitoring" },
        { name: "Legacy Upgrades", href: "/services/legacy-upgrades" },
        { name: "Cloud & App Security", href: "/services/cloud-app-security" },
      ],
    },
    {
      category: "Grow Your Brand",
      icon: TrendingUp,
      items: [
        {
          name: "Web & Search Experience",
          href: "/services/web-search-experience",
        },
        { name: "Creative & Visuals", href: "/services/creative-visuals" },
        { name: "Media Buying & Campaigns", href: "/services/media-buying" },
        { name: "Brand Strategy", href: "/services/brand-strategy" },
      ],
    },
  ];

  const productsData = [
    {
      title: "Edufano – School Management System",
      desc: "Smart Schools, Smarter Management.",
      href: "/products/edufano-school",
    },
    {
      title: "Edufano - University Management System",
      desc: "Seamless Management, Infinite Possibilities.",
      href: "/products/edufano-university",
    },
    {
      title: "Educator LMS",
      desc: "Learn, Teach, Grow – Anytime, Anywhere.",
      href: "/products/educator-lms",
    },
    {
      title: "Modulexa",
      desc: "Streamline, Automate, Succeed.",
      href: "/products/modulexa",
    },
    {
      title: "Fintracko",
      desc: "Manage Finances, Maximize Growth.",
      href: "/products/fintracko",
    },
    {
      title: "HRworkout",
      desc: "Smarter HR, Stronger Workforce.",
      href: "/products/hrworkout",
    },
    {
      title: "MaxGenSoft Chat",
      desc: "Engage Smarter, Respond Faster.",
      href: "/products/MaxGenSoft-chat",
    },
  ];

  const insightsData = [
    {
      title: "About Company",
      desc: "Insightful tech blogs on software trends, innovations, and industry solutions.",
      icon: Building2,
      href: "/insights/about-company",
    },
    {
      title: "Our Team",
      desc: "Dedicated professionals delivering expertise, collaboration, and impact.",
      icon: Users,
      href: "/insights/our-team",
    },
    {
      title: "Case Studies",
      desc: "Showcasing success through impactful case studies and proven solutions.",
      icon: Briefcase,
      href: "/insights/case-studies",
    },
    {
      title: "Blog",
      desc: "Insightful blogs sharing knowledge, trends, and actionable ideas.",
      icon: LayoutGrid,
      href: "/insights/blog",
    },
    {
      title: "News & Events",
      desc: "Updates on company achievements, innovations, and key milestones.",
      icon: Newspaper,
      href: "/insights/news-events",
    },
    {
      title: "Career",
      desc: "Partnerships fostering innovation, growth, and mutual success worldwide.",
      icon: TrendingUp,
      href: "/insights/career",
    },
  ];

  const howWeWorkData = [
    {
      title: "Staff Augmentation",
      desc: "Agile Workforce for a Winning Edge",
      icon: UserCheck,
      href: "/how-we-work/staff-augmentation",
    },
    {
      title: "Project-Based",
      desc: "Building Success, One Project at a Time.",
      icon: Briefcase,
      href: "/how-we-work/project-based",
    },
    {
      title: "Dedicated Teams",
      desc: "Your Vision, Our Dedicated Expertise.",
      icon: Users,
      href: "/how-we-work/dedicated-teams",
    },
    {
      title: "Time & Material",
      desc: "Adaptable Workflows for Every Vision.",
      icon: Hourglass,
      href: "/how-we-work/time-and-material",
    },
  ];

  const toggleMobileSubmenu = (menu) => {
    setMobileExpandedMenu(mobileExpandedMenu === menu ? "" : menu);
  };

  const closeAll = () => {
    setActiveMenu("");
    setMobileOpen(false);
  };

  return (
    <>
      {/* className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${

          scrolled

            ? "bg-slate-900/90 backdrop-blur-md shadow-lg py-1 border-b border-slate-800"

            : "bg-transparent py-3"

        }`} */}
      <nav className="bg-slate-900/90 relative z-40">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link
            href="/"
            onClick={closeAll}
            className="flex items-center gap-2 text-white font-bold text-2xl tracking-wide"
          >
            <div className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-sm bg-white overflow-hidden">
              <Image
                src={logo}
                alt="MaxGenSoft Logo"
                className="size-6 object-contain"
              />
            </div>
            MaxGenSoft
          </Link>

          <div className="hidden lg:flex items-center gap-8 relative">
            {[
              "Industries",
              "Services",
              "Products",
              "Insights",
              // "How We Work",
            ].map((item) => (
              <div
                key={item}
                className="py-5"
                onMouseEnter={() => setActiveMenu(item)}
                onMouseLeave={() => setActiveMenu("")}
              >
                <button
                  className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                    scrolled
                      ? "text-slate-200 hover:text-sky-400"
                      : "text-white hover:text-cyan-400 cursor-pointer"
                  }`}
                >
                  {item}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      activeMenu === item ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {item === "Industries" && (
                  <div
                    className={`absolute -left-68 right-0 mx-auto z-50 top-full w-[1000px] bg-white rounded-2xl shadow-2xl p-6 transition-all duration-300 ease-in-out origin-top ${
                      activeMenu === "Industries"
                        ? "opacity-100 scale-100 pointer-events-auto"
                        : "opacity-0 scale-95 pointer-events-none"
                    }`}
                  >
                    <div className="grid grid-cols-4 gap-4">
                      <div className="col-span-1 pr-4 border-r border-gray-100 flex flex-col justify-between">
                        <div>
                          <h4 className="font-bold text-gray-900 text-sm mb-1">
                            Transforming Sectors
                          </h4>
                          <p className="text-xs text-gray-500 leading-relaxed">
                            See how MaxGenSoft is driving digital transformation
                            across industries with specialized solutions.
                          </p>
                        </div>
                      </div>

                      <div className="col-span-3 grid grid-cols-3 gap-3">
                        {industriesData.map((subItem, index) => {
                          const Icon = subItem.icon;
                          return (
                            <Link
                              key={index}
                              href={subItem.href}
                              onClick={closeAll}
                              className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors duration-200 group block"
                            >
                              <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
                                <Icon className="w-4 h-4" />
                              </div>
                              <h5 className="font-semibold text-gray-900 text-sm group-hover:text-sky-600 transition-colors">
                                {subItem.title}
                              </h5>
                              <p className="text-xs text-gray-500 mt-1 leading-tight">
                                {subItem.desc}
                              </p>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {item === "Services" && (
                  <div
                    className={`absolute -left-68 right-0 mx-auto z-50 top-full w-[1000px] bg-white rounded-2xl shadow-2xl p-6 transition-all duration-300 ease-in-out origin-top ${
                      activeMenu === "Services"
                        ? "opacity-100 scale-100 pointer-events-auto"
                        : "opacity-0 scale-95 pointer-events-none"
                    }`}
                  >
                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-3 grid grid-cols-3 gap-4">
                        {servicesData.map((sec, idx) => {
                          const Icon = sec.icon;
                          return (
                            <div
                              key={idx}
                              className="bg-slate-50 p-4 rounded-xl"
                            >
                              <div className="flex items-center gap-2 mb-3">
                                <div className="p-1.5 bg-sky-100 text-sky-600 rounded-lg">
                                  <Icon className="w-4 h-4" />
                                </div>
                                <h5 className="font-bold text-gray-900 text-sm">
                                  {sec.category}
                                </h5>
                              </div>
                              <ul className="space-y-1.5">
                                {sec.items.map((sub, sIdx) => (
                                  <li key={sIdx}>
                                    <Link
                                      href={sub.href}
                                      onClick={closeAll}
                                      className="text-xs text-gray-600 hover:text-sky-600 font-medium transition-colors block py-0.5"
                                    >
                                      {sub.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {item === "Products" && (
                  <div
                    className={`absolute -left-68 right-0 mx-auto z-50 top-full w-[1000px] bg-white rounded-2xl shadow-2xl p-6 transition-all duration-300 ease-in-out origin-top ${
                      activeMenu === "Products"
                        ? "opacity-100 scale-100 pointer-events-auto"
                        : "opacity-0 scale-95 pointer-events-none"
                    }`}
                  >
                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-3 grid grid-cols-3 gap-3">
                        {productsData.map((prod, pIdx) => (
                          <Link
                            key={pIdx}
                            href={prod.href}
                            onClick={closeAll}
                            className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-all flex flex-col justify-between group"
                          >
                            <div>
                              <h5 className="font-bold text-gray-900 text-sm group-hover:text-sky-600 transition-colors">
                                {prod.title}
                              </h5>
                              <p className="text-xs text-gray-500 mt-1 leading-snug">
                                {prod.desc}
                              </p>
                            </div>
                            <div className="flex justify-end mt-2">
                              <ArrowRight className="w-4 h-4 text-sky-500 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {item === "Insights" && (
                  <div
                    className={`absolute -left-68 right-0 mx-auto z-50 top-full w-[1000px] bg-white rounded-2xl shadow-2xl p-6 transition-all duration-300 ease-in-out origin-top ${
                      activeMenu === "Insights"
                        ? "opacity-100 scale-100 pointer-events-auto"
                        : "opacity-0 scale-95 pointer-events-none"
                    }`}
                  >
                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-3 grid grid-cols-2 gap-3">
                        {insightsData.map((ins, iIdx) => {
                          const Icon = ins.icon;
                          return (
                            <Link
                              key={iIdx}
                              href={ins.href}
                              onClick={closeAll}
                              className="p-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 transition-all flex items-start justify-between group"
                            >
                              <div className="flex items-start gap-3">
                                <div className="p-2 bg-sky-100 text-sky-600 rounded-lg">
                                  <Icon className="w-4 h-4" />
                                </div>
                                <div>
                                  <h5 className="font-bold text-gray-900 text-sm group-hover:text-sky-600 transition-colors">
                                    {ins.title}
                                  </h5>
                                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                                    {ins.desc}
                                  </p>
                                </div>
                              </div>
                              <ArrowRight className="w-4 h-4 text-sky-500 shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {item === "How We Work" && (
                  <div
                    className={`absolute -left-68 right-0 mx-auto z-50 top-full w-[1000px] bg-white rounded-2xl shadow-2xl p-6 transition-all duration-300 ease-in-out origin-top ${
                      activeMenu === "How We Work"
                        ? "opacity-100 scale-100 pointer-events-auto"
                        : "opacity-0 scale-95 pointer-events-none"
                    }`}
                  >
                    <div className="grid grid-cols-4 gap-6">
                      <div className="col-span-1 border-r border-gray-100 pr-4">
                        <div className="rounded-xl overflow-hidden mb-3 bg-slate-100 h-32 relative">
                          <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/60 to-transparent z-10" />
                          <div className="absolute bottom-2 left-2 text-white z-20 font-semibold text-xs">
                            Execution Models
                          </div>
                        </div>
                        <h4 className="font-bold text-gray-900 text-base mb-1">
                          Transforming Sectors
                        </h4>
                        <p className="text-xs text-gray-500 leading-relaxed">
                          See how MaxGenSoft is driving digital transformation across
                          industries with specialized solutions.
                        </p>
                      </div>

                      <div className="col-span-2 grid grid-cols-2 gap-3">
                        {howWeWorkData.map((hww, hIdx) => {
                          const Icon = hww.icon;
                          return (
                            <Link
                              key={hIdx}
                              href={hww.href}
                              onClick={closeAll}
                              className="p-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 transition-all group block"
                            >
                              <div className="p-2 bg-sky-100 text-sky-600 rounded-lg w-fit mb-3">
                                <Icon className="w-4 h-4" />
                              </div>
                              <h5 className="font-bold text-gray-900 text-sm group-hover:text-sky-600 transition-colors">
                                {hww.title}
                              </h5>
                              <p className="text-xs text-gray-500 mt-1">
                                {hww.desc}
                              </p>
                            </Link>
                          );
                        })}
                      </div>

                      <div className="col-span-1 space-y-3">
                        <Link
                          href="/how-we-work/tech-consulting"
                          onClick={closeAll}
                          className="block p-4 rounded-xl bg-sky-100 hover:bg-sky-200 transition-colors"
                        >
                          <h5 className="font-bold text-slate-900 text-sm">
                            Tech Consulting
                          </h5>
                          <p className="text-xs text-slate-600 mt-1">
                            Transforming Ideas into Intelligent Solutions.
                          </p>
                        </Link>
                        <Link
                          href="/how-we-work/methodologies"
                          onClick={closeAll}
                          className="block p-4 rounded-xl bg-sky-50 hover:bg-sky-100 transition-colors"
                        >
                          <h5 className="font-bold text-slate-900 text-sm">
                            Methodologies
                          </h5>
                          <p className="text-xs text-slate-600 mt-1">
                            Evolving Methodologies for Modern Challenges.
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link href="/how-we-work">
              <button
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-slate-200 hover:text-sky-400"
                    : "text-white hover:text-cyan-400 cursor-pointer"
                }`}
              >
                How We Work
              </button>
            </Link>
          </div>

          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              onClick={closeAll}
              className="flex items-center gap-2 px-5 py-2.5 hover:bg-[#A5D4FF] bg-[#2e4c68] hover:text-black text-white rounded-full font-medium text-sm transition-all shadow-md hover:shadow-cyan-500/20"
            >
              Contact Us
              <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">
                <Send className="w-3 h-3" />
              </span>
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden text-white p-2 focus:outline-none"
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-black/60 z-[60] lg:hidden transition-opacity duration-300 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeAll}
      />

      <div
        className={`fixed top-0 left-0 w-80 h-screen max-h-screen bg-slate-900 z-[70] lg:hidden transform transition-transform duration-500 ease-in-out p-6 flex flex-col justify-between overflow-y-auto ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          <div className="flex items-center justify-between mb-8">
            <Link
              href="/"
              className="text-white font-bold text-xl tracking-wide"
              onClick={closeAll}
            >
              MaxGen <span className="font-light">Soft</span>
            </Link>
            <button
              onClick={closeAll}
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col gap-3">
            <div className="border-b border-gray-800 pb-3">
              <button
                onClick={() => toggleMobileSubmenu("Industries")}
                className="flex items-center justify-between w-full text-white font-medium text-left"
              >
                Industries
                <ChevronDown
                  className={`w-4 h-4 text-gray-400 transition-transform ${
                    mobileExpandedMenu === "Industries" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileExpandedMenu === "Industries" && (
                <div className="mt-3 pl-3 space-y-2 border-l border-slate-700">
                  {industriesData.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      onClick={closeAll}
                      className="block text-xs text-slate-300 hover:text-sky-400 py-1"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="border-b border-gray-800 pb-3">
              <button
                onClick={() => toggleMobileSubmenu("Services")}
                className="flex items-center justify-between w-full text-white font-medium text-left"
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 text-gray-400 transition-transform ${
                    mobileExpandedMenu === "Services" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileExpandedMenu === "Services" && (
                <div className="mt-3 pl-3 space-y-3 border-l border-slate-700">
                  {servicesData.map((cat, idx) => (
                    <div key={idx}>
                      <span className="text-xs font-semibold text-sky-400 block mb-1">
                        {cat.category}
                      </span>
                      {cat.items.map((sub, sIdx) => (
                        <Link
                          key={sIdx}
                          href={sub.href}
                          onClick={closeAll}
                          className="block text-[11px] text-slate-300 hover:text-white py-0.5 pl-2"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="border-b border-gray-800 pb-3">
              <button
                onClick={() => toggleMobileSubmenu("Products")}
                className="flex items-center justify-between w-full text-white font-medium text-left"
              >
                Products
                <ChevronDown
                  className={`w-4 h-4 text-gray-400 transition-transform ${
                    mobileExpandedMenu === "Products" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileExpandedMenu === "Products" && (
                <div className="mt-3 pl-3 space-y-2 border-l border-slate-700">
                  {productsData.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      onClick={closeAll}
                      className="block text-xs text-slate-300 hover:text-sky-400 py-1"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="border-b border-gray-800 pb-3">
              <button
                onClick={() => toggleMobileSubmenu("Insights")}
                className="flex items-center justify-between w-full text-white font-medium text-left"
              >
                Insights
                <ChevronDown
                  className={`w-4 h-4 text-gray-400 transition-transform ${
                    mobileExpandedMenu === "Insights" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileExpandedMenu === "Insights" && (
                <div className="mt-3 pl-3 space-y-2 border-l border-slate-700">
                  {insightsData.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      onClick={closeAll}
                      className="block text-xs text-slate-300 hover:text-sky-400 py-1"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="border-b border-gray-800 pb-3">
              <button
                onClick={() => toggleMobileSubmenu("HowWeWork")}
                className="flex items-center justify-between w-full text-white font-medium text-left"
              >
                How We Work
                <ChevronDown
                  className={`w-4 h-4 text-gray-400 transition-transform ${
                    mobileExpandedMenu === "HowWeWork" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileExpandedMenu === "HowWeWork" && (
                <div className="mt-3 pl-3 space-y-2 border-l border-slate-700">
                  {howWeWorkData.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      onClick={closeAll}
                      className="block text-xs text-slate-300 hover:text-sky-400 py-1"
                    >
                      {item.title}
                    </Link>
                  ))}
                  <Link
                    href="/how-we-work/tech-consulting"
                    onClick={closeAll}
                    className="block text-xs text-slate-300 hover:text-sky-400 py-1"
                  >
                    Tech Consulting
                  </Link>
                  <Link
                    href="/how-we-work/methodologies"
                    onClick={closeAll}
                    className="block text-xs text-slate-300 hover:text-sky-400 py-1"
                  >
                    Methodologies
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        <Link
          href="/contact"
          onClick={closeAll}
          className="flex items-center justify-center gap-2 w-full py-3 mt-6 bg-sky-400 hover:bg-sky-500 text-white rounded-full font-medium text-sm transition-all"
        >
          Contact Us
          <Send className="w-4 h-4" />
        </Link>
      </div>
    </>
  );
};

export default Navbar;
