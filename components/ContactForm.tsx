"use client";

import { useState, FormEvent } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
        form.reset();
      }
    } catch {
      // Handle error silently
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-[#e85242] mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-[#3a3d44] mb-2">Message Sent!</h3>
        <p className="text-[#787878]">
          Thank you for reaching out. We&apos;ll get back to you soon.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 btn-theme btn-theme-primary text-sm"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input
        type="hidden"
        name="access_key"
        value="0x4AAAAAAD1eyvfBA4B79lOA"
      />
      <input
        type="hidden"
        name="subject"
        value="New Contact from LGBTQIA++ Ku-Ila Website"
      />
      <input
        type="hidden"
        name="from_name"
        value="LGBTQIA++ Ku-Ila Website"
      />
      <div className="honeypot" style={{ display: "none" }}>
        <input type="checkbox" name="botcheck" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-[#3a3d44] mb-2"
          >
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 border border-[#e4e4e4] focus:border-[#e85242] outline-none transition-all text-[#3a3d44]"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-[#3a3d44] mb-2"
          >
            Your Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 border border-[#e4e4e4] focus:border-[#e85242] outline-none transition-all text-[#3a3d44]"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-[#3a3d44] mb-2"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject_form"
          className="w-full px-4 py-3 border border-[#e4e4e4] focus:border-[#e85242] outline-none transition-all text-[#3a3d44]"
          placeholder="How can we help?"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-[#3a3d44] mb-2"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 border border-[#e4e4e4] focus:border-[#e85242] outline-none transition-all text-[#3a3d44] resize-none"
          placeholder="Write your message here..."
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-theme btn-theme-primary inline-flex items-center justify-center gap-2 disabled:opacity-50"
      >
        {loading ? (
          "Sending..."
        ) : (
          <>
            Send Message
            <Send className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}
