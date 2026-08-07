import React from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Send,
  ShieldCheck,
  Cpu,
} from "lucide-react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from '../../../public/logo.png';
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative bg-slate-950 text-slate-300 pt-20 pb-8 border-t border-slate-800/80 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl " />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl " />

      <div className="container mx-auto relative z-10">
        <div className="bg-gradient-to-r from-slate-900 via-slate-800/80 to-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 mb-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-400/5 rounded-full blur-2xl " />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20 mb-4">
                <Cpu className="w-3.5 h-3.5" /> Ready to Innovate?
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Let’s Build Next-Generation <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
                  Enterprise Software Together
                </span>
              </h3>
              <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-xl">
                Partner with our engineering team to transform complex ideas
                into high-performance digital platforms.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:justify-end gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm rounded-2xl transition-all duration-300 shadow-lg shadow-sky-500/20 hover:scale-[1.02]"
              >
                Schedule Consultation
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-slate-800/80">
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="inline-flex gap-2 text-white font-extrabold text-2xl tracking-wide mb-6"
            >
              <div className="w-9 h-9 rounded-xl mt-0.5">
                <Image src={logo}></Image>
              </div>
              <span>
                MaxGen<span className="text-sky-400 font-light"></span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 pr-4">
              An enterprise software development company engineering scalable
              architectures, AI-driven workflows, and mission-critical
              applications for global industries.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: FaGithub, href: "#" },
                { icon: FaLinkedin, href: "#" },
                { icon: FaTwitter, href: "#" },
                { icon: FaFacebook, href: "#" },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={index}
                    href={item.href}
                    className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-500/40 hover:bg-slate-800 transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                "Custom Software",
                "Cloud Architecture",
                "AI & Machine Learning",
                "Cybersecurity",
                "DevOps Engineering",
                "UI/UX Platform Design",
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    href="#"
                    className="text-slate-400 hover:text-sky-400 transition-colors duration-200 inline-block"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">
              Industries
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                "FinTech & Banking",
                "HealthTech",
                "E-Gov Solutions",
                "Maritime & Logistics",
                "EdTech Systems",
                "Telecom & Media",
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    href="#"
                    className="text-slate-400 hover:text-sky-400 transition-colors duration-200 inline-block"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">
              Global Presence
            </h4>
            <ul className="space-y-4 text-sm text-slate-400 mb-6">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                {/* <span>Sector 44, Tech Hub, Gurgaon, Haryana 122003, India</span> */}
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                {/* <span>+91 (0124) 456-7890</span> */}
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span>maxgensoft@gmail.com</span>
              </li>
            </ul>

            <div className="pt-2">
              <span className="text-xs text-slate-400 uppercase tracking-wider block mb-2 font-medium">
                Subscribe to Tech Insights
              </span>
              <form className="flex items-center gap-2">
                <input
                  type="email"
                  placeholder="Enter business email"
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                />
                <button
                  type="submit"
                  className="bg-sky-500 hover:bg-sky-400 text-slate-950 p-2.5 rounded-xl font-bold transition-all shrink-0"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>
              ISO 27001 Certified | Enterprise-Grade Security Standard
            </span>
          </div>

          <p>
            © {new Date().getFullYear()} MaxGenSoft Inc. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-slate-300 transition-colors">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
