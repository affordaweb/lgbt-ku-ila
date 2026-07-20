export type ContactSubmission = {
  formType: string;
  subject: string;
  name: string;
  email: string;
  message: string;
  turnstileToken?: string;
  fields?: Record<string, string | string[] | boolean | undefined>;
  files?: File[];
};

export type SubmissionResult = { ok: true } | { ok: false; message: string; field?: string };

const endpoint = () => process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT?.replace(/\/$/, "");

function appendValue(data: FormData, key: string, value: string | string[] | boolean | undefined) {
  if (value === undefined || value === "") return;
  data.append(key, Array.isArray(value) ? value.join("\n") : String(value));
}

export async function submitContactForm(submission: ContactSubmission): Promise<SubmissionResult> {
  const baseUrl = endpoint();
  if (!baseUrl) return { ok: false, message: "The form could not connect to the submission service. Please try again shortly." };
  const data = new FormData();
  data.append("name", submission.name.trim());
  data.append("email", submission.email.trim());
  data.append("message", submission.message.trim());
  data.append("website", "lgbt-ku-ila");
  data.append("formType", submission.formType);
  data.append("subject", submission.subject.replace(/[\r\n]/g, " ").slice(0, 160));
  data.append("pageTitle", typeof document === "undefined" ? "" : document.title);
  data.append("pageUrl", typeof window === "undefined" ? "" : window.location.href);
  data.append("referrer", typeof document === "undefined" ? "" : document.referrer);
  data.append("submittedAt", new Date().toISOString());
  if (submission.turnstileToken) data.append("turnstileToken", submission.turnstileToken);
  Object.entries(submission.fields ?? {}).forEach(([key, value]) => appendValue(data, key, value));
  submission.files?.filter(file => file.size > 0).forEach(file => data.append("attachments", file, file.name));
  const controller = new AbortController(); const timeout = window.setTimeout(() => controller.abort(), 20_000);
  try {
    const response = await fetch(`${baseUrl}/api/contact`, { method: "POST", body: data, signal: controller.signal });
    const body = await response.json().catch(() => ({}));
    if (!response.ok || !body.ok) return { ok: false, message: response.status === 422 ? "Please review the highlighted fields and try again." : "We could not send your request. Please try again shortly." };
    return { ok: true };
  } catch {
    return { ok: false, message: "The form could not connect to the submission service. Please try again shortly." };
  } finally { window.clearTimeout(timeout); }
}
