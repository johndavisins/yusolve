"use client";
import React, { useState } from "react";

const faqs = [
  { q: "How quickly can you take over our compliance management?",
    a: "We typically complete onboarding within 5–7 business days. For urgent situations — upcoming audit, active DOT investigation — we can expedite to 24–48 hours." },
  { q: "How much does YUSOLVE cost?",
    a: "Our pricing is based on fleet size and services selected. Most carriers with 5–20 trucks pay between $800–$2,500/month for full-service management — significantly less than hiring even a part-time compliance person. Contact us for a custom quote." },
  { q: "Do you work with owner-operators (1 truck)?",
    a: "Yes. We have a streamlined program for owner-operators that covers all FMCSA-required documentation at an affordable monthly rate." },
  { q: "What if we already have a safety manager?",
    a: "Many of our clients have an internal safety person. We work alongside them as a compliance resource — handling routine tasks and freeing them to focus on bigger-picture safety work." },
  { q: "What happens if we get a DOT audit call?",
    a: "Call us immediately. We begin audit preparation right away — organizing files, reviewing records, and supporting you through the entire process." },
  { q: "Are you available across all US states?",
    a: "Yes. YUSOLVE serves carriers in all 48 contiguous US states, handling multi-state registration, IRP, IFTA, and regulatory requirements across all jurisdictions." },
];

export default function Faq() {
  const [open, setOpen] = useState(null);

  return (
    <section className="relative z-0 py-20 sm:py-32 lamp__container" style={{ background: "#18344A" }}>
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="flex flex-col gap-5 lg:sticky lg:top-32">
            <h5 className="font-medium text-sm uppercase tracking-widest" style={{ color: "#4e99d2" }}>FAQ</h5>
            <h2 className="font-bold text-3xl sm:text-4xl text-white leading-snug">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Quick answers to the most common questions we hear from trucking carriers.{" "}
              <a href="/contact" className="underline" style={{ color: "#4e99d2" }}>Contact us directly</a> if you need more.
            </p>
            <div className="mt-4 p-6 rounded-2xl" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(78,153,210,0.2)" }}>
              <p className="text-white font-bold mb-1">📞 +1 216 377 1111</p>
              <p className="text-gray-400 text-sm">Call or text us anytime for urgent compliance matters.</p>
              <p className="text-white font-bold mt-4 mb-1">✉️ yusolvellc@gmail.com</p>
              <p className="text-gray-400 text-sm">We respond within 24 hours — usually much faster.</p>
            </div>
          </div>

          {/* Accordion */}
          <div className="flex flex-col">
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <button
                  className="w-full flex items-center justify-between gap-4 py-5 text-left"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="text-white font-semibold text-base leading-snug">{faq.q}</span>
                  <span className="text-2xl flex-shrink-0 transition-transform duration-200 font-light"
                    style={{ color: "#4e99d2", transform: open === i ? "rotate(45deg)" : "none" }}>
                    +
                  </span>
                </button>
                <div style={{ overflow: "hidden", maxHeight: open === i ? "200px" : "0", transition: "max-height 0.3s ease", paddingBottom: open === i ? "20px" : "0" }}>
                  <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
