'use client';

import React, { useState } from "react";

import Link from "next/link";
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

  // tRPC mutation
  const registerMutation = trpc.forms.register.useMutation({
    onSuccess: () => {
      setFormSubmitted(true);
    },
    onError: (error: any) => {
      alert(`Registration failed: ${error.message}`);
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormDataState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if email ends with '@ucp.edu.pk'
    if (!formData.universityEmail.endsWith("@ucp.edu.pk")) {
      alert("Only @ucp.edu.pk email addresses are allowed.");
      return;
    }

    registerMutation.mutate(formData);
  };


  if (formSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white px-6">
        <div className="max-w-3xl text-center space-y-6">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-black to-[#FFA016] text-transparent bg-clip-text">
            Thank You for Registering!
          </h1>
          <p className="text-lg text-gray-700">
            Your form has been successfully submitted.
          </p>
          <p className="text-md text-gray-600">
            A WhatsApp invite link has been sent to your email:{" "}
            <span className="font-medium text-black">{formData.universityEmail}</span>
          </p>
          <p className="text-md text-gray-600">
            You will be added shortly to your preferred domain:{" "}
            <span className="font-medium text-black">{formData.domain}</span>.
          </p>
          <p className="text-md text-gray-600">
            For urgent queries, feel free to contact us via WhatsApp:
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-3 rounded-md bg-gradient-to-r from-black to-[#FFA016] text-white font-semibold hover:opacity-90"
          >
            Go Back to Home →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full px-8 py-12 bg-white">
      <form onSubmit={handleSubmit} className="w-full max-w-5xl mx-auto grid gap-6">
        <h1 className="text-3xl font-extrabold text-left bg-gradient-to-r from-black to-[#FFA016] bg-clip-text text-transparent">
          Society Registration Form
        </h1>

        {/* Fields: Same as before */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-semibold mb-1 bg-gradient-to-r from-black to-[#FFA016] bg-clip-text text-transparent">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-gray-200 text-black"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1 bg-gradient-to-r from-black to-[#FFA016] bg-clip-text text-transparent">
              Registration Number
            </label>
            <input
              type="text"
              name="regNumber"
              value={formData.regNumber}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-gray-200 text-black"
              placeholder="Enter your registration number"
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1 bg-gradient-to-r from-black to-[#FFA016] bg-clip-text text-transparent">
              University Email
            </label>
            <input
              type="email"
              name="universityEmail"
              value={formData.universityEmail}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-gray-200 text-black"
              placeholder="abc@university.edu"
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1 bg-gradient-to-r from-black to-[#FFA016] bg-clip-text text-transparent">
              Phone Number
            </label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-gray-200 text-black"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1 bg-gradient-to-r from-black to-[#FFA016] bg-clip-text text-transparent">
              Preferred Domain
            </label>
            <select
              name="domain"
              value={formData.domain}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-gray-200 text-black"
              required
            >
              <option value="" disabled>-- Select a domain --</option>
              {domains.map((domain, index) => (
                <option key={index} value={domain}>{domain}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-1 bg-gradient-to-r from-black to-[#FFA016] bg-clip-text text-transparent">
              Semester
            </label>
            <select
              name="semester"
              value={formData.semester}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-gray-200 text-black"
              required
            >
              <option value="" disabled>-- Select Semester --</option>
              {[...Array(8)].map((_, i) => (
                <option key={i + 1} value={i + 1}>{i + 1}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-1 bg-gradient-to-r from-black to-[#FFA016] bg-clip-text text-transparent">
            Why do you want to join this society?
          </label>
          <textarea
            name="reason"
            rows={5}
            value={formData.reason}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-gray-200 text-black"
            placeholder="Tell us what excites you..."
            required
          />
        </div>

        <div className="text-center mt-6">
          <button
            type="submit"
            className="px-6 py-3 text-white font-semibold rounded-md bg-gradient-to-r from-black to-[#FFA016] hover:opacity-90"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
