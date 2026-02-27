import Link from "next/link";
import React from "react";

export default function About({ isAbout = false }) {
  return (
    <section
      id="about"
      className="py-14 md:py-20 sm:py-32 bg-cover"
      style={{ backgroundImage: "url(/images/bg.png)" }}
    >
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-20 text-dark">
        <div className="flex flex-col items-start gap-1">
          <h5 className="font-medium text-lg sm:text-xl">
            Yusolve Heading top
          </h5>
          <h2 className="font-bold text-2xl sm:text-3xl">
            About Yusolve Solutions
          </h2>
          <p className="py-7">
            YUSOLVE is a trusted partner for trucking companies across the
            United States, providing professional safety and compliance
            solutions in full accordance with FMCSA regulations.
            <br />
            We help carriers navigate the complexities of federal safety
            requirements, reduce risks, and maintain strong compliance records.
            Our mission is to protect your authority, improve your CSA scores,
            and ensure your business operates smoothly and confidently in a
            highly regulated industry.
            <br />
            Our services include driver qualification file (DQF) management, DOT
            audit preparation, safety monitoring, violation prevention, and
            ongoing compliance support tailored to your company’s needs. We work
            closely with owners, safety managers, and dispatch teams to build
            sustainable safety systems that support long-term growth.
            <br />
            At YUSOLVE, we don’t just fix problems — we prevent them. With
            industry expertise, hands-on support, and a proactive approach, we
            help trucking companies stay compliant, reduce stress, and focus on
            what matters most: running a successful operation.
          </p>
          {/* {isAbout ? (
            <></>
          ) : (
            <Link href={"/about"}>
              <button
                type="button"
                className="px-7 py-3 text-sm font-semibold uppercase bg-dark rounded-lg text-white hover:bg-main hover:text-dark transition-all duration-150"
              >
                Read more
              </button>
            </Link>
          )} */}
        </div>
        <div className="rounded-3xl h-[350px] sm:h-[550px] overflow-hidden">
          <img
            src="/images/truck-3.jpg"
            alt="main"
            title="main"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
