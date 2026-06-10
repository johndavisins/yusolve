import React from "react";
import Link from "next/link";
import {
  IconRadar,
  IconUsers,
  IconBuildingSkyscraper,
  IconTruck,
  IconChartBar,
  IconBolt,
} from "@tabler/icons-react";

const items = [
  { Icon: IconRadar,             title: "Proactive, Not Reactive",   desc: "We monitor, flag, and fix issues before they turn into violations. Our clients rarely face DOT problems — because we prevent them." },
  { Icon: IconUsers,             title: "Dedicated Compliance Team", desc: "A real team — not software. Our specialists know FMCSA regulations inside and out and stay current with every rule change." },
  { Icon: IconBuildingSkyscraper,title: "One Partner, Full Coverage", desc: "Safety, HR, insurance, fleet docs — all under one roof. No juggling multiple vendors. No gaps. No surprises." },
  { Icon: IconTruck,             title: "Built for Trucking Only",    desc: "We work exclusively in trucking. We understand the pressure of keeping trucks moving while staying compliant." },
  { Icon: IconChartBar,          title: "98% DOT Audit Pass Rate",   desc: "Our clients consistently pass FMCSA audits with zero or minimal findings because we prepare them thoroughly in advance." },
  { Icon: IconBolt,              title: "24-Hour Response Time",      desc: "Urgent DOT audit call? Active roadside issue? We respond within 24 hours — and for emergencies, much faster." },
];

export default function WhyUs() {
  return (
    <section className="py-20 sm:py-32 bg-cover" style={{ backgroundImage: "url(/images/bg.png)" }}>
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-5/12 flex flex-col gap-5">
            <h5 className="font-medium text-lg text-dark opacity-60">Why YUSOLVE</h5>
            <h2 className="font-bold text-3xl sm:text-4xl text-dark leading-snug">
              We Don't Just Fix Problems —{" "}
              <span style={{ color: "#4e99d2" }}>We Prevent Them</span>
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Most carriers call a compliance consultant after they get a violation or fail an audit.
              Our clients rarely get there — because we monitor, anticipate, and act before problems happen.
            </p>
            <Link href="/about">
              <a className="inline-block mt-2 px-7 py-3 text-sm font-semibold uppercase bg-dark rounded-lg text-white hover:opacity-80 transition-all duration-150 w-fit">
                Learn More About Us
              </a>
            </Link>
          </div>

          <div className="lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {items.map(({ Icon, title, desc }, i) => (
              <div key={i} className="flex flex-col gap-3 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200"
                style={{ borderTop: "3px solid #18344A" }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "rgba(24,52,74,0.08)" }}>
                  <Icon size={22} stroke={1.5} style={{ color: "#18344A" }} />
                </div>
                <h3 className="font-bold text-dark text-base">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
