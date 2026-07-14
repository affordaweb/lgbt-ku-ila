import { Metadata } from "next";
import {
  MapPin,
  Mail,
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

      {/* Contact Info Cards - dark background like demo */}
      <section className="bg-[#3a3d44] py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              const content = (
                <div className="flex items-center gap-4 p-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center bg-[#fcb315]">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-white/60 uppercase tracking-wide">
                      {item.label}
                    </h3>
                    <p className="text-sm font-medium text-white">
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
                    className="block bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    {content}
                  </a>
                );
              }

              return (
                <div key={item.label} className="bg-white/5">
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section - white background like demo */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="section-heading text-2xl">
                Do You Need Help?
              </h2>
              <p className="text-[#787878] mb-8">
                Contact us and we will help you to solve any of your problems. Fill out the form below and we&apos;ll get back to you as soon as possible.
              </p>
              <ContactForm />
            </div>

            <div>
              <h2 className="section-heading text-2xl">
                Get In Touch
              </h2>
              <p className="text-[#787878] mb-8">
                Have questions or want to get involved? Reach out to us through any of the channels below.
              </p>

              <div className="space-y-4">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex items-start gap-4 p-4 bg-[#f7f7f7]">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center bg-[#e85242]">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-[#3a3d44] uppercase">
                          {item.label}
                        </h3>
                        <p className="text-sm text-[#787878]">
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
                        className="block hover:shadow-md transition-shadow"
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
