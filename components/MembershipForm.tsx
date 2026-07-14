"use client";

import { useState, FormEvent } from "react";
import { Send, CheckCircle, User, Mail, Phone, FileText } from "lucide-react";

export default function MembershipForm() {
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
        <CheckCircle className="w-16 h-16 text-[#03a8cb] mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-[#3a3d44] mb-2">Application Received!</h3>
        <p className="text-[#787878] mb-2">
          Thank you for applying! Please send your payment of <strong>300 PHP</strong> via GCash and include your reference number in the payment message.
        </p>
        <p className="text-[#787878] mb-6">
          Your membership will be activated once payment is confirmed. You will be added to our Members page.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 btn-theme btn-theme-primary text-sm"
        >
          Submit Another Application
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
        value="New Membership Application - LGBTQIA++ Ku-Ila"
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
            htmlFor="fullName"
            className="block text-sm font-medium text-[#3a3d44] mb-2"
          >
            Full Name *
          </label>
          <div className="relative">
            <User className="absolute left-3 top-3 w-4 h-4 text-[#787878]" />
            <input
              type="text"
              id="fullName"
              name="full_name"
              required
              className="w-full pl-10 pr-4 py-3 border border-[#e4e4e4] focus:border-[#e85242] outline-none transition-all text-[#3a3d44]"
              placeholder="Juan Dela Cruz"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-[#3a3d44] mb-2"
          >
            Email Address *
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 w-4 h-4 text-[#787878]" />
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full pl-10 pr-4 py-3 border border-[#e4e4e4] focus:border-[#e85242] outline-none transition-all text-[#3a3d44]"
              placeholder="your@email.com"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-[#3a3d44] mb-2"
          >
            Phone Number *
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-3 w-4 h-4 text-[#787878]" />
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full pl-10 pr-4 py-3 border border-[#e4e4e4] focus:border-[#e85242] outline-none transition-all text-[#3a3d44]"
              placeholder="09XX XXX XXXX"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="address"
            className="block text-sm font-medium text-[#3a3d44] mb-2"
          >
            Address *
          </label>
          <input
            type="text"
            id="address"
            name="address"
            required
            className="w-full px-4 py-3 border border-[#e4e4e4] focus:border-[#e85242] outline-none transition-all text-[#3a3d44]"
            placeholder="Barangay, City/Municipality"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="facebook"
          className="block text-sm font-medium text-[#3a3d44] mb-2"
        >
          Facebook Profile URL *
        </label>
        <input
          type="url"
          id="facebook"
          name="facebook_url"
          required
          className="w-full px-4 py-3 border border-[#e4e4e4] focus:border-[#e85242] outline-none transition-all text-[#3a3d44]"
          placeholder="https://www.facebook.com/yourprofile"
        />
      </div>

      <div>
        <label
          htmlFor="gcashRef"
          className="block text-sm font-medium text-[#3a3d44] mb-2"
        >
          GCash Reference Number *
        </label>
        <div className="relative">
          <FileText className="absolute left-3 top-3 w-4 h-4 text-[#787878]" />
          <input
            type="text"
            id="gcashRef"
            name="gcash_reference"
            required
            className="w-full pl-10 pr-4 py-3 border border-[#e4e4e4] focus:border-[#e85242] outline-none transition-all text-[#3a3d44]"
            placeholder="e.g. 1234567890123"
          />
        </div>
        <p className="mt-1 text-xs text-[#787878]">
          Enter the reference number from your GCash payment confirmation
        </p>
      </div>

      <div className="bg-[#f7f7f7] border border-[#e4e4e4] p-4">
        <p className="text-sm text-[#3a3d44]">
          <strong>Membership Fee:</strong> 300 PHP (one-time)
        </p>
        <p className="text-xs text-[#787878] mt-1">
          After submitting this form, please send your payment via GCash. Your membership will be activated once payment is verified and you will be added to our Members page.
        </p>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-theme btn-theme-primary inline-flex items-center justify-center gap-2 disabled:opacity-50"
      >
        {loading ? (
          "Submitting..."
        ) : (
          <>
            Submit Application
            <Send className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}
