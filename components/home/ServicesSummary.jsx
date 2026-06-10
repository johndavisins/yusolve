import React from "react";
import Link from "next/link";
import {
  IconShieldCheck,
  IconTruckDelivery,
  IconId,
  IconFileInvoice,
} from "@tabler/icons-react";

const services = [
  {
    id: 1,
    Icon: IconShieldCheck,
    title: "Safety & DOT Compliance",
    items: [
      "Driver Qualification File (DQF) management",
      "CSA score monitoring & improvement",
      "DOT audit preparation & support",
      "Safety policy development",
      "Violation prevention & roadside support",
      "Ongoing FMCSA compliance monitoring",
    ],
  },
  {
    id: 2,
    Icon: IconTruckDelivery,
    title: "Fleet Documentation",
    items: [
      "Vehicle registration management (all states)",
      "Annual inspection compliance tracking",
      "IFTA / IRP quarterly reporting",
      "Preventive maintenance records",
      "Driver Vehicle Inspection Reports (DVIR)",
      "ELD / Telematics compliance",
    ],
  },
  {
    id: 3,
    Icon: IconId,
    title: "HR & Driver Management",
    items: [
      "Full pre-hire DQF package (49 CFR Part 391)",
      "Drug & Alcohol Clearinghouse management",
      "Random testing program (TPA/consortium)",
      "Onboarding documentation & handbook",
      "Ongoing file maintenance & renewals",
      "Termination & off-boarding compliance",
    ],
  },
  {
    id: 4,
    Icon: IconFileInvoice,
    title: "Insurance Consulting",
    items: [
      "Coverage review & gap analysis",
      "Premium cost reduction strategy",
      "Broker & carrier connections",
      "Claims support & documentation",
      "Safety-to-insurance optimization",
      "Annual insurance strategy review",
    ],
  },
];

export default function ServicesSummary() {
  return (
    <section className="py-20 sm:py-32 bg-cover" style={{ backgroundImage: "url(/images/bg.png)" }}>
      <div className="container">
        <div className="flex flex-col items-center text-center gap-4 mb-14">
          <h5 className="font-medium text-dark opacity-60 text-sm uppercase tracking-widest">What We Do</h5>
          <h2 className="font-bold text-3xl sm:text-4xl text-dark leading-snug max-w-2xl">
            End-to-End Compliance Solutions for Trucking Carriers
          </h2>
          <p className="text-gray-500 max-w-xl leading-relaxed">
            Every aspect of trucking compliance under one roof — no more juggling multiple vendors or missing critical deadlines.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map(({ id, Icon, title, items }) => (
            <div key={id} className="rounded-3xl p-8 flex flex-col gap-5"
              style={{ background: "linear-gradient(135deg, #1a3a52 0%, #18344A 100%)", border: "1px solid rgba(78,153,210,0.2)" }}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(78,153,210,0.15)", border: "1px solid rgba(78,153,210,0.25)" }}>
                  <Icon size={24} stroke={1.5} style={{ color: "#4e99d2" }} />
                </div>
                <h3 className="text-white font-bold text-xl leading-tight">{title}</h3>
              </div>

              <ul className="flex flex-col gap-2">
                {items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
                    <span className="font-bold mt-0.5 flex-shrink-0" style={{ color: "#4e99d2" }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <Link href={`/solutions/${id}`}>
                <a className="mt-auto inline-block text-sm font-bold transition-colors duration-150"
                  style={{ color: "#4e99d2" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                  onMouseLeave={e => e.currentTarget.style.color = "#4e99d2"}>
                  Learn More →
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
