import React from "react";
import { Consultation } from "@/components";
import { IconPhone, IconSettings, IconRefresh } from "@tabler/icons-react";

const steps = [
  {
    Icon: IconPhone,
    num: "01",
    title: "Free Consultation",
    desc: "Schedule a no-obligation call. We review your compliance situation, identify risks, and recommend a service plan tailored to your operation.",
  },
  {
    Icon: IconSettings,
    num: "02",
    title: "Onboarding & Setup",
    desc: "We audit your existing files, fill the gaps, and build your compliance systems from the ground up — within 5–7 business days.",
  },
  {
    Icon: IconRefresh,
    num: "03",
    title: "Ongoing Management",
    desc: "We handle the day-to-day: CSA score monitoring, driver file updates, renewals, and flagging issues — while you run your business.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative z-0 py-20 sm:py-32 lamp__container" style={{ background: "#18344A" }}>
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <h5 className="font-medium text-sm uppercase tracking-widest" style={{ color: "#4e99d2" }}>The Process</h5>
          <h2 className="font-bold text-3xl sm:text-4xl text-white leading-snug max-w-xl">
            Getting Started Is Simple
          </h2>
          <p className="text-gray-400 max-w-lg leading-relaxed">
            Three straightforward steps to a fully compliant, stress-free trucking operation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-10 left-[20%] right-[20%] h-px"
            style={{ background: "rgba(78,153,210,0.25)", zIndex: 0 }} />

          {steps.map(({ Icon, num, title, desc }, i) => (
            <div key={i} className="flex flex-col items-center text-center px-6 py-8 rounded-2xl relative z-10"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(78,153,210,0.15)" }}>
              <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                style={{ background: "rgba(78,153,210,0.12)", border: "1px solid rgba(78,153,210,0.3)" }}>
                <Icon size={32} stroke={1.5} style={{ color: "#4e99d2" }} />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#4e99d2" }}>
                Step {num}
              </span>
              <h3 className="text-white font-bold text-xl mb-3">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Consultation />
        </div>
      </div>
    </section>
  );
}
