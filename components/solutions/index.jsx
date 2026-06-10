"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/animete";
import Link from "next/link";

export default function Solutions() {
  const data = [
    {
      id: 1,
      title: "Safety",
      subtitle: "DOT & FMCSA Compliance",
      desc: "Driver qualification files, CSA scores, audit preparation, violation prevention.",
      image: "/images/truck-1.jpg",
    },
    {
      id: 2,
      title: "Fleet",
      subtitle: "Fleet Documentation",
      desc: "Registration, IFTA/IRP, annual inspections, maintenance records, ELD compliance.",
      image: "/images/truck-2.jpg",
    },
    {
      id: 3,
      title: "HR",
      subtitle: "Driver Management",
      desc: "Hiring compliance, drug & alcohol program, onboarding, file maintenance.",
      image: "/images/truck-6.jpg",
    },
    {
      id: 4,
      title: "Insurance",
      subtitle: "Insurance Consulting",
      desc: "Coverage review, cost reduction, broker connections, claims support.",
      image: "/images/truck-5.jpg",
    },
  ];

  return (
    <LampContainer>
      <h1 className="mt-5 text-white py-2 text-center text-4xl font-medium md:text-4xl">
        Our solutions
      </h1>
      <p className="text-gray-400 text-center text-base max-w-lg pb-10">
        Everything your trucking operation needs to stay compliant — under one roof.
      </p>

      {/* 
        Layout:
        ┌─────────────────┬──────────┐
        │                 │          │
        │   Safety (big)  │  Fleet   │
        │                 │          │
        ├────────┬────────┤          │
        │   HR   │Insurance│         │
        └────────┴─────────┴─────────┘

        Desktop: col 1 = katta Safety, col 2 = Fleet (full height), col 3 = HR + Insurance ustma-ust
        → 3 ustun grid bilan mosaic layout
      */}
      <div className="w-full solutions-container">

        {/* Desktop mosaic, mobile stack */}
        <div className="hidden lg:grid grid-cols-3 gap-5 2xl:gap-8 w-full">

          {/* Card 1 — Safety: katta, 2 qator balandligi */}
          <Link href="/solutions/1">
            <a className="solution-card col-span-1 row-span-2 flex flex-col items-start justify-end rounded-3xl overflow-hidden min-h-[560px] relative bg-cover bg-center transition-all duration-300 group p-7 border border-transparent hover:border-white z-0"
              style={{ backgroundImage: "url(/images/truck-1.jpg)" }}>
              <CardOverlay />
              <CardContent title="Safety" subtitle="DOT & FMCSA Compliance" desc="Driver qualification files, CSA scores, audit preparation, violation prevention." />
            </a>
          </Link>

          {/* Card 2 — Fleet: o'rta, to'liq balandlik */}
          <Link href="/solutions/2">
            <a className="solution-card col-span-1 row-span-2 flex flex-col items-start justify-end rounded-3xl overflow-hidden min-h-[560px] relative bg-cover bg-center transition-all duration-300 group p-7 border border-transparent hover:border-white z-0"
              style={{ backgroundImage: "url(/images/truck-2.jpg)" }}>
              <CardOverlay />
              <CardContent title="Fleet" subtitle="Fleet Documentation" desc="Registration, IFTA/IRP, annual inspections, maintenance records, ELD compliance." />
            </a>
          </Link>

          {/* Card 3 — HR: yuqori yarmi */}
          <Link href="/solutions/3">
            <a className="solution-card col-span-1 flex flex-col items-start justify-end rounded-3xl overflow-hidden min-h-[265px] relative bg-cover bg-center transition-all duration-300 group p-7 border border-transparent hover:border-white z-0"
              style={{ backgroundImage: "url(/images/truck-6.jpg)" }}>
              <CardOverlay />
              <CardContent title="HR" subtitle="Driver Management" desc="Hiring compliance, drug & alcohol program, onboarding, file maintenance." />
            </a>
          </Link>

          {/* Card 4 — Insurance: quyi yarmi */}
          <Link href="/solutions/4">
            <a className="solution-card col-span-1 flex flex-col items-start justify-end rounded-3xl overflow-hidden min-h-[265px] relative bg-cover bg-center transition-all duration-300 group p-7 border border-transparent hover:border-white z-0"
              style={{ backgroundImage: "url(/images/truck-5.jpg)" }}>
              <CardOverlay />
              <CardContent title="Insurance" subtitle="Insurance Consulting" desc="Coverage review, cost reduction, broker connections, claims support." />
            </a>
          </Link>
        </div>

        {/* Tablet: 2x2 grid */}
        <div className="hidden sm:grid lg:hidden grid-cols-2 gap-5 w-full">
          {data.map((item) => (
            <Link href={`/solutions/${item.id}`} key={item.id}>
              <a className="solution-card flex flex-col items-start justify-end rounded-3xl overflow-hidden min-h-[340px] relative bg-cover bg-center transition-all duration-300 group p-7 border border-transparent hover:border-white z-0"
                style={{ backgroundImage: `url(${item.image})` }}>
                <CardOverlay />
                <CardContent title={item.title} subtitle={item.subtitle} desc={item.desc} />
              </a>
            </Link>
          ))}
        </div>

        {/* Mobile: vertical stack */}
        <div className="grid sm:hidden grid-cols-1 gap-5 w-full">
          {data.map((item) => (
            <Link href={`/solutions/${item.id}`} key={item.id}>
              <a className="solution-card flex flex-col items-start justify-end rounded-3xl overflow-hidden min-h-[280px] relative bg-cover bg-center transition-all duration-300 group p-7 border border-transparent hover:border-white z-0"
                style={{ backgroundImage: `url(${item.image})` }}>
                <CardOverlay />
                <CardContent title={item.title} subtitle={item.subtitle} desc={item.desc} />
              </a>
            </Link>
          ))}
        </div>

      </div>
    </LampContainer>
  );
}

