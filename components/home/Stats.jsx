import React from "react";
import {
  IconTruckDelivery,
  IconCertificate,
  IconCalendarStats,
  IconMapPin,
} from "@tabler/icons-react";

const stats = [
  { Icon: IconTruckDelivery,  num: "150+", label: "Carriers Served",     desc: "Active trucking companies trust YUSOLVE" },
  { Icon: IconCertificate,    num: "98%",  label: "DOT Audit Pass Rate", desc: "Of our clients pass audits with zero findings" },
  { Icon: IconCalendarStats,  num: "6+",  label: "Years Experience",    desc: "Combined industry expertise in compliance" },
  { Icon: IconMapPin,         num: "48",   label: "States Covered",      desc: "All 48 contiguous US states" },
];

export default function Stats() {
  return (
    <section style={{ background: "rgba(24,52,74,0.97)", borderBottom: "1px solid rgba(78,153,210,0.2)" }}>
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map(({ Icon, num, label, desc }, i) => (
            <div key={i} className="flex flex-col items-center gap-2 py-10 px-6 text-center"
              style={{ borderRight: i < 3 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
              <Icon size={28} stroke={1.5} style={{ color: "#4e99d2", opacity: 0.8 }} />
              <span className="text-4xl sm:text-5xl font-extrabold leading-none mt-1" style={{ color: "#4e99d2" }}>
                {num}
              </span>
              <span className="text-xs font-bold text-white uppercase tracking-wide">
                {label}
              </span>
              <span className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
                {desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
