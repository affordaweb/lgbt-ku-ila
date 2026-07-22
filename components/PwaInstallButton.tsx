"use client";

import { Download } from "lucide-react";
import { useEffect, useState } from "react";

type InstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

export default function PwaInstallButton({ onInstall }: { onInstall?: () => void }) {
  const [installPrompt, setInstallPrompt] = useState<InstallPromptEvent | null>(null);
  const [showIosInstructions, setShowIosInstructions] = useState(false);

  useEffect(() => {
    const onBeforeInstallPrompt = (event: Event) => { event.preventDefault(); setInstallPrompt(event as InstallPromptEvent); };
    window.addEventListener("beforeinstallprompt", onBeforeInstallPrompt);
    return () => window.removeEventListener("beforeinstallprompt", onBeforeInstallPrompt);
  }, []);

  const install = async () => {
    if (installPrompt) {
      await installPrompt.prompt();
      await installPrompt.userChoice;
      setInstallPrompt(null);
      onInstall?.();
      return;
    }
    setShowIosInstructions(value => !value);
  };

  if (!installPrompt && !/iPad|iPhone|iPod/.test(navigator.userAgent)) return null;

  return <div className="relative">
    <button type="button" onClick={install} className="inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold text-[#0A1D4A] hover:bg-[#0A1D4A]/5">
      <Download className="h-4 w-4" /> Install App
    </button>
    {showIosInstructions ? <p className="px-4 pb-3 text-xs leading-relaxed text-[#0A1D4A]/70">In Safari, tap Share, then choose <strong>Add to Home Screen</strong>.</p> : null}
  </div>;
}
