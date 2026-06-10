import Link from "next/link";
import React from "react";

export default function Teams() {
  const values = [
    {
      title: "Proactive Partnership",
      desc: "We don't wait for violations to happen. We monitor, anticipate, and act — keeping your operation ahead of compliance issues before they cost you money or put your authority at risk.",
    },
    {
      title: "Transparency",
      desc: "You always know the status of your compliance. We communicate clearly, document everything, and make sure you understand what we're doing and why.",
    },
    {
      title: "Industry Expertise",
      desc: "We work exclusively in trucking. FMCSA regulations, CSA scores, DOT audits, HOS rules, drug & alcohol programs — this is our world, and we stay on top of every change.",
    },
    {
      title: "Real Results",
      desc: "We measure our success by your outcomes — cleaner CSA scores, passed audits, organized files, reduced insurance premiums. Our job isn't done until your operation is genuinely stronger.",
    },
  ];

  return (
    <section
      id="about"
      className="py-14 md:py-20 sm:py-32 bg-cover"
      style={{ backgroundImage: "url(/images/bg.png)" }}
    >
      <div className="container flex flex-col items-center gap-10 sm:gap-20 text-dark">
        <div className="flex flex-col lg:w-8/12 gap-5 text-center">
          <h1 className="text-2xl lg:text-4xl font-semibold">
            <span className="text-main">Our</span> Mission &amp; Values
          </h1>
          <p className="text-gray-400">
            To protect every carrier's operating authority, improve their safety
            record, and give them the compliance foundation they need to grow —
            with expert support they can actually count on.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
          {values.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 p-7 rounded-2xl border border-gray-200 bg-white shadow-sm"
            >
              <h3 className="text-lg font-bold text-dark">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
