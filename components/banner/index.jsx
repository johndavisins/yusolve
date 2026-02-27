import React from "react";
import { Consultation } from "..";

export default function Banner() {
  return (
    <section
      id="banner"
      className="w-full min-h-screen overflow-hidden flex items-center justify-center text-white bg-cover relative z-0 after:bg-dark after:absolute after:top-0 after:left-0 after:w-full after:h-full after:z-[-1] after:bg-opacity-30"
      // style={{ backgroundImage: "url(/images/main.png)" }}
    >
      <div className="w-full px-5 min-h-screen pb-10 sm:pb-20 md:px-0 md:max-w-[756px] mx-auto flex flex-col gap-5 items-center justify-end text-center">
        {/* <h1 className="text-3xl sm:text-5xl font-semibold">
          You keep Our Nation Running
        </h1>
        <p className="w-full sm:w-3/5 text-lg">
          Encouarging and supporting transportation enterpreneurs, just for over
          20 years !
        </p> */}
        <Consultation />
      </div>

      {/* absolute */}
      <div className="absolute top-0 left-0 w-full h-full z-[-2]">
        <video loop autoPlay muted className="w-full h-full object-cover">
          <source src="/videos/main.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
