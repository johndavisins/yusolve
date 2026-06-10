import React from "react";
import { Consultation } from "..";
import Link from "next/link";

export default function Banner() {
  return (
    <section
      id="banner"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: "#0f2233",
      }}
    >
      {/* VIDEO — absolute, covers full section */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 1,
        }}
      >
        <source src="/videos/main.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY — dark tint over video */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 2,
          background:
            "linear-gradient(to bottom, rgba(15,34,51,0.75) 0%, rgba(15,34,51,0.55) 50%, rgba(15,34,51,0.80) 100%)",
        }}
      />

      {/* CONTENT — above video and overlay */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          width: "100%",
          maxWidth: "900px",
          margin: "0 auto",
          padding: "120px 20px 80px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          gap: "24px",
          color: "#fff",
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "7px 18px",
            borderRadius: "50px",
            border: "1px solid rgba(255,255,255,0.3)",
            background: "rgba(255,255,255,0.07)",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "2.5px",
            textTransform: "uppercase",
            color: "#e0eeff",
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#4ade80",
              display: "inline-block",
              animation: "pulse 2s infinite",
            }}
          />
          US Trucking Compliance Partner
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3.8rem)",
            fontWeight: 800,
            lineHeight: 1.15,
            color: "#ffffff",
            textShadow: "0 2px 20px rgba(0,0,0,0.4)",
          }}
        >
          Your Trucking Company's Safety.{" "}
          <span style={{ color: "#4e99d2" }}>Our Full‑Time Job.</span>
        </h1>

        {/* Subtext */}
        <p
          style={{
            fontSize: "17px",
            color: "rgba(255,255,255,0.80)",
            maxWidth: "620px",
            lineHeight: 1.7,
            textShadow: "0 1px 8px rgba(0,0,0,0.3)",
          }}
        >
          YUSOLVE provides complete safety and compliance management for US
          trucking carriers — DOT audits, driver qualification files, HR,
          insurance, and fleet documentation. Stay compliant. Avoid violations.
          Grow with confidence.
        </p>

        {/* Stats */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "40px",
            padding: "8px 0",
          }}
        >
          {[
            { num: "150+", label: "Carriers Served" },
            { num: "98%",  label: "DOT Audit Pass Rate" },
            { num: "6+",  label: "Years Experience" },
            { num: "1200+",  label: "Trucks" },
          ].map((s, i) => (
            <div
              key={i}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}
            >
              <span
                style={{
                  fontSize: "2.4rem",
                  fontWeight: 900,
                  color: "#4e99d2",
                  lineHeight: 1,
                  textShadow: "0 2px 12px rgba(78,153,210,0.3)",
                }}
              >
                {s.num}
              </span>
              <span
                style={{
                  fontSize: "11px",
                  color: "rgba(255,255,255,0.55)",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  fontWeight: 600,
                }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center", paddingTop: "8px" }}>
          <Consultation />
          <Link href="/about">
            <a
              style={{
                padding: "12px 28px",
                fontWeight: 600,
                fontSize: "13px",
                textTransform: "uppercase",
                letterSpacing: "1px",
                borderRadius: "8px",
                border: "1.5px solid rgba(255,255,255,0.35)",
                color: "#fff",
                textDecoration: "none",
                transition: "all 0.2s",
                background: "rgba(255,255,255,0.05)",
              }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.15)"}
              onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.05)"}
            >
              Learn More
            </a>
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
          color: "rgba(255,255,255,0.4)",
          fontSize: "12px",
          animation: "bounce 2s infinite",
        }}
      >
        <span>Scroll</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M8 3v10M3 9l5 5 5-5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }
      `}</style>
    </section>
  );
}
