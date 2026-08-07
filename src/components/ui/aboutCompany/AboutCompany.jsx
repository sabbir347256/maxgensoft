"use client";

import React, { useRef } from "react";
import {
  Sparkles,
  Scissors,
  CheckCircle2,
  Award,
  Users,
  Target,
  HeartHandshake,
  Shirt,
  Compass,
  ArrowUpRight,
} from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutCompany = () => {
  const containerRef = useRef(null);

  const heroRef = useRef(null);
  const heroTextRef = useRef(null);
  const heroCardRef = useRef(null);
  const heroLinesRef = useRef(null);

  const statsRef = useRef(null);
  const statsLinesRef = useRef(null);

  const valuesSectionRef = useRef(null);
  const valuesGridRef = useRef(null);
  const valuesPatternRef = useRef(null);

  const visionSectionRef = useRef(null);
  const visionCardLeftRef = useRef(null);
  const visionCardRightRef = useRef(null);
  const visionLinesRef = useRef(null);

  const features = [
    {
      icon: Scissors,
      title: "Premium Fabric Quality",
      desc: "Handpicked cotton, silk, and lawn fabrics crafted to provide maximum comfort without compromising elegance.",
    },
    {
      icon: Shirt,
      title: "Versatile Unstitched Styling",
      desc: "Complete creative freedom to stitch and style your outfit according to your personal fit and aesthetic.",
    },
    {
      icon: HeartHandshake,
      title: "Student & Youth Friendly",
      desc: "High-end fashion made accessible with competitive pricing designed for modern students and young adults.",
    },
    {
      icon: Award,
      title: "Authentic Craftsmanship",
      desc: "Meticulous embroidery, vibrant color palettes, and durable dyes engineered to last season after season.",
    },
  ];

  const stats = [
    { number: "10K+", label: "Happy Customers" },
    { number: "500+", label: "Unstitched Designs" },
    { number: "99%", label: "Satisfaction Rate" },
    { number: "24/7", label: "Dedicated Support" },
  ];

  useGSAP(
    () => {
      if (heroLinesRef.current) {
        gsap.to(heroLinesRef.current.children, {
          x: "random(-30, 30)",
          y: "random(-20, 20)",
          duration: 6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: 0.3,
        });
      }

      if (statsLinesRef.current) {
        gsap.to(statsLinesRef.current, {
          x: "-50%",
          duration: 15,
          repeat: -1,
          ease: "none",
        });
      }

      if (valuesPatternRef.current) {
        gsap.to(valuesPatternRef.current, {
          rotation: 360,
          duration: 45,
          repeat: -1,
          ease: "none",
          transformOrigin: "center center",
        });
      }

      if (visionLinesRef.current) {
        gsap.to(visionLinesRef.current.children, {
          strokeDashoffset: 100,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          stagger: 0.4,
        });
      }

      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 1 },
      });

      if (heroTextRef.current) {
        tl.fromTo(
          heroTextRef.current.children,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.15 },
        );
      }

      if (heroCardRef.current) {
        tl.fromTo(
          heroCardRef.current,
          { scale: 0.9, opacity: 0, y: 30 },
          { scale: 1, opacity: 1, y: 0, duration: 1 },
          "-=0.6",
        );
      }

      if (statsRef.current) {
        gsap.fromTo(
          statsRef.current.children,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }

      if (valuesGridRef.current) {
        gsap.fromTo(
          valuesGridRef.current.children,
          { y: 50, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: valuesSectionRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }

      if (visionCardLeftRef.current && visionCardRightRef.current) {
        gsap.fromTo(
          visionCardLeftRef.current,
          { x: -50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: visionSectionRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        );

        gsap.fromTo(
          visionCardRightRef.current,
          { x: 50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: visionSectionRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="w-full text-slate-800 overflow-hidden relative font-sans"
    >
      <section
        ref={heroRef}
        className="relative py-20 lg:py-28  bg-gradient-to-b from-sky-50 via-slate-50 to-white overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none z-0">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <g
              ref={heroLinesRef}
              stroke="#0284c7"
              strokeWidth="1.2"
              fill="none"
              opacity="0.35"
            >
              <path d="M-100,50 L400,250 L900,50 L1400,250 L1900,50" />
              <path
                d="M-100,120 L400,320 L900,120 L1400,320 L1900,120"
                stroke="#f97316"
              />
              <path d="M-100,190 L400,390 L900,190 L1400,390 L1900,190" />
              <path
                d="M-100,260 L400,460 L900,260 L1400,460 L1900,260"
                stroke="#f97316"
              />
            </g>
          </svg>
        </div>

        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div ref={heroTextRef} className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/90 border border-blue-200 text-blue-900 text-xs font-semibold uppercase tracking-wider shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-orange-600" /> Redefining
              Unstitched Elegance
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-slate-900">
              Crafting Fashion <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-sky-600 to-orange-500">
                That Reflects Your Unique Identity
              </span>
            </h1>

            <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl">
              We bring you premium unstitched apparel designed specifically for
              modern youth and students. We believe ethnic fashion should be
              versatile, effortless, and accessible without ever compromising on
              fabric quality or contemporary aesthetics.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-700">
              <span className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2.5 rounded-xl border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-blue-600" /> Premium
                Fabrics
              </span>
              <span className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2.5 rounded-xl border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-orange-500" />{" "}
                Youth-Centric Styles
              </span>
              <span className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2.5 rounded-xl border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-blue-600" /> Affordable
                Luxury
              </span>
            </div>
          </div>

          <div ref={heroCardRef} className="lg:col-span-5">
            <div className="relative rounded-3xl bg-white/90 backdrop-blur-md border border-slate-200/80 p-8 shadow-xl overflow-hidden group hover:border-sky-400 transition-all duration-500">
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700">
                  <Scissors className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-slate-600 uppercase tracking-widest bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                  Unstitched Apparel
                </span>
              </div>

              <div className="space-y-4 my-6">
                <h3 className="text-2xl font-bold text-slate-900">
                  Your Canvas, Your Style
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Every unstitched fabric kit comes with thoughtfully designed
                  patterns, premium borders, and matching dupattas so you can
                  tailor your silhouette exactly the way you vision it.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Designed for Students & Youth</span>
                <span className="text-orange-600 font-semibold flex items-center gap-1 group-hover:text-orange-700 transition-colors">
                  Explore Collection <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200/80 bg-blue-900 text-white py-14  relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-20 flex w-[200%]"
          ref={statsLinesRef}
        >
          <svg className="w-1/2 h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="diagonal-stripe"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 0 40 L 40 0 M -10 10 L 10 -10 M 30 50 L 50 30"
                  stroke="#38bdf8"
                  strokeWidth="2"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diagonal-stripe)" />
          </svg>
          <svg className="w-1/2 h-full" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="url(#diagonal-stripe)" />
          </svg>
        </div>

        <div
          ref={statsRef}
          className="container grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-2">
              <h4 className="text-3xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-sky-200 via-white to-orange-300">
                {stat.number}
              </h4>
              <p className="text-sky-100 text-xs md:text-sm uppercase tracking-wider font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        ref={valuesSectionRef}
        className="py-24  relative bg-orange-50/40 overflow-hidden"
      >
        <div
          className="absolute -top-32 -right-32 w-96 h-96 pointer-events-none opacity-20"
          ref={valuesPatternRef}
        >
          <svg
            className="w-full h-full"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g stroke="#f97316" strokeWidth="1.5" fill="none">
              <circle cx="100" cy="100" r="20" />
              <circle cx="100" cy="100" r="40" strokeDasharray="4 4" />
              <circle cx="100" cy="100" r="60" />
              <circle cx="100" cy="100" r="80" strokeDasharray="6 6" />
              <path d="M 0 100 L 200 100 M 100 0 L 100 200" stroke="#0284c7" />
            </g>
          </svg>
        </div>

        <div className="container space-y-16 relative z-10">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/90 border border-orange-200 text-orange-900 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm shadow-sm">
              <Compass className="w-3.5 h-3.5 text-orange-600" /> Our Commitment
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              Why Choose Our <span className="text-blue-700">Collections</span>
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              We combine traditional textile craftsmanship with contemporary
              streetwear sensibilities to give you fashion that feels uniquely
              yours.
            </p>
          </div>

          <div
            ref={valuesGridRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-white/90 backdrop-blur-md border border-slate-200 flex flex-col justify-between hover:border-sky-400 hover:-translate-y-2 transition-all duration-500 group shadow-md"
                >
                  <div className="space-y-6">
                    <div className="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-blue-700 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        ref={visionSectionRef}
        className="py-20  bg-slate-100/80 relative overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <g
              ref={visionLinesRef}
              stroke="#0284c7"
              strokeWidth="2"
              fill="none"
              strokeDasharray="10 10"
            >
              <line x1="0" y1="20%" x2="100%" y2="20%" />
              <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#f97316" />
              <line x1="0" y1="80%" x2="100%" y2="80%" />
            </g>
          </svg>
        </div>

        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
          <div
            ref={visionCardLeftRef}
            className="p-10 md:p-12 rounded-3xl bg-white/90 backdrop-blur-md border border-slate-200 space-y-6 relative overflow-hidden shadow-sm"
          >
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
              Our Mission
            </h3>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              To empower young people with high-quality, customizable unstitched
              fashion that blend modern elegance with everyday
              budget-friendliness.
            </p>
          </div>

          <div
            ref={visionCardRightRef}
            className="p-10 md:p-12 rounded-3xl bg-white/90 backdrop-blur-md border border-slate-200 space-y-6 relative overflow-hidden shadow-sm"
          >
            <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
              Our Vision
            </h3>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              To become the go-to e-commerce destination for unstitched apparel,
              known for trendsetting designs, seamless online shopping, and
              unmatched customer care.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutCompany;
