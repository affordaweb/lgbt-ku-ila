"use client";

import { useState, FormEvent, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Send } from "lucide-react";
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

export default function ContactForm() {
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
              className="block text-sm font-medium text-[#3a3d44] mb-2 uppercase tracking-wider"
            >
              Your Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="input-luxury"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#3a3d44] mb-2 uppercase tracking-wider"
            >
              Your Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="input-luxury"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-[#3a3d44] mb-2 uppercase tracking-wider"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject_form"
            className="input-luxury"
            placeholder="How can we help?"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-[#3a3d44] mb-2 uppercase tracking-wider"
          >
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="input-luxury resize-none"
            placeholder="Write your message here..."
          />
        </div>

        <div ref={containerRef} className="cf-turnstile" />

        <button
          type="submit"
          disabled={loading}
          className="btn-theme btn-theme-primary disabled:opacity-50"
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
    </>
  );
}
