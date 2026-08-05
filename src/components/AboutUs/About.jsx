import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Users,
  Award,
} from "lucide-react";

const About = () => {
  const highlights = [
    "Enterprise-Grade Scalability & Security",
    "Agile Development & Rapid Deployment",
    "AI-Driven & Cloud-Native Architectures",
    "Dedicated Cross-Functional Engineering Teams",
  ];

  const stats = [
    { label: "Years of Excellence", value: "10+", icon: Award },
    { label: "Enterprise Clients", value: "150+", icon: Users },
    { label: "Uptime Reliability", value: "99.99%", icon: ShieldCheck },
    { label: "Projects Delivered", value: "350+", icon: Zap },
  ];

  return (
 <section className="relative bg-white text-slate-900 py-24 overflow-hidden border-t border-slate-100">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-sky-100/60 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden border border-slate-200/80 shadow-xl">
              <Image
                src="https://thenthbit.com/wp-content/uploads/2026/05/software-company-gurgaon.jpg.webp"
                alt="About MaxGenSoft Engineering"
                width={700}
                height={600}
                className="w-full h-[450px] sm:h-[550px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-6 -right-6 sm:bottom-6 sm:right-6 z-20 bg-white border border-slate-200/80 p-6 rounded-2xl shadow-xl max-w-xs hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-500 text-white flex items-center justify-center font-bold text-xl shadow-md shadow-sky-500/20">
                  ▲
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">Innovation First</h4>
                  <p className="text-xs text-slate-500">Architecting modern digital solutions.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-sky-50 text-sky-600 border border-sky-200/60 mb-6">
              About MaxGenSoft
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-slate-900 mb-6">
              Empowering Global Enterprises Through{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
                Intelligent Software
              </span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
              At MaxGenSoft, we bridge the gap between complex technological challenges and sleek digital execution. We specialize in engineering high-performance platforms, automated cloud infrastructures, and custom software systems designed to scale seamlessly.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0" />
                  <span className="text-sm text-slate-700 font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-sky-500 hover:bg-sky-600 text-white font-bold text-sm rounded-2xl transition-all duration-300 shadow-lg shadow-sky-500/25 hover:scale-[1.02]"
              >
                Discover Our Journey
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20 pt-16 border-t border-slate-200/80">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-6 text-center hover:border-sky-300 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 mx-auto rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-1">
                  {stat.value}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
