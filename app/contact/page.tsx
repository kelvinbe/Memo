"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageLoader from "../../components/Molecules/Loader/Loader";
import { FaInstagram, FaLinkedinIn, FaCheckCircle } from "react-icons/fa";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);

  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

  const [isSending, setIsSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    // 🛑 Honeypot check (spam protection)
    const formData = new FormData(formRef.current);
    if (formData.get("company")) {
      return; // bot detected → silently exit
    }

    setIsSending(true);
    setError("");

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        formRef.current?.reset();
        setShowSuccess(true);

        // Auto-hide success message
        setTimeout(() => setShowSuccess(false), 4000);
      })
      .catch(() => {
        setError("Failed to send message. Please try again.");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <>
      <Navbar />

      {/* Loader with smooth fade */}
      <div
        className={`fixed flex justify-center items-center inset-0 z-50 transition-opacity duration-300 backdrop-blur-sm bg-white/90 ${
          isSending
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <PageLoader />
        <p className="text-black">Sending…</p>
      </div>

      <main className="bg-white">
        <section className="py-10 px-6 md:px-16">
          <div className="max-w-3xl mx-auto space-y-10">
            {/* Heading */}
            <div className="space-y-4 text-center">
              <h1 className="text-4xl md:text-5xl font-heading text-[#2C1F2B]">
                Get in touch
              </h1>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                If you’re interested in working together, drop me an email or
                send a message below.
              </p>
            </div>

            {/* Contact Info */}
            <div className="text-center space-y-2">
              <a
                href="mailto:memosomeh@gmail.com"
                className="text-lg md:text-xl underline underline-offset-4 hover:text-sky-400 transition-colors"
              >
                memosomeh@gmail.com
              </a>

              <div className="flex justify-center space-x-6 text-xl mt-4 text-gray-700">
                <a
                  href="https://www.linkedin.com/in/memosomeh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-400"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://www.instagram.com/memosomeh/?hl=en-gb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-400"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-10" />

            {/* Success Animation */}
            {showSuccess && (
              <div className="flex items-center justify-center gap-2 text-green-600 text-lg animate-[fadeInScale_0.4s_ease-out]">
                <FaCheckCircle className="text-2xl" />
                Message sent successfully!
              </div>
            )}

            {/* Error */}
            {error && <p className="text-center text-red-600">{error}</p>}

            {/* Form */}
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              {/* Honeypot (hidden field for bots) */}
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
              />

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-sky-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-sky-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-sky-300"
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className={`w-full md:w-auto px-8 py-3 rounded-md text-sm uppercase tracking-wide transition-all
                  ${
                    isSending
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#2C1F2B] text-white hover:bg-[#1f161e]"
                  }
                `}
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />

      {/* Custom animation */}
      <style jsx>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
}
