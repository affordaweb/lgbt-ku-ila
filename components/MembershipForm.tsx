"use client";

import { useState, FormEvent, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Send, User, Mail, Phone, FileText, Upload, AlertCircle, Check } from "lucide-react";
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
  const [gcashRef, setGcashRef] = useState("");
  const [refError, setRefError] = useState("");
  const [refChecking, setRefChecking] = useState(false);
  const [refVerified, setRefVerified] = useState(false);
  const [screenshotFile, setScreenshotFile] = useState<File | null>(null);
  const [screenshotPreview, setScreenshotPreview] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  const checkReference = async (ref: string) => {
    if (ref.length < 5) {
      setRefError("");
      setRefVerified(false);
      return;
    }
    setRefChecking(true);
    setRefError("");
    try {
      const res = await fetch("/api/gcash/check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reference: ref }),
      });
      const data = await res.json();
      if (data.exists) {
        setRefError("This reference number has already been used.");
        setRefVerified(false);
      } else {
        setRefError("");
        setRefVerified(true);
      }
    } catch {
      setRefError("Unable to verify reference. Please try again.");
      setRefVerified(false);
    } finally {
      setRefChecking(false);
    }
  };

  const handleRefChange = (value: string) => {
    setGcashRef(value);
    setRefVerified(false);
    setRefError("");
  };

  const handleRefBlur = () => {
    if (gcashRef.length >= 5) {
      checkReference(gcashRef);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setScreenshotFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setScreenshotPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!screenshotFile) return;

    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("screenshot", screenshotFile);

    try {
      await fetch("/api/gcash/store", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          reference: gcashRef.trim(),
          name: formData.get("full_name"),
          email: formData.get("email"),
        }),
      });

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

  const canSubmit = screenshotFile !== null && gcashRef.trim().length >= 5 && refVerified && !refChecking;

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
              value={gcashRef}
              onChange={(e) => handleRefChange(e.target.value)}
              onBlur={handleRefBlur}
              className={`input-luxury pl-10 pr-10 ${
                refError ? "border-red-400 focus:border-red-400 focus:shadow-red-100" : ""
              } ${refVerified ? "border-green-400 focus:border-green-400" : ""}`}
              placeholder="e.g. 1234567890123"
            />
            {refChecking && (
              <div className="absolute right-3 top-3">
                <div className="w-4 h-4 border-2 border-[#D4AF37] border-t-transparent rounded-full animate-spin" />
              </div>
            )}
            {refVerified && !refChecking && (
              <Check className="absolute right-3 top-3.5 w-4 h-4 text-green-500" />
            )}
            {refError && !refChecking && (
              <AlertCircle className="absolute right-3 top-3.5 w-4 h-4 text-red-400" />
            )}
          </div>
          {refError && (
            <p className="mt-1 text-xs text-red-400">{refError}</p>
          )}
          {refVerified && (
            <p className="mt-1 text-xs text-green-500">Reference number verified</p>
          )}
          <p className="mt-1 text-xs text-[#6B7280]">
            Enter the reference number from your GCash payment confirmation
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#1A1A2E] mb-2 uppercase tracking-wider">
            GCash Screenshot *
          </label>
          <div
            onClick={() => fileInputRef.current?.click()}
            className={`border-2 border-dashed p-8 text-center cursor-pointer transition-colors ${
              screenshotFile
                ? "border-green-300 bg-green-50/50"
                : "border-[#E5DDD3] hover:border-[#D4AF37] bg-[#FAF8F5]"
            }`}
          >
            {screenshotPreview ? (
              <div className="space-y-3">
                <img
                  src={screenshotPreview}
                  alt="GCash Screenshot Preview"
                  className="max-h-48 mx-auto object-contain"
                />
                <p className="text-xs text-green-600 font-medium">
                  Screenshot uploaded: {screenshotFile?.name}
                </p>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setScreenshotFile(null);
                    setScreenshotPreview(null);
                    if (fileInputRef.current) fileInputRef.current.value = "";
                  }}
                  className="text-xs text-red-400 hover:text-red-500 underline"
                >
                  Remove
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                <Upload className="w-10 h-10 text-[#6B7280] mx-auto" />
                <p className="text-sm text-[#6B7280]">
                  Click to upload your GCash payment screenshot
                </p>
                <p className="text-xs text-[#9CA3AF]">
                  PNG, JPG or JPEG (max 5MB)
                </p>
              </div>
            )}
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/png,image/jpeg,image/jpg"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>

        <div className="bg-[#FAF8F5] border border-[#E5DDD3] p-5">
          <p className="text-sm text-[#1A1A2E]">
            <strong>Membership Fee:</strong> 300 PHP (one-time)
          </p>
          <p className="text-xs text-[#6B7280] mt-1">
            After submitting this form, your application will be reviewed. Your membership will be activated once payment is verified.
          </p>
        </div>

        <div ref={containerRef} className="cf-turnstile-membership" />

        <button
          type="submit"
          disabled={loading || !canSubmit}
          className={`btn-luxury w-full disabled:opacity-40 disabled:cursor-not-allowed ${
            canSubmit ? "btn-luxury-primary" : "bg-gray-300 text-gray-500"
          }`}
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
