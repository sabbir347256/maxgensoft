"use client";

import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import {
  User,
  Building2,
  Mail,
  Phone,
  Briefcase,
  MessageSquare,
  Send,
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const ContactForm = () => {
  const containerRef = useRef(null);
  const blob1Ref = useRef(null);
  const blob2Ref = useRef(null);
  const wave1Ref = useRef(null);
  const wave2Ref = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  useGSAP(
    () => {
      gsap.to(blob1Ref.current, {
        x: 100,
        y: 60,
        scale: 1.15,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(blob2Ref.current, {
        x: -90,
        y: -70,
        scale: 1.2,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(wave1Ref.current, {
        x: -120,
        duration: 15,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(wave2Ref.current, {
        x: 120,
        duration: 18,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: containerRef },
  );

  const onSubmit = async (data) => {
    console.log("Form Submitted:", data);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    reset();
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#F2F6FA] py-20 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            #2b58b8,
            #2b58b8 1px,
            transparent 1px,
            transparent 24px
          )`,
        }}
      />

      <div
        ref={wave1Ref}
        className="absolute top-10 -left-40 w-[600px] h-[600px] rounded-[40%] bg-blue-300/20 blur-2xl pointer-events-none transform-gpu"
      />
      <div
        ref={wave2Ref}
        className="absolute -bottom-20 -right-40 w-[650px] h-[650px] rounded-[45%] bg-indigo-300/20 blur-2xl pointer-events-none transform-gpu"
      />

      <div
        ref={blob1Ref}
        className="absolute top-1/4 left-10 w-80 h-80 bg-blue-400/25 rounded-full blur-3xl pointer-events-none transform-gpu"
      />
      <div
        ref={blob2Ref}
        className="absolute bottom-1/4 right-10 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl pointer-events-none transform-gpu"
      />

      <div className="container relative z-10 mx-auto max-w-7xl">
        <div className="relative rounded-3xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_60px_rgba(43,88,184,0.12)] transition-shadow duration-500 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">
          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-between">
            <div className="space-y-3 mb-10">
              <span className="inline-block px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#2b58b8] text-xs font-semibold tracking-wide uppercase transition-transform duration-300 hover:scale-105">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Contact <span className="text-[#2b58b8]">us</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Fill out the form below and we&apos;ll get back to you once
                we&apos;ve processed your request.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-semibold text-slate-700 mb-2 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#2b58b8]" /> Name{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    {...register("name", { required: "Name is required" })}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${
                      errors.name ? "border-red-500" : "border-slate-200"
                    } text-slate-900 text-sm focus:bg-white focus:border-[#2b58b8] focus:ring-2 focus:ring-[#2b58b8]/20 hover:border-[#2b58b8]/50 outline-none transition-all duration-300 transform hover:-translate-y-0.5 focus:-translate-y-0.5`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">
                      {String(errors.name?.message)}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 mb-2 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-[#2b58b8]" /> Company{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter company name"
                    {...register("company", {
                      required: "Company is required",
                    })}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${
                      errors.company ? "border-red-500" : "border-slate-200"
                    } text-slate-900 text-sm focus:bg-white focus:border-[#2b58b8] focus:ring-2 focus:ring-[#2b58b8]/20 hover:border-[#2b58b8]/50 outline-none transition-all duration-300 transform hover:-translate-y-0.5 focus:-translate-y-0.5`}
                  />
                  {errors.company && (
                    <p className="text-red-500 text-xs mt-1">
                      {String(errors.company?.message)}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-semibold text-slate-700 mb-2 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#2b58b8]" /> Email{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${
                      errors.email ? "border-red-500" : "border-slate-200"
                    } text-slate-900 text-sm focus:bg-white focus:border-[#2b58b8] focus:ring-2 focus:ring-[#2b58b8]/20 hover:border-[#2b58b8]/50 outline-none transition-all duration-300 transform hover:-translate-y-0.5 focus:-translate-y-0.5`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {String(errors.email?.message)}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 mb-2 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#2b58b8]" /> Phone{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your contact no"
                    {...register("phone", {
                      required: "Phone number is required",
                    })}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${
                      errors.phone ? "border-red-500" : "border-slate-200"
                    } text-slate-900 text-sm focus:bg-white focus:border-[#2b58b8] focus:ring-2 focus:ring-[#2b58b8]/20 hover:border-[#2b58b8]/50 outline-none transition-all duration-300 transform hover:-translate-y-0.5 focus:-translate-y-0.5`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">
                      {String(errors.phone?.message)}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-semibold text-slate-700 mb-2 flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-[#2b58b8]" />{" "}
                    Industry <span className="text-red-500">*</span>
                  </label>
                  <select
                    {...register("industry", {
                      required: "Please select an industry",
                    })}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${
                      errors.industry ? "border-red-500" : "border-slate-200"
                    } text-slate-900 text-sm focus:bg-white focus:border-[#2b58b8] focus:ring-2 focus:ring-[#2b58b8]/20 hover:border-[#2b58b8]/50 outline-none transition-all duration-300 transform hover:-translate-y-0.5 focus:-translate-y-0.5`}
                  >
                    <option value="">Select Industry</option>
                    <option value="technology">Software & Tech</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="finance">Finance & Banking</option>
                    <option value="ecommerce">E-Commerce</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.industry && (
                    <p className="text-red-500 text-xs mt-1">
                      {String(errors.industry?.message)}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 mb-2 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-[#2b58b8]" /> Your
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project..."
                  {...register("message", { required: "Message is required" })}
                  className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${
                    errors.message ? "border-red-500" : "border-slate-200"
                  } text-slate-900 text-sm focus:bg-white focus:border-[#2b58b8] focus:ring-2 focus:ring-[#2b58b8]/20 hover:border-[#2b58b8]/50 outline-none transition-all duration-300 transform hover:-translate-y-0.5 focus:-translate-y-0.5 resize-none`}
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">
                    {String(errors.message?.message)}
                  </p>
                )}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#2b58b8] hover:bg-blue-700 text-white font-bold text-sm shadow-[0_10px_25px_rgba(43,88,184,0.3)] hover:shadow-[0_15px_30px_rgba(43,88,184,0.5)] transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Submit
                      <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full p-4 lg:p-6 flex items-center">
            <div className="group relative w-full h-full min-h-[350px] rounded-2xl overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="Our Team"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1 transition-transform duration-500 group-hover:-translate-y-1">
                <p className="text-lg font-bold">Ready to collaborate?</p>
                <p className="text-xs text-slate-200">
                  Our experts are standing by to power your next project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
