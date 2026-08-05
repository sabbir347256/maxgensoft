"use client";

import {
  Anchor,
  Building2,
  ChevronDown,
  GraduationCap,
  HeartPulse,
  Menu,
  Radio,
  Send,
  Wallet,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const dropdownData = {
    Industries: [
      {
        title: "E-Gov Solutions",
        desc: "Digitizing Governance, Empowering Citizens.",
        icon: Building2,
      },
      {
        title: "EdTech",
        desc: "Smart Education for a Smarter Generation.",
        icon: GraduationCap,
      },
      {
        title: "Maritime and PortTech",
        desc: "Navigating the Future with Technology.",
        icon: Anchor,
      },
      {
        title: "FinTech",
        desc: "Finance Simplified, Growth Amplified.",
        icon: Wallet,
      },
      {
        title: "HealthTech",
        desc: "Better Technology, Better Health.",
        icon: HeartPulse,
      },
      {
        title: "Telecom & Media",
        desc: "Innovating Connectivity for the Digital Age.",
        icon: Radio,
      },
    ],
  };

  const [activeMenu, setActiveMenu] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
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

  return (
    <>
      <nav
      className="bg-slate-900/90 "
        // className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        //   scrolled
        //     ? "bg-slate-900/90 backdrop-blur-md shadow-lg py-1 border-b border-slate-800"
        //     : "bg-transparent py-3"
        // }`}
      >
        <div className="container mx-auto px-4 h-15 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-white font-bold text-2xl tracking-wide"
          >
            <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-sm">
              ▲
            </div>
            MaxGenSoft
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {[
              "Industries",
              "Services",
              "Products",
              "Insights",
              "How We Work",
            ].map((item) => (
              <div
                key={item}
                className="relative py-6"
                onMouseEnter={() => setActiveMenu(item)}
                onMouseLeave={() => setActiveMenu("")}
              >
                <button
                  className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                    scrolled
                      ? "text-slate-200 hover:text-sky-400"
                      : "text-white hover:text-cyan-400"
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
                    className={`absolute left-1/2 -translate-x-1/2 top-full w-[1050px] bg-white rounded-2xl shadow-2xl p-6 transition-all duration-500 ease-in-out origin-top ${
                      activeMenu === "Industries"
                        ? "opacity-100 scale-100 pointer-events-auto"
                        : "opacity-0 scale-95 pointer-events-none"
                    }`}
                  >
                    <div className="grid grid-cols-4 gap-4">
                      <div className="col-span-1 pr-4 border-r border-gray-100">
                        <h4 className="font-bold text-gray-900 text-sm mb-1">
                          Transforming Sectors
                        </h4>
                        <p className="text-xs text-gray-500 leading-relaxed">
                          See how ADDIE is driving digital transformation across
                          industries with specialized solutions.
                        </p>
                      </div>

                      <div className="col-span-3 grid grid-cols-3 gap-3">
                        {dropdownData.Industries.map((subItem, index) => {
                          const Icon = subItem.icon;
                          return (
                            <div
                              key={index}
                              className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors duration-200 cursor-pointer group"
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
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center">
            <Link
              href="#"
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
        onClick={() => setMobileOpen(false)}
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
              onClick={() => setMobileOpen(false)}
            >
              MaxGen <span className="font-light">Soft</span>
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col gap-4">
            {[
              "Industries",
              "Services",
              "Products",
              "Insights",
              "How We Work",
            ].map((item) => (
              <div key={item} className="border-b border-gray-800 pb-3">
                <button className="flex items-center justify-between w-full text-white font-medium text-left">
                  {item}
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <Link
          href="#"
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
