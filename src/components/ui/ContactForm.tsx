"use client";
import { useState } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct the email body
    const subject = encodeURIComponent("New Contact Form Submission from CampusHub");
    const body = encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\n` +
      `Work Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    );

    // Trigger the mailto link
    window.location.href = `mailto:hello@jinanam.tech?subject=${subject}&body=${body}`;
  };

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
      {/* Name Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="firstName" className="text-sm font-medium text-foreground">First Name</label>
          <input
            type="text"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            placeholder="John"
            className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="lastName" className="text-sm font-medium text-foreground">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            placeholder="Doe"
            className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
          />
        </div>
      </div>

      {/* Email Field */}
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium text-foreground">Work Email</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="john@school.edu"
          className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
        />
      </div>

      {/* Message Field */}
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-foreground">How can we help?</label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Tell us about your school's requirements..."
          className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors resize-none"
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="mt-4 w-full sm:w-auto inline-flex items-center justify-center rounded-button bg-gradient-blue-purple px-8 py-3.5 text-base font-medium text-white shadow-glow transition-all duration-300 hover:brightness-110 hover:shadow-glow-purple hover:-translate-y-0.5 active:scale-[0.98] focus:outline-none"
      >
        Send Message
      </button>
    </form>
  );
}
