import React from "react";

// ─── reusable section card ───────────────────────────────────────────────────
function ServiceBlock({ num, title, intro, items, dark = false }) {
  return (
    <div className={`w-full ${dark ? "bg-dark" : "bg-white"}`}>
      <div className="container py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left */}
          <div className="flex flex-col gap-5">
            <span
              className={`text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full w-fit ${
                dark
                  ? "bg-white bg-opacity-10 text-main"
                  : "bg-dark bg-opacity-5 text-dark"
              }`}
            >
              {num}
            </span>
            <h2
              className={`text-2xl sm:text-3xl font-bold leading-snug ${
                dark ? "text-white" : "text-dark"
              }`}
            >
              {title}
            </h2>
            <p className={`text-base leading-relaxed ${dark ? "text-gray-300" : "text-gray-500"}`}>
              {intro}
            </p>
          </div>

          {/* Right — checklist */}
          <ul className="flex flex-col gap-3">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                    dark ? "bg-white text-dark" : "bg-dark text-white"
                  }`}
                >
                  ✓
                </span>
                <span className={`text-sm leading-relaxed ${dark ? "text-gray-300" : "text-gray-600"}`}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// ─── page hero ───────────────────────────────────────────────────────────────
function PageHero({ label, headline, sub, image }) {
  return (
    <div
      className="w-full py-20 relative overflow-hidden bg-dark"
      style={{ backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-dark bg-opacity-80" />
      <div className="container relative z-10 flex flex-col gap-4">
        <span className="text-xs font-bold tracking-widest uppercase text-main">{label}</span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-3xl leading-tight">
          {headline}
        </h1>
        <p className="text-gray-300 text-base max-w-xl leading-relaxed mt-2">{sub}</p>
      </div>
    </div>
  );
}

// ─── data ────────────────────────────────────────────────────────────────────
const pages = {
  1: {
    label: "Safety & DOT Compliance",
    headline: "Keep Your Authority Clean. Improve Your Safety Rating. Pass Every Audit.",
    sub: "Complete, managed FMCSA compliance — from driver files to CSA scores to full DOT audit preparation.",
    image: "/images/truck-1.jpg",
    sections: [
      {
        title: "Driver Qualification File (DQF) Management",
        intro: "We build, maintain, and monitor every driver's qualification file to full FMCSA compliance (49 CFR Part 391).",
        items: [
          "CDL verification and continuous monitoring",
          "Medical Examiner's Certificate — current and renewed",
          "Motor Vehicle Record (MVR) — initial and annual",
          "Pre-employment drug test documentation",
          "Employment history verification (3-year, FMCSA required)",
          "Road test or equivalent certificate",
          "Annual review of driving record",
          "Violations, suspensions, and revocations tracking",
        ],
      },
      {
        title: "CSA Score Monitoring & Improvement",
        intro: "Your CSA score directly impacts your safety rating and insurance costs. We monitor and improve it every month.",
        items: [
          "Monitoring your FMCSA SMS portal scores in real time",
          "Analyzing your BASIC scores across all 7 categories",
          "Identifying patterns driving violations and implementing corrective actions",
          "Challenging inaccurate violations via DataQs",
          "Tracking progress with monthly compliance reports",
          "Developing targeted improvement plans per BASIC category",
        ],
      },
      {
        title: "DOT Audit Preparation & Support",
        intro: "FMCSA audits require complete, organized records. We prepare your operation before the auditor arrives.",
        items: [
          "Internal pre-audit review of all records",
          "Organizing files in the exact format auditors expect",
          "Identifying and correcting deficiencies before the audit",
          "Preparing you for auditor interviews and questions",
          "On-call support during the audit itself",
          "Managing the post-audit corrective action plan",
        ],
      },
      {
        title: "Safety Policy Development",
        intro: "A strong safety culture starts with clear, written policies. We create and implement:",
        items: [
          "FMCSA-compliant driver safety policies",
          "Distracted driving and electronic device policy",
          "Accident/incident reporting and investigation procedures",
          "Hours of service (HOS) compliance policy",
          "Drug & alcohol testing policies (49 CFR Part 382)",
          "Speed management and cargo securement policies",
        ],
      },
      {
        title: "Violation Prevention & Roadside Inspection Support",
        intro: "Roadside inspections directly affect your CSA scores. We help reduce violations proactively.",
        items: [
          "Training drivers on inspection procedures and rights",
          "Reviewing ELD logs for HOS violations proactively",
          "Monitoring vehicle inspection reports (DVIRs)",
          "Ensuring all required documents are accessible in the cab",
          "Guidance on challenging unfair violations via DataQs",
          "Tracking roadside inspection trends and outcomes",
        ],
      },
      {
        title: "Ongoing Compliance Monitoring",
        intro: "Compliance is not a one-time event. Our ongoing monitoring keeps you protected year-round.",
        items: [
          "Monthly review of all driver files for expiration dates",
          "FMCSA portal monitoring for new violations or alerts",
          "Annual MVR pulls and driver reviews",
          "Regulatory update notifications and implementation support",
          "Quarterly compliance health reports",
          "Direct access to our team for urgent compliance questions",
        ],
      },
    ],
  },
  2: {
    label: "Fleet Documentation",
    headline: "Every Truck. Every Document. Always Current.",
    sub: "We manage all vehicle-level documentation — keeping every truck legal, inspected, and audit-ready.",
    image: "/images/truck-2.jpg",
    sections: [
      {
        title: "Vehicle Registration Management",
        intro: "Expired or incorrect registrations put trucks out of service. We keep every unit current.",
        items: [
          "Annual vehicle registration renewals across all states",
          "IRP (International Registration Plan) apportioned registration processing",
          "Coordination with state motor vehicle agencies",
          "Storage and retrieval of all cab cards and registration documents",
          "Multi-state registration compliance tracking",
          "Renewal deadline alerts and proactive processing",
        ],
      },
      {
        title: "Annual Vehicle Inspection Compliance",
        intro: "Every commercial vehicle must pass an annual inspection per FMCSA 49 CFR Part 396.",
        items: [
          "Track annual inspection due dates for every unit in your fleet",
          "Send renewal reminders and coordinate with inspection facilities",
          "Maintain and organize inspection reports in vehicle files",
          "Ensure out-of-service defects are documented and resolved",
          "Monitor inspection history for recurring issues",
          "FMCSA-required record retention schedules",
        ],
      },
      {
        title: "IFTA / IRP Reporting",
        intro: "Fuel tax and registration compliance across state lines is complex. YUSOLVE handles it all.",
        items: [
          "Quarterly IFTA filing preparation",
          "Fuel record organization and mileage tracking support",
          "IRP credential management and annual renewal",
          "State audit preparation for IFTA/IRP records",
          "Multi-jurisdiction compliance monitoring",
          "IFTA decal management and tracking",
        ],
      },
      {
        title: "Preventive Maintenance Tracking",
        intro: "Documented maintenance reduces costly breakdowns and is required under FMCSA regulations.",
        items: [
          "Create and manage vehicle maintenance schedules",
          "Track oil changes, tire rotations, brake inspections, and major repairs",
          "Store all repair orders and maintenance records",
          "Monitor odometer/engine hours for service intervals",
          "Flag vehicles approaching critical service milestones",
          "FMCSA-compliant maintenance file for each unit",
        ],
      },
      {
        title: "Driver Vehicle Inspection Reports (DVIR)",
        intro: "Pre- and post-trip inspections are required daily. We manage the entire DVIR process.",
        items: [
          "DVIR record retention and organization (minimum 90 days)",
          "Monitoring for recurring defects that indicate larger issues",
          "Ensuring defects are signed off as repaired",
          "DVIR compliance audits and driver training support",
        ],
      },
      {
        title: "Out-of-Service (OOS) & ELD Compliance",
        intro: "OOS violations and ELD mandate compliance require precise documentation and follow-through.",
        items: [
          "Track and document all OOS incidents for every vehicle",
          "Coordinate repairs and return-to-service documentation",
          "Challenge incorrect OOS violations through DataQs",
          "ELD provider selection and implementation guidance",
          "Driver HOS log review and violation identification",
          "ELD record retention management (6 months minimum)",
        ],
      },
    ],
  },
  3: {
    label: "HR & Driver Management",
    headline: "Hire Compliant. Manage Smart. Terminate Clean.",
    sub: "FMCSA-compliant driver qualification files, drug & alcohol program management, and full HR support.",
    image: "/images/truck-6.jpg",
    sections: [
      {
        title: "Driver Qualification File — Hiring Compliance",
        intro: "Every new driver hire requires a specific set of documents under FMCSA 49 CFR Part 391.",
        items: [
          "Application for employment (DOT-compliant form)",
          "3-year employment history verification with required motor carrier contacts",
          "CDL verification and state MVR pull",
          "Medical Examiner Certificate verification",
          "Road test or skills test certificate",
          "Pre-employment drug test coordination and documentation",
          "Previous employer drug/alcohol violation inquiry (49 CFR 391.23)",
          "FMCSA Drug & Alcohol Clearinghouse pre-employment query",
        ],
      },
      {
        title: "Drug & Alcohol Program Management",
        intro: "FMCSA's drug and alcohol testing requirements under 49 CFR Part 382 are extensive. We manage your entire program.",
        items: [
          "Consortium/TPA enrollment and management",
          "Random testing selection and scheduling (minimum DOT rates)",
          "Post-accident testing protocol and documentation",
          "Reasonable suspicion testing documentation support",
          "Return-to-duty and follow-up testing coordination",
          "FMCSA Drug & Alcohol Clearinghouse — queries, reporting, annual requirements",
          "SAP (Substance Abuse Professional) referral process management",
          "Ongoing Clearinghouse monitoring for current drivers",
        ],
      },
      {
        title: "Ongoing Driver File Maintenance",
        intro: "Driver files require continuous updates throughout employment. We handle all of it.",
        items: [
          "Annual MVR review and documentation",
          "Medical certificate renewal tracking and filing",
          "Annual driver review and acknowledgment of violations",
          "License expiration monitoring and alerts",
          "Updating employment records for status changes",
          "Periodic review of file completeness and compliance",
        ],
      },
      {
        title: "Onboarding Documentation",
        intro: "Professional onboarding reduces turnover and ensures compliance from day one.",
        items: [
          "Driver onboarding packet (policies, acknowledgments, safety training records)",
          "Employee handbook (trucking-specific, FMCSA-aligned)",
          "Policy acknowledgment forms (distracted driving, drug policy, etc.)",
          "Direct deposit and payroll authorization forms",
          "Emergency contact and beneficiary forms",
          "Equipment assignment and responsibility agreements",
        ],
      },
      {
        title: "Termination & Off-Boarding Compliance",
        intro: "Driver terminations must be handled correctly under FMCSA requirements.",
        items: [
          "Proper file closure and retention per FMCSA record requirements",
          "Previous employer inquiry response management",
          "Drug & Alcohol Clearinghouse reporting of violations (if applicable)",
          "Termination documentation and final payroll compliance",
          "Equipment return documentation",
          "Records retention schedule compliance (3 years minimum post-employment)",
        ],
      },
      {
        title: "HR Policy Development",
        intro: "Trucking-specific HR policies that protect you legally and operationally.",
        items: [
          "Anti-harassment and discrimination policy",
          "Attendance and punctuality policy",
          "Disciplinary action procedures",
          "CDL violation reporting policy (required within 30 days — 49 CFR 383.31)",
          "Personal use of company vehicle policy",
          "Social media and communication policy",
        ],
      },
    ],
  },
  4: {
    label: "Insurance Consulting",
    headline: "Better Coverage. Lower Premiums. Smarter Insurance Strategy.",
    sub: "Trucking insurance is complicated and directly tied to your safety record. We help you optimize both.",
    image: "/images/truck-5.jpg",
    sections: [
      {
        title: "Coverage Review & Gap Analysis",
        intro: "We review your current insurance policies in detail to find gaps and overcharges.",
        items: [
          "Primary auto liability (FMCSA minimums: $750K–$5M depending on cargo)",
          "General liability coverage adequacy",
          "Cargo insurance — limits, exclusions, and carrier requirements",
          "Physical damage — actual cash value vs. agreed value",
          "Non-trucking liability (bobtail) for owner-operators",
          "Occupational accident coverage for independent contractors",
          "Umbrella / excess liability assessment",
          "Workers' compensation compliance by state",
        ],
      },
      {
        title: "Cost Reduction Strategy",
        intro: "We work to reduce your insurance costs through data-driven strategy.",
        items: [
          "Analyzing your loss runs (claims history) and identifying patterns",
          "Connecting your CSA score improvements to underwriting conversations",
          "Reviewing your fleet driver list for risk factors affecting premiums",
          "Identifying equipment coverage that can be adjusted",
          "Advising on safety investments that insurers reward with lower rates",
          "Timing renewals and shopping markets strategically",
        ],
      },
      {
        title: "Carrier & Broker Connections",
        intro: "We help you work with the right insurance partners for your operation type.",
        items: [
          "Connecting you with specialized trucking insurance brokers",
          "Reviewing quotes from multiple carriers for comparison",
          "Evaluating insurer financial stability and claims reputation",
          "Negotiating policy terms and conditions on your behalf",
          "Reviewing exclusions and endorsements for hidden gaps",
          "Multi-year program planning for premium stability",
        ],
      },
      {
        title: "Claims Support",
        intro: "When accidents happen, proper documentation and process matter. We guide you through.",
        items: [
          "Accident documentation checklist and procedures",
          "Post-accident drug testing requirements",
          "Coordinating with insurance adjusters",
          "Reviewing settlement offers and advising on adequacy",
          "Subrogation claim identification and recovery",
          "Claims history management for renewal positioning",
        ],
      },
      {
        title: "Safety-to-Insurance Optimization",
        intro: "Your safety record IS your insurance profile. We connect the two strategically.",
        items: [
          "Providing safety reports formatted for underwriter review",
          "Documenting safety program improvements for renewal negotiations",
          "Building a compliance narrative that demonstrates risk reduction",
          "Coordinating safety upgrades (cameras, training) with insurance positioning",
          "Monitoring the direct impact of CSA improvements on premiums",
          "Annual insurance strategy review aligned with safety performance",
        ],
      },
    ],
  },
};

// ─── main export ─────────────────────────────────────────────────────────────
export function Info({ id }) {
  const pageId = parseInt(id) || 1;
  const data = pages[pageId] || pages[1];

  return (
    <div className="w-full">
      {/* Page intro strip */}
      <div className="w-full bg-dark bg-opacity-5 border-b border-gray-100">
        <div className="container py-6">
          <p className="text-gray-500 text-sm max-w-2xl">
            {data.sub}
          </p>
        </div>
      </div>

      {/* Alternating sections */}
      {data.sections.map((section, i) => (
        <ServiceBlock
          key={i}
          num={`0${i + 1}`}
          title={section.title}
          intro={section.intro}
          items={section.items}
          dark={i % 2 !== 0}
        />
      ))}

      {/* Bottom CTA strip */}
      <div className="w-full bg-dark py-16">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">
              Ready to get started?
            </h3>
            <p className="text-gray-400 text-sm">
              Get a free compliance review — no strings attached.
            </p>
          </div>
          <a
            href="/contact"
            className="px-8 py-3 font-semibold uppercase text-sm bg-white hover:bg-opacity-90 rounded-lg text-dark transition-all duration-150 whitespace-nowrap"
          >
            Get Free Consultation
          </a>
        </div>
      </div>
    </div>
  );
}
