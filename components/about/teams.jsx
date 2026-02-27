import Link from "next/link";
import React from "react";
import { TeamCard } from "../cards/team-card";

export default function Teams({ isAbout = false }) {
  return (
    <section
      id="about"
      className="py-14 md:py-20 sm:py-32 bg-cover"
      style={{ backgroundImage: "url(/images/bg.png)" }}
    >
      <div className="container flex flex-col items-center gap-10 sm:gap-20 text-dark">
        <div className="flex flex-col lg:w-6/12 gap-5  text-center">
          <h1 className="text-2xl lg:text-4xl font-semibold">
            <span className="text-blue-400">Our</span> best team <br />{" "}
          </h1>
          <p className="text-gray-400">
            Our software is so simple that people can't help but fall in love
            with it. <br /> Simplicity is easy when you just skip tons of
            mission-critical features.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-5 w-full">
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
        </div>
      </div>
    </section>
  );
}
