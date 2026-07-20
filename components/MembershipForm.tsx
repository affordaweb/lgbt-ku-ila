"use client";

import { useState, FormEvent, useRef } from "react";
import { Send, User, Mail, Phone, FileText, Upload, AlertCircle, Check } from "lucide-react";
import TurnstileField from "./TurnstileField";
import { submitContactForm } from "@/lib/contactForm";

export default function MembershipForm() {
  const [loading, setLoading] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [gcashRef, setGcashRef] = useState("");
  const [refError, setRefError] = useState("");
  const [refChecking, setRefChecking] = useState(false);
  const [refVerified, setRefVerified] = useState(false);
  const [screenshotFile, setScreenshotFile] = useState<File | null>(null);
  const [screenshotPreview, setScreenshotPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

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
    setSubmitError("");

    try {
      const result = await submitContactForm({
        formType: "membership",
        subject: "New Membership Request — Ku-ila Website",
        name: String(formData.get("full_name")),
        email: String(formData.get("email")),
        message: `Membership application from ${String(formData.get("full_name"))}. GCash reference: ${gcashRef.trim()}.`,
        turnstileToken,
        fields: { phone: String(formData.get("phone")), address: String(formData.get("address")), facebookUrl: String(formData.get("facebook_url")), gcashReference: gcashRef.trim() },
        files: [screenshotFile],
      });
      if (!result.ok) { setSubmitError(result.message); return; }
      await fetch("/api/gcash/store", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          reference: gcashRef.trim(),
          name: formData.get("full_name"),
          email: formData.get("email"),
        }),
      });

      setSubmitted(true);
    } catch {
      setSubmitError("We could not send your request. Please try again shortly.");
    } finally {
      setLoading(false);
    }
  };

  const canSubmit = screenshotFile !== null && gcashRef.trim().length >= 5 && refVerified && !refChecking && (!process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || Boolean(turnstileToken));

  if (submitted) return <div className="rounded-[18px] bg-[#f7f5f0] p-8 text-center" role="status"><Check className="mx-auto mb-3 text-[#f15a24]"/><h3 className="font-[family-name:var(--font-heading)] text-2xl text-[#0a1d4a]">Application received</h3><p className="mt-2 text-sm leading-relaxed text-[#0a1d4a]/65">Thank you. Your membership request will be reviewed after payment verification.</p></div>;

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="sr-only" aria-hidden="true"><label>Leave this blank<input name="_honeypot" tabIndex={-1} autoComplete="off" /></label></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-[#3a3d44] mb-2 uppercase tracking-wider"
            >
              Full Name *
            </label>
            <div className="relative">
              <User className="absolute left-3 top-3.5 w-4 h-4 text-[#787878]" />
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
              className="block text-sm font-medium text-[#3a3d44] mb-2 uppercase tracking-wider"
            >
              Email Address *
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3.5 w-4 h-4 text-[#787878]" />
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
              className="block text-sm font-medium text-[#3a3d44] mb-2 uppercase tracking-wider"
            >
              Phone Number *
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-3.5 w-4 h-4 text-[#787878]" />
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
              className="block text-sm font-medium text-[#3a3d44] mb-2 uppercase tracking-wider"
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
            className="block text-sm font-medium text-[#3a3d44] mb-2 uppercase tracking-wider"
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
            className="block text-sm font-medium text-[#3a3d44] mb-2 uppercase tracking-wider"
          >
            GCash Reference Number *
          </label>
          <div className="relative">
            <FileText className="absolute left-3 top-3.5 w-4 h-4 text-[#787878]" />
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
                <div className="w-4 h-4 border-2 border-[#e85242] border-t-transparent rounded-full animate-spin" />
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
          <p className="mt-1 text-xs text-[#787878]">
            Enter the reference number from your GCash payment confirmation
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#3a3d44] mb-2 uppercase tracking-wider">
            GCash Screenshot *
          </label>
          <div
            onClick={() => fileInputRef.current?.click()}
            className={`border-2 border-dashed p-8 text-center cursor-pointer transition-colors ${
              screenshotFile
                ? "border-green-300 bg-green-50/50"
                : "border-[#e4e4e4] hover:border-[#e85242] bg-[#f7f7f7]"
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
                <Upload className="w-10 h-10 text-[#787878] mx-auto" />
                <p className="text-sm text-[#787878]">
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

        <div className="bg-[#f7f7f7] border border-[#e4e4e4] p-5">
          <p className="text-sm text-[#3a3d44]">
            <strong>Membership Fee:</strong> 300 PHP (one-time)
          </p>
          <p className="text-xs text-[#787878] mt-1">
            After submitting this form, your application will be reviewed. Your membership will be activated once payment is verified.
          </p>
        </div>

        <TurnstileField onToken={setTurnstileToken} />
        {submitError ? <p role="alert" className="text-sm text-red-700">{submitError}</p> : null}

        <button
          type="submit"
          disabled={loading || !canSubmit}
          className={`btn-theme w-full disabled:opacity-40 disabled:cursor-not-allowed ${
            canSubmit ? "btn-theme-primary" : "bg-gray-300 text-gray-500"
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
