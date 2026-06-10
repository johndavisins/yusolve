import React from "react";
import Link from "next/link";
import {
  IconUser,
  IconTruck,
  IconBuilding,
  IconBuildingFactory2,
} from "@tabler/icons-react";

const carriers = [
  {
    Icon: IconUser,
    title: "Owner-Operators",
    desc: "1–3 trucks. Full compliance support without a full-time safety person. Affordable monthly program.",
    tag: "1–3 trucks",
  },
  {
    Icon: IconTruck,
    title: "Small Fleets",
    desc: "5–20 trucks. We build professional compliance systems so your operation runs like a larger carrier.",
    tag: "5–20 trucks",
  },
  {
    Icon: IconBuilding,
    title: "Mid-Size Carriers",
    desc: "20–50 trucks. Scalable compliance management that grows with your business.",
    tag: "20–50 trucks",
  },
  {
    Icon: IconBuildingFactory2,
    title: "Large Operations",
    desc: "50+ trucks. We work alongside your safety manager as a compliance resource.",
    tag: "50+ trucks",
  },
];

const types = ["Dry Van", "Refrigerated", "Flatbed", "Tanker", "Intermodal", "Specialized", "Hazmat", "Household Goods"];

export default function WhoWeServe() {
  return (
    <section className="relative z-0 py-20 sm:py-32 lamp__container" style={{ background: "#18344A" }}>
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center gap-4 mb-14">
          <h5 className="font-medium text-sm uppercase tracking-widest" style={{ color: "#4e99d2" }}>Who We Serve</h5>
          <h2 className="font-bold text-3xl sm:text-4xl text-white leading-snug max-w-xl">
            Built for All Types of Carriers
          </h2>
          <p className="text-gray-400 max-w-lg leading-relaxed">
            From a single owner-operator to a 100-truck fleet — YUSOLVE has a compliance program that fits your size and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {carriers.map(({ Icon, title, desc, tag }, i) => (
            <div key={i} className="flex flex-col gap-4 p-6 rounded-2xl transition-all duration-200"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(78,153,210,0.15)" }}>
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: "rgba(78,153,210,0.12)" }}>
                  <Icon size={20} stroke={1.5} style={{ color: "#4e99d2" }} />
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full"
                  style={{ color: "#4e99d2", background: "rgba(78,153,210,0.12)" }}>
                  {tag}
                </span>
              </div>
              <h3 className="text-white font-bold text-lg">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-5">
          <p className="text-gray-400 text-sm">We serve all major carrier types:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {types.map((t, i) => (
              <span key={i} className="px-4 py-2 rounded-full text-sm font-medium"
                style={{ color: "rgba(255,255,255,0.7)", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                {t}
              </span>
            ))}
          </div>
          <Link href="/contact">
            <a className="mt-4 px-7 py-3 text-sm font-semibold uppercase rounded-lg text-white transition-all duration-150"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.25)" }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.15)"}
              onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.06)"}>
              Get a Free Consultation
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
