'use client';

import React, { useState } from "react";

import Link from "next/link";
import { motion } from "framer-motion";
import { trpc } from '@/lib/trpc-client';

const domains = [
  "Hackathon department",
  "Media",
  "Marketing",
  "Graphics",
  "Creative",
  "Communications & Publications",
  "Finance",
  "Management",
  "Logistics",
  "HR",
];

const RegistrationForm = () => {
  const [formData, setFormDataState] = useState({
    fullName: "",
    regNumber: "",
    universityEmail: "",
    phoneNumber: "",
    semester: "",
    domain: "",
    reason: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // tRPC mutation
  const registerMutation = trpc.forms.register.useMutation({
    onSuccess: () => {
      setFormSubmitted(true);
      setIsSubmitting(false);
    },
    onError: (error: any) => {
      alert(`Registration failed: ${error.message}`);
      setIsSubmitting(false);
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormDataState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Check if email ends with '@ucp.edu.pk'
    if (!formData.universityEmail.endsWith("@ucp.edu.pk")) {
      alert("Only @ucp.edu.pk email addresses are allowed.");
      setIsSubmitting(false);
      return;
    }

    registerMutation.mutate(formData);
  };


  if (formSubmitted) {
    return (
      <div className="bg-black py-24 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8 bg-zinc-900/40 backdrop-blur-xl border border-white/10 p-12 rounded-[2rem]">
          <div className="w-20 h-20 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <span className="text-4xl">✓</span>
          </div>
          <h1 className="text-4xl font-black uppercase tracking-tighter text-white">
            Thank You for <span className="text-[#FFA016]">Registering!</span>
          </h1>
          <p className="text-lg text-gray-400 italic">
            Your form has been successfully submitted. We're excited to have you on board!
          </p>
          <div className="space-y-4 pt-4 text-left border-l-2 border-[#FFA016]/20 pl-8 max-w-md mx-auto">
            <p className="text-sm text-gray-400 uppercase tracking-widest font-bold">Details</p>
            <p className="text-white text-md">
              <span className="text-gray-500">Email:</span> {formData.universityEmail}
            </p>
            <p className="text-white text-md">
              <span className="text-gray-500">Domain:</span> {formData.domain}
            </p>
          </div>
          <div className="pt-8">
            <Link
              href="/"
              className="inline-block px-10 py-4 rounded-full bg-[#FFA016] text-black font-black uppercase text-xs tracking-widest hover:scale-105 transition-all shadow-lg shadow-orange-500/10"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-zinc-900/40 backdrop-blur-3xl p-8 md:p-16 rounded-[2.5rem] border border-white/5 relative overflow-hidden"
        >
          {/* Subtle Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFA016]/5 blur-[120px] rounded-full -mr-32 -mt-32" />

          <form onSubmit={handleSubmit} className="relative z-10 grid gap-10">
            <div className="flex flex-col mb-4">
              <div className="w-16 h-1 bg-[#FFA016] mb-8 rounded-full" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white leading-none">
                Registration
              </h1>
              <p className="text-gray-500 mt-4 uppercase tracking-[0.2em] font-bold text-[10px]">Society Membership Session 25-26</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {/* Full Name */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-[#FFA016]/50 transition-all"
                  placeholder="John Doe"
                  required
                />
              </div>

              {/* Reg Number */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Registration Number</label>
                <input
                  type="text"
                  name="regNumber"
                  value={formData.regNumber}
                  onChange={handleChange}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-[#FFA016]/50 transition-all"
                  placeholder="L1F21BSCS0000"
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">University Email</label>
                <input
                  type="email"
                  name="universityEmail"
                  value={formData.universityEmail}
                  onChange={handleChange}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-[#FFA016]/50 transition-all"
                  placeholder="abc@ucp.edu.pk"
                  required
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-[#FFA016]/50 transition-all"
                  placeholder="+92 300 0000000"
                  required
                />
              </div>

              {/* Domain */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Preferred Domain</label>
                <div className="relative">
                  <select
                    name="domain"
                    value={formData.domain}
                    onChange={handleChange}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-6 py-4 text-white appearance-none focus:outline-none focus:border-[#FFA016]/50 transition-all"
                    required
                  >
                    <option value="" disabled className="bg-zinc-900 italic">Select a domain</option>
                    {domains.map((domain, index) => (
                      <option key={index} value={domain} className="bg-zinc-900">{domain}</option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">▼</div>
                </div>
              </div>

              {/* Semester */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Current Semester</label>
                <div className="relative">
                  <select
                    name="semester"
                    value={formData.semester}
                    onChange={handleChange}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-6 py-4 text-white appearance-none focus:outline-none focus:border-[#FFA016]/50 transition-all"
                    required
                  >
                    <option value="" disabled className="bg-zinc-900 italic">Select Semester</option>
                    {[...Array(8)].map((_, i) => (
                      <option key={i + 1} value={i + 1} className="bg-zinc-900">{i + 1}</option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">▼</div>
                </div>
              </div>
            </div>

            {/* Reason */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Why do you want to join?</label>
              <textarea
                name="reason"
                rows={5}
                value={formData.reason}
                onChange={handleChange}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-[#FFA016]/50 transition-all resize-none italic"
                placeholder="Tell us about your passion and what you hope to achieve..."
                required
              />
            </div>

            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 text-black font-black uppercase tracking-[0.3em] text-xs rounded-xl bg-[#FFA016] hover:shadow-[0_0_30px_rgba(255,160,22,0.3)] hover:-translate-y-1 active:scale-95 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Processing..." : "Submit Registration"}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default RegistrationForm;
