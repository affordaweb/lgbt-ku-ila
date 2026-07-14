"use client";

import { useState, FormEvent, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Send, User, Mail, Phone, FileText } from "lucide-react";
import Script from "next/script";

declare global {
  interface Window {
    turnstile: {
      render: (container: string | HTMLElement, options: { sitekey: string }) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

export default function MembershipForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [scriptReady, setScriptReady] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  const renderWidget = () => {
    if (!window.turnstile || !containerRef.current) {
      setTimeout(renderWidget, 200);
      return;
    }
    containerRef.current.innerHTML = "";
    const id = window.turnstile.render(containerRef.current, {
      sitekey: "0x4AAAAAAD1eyvfBA4B79lOA",
    });
    widgetIdRef.current = id;
  };

  useEffect(() => {
    if (scriptReady) {
      renderWidget();
    }
    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [scriptReady]);

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
        router.push("/thank-you");
      }
    } catch {
      // Handle error silently
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onLoad={() => setScriptReady(true)}
      />
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
              className="block text-sm font-medium text-[#1A1A2E] mb-2 uppercase tracking-wider"
            >
              Full Name *
            </label>
            <div className="relative">
              <User className="absolute left-3 top-3.5 w-4 h-4 text-[#6B7280]" />
              <input
                type="text"
                id="fullName"
                name="full_name"
                required
                className="input-luxury pl-10"
                placeholder="Juan Dela Cruz"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#1A1A2E] mb-2 uppercase tracking-wider"
            >
              Email Address *
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3.5 w-4 h-4 text-[#6B7280]" />
              <input
                type="email"
                id="email"
                name="email"
                required
                className="input-luxury pl-10"
                placeholder="your@email.com"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-[#1A1A2E] mb-2 uppercase tracking-wider"
            >
              Phone Number *
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-3.5 w-4 h-4 text-[#6B7280]" />
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="input-luxury pl-10"
                placeholder="09XX XXX XXXX"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-[#1A1A2E] mb-2 uppercase tracking-wider"
            >
              Address *
            </label>
            <input
              type="text"
              id="address"
              name="address"
              required
              className="input-luxury"
              placeholder="Barangay, City/Municipality"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="facebook"
            className="block text-sm font-medium text-[#1A1A2E] mb-2 uppercase tracking-wider"
          >
            Facebook Profile URL *
          </label>
          <input
            type="url"
            id="facebook"
            name="facebook_url"
            required
            className="input-luxury"
            placeholder="https://www.facebook.com/yourprofile"
          />
        </div>

        <div>
          <label
            htmlFor="gcashRef"
            className="block text-sm font-medium text-[#1A1A2E] mb-2 uppercase tracking-wider"
          >
            GCash Reference Number *
          </label>
          <div className="relative">
            <FileText className="absolute left-3 top-3.5 w-4 h-4 text-[#6B7280]" />
            <input
              type="text"
              id="gcashRef"
              name="gcash_reference"
              required
              className="input-luxury pl-10"
              placeholder="e.g. 1234567890123"
            />
          </div>
          <p className="mt-1 text-xs text-[#6B7280]">
            Enter the reference number from your GCash payment confirmation
          </p>
        </div>

        <div className="bg-[#FAF8F5] border border-[#E5DDD3] p-5">
          <p className="text-sm text-[#1A1A2E]">
            <strong>Membership Fee:</strong> 300 PHP (one-time)
          </p>
          <p className="text-xs text-[#6B7280] mt-1">
            After submitting this form, please send your payment via GCash. Your membership will be activated once payment is verified and you will be added to our Members page.
          </p>
        </div>

        <div ref={containerRef} className="cf-turnstile-membership" />

        <button
          type="submit"
          disabled={loading}
          className="btn-luxury btn-luxury-primary disabled:opacity-50"
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
    </>
  );
}
