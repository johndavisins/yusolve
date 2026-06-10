import React from "react";
import { Consultation } from "..";
import Link from "next/link";

export default function Banner() {
  return (
    <section
      id="banner"
      className="w-full min-h-screen overflow-hidden flex items-center justify-center text-white relative"
      style={{ backgroundColor: "#18344A" }}
    >
      {/* ── Video — eng pastda ── */}
      <video
        loop
        autoPlay
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      >
        <source src="/videos/main.mp4" type="video/mp4" />
      </video>

      {/* ── Overlay — video ustida, content ostida ── */}
      <div
        className="absolute inset-0"
        style={{ zIndex: 1, background: "linear-gradient(135deg, rgba(24,52,74,0.88) 0%, rgba(24,52,74,0.65) 100%)" }}
      />

      {/* ── Content — hammadan ustida ── */}
      <div
        className="relative w-full px-5 md:px-0 md:max-w-[900px] mx-auto flex flex-col gap-6 items-center justify-center text-center min-h-screen pb-20 pt-32"
        style={{ zIndex: 2 }}
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase text-gray-200"
          style={{ border: "1px solid rgba(255,255,255,0.25)", background: "rgba(255,255,255,0.06)" }}>
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
          US Trucking Compliance Partner
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
          Your Trucking Company's Safety.{" "}
          <span style={{ color: "#4e99d2" }}>Our Full&#8209;Time Job.</span>
        </h1>

        {/* Sub */}
        <p className="text-gray-300 text-base sm:text-lg max-w-2xl leading-relaxed">
          YUSOLVE provides complete safety and compliance management for US
          trucking carriers — DOT audits, driver qualification files, HR,
          insurance, and fleet documentation. Stay compliant. Avoid violations.
          Grow with confidence.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-10 py-2">
          {[
            { num: "150+", label: "Carriers Served" },
            { num: "98%",  label: "DOT Audit Pass Rate" },
            { num: "10+",  label: "Years Experience" },
            { num: "24h",  label: "Response Time" },
          ].map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <span className="text-3xl sm:text-4xl font-extrabold" style={{ color: "#4e99d2" }}>
                {s.num}
              </span>
              <span className="text-xs text-gray-400 uppercase tracking-wider font-medium">
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 justify-center pt-2">
          <Consultation />
          <Link href="/about">
            <a className="px-7 py-3 font-semibold text-sm uppercase rounded-lg text-white transition-all duration-150"
              style={{ border: "1px solid rgba(255,255,255,0.3)" }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}
            >
              Learn More
            </a>
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 text-xs animate-bounce"
        style={{ zIndex: 2 }}
      >
        <span>Scroll</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 3v10M3 9l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
}
