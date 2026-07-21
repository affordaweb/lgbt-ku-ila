type Gtag = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag: Gtag | undefined;
  }
}

const FORM_NAMES: Record<string, string> = {
  contact: "Contact Form",
  membership: "Membership Application",
  "sponsorship-inquiry": "Sponsorship Inquiry",
  "profile-update-request": "Profile Update Request",
};

export function trackFormSubmission(formType: string) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", "form_submission", {
    form_type: formType,
    form_name: FORM_NAMES[formType] ?? formType,
  });
}
