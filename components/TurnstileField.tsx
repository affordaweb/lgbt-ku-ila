"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

declare global { interface Window { turnstile?: { render: (container: HTMLElement, options: Record<string, unknown>) => string; reset: (id: string) => void; remove: (id: string) => void; }; } }

export default function TurnstileField({ onToken }: { onToken: (token: string) => void }) {
  const container = useRef<HTMLDivElement>(null); const widget = useRef<string | null>(null); const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const render = () => { if (!siteKey || !container.current || !window.turnstile || widget.current) return; widget.current = window.turnstile.render(container.current, { sitekey: siteKey, callback: (token: string) => onToken(token), "expired-callback": () => onToken(""), "error-callback": () => onToken("") }); };
  useEffect(() => () => { if (widget.current && window.turnstile) window.turnstile.remove(widget.current); }, []);
  if (!siteKey) return null;
  return <><Script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit" strategy="afterInteractive" onLoad={render} /><div ref={container} /></>;
}
