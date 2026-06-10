import React from "react";

const testimonials = [
  {
    text: "Before YUSOLVE, we had two violations in one year and our CSA score was a mess. Within 6 months of working with them, our score dropped by 40 points and we passed our DOT audit with zero findings. I don't know what we'd do without them.",
    name: "Dmitri V.",
    role: "Owner-Operator, Ohio-based Dry Van Carrier",
  },
  {
    text: "They took over all our driver files and HR documentation when we expanded from 5 to 20 trucks. The transition was smooth, everything was organized, and we stopped worrying about whether our files were compliant. Worth every dollar.",
    name: "Svetlana M.",
    role: "Safety Manager, Refrigerated Carrier, Illinois",
  },
  {
    text: "Our insurance broker couldn't explain why our premiums kept going up. YUSOLVE reviewed our coverage and our safety data together and helped us save nearly $18,000 a year while actually improving our coverage. Highly recommend.",
    name: "Behruz T.",
    role: "Fleet Owner, Flatbed Operation, Texas",
  },
];

export default function Costumer() {
  return (
    <section
      id="costumer"
      className="bg-dark pb-10 lg:pb-20 pt-5 sm:pt-0 relative z-0 lamp__container"
    >
      <div className="container flex flex-col items-center justify-center gap-10 relative z-10">
        <div className="flex flex-col lg:w-6/12 gap-5 text-white text-center">
          <h1 className="text-2xl lg:text-4xl font-semibold">
            <span className="text-main">Trusted</span> by Carriers{" "}
            <br /> Across the US
          </h1>
          <p className="text-gray-400">
            Real results from trucking companies that rely on YUSOLVE every day.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-5">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white text-white bg-opacity-5 backdrop-blur-lg p-5 border-white border border-opacity-30 rounded-xl"
            >
              <p className="text-sm pb-5 border-b-white border-b border-opacity-30">
                {item.text}
              </p>
              <div className="flex items-center justify-between gap-2 pt-5">
                <div className="flex flex-col gap-1">
                  <h3 className="text-sm font-medium">{item.name}</h3>
                  <h4 className="text-xs font-normal text-gray-300">
                    {item.role}
                  </h4>
                </div>
                <div className="w-14 h-14 rounded-full overflow-hidden bg-white bg-opacity-10 flex items-center justify-center">
                  <img
                    src="/images/main.png"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
