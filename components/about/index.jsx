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
            Who We Are
          </h5>
          <h2 className="font-bold text-2xl sm:text-3xl">
            Trusted Safety Partner for Trucking Companies Across the US
          </h2>
          <p className="py-7">
            YUSOLVE LLC is a specialized compliance and safety management company
            serving trucking carriers throughout the United States. We handle the
            complex, time-consuming work of keeping your operation fully compliant
            with FMCSA regulations — so you can focus on moving freight.
            <br />
            <br />
            From the moment you partner with us, you get a dedicated team that
            manages your driver files, monitors safety scores, prepares you for
            audits, handles HR documentation, advises on insurance, and maintains
            your fleet records. One partner. Total coverage.
            <br />
            <br />
            At YUSOLVE, we don't just fix problems — we prevent them. With
            industry expertise, hands-on support, and a proactive approach, we
            help trucking companies stay compliant, reduce stress, and focus on
            what matters most: running a successful operation.
          </p>
          {!isAbout && (
            <Link href={"/about"}>
              <button
                type="button"
                className="px-7 py-3 text-sm font-semibold uppercase bg-dark rounded-lg text-white hover:opacity-80 transition-all duration-150"
              >
                Learn More About Us
              </button>
            </Link>
          )}
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
