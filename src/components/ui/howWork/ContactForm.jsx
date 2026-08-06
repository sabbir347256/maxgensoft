"use client";

import React from "react";
import { useForm } from "react-hook-form";
import {
  Send,
  Building2,
  User,
  Mail,
  Phone,
  Briefcase,
  DollarSign,
  MessageSquare,
} from "lucide-react";
const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Form Submitted:", data);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    reset();
  };

  return (
    <section className="relative w-full bg-[#F2F6FA] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl bg-white border border-slate-200/80 shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">
          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-between">
            <div className="space-y-3 mb-10">
              <span className="inline-block px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#2b58b8] text-xs font-semibold tracking-wide uppercase">
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
                    placeholder="John Doe"
                    {...register("name", { required: "Name is required" })}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${
                      errors.name ? "border-red-500" : "border-slate-200"
                    } text-slate-900 text-sm focus:bg-white focus:border-[#2b58b8] focus:ring-2 focus:ring-[#2b58b8]/20 outline-none transition-all`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.name.message}
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
                    placeholder="Acme Inc."
                    {...register("company", {
                      required: "Company is required",
                    })}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${
                      errors.company ? "border-red-500" : "border-slate-200"
                    } text-slate-900 text-sm focus:bg-white focus:border-[#2b58b8] focus:ring-2 focus:ring-[#2b58b8]/20 outline-none transition-all`}
                  />
                  {errors.company && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.company.message}
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
                    placeholder="john@example.com"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${
                      errors.email ? "border-red-500" : "border-slate-200"
                    } text-slate-900 text-sm focus:bg-white focus:border-[#2b58b8] focus:ring-2 focus:ring-[#2b58b8]/20 outline-none transition-all`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.email.message}
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
                    placeholder="+1 (555) 000-0000"
                    {...register("phone", {
                      required: "Phone number is required",
                    })}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${
                      errors.phone ? "border-red-500" : "border-slate-200"
                    } text-slate-900 text-sm focus:bg-white focus:border-[#2b58b8] focus:ring-2 focus:ring-[#2b58b8]/20 outline-none transition-all`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.phone.message}
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
                    } text-slate-900 text-sm focus:bg-white focus:border-[#2b58b8] focus:ring-2 focus:ring-[#2b58b8]/20 outline-none transition-all`}
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
                      {errors.industry.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 mb-2 flex items-center gap-1.5">
                    <DollarSign className="w-3.5 h-3.5 text-[#2b58b8]" /> Budget{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <select
                    {...register("budget", {
                      required: "Please select a budget range",
                    })}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${
                      errors.budget ? "border-red-500" : "border-slate-200"
                    } text-slate-900 text-sm focus:bg-white focus:border-[#2b58b8] focus:ring-2 focus:ring-[#2b58b8]/20 outline-none transition-all`}
                  >
                    <option value="">Select Budget</option>
                    <option value="5k-10k">$5k - $10k</option>
                    <option value="10k-25k">$10k - $25k</option>
                    <option value="25k-50k">$25k - $50k</option>
                    <option value="50k+">$50k+</option>
                  </select>
                  {errors.budget && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.budget.message}
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
                  } text-slate-900 text-sm focus:bg-white focus:border-[#2b58b8] focus:ring-2 focus:ring-[#2b58b8]/20 outline-none transition-all resize-none`}
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#2b58b8] hover:bg-blue-700 text-white font-bold text-sm shadow-[0_10px_25px_rgba(43,88,184,0.3)] hover:shadow-[0_15px_30px_rgba(43,88,184,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Submit
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full p-4 lg:p-6 flex items-center">
            <div className="relative w-full h-full min-h-[350px] rounded-2xl overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="Our Team"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
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
