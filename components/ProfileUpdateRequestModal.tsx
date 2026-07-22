"use client";

import { FormEvent, ReactNode, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Check, ChevronLeft, ChevronRight, LoaderCircle, Pencil, X } from "lucide-react";
import styles from "./ProfileUpdateRequestModal.module.css";
import TurnstileField from "./TurnstileField";
import { submitContactForm } from "@/lib/contactForm";
import { trackFormSubmission } from "@/lib/gtag";

type MemberIdentity = { name: string; slug: string; role: string; pageUrl: string };
const steps = ["Basic Information", "Community Affiliation", "Organization Role", "Work and Skills", "Biography and Story", "Photo, Links, and Review"];

function Field({ label, help, children, required = false }: { label: string; help?: string; children: ReactNode; required?: boolean }) {
  return <label className={styles.field}><span>{label}{required ? <b aria-hidden="true"> *</b> : null}</span>{children}{help ? <small>{help}</small> : null}</label>;
}

export default function ProfileUpdateRequestModal({ member }: { member: MemberIdentity }) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [nameChange, setNameChange] = useState(false);
  const [updatePhoto, setUpdatePhoto] = useState(false);
  const [photoSelected, setPhotoSelected] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const opener = useRef<HTMLButtonElement>(null);
  const dialog = useRef<HTMLDivElement>(null);
  const titleId = useId();

  const close = () => { setOpen(false); setError(""); setTimeout(() => opener.current?.focus(), 0); };

  useEffect(() => {
    if (!open) return;
    const viewport = window.visualViewport;
    const updateViewport = () => {
      if (!viewport) return;
      document.documentElement.style.setProperty("--profile-modal-height", `${viewport.height}px`);
      document.documentElement.style.setProperty("--profile-modal-offset", `${viewport.offsetTop}px`);
      document.activeElement instanceof HTMLElement && dialog.current?.contains(document.activeElement) && document.activeElement.scrollIntoView({ block: "center", behavior: "smooth" });
    };
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") close(); };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    updateViewport();
    viewport?.addEventListener("resize", updateViewport);
    viewport?.addEventListener("scroll", updateViewport);
    document.addEventListener("keydown", onKey);
    setTimeout(() => dialog.current?.querySelector<HTMLButtonElement>("button")?.focus(), 0);
    return () => {
      document.body.style.overflow = previous;
      document.documentElement.style.removeProperty("--profile-modal-height");
      document.documentElement.style.removeProperty("--profile-modal-offset");
      viewport?.removeEventListener("resize", updateViewport);
      viewport?.removeEventListener("scroll", updateViewport);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const next = () => {
    const active = dialog.current?.querySelector<HTMLElement>(".step-active");
    const invalid = active?.querySelector<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>("[required]:invalid");
    if (invalid) { invalid.focus(); invalid.reportValidity(); return; }
    setStep(current => Math.min(current + 1, steps.length - 1));
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) { form.reportValidity(); return; }
    const data = new FormData(form);
    const photo = data.get("profile_photo");
    if (photo instanceof File && photo.size > 5 * 1024 * 1024) { setError("Profile photos must be 5 MB or smaller."); return; }
    if (photo instanceof File && photo.size > 0 && !data.get("photo_permission")) { setError("Please confirm that you own the new profile photo or have permission to submit it."); return; }
    const recent = Number(localStorage.getItem(`profile-request-${member.slug}`) || 0);
    if (Date.now() - recent < 60_000) { setError("A request for this profile was just sent. Please wait a minute before sending another."); return; }
    const fields: Record<string, string> = {};
    data.forEach((value, key) => {
      if (typeof value !== "string" || ["contact_email", "requested_changes_summary", "_honeypot"].includes(key)) return;
      fields[key] = fields[key] ? `${fields[key]}\n${value}` : value;
    });
    setLoading(true); setError("");
    const result = await submitContactForm({
      formType: "profile-update-request",
      subject: `Profile Update Request — ${member.name}`,
      name: String(data.get("full_name")),
      email: String(data.get("contact_email")),
      message: String(data.get("requested_changes_summary")),
      turnstileToken,
      fields: { ...fields, memberName: member.name, memberId: member.slug, profileUrl: window.location.href },
      files: photo instanceof File && photo.size > 0 ? [photo] : [],
    });
    setLoading(false);
    if (result.ok) { trackFormSubmission("profile-update-request"); localStorage.setItem(`profile-request-${member.slug}`, String(Date.now())); setSuccess(true); }
    else setError(result.message);
  };

  const modal = open && typeof document !== "undefined" ? createPortal(<div className={styles.overlay} role="presentation"><div ref={dialog} className={styles.dialog} role="dialog" aria-modal="true" aria-labelledby={titleId}>
    <header className={styles.header}><div><p>Profile being updated</p><h2 id={titleId}>Request a Profile Update</h2><span>{member.name}</span></div><button type="button" onClick={close} aria-label="Close profile update request"><X /></button></header>
    {success ? <div className={styles.success}><Check size={34} /><h3>Thank you.</h3><p>Your profile update request has been received and will be reviewed before any changes are published.</p><button type="button" className={styles.submit} onClick={close}>Close</button></div> : <form onSubmit={submit} className={styles.form} encType="multipart/form-data">
      <input type="hidden" name="member_name" value={member.name} /><input type="hidden" name="member_id" value={member.slug} /><input type="hidden" name="profile_url" value={member.pageUrl} /><div className={styles.honeypot}><input name="_honeypot" tabIndex={-1} autoComplete="off" /></div>
      <div className={styles.progress}><span>Step {step + 1} of {steps.length}</span><strong>{steps[step]}</strong><div><i style={{ width: `${((step + 1) / steps.length) * 100}%` }} /></div></div>
      <div className={`${styles.step} ${step === 0 ? "step-active" : ""}`} hidden={step !== 0}><p className={styles.intro}>Submit the information you would like us to add or change. Your request is reviewed before it appears on your public profile.</p><div className={styles.grid}><Field label="Full Name" required><input name="full_name" defaultValue={member.name} required placeholder="Ricson M. Cultura" /></Field><Field label="Contact Email" required help="Used only to reply about this request; it is not shown publicly."><input name="contact_email" type="email" required placeholder="name@example.com" /></Field><Field label="Nickname / Also Known As"><input name="nickname" placeholder="Rics" /></Field></div><Field label="Would you like to request a name change?"><select name="name_change" onChange={event => setNameChange(event.target.value === "Yes")}><option>No</option><option>Yes</option></select></Field>{nameChange ? <><Field label="Requested Display Name"><input name="requested_display_name" placeholder="Ricson Cultura" /></Field><Field label="Reason for the requested name change"><textarea name="name_change_reason" placeholder="I would like my middle initial removed from the public profile." /></Field></> : null}</div>
      <div className={`${styles.step} ${step === 1 ? "step-active" : ""}`} hidden={step !== 1}><Field label="Community Affiliation" help="Example: Member, Officer, or another community role."><input name="community_affiliation" placeholder="Member or Officer" /></Field></div>
      <div className={`${styles.step} ${step === 2 ? "step-active" : ""}`} hidden={step !== 2}><Field label="Current Role in the Organization"><input name="current_role" defaultValue={member.role} placeholder="LGBTQIA++ Kumintang Ilaya President" /></Field><div className={styles.grid}><Field label="Organization / Chapter"><input name="chapter" placeholder="LGBTQIA++ SILBI Kumintang Ilaya" /></Field><Field label="Year Joined"><input name="year_joined" inputMode="numeric" pattern="[0-9]{4}" placeholder="2022" /></Field></div></div>
      <div className={`${styles.step} ${step === 3 ? "step-active" : ""}`} hidden={step !== 3}><Field label="Currently Working As" help="Enter one occupation or profession per line."><textarea name="work" placeholder={"Makeup Artist\nFashion Designer"} /></Field><Field label="Skills and Talents" help="Enter one skill per line."><textarea name="skills" placeholder={"Hair and Makeup\nEvent Production\nPublic Speaking"} /></Field><div className={styles.grid}><Field label="Business, Brand, or Professional Name"><input name="business_name" placeholder="Ricson Cultura Makeup Artistry" /></Field><Field label="Website or Business Page"><input name="business_url" type="url" placeholder="https://example.com" /></Field></div></div>
      <div className={`${styles.step} ${step === 4 ? "step-active" : ""}`} hidden={step !== 4}><Field label="Short Biography" help="Write two to four sentences about yourself."><textarea name="biography" rows={5} placeholder="Ricson is a community leader and makeup artist..." /></Field><Field label="Your Story" help="This may be edited for clarity before it appears publicly."><textarea name="story" rows={6} placeholder="Share a short story about your journey and the people who inspired you." /></Field></div>
      <div className={`${styles.step} ${step === 5 ? "step-active" : ""}`} hidden={step !== 5}><Field label="Would you like to update your profile picture?"><select name="update_profile_photo" onChange={event => { const shouldUpdate = event.target.value === "Yes"; setUpdatePhoto(shouldUpdate); if (!shouldUpdate) setPhotoSelected(false); }}><option>No</option><option>Yes</option></select></Field>{updatePhoto ? <><Field label="Upload New Profile Photo" help="JPG, JPEG, PNG, or WebP, up to 5 MB. It may be cropped to match the member directory style."><input name="profile_photo" type="file" accept="image/jpeg,image/png,image/webp" onChange={event => setPhotoSelected(Boolean(event.target.files?.[0]))} /></Field>{photoSelected ? <label className={styles.agree}><input name="photo_permission" type="checkbox" required /> I confirm that I own this image or have permission to submit it for use on this website.</label> : null}</> : null}<div className={styles.grid}><Field label="Public Email Address"><input name="public_email" type="email" placeholder="name@example.com" /></Field><Field label="Contact Number"><input name="public_phone" type="tel" placeholder="+63 912 345 6789" /></Field></div><label className={styles.agree}><input name="email_permission" type="checkbox" /> I give permission for this email address to appear publicly.</label><label className={styles.agree}><input name="phone_permission" type="checkbox" /> I give permission for this phone number to appear publicly.</label><div className={styles.grid}>{["Facebook", "Instagram", "TikTok", "YouTube", "LinkedIn", "Other public profile"].map(network => <Field key={network} label={network}><input name={network.toLowerCase().replaceAll(" ", "_")} type="url" placeholder={`https://${network.toLowerCase().replaceAll(" ", "")}.com/username`} /></Field>)}</div><Field label="Please summarize the changes you are requesting" required><textarea name="requested_changes_summary" required rows={6} placeholder="Please update my current role, replace my profile photo, and add my Instagram link." /></Field><div className={styles.review}><p>Your request is linked to <strong>{member.name}</strong> and will be reviewed before anything is published.</p><label className={styles.agree}><input name="accurate" type="checkbox" required /> I confirm that the information I submitted is accurate.</label><label className={styles.agree}><input name="review_understood" type="checkbox" required /> I understand that this request will be reviewed before it appears on the website.</label><label className={styles.agree}><input name="public_permission" type="checkbox" required /> I give permission for the approved information to appear on my public member profile.</label></div><TurnstileField onToken={setTurnstileToken} /></div>
      {error ? <p className={styles.error} role="alert">{error}</p> : null}<footer className={styles.footer}>{step > 0 ? <button type="button" className={styles.back} onClick={() => setStep(current => current - 1)}><ChevronLeft size={16} /> Back</button> : <span />}{step < steps.length - 1 ? <button type="button" className={styles.submit} onClick={next}>Continue <ChevronRight size={16} /></button> : <button className={styles.submit} disabled={loading || (Boolean(process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY) && !turnstileToken)}>{loading ? <LoaderCircle className={styles.spin} size={16} /> : null} Submit Profile Update Request</button>}</footer>
    </form>}</div></div>, document.body) : null;

  return <><button ref={opener} type="button" className={styles.requestButton} onClick={() => { setSuccess(false); setStep(0); setUpdatePhoto(false); setPhotoSelected(false); setOpen(true); }}><Pencil size={15} /> Request Profile Edit</button>{modal}</>;
}