// ── shared sub-components ────────────────────────────────────────────────────

function CardOverlay() {
  return (
    <>
      {/* always-on dark gradient from bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent z-[1] rounded-3xl" />
      {/* hover blur overlay */}
      <div className="w-full h-full absolute solution-card-hover bg-dark top-0 left-0 z-[0] bg-opacity-10 backdrop-blur-sm rounded-3xl" />
    </>
  );
}

function CardContent({ title, subtitle, desc }) {
  return (
    <div className="relative z-[2] flex flex-col gap-1">
      <span className="text-xs font-semibold uppercase tracking-widest opacity-90" style={{ color: "#4e99d2" }}>
        {subtitle}
      </span>
      <h2 className="text-white text-xl sm:text-2xl font-bold leading-tight">
        {title}
      </h2>
      {/* desc — faqat hover qilganda ko'rinadi */}
      <p className="text-gray-300 text-sm leading-relaxed max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-300 opacity-0 group-hover:opacity-100">
        {desc}
      </p>
    </div>
  );
}

// ── lamp container (o'zgarishsiz) ────────────────────────────────────────────
export const LampContainer = ({ children, className }) => {
  return (
    <div
      id="solutions"
      className={cn(
        "lamp__container relative flex flex-col items-center justify-center overflow-hidden bg-dark w-full z-0 pb-20 pt-[240px]",
        className,
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{ backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))` }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-[100%] left-0 bg-dark h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-[100%] left-0 bg-dark bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{ backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))` }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-40 h-[100%] right-0 bg-dark bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-dark h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-dark blur-2xl" />
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md" />
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl" />
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"
        />
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400"
        />
        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-dark" />
      </div>
      <div className="relative z-50 flex -translate-y-20 flex-col items-center px-5 container">
        {children}
      </div>
    </div>
  );
};
