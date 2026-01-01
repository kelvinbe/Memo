"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function CollaboratePage() {
  return (
    <>
      <Navbar />

      <main className="bg-white">
        <section className="py-20 px-6 md:px-16">
          <div className="max-w-3xl mx-auto space-y-10">
            
            {/* Heading */}
            <div className="space-y-4 text-center">
              <h1 className="text-4xl md:text-5xl font-heading text-[#2C1F2B]">
                Let’s Collaborate
              </h1>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                If you’re interested in working together, drop me an email or send a message below.
                I’ll be sure to get back to you.
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

              {/* Socials */}
              <div className="flex justify-center space-x-6 text-xl mt-4 text-gray-700">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="hover:text-sky-400 transition-colors"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="hover:text-sky-400 transition-colors"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 pt-10"></div>

            {/* Form */}
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  rows={5}
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-300"
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto bg-[#2C1F2B] text-white px-8 py-3 rounded-md text-sm uppercase tracking-wide hover:bg-[#1f161e] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
