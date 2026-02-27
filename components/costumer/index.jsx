import React from "react";

export default function Costumer() {
  return (
    <section
      id="costumer"
      className="bg-dark pb-10 lg:pb-20 pt-5 sm:pt-0 relative z-0 lamp__container"
    >
      <div className="container flex flex-col items-center justify-center gap-10 relative z-10">
        <div className="flex flex-col lg:w-6/12 gap-5 text-white text-center">
          <h1 className="text-2xl lg:text-4xl font-semibold">
            <span className="text-blue-400">Loved</span> by businesses <br />{" "}
            worldwide
          </h1>
          <p className="text-gray-400">
            Our software is so simple that people can't help but fall in love
            with it. <br /> Simplicity is easy when you just skip tons of
            mission-critical features.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-5">
          <div className="bg-white text-white bg-opacity-5 backdrop-blur-lg p-5 border-white border border-opacity-30 rounded-xl">
            <p className="text-sm  pb-5 border-b-white border-b border-opacity-30">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              deserunt obcaecati totam culpa explicabo aperiam. Suscipit ad ex
              illo beatae rem, hic nobis pariatur aliquam quaerat optio laborum
              voluptatem possimus?
            </p>
            <div className="flex items-center justify-between gap-2 pt-5">
              <div className="flex flex-col gap-1">
                <h3 className="text-sm font-medium">John Diegl</h3>
                <h4 className="text-xs font-normal text-gray-300">
                  Product Manager at IT company
                </h4>
              </div>
              <div className="w-14 h-14 rounded-full overflow-hidden">
                <img
                  src="/images/main.png"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
