import React from "react";
import Link from "next/link";
import { IconAlertTriangle } from "@tabler/icons-react";

const violations = [
  { violation: "Missing pre-employment drug test",         penalty: "Up to $16,000 per violation" },
  { violation: "Failure to query FMCSA Clearinghouse",     penalty: "Up to $5,833 per violation" },
  { violation: "Incomplete driver qualification file",     penalty: "Up to $16,000 per driver" },
  { violation: "Employment of disqualified driver",        penalty: "Up to $25,000 + criminal" },
  { violation: "HOS violation (hours of service)",         penalty: "Up to $16,000 per violation" },
  { violation: "Unsatisfactory safety rating",             penalty: "Loss of operating authority" },
];

export default function ComplianceCost() {
  return (
    <section className="py-20 sm:py-32 bg-cover" style={{ backgroundImage: "url(/images/bg.png)" }}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-3xl overflow-hidden h-[400px] sm:h-[500px]">
            <img src="/images/truck-4.jpg" alt="DOT compliance" className="w-full h-full object-cover" />
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(24,52,74,0.08)" }}>
                <IconAlertTriangle size={22} stroke={1.5} style={{ color: "#18344A" }} />
              </div>
              <h5 className="font-medium text-dark opacity-60 text-sm uppercase tracking-widest">
                The Cost of Non-Compliance
              </h5>
            </div>

            <h2 className="font-bold text-3xl sm:text-4xl text-dark leading-snug">
              One Gap Can Cost More Than a Year of YUSOLVE
            </h2>
            <p className="text-gray-500 leading-relaxed">
              FMCSA violations carry serious financial penalties — and that's before counting
              insurance premium increases, lost loads, or authority suspension.
            </p>

            <div className="flex flex-col rounded-2xl overflow-hidden" style={{ border: "1px solid #e5e7eb" }}>
              {violations.map((v, i) => (
                <div key={i} className="flex items-center justify-between gap-4 px-5 py-4"
                  style={{ background: i % 2 === 0 ? "#fff" : "#f9fafb", borderBottom: i < violations.length - 1 ? "1px solid #f0f0f0" : "none" }}>
                  <span className="text-dark text-sm leading-snug flex-1">{v.violation}</span>
                  <span className="font-bold text-sm whitespace-nowrap" style={{ color: "#18344A" }}>{v.penalty}</span>
                </div>
              ))}
            </div>

            <Link href="/contact">
              <a className="inline-block px-7 py-3 text-sm font-semibold uppercase rounded-lg text-white transition-all duration-150 w-fit"
                style={{ background: "#18344A" }}
                onMouseEnter={e => e.currentTarget.style.background = "#4e99d2"}
                onMouseLeave={e => e.currentTarget.style.background = "#18344A"}>
                Get a Free Compliance Review
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
