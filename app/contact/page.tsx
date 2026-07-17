import { Metadata } from "next";
import {
  MapPin,
  Mail,
  ArrowRight,
} from "lucide-react";
import FacebookIcon from "@/components/FacebookIcon";
import HeroSection from "@/components/HeroSection";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Ku-Ila LGBTQIA++ Organization. We'd love to hear from you.",
};

const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "Kumintang Ilaya, Batangas City, Philippines",
    href: null,
  },
  {
    icon: Mail,
    label: "Email",
    value: "lgbtkuila@outlook.com",
    href: "mailto:lgbtkuila@outlook.com",
  },
  {
    icon: FacebookIcon,
    label: "Facebook",
    value: "Ku-Ila LGBTQIA++",
    href: "https://www.facebook.com/profile.php?id=61591420257367",
  },
];

export default function ContactPage() {
  return (
    <main>
      <HeroSection
        title="Contact Us"
        subtitle="Home / Contact Us"
        backgroundImage="/images/stock/stock-08.jpg"
      />

      {/* Contact Info Cards */}
      <section className="bg-[#3a3d44] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              const content = (
                <div className="flex items-center gap-5 p-6">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center bg-gradient-to-br from-[#f3702b] to-[#fcb315]">
                    <Icon className="h-6 w-6 text-[#3a3d44]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wider">
                      {item.label}
                    </h3>
                    <p className="text-sm font-medium text-white mt-0.5">
                      {item.value}
                    </p>
                  </div>
                </div>
              );

              if (item.href) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={
                      item.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="block bg-white/5 hover:bg-white/10 transition-all border border-white/10 hover:border-[#f3702b]/30"
                  >
                    {content}
                  </a>
                );
              }

              return (
                <div key={item.label} className="bg-white/5 border border-white/10">
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <p className="text-[#f3702b] text-xs uppercase tracking-[0.2em] mb-4 font-medium">Let&apos;s Talk</p>
              <h2 className="section-heading text-3xl">
                Do You Need Help?
              </h2>
              <p className="text-[#787878] mb-8">
                Contact us and we will help you to solve any of your problems. Fill out the form below and we&apos;ll get back to you as soon as possible.
              </p>
              <ContactForm />
            </div>

            <div>
              <p className="text-[#f3702b] text-xs uppercase tracking-[0.2em] mb-4 font-medium">Reach Out</p>
              <h2 className="section-heading text-3xl">
                Get In Touch
              </h2>
              <p className="text-[#787878] mb-8">
                Have questions or want to get involved? Reach out to us through any of the channels below.
              </p>

              <div className="space-y-4">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex items-start gap-5 p-5 bg-[#f7f7f7] border border-[#e4e4e4]">
                      <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center bg-gradient-to-br from-[#e85242] to-[#f3702b]">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="pt-1">
                        <h3 className="text-sm font-semibold text-[#3a3d44] uppercase tracking-wider">
                          {item.label}
                        </h3>
                        <p className="text-sm text-[#787878] mt-0.5">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );

                  if (item.href) {
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target={
                          item.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          item.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="block hover:shadow-lg transition-all"
                      >
                        {content}
                      </a>
                    );
                  }

                  return <div key={item.label}>{content}</div>;
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
