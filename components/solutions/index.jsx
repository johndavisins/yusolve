// import React, { useEffect } from "react";

// export default function Solutions() {

//   return (
//     <div
//       id="solutions"
//       className="py-10 lg:py-20 bg-dark"
//       style={{ background: "url(/images/bg-white.png) #18344a center/cover" }}
//     >
//       <div className="container"></div>
//     </div>
//   );
// }
"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/animete";
import Link from "next/link";
import { GridBack } from "../Layout/grid-back";

export default function Solutions() {
  const data = [
    {
      id: 1,
      title: "Safety",
      image: "/images/truck-1.jpg",
    },
    {
      id: 2,
      title: "Fleet",
      image: "/images/truck-2.jpg",
    },
    {
      id: 3,
      title: "HR",
      image: "/images/truck-6.jpg",
    },
    {
      id: 4,
      title: "Insurance",
      image: "/images/truck-5.jpg",
    },
  ];

  return (
    <LampContainer>
      <h1 className="mt-5 text-white py-4 text-center text-4xl font-medium md:text-4xl">
        Our solutions
      </h1>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 2xl:gap-10 pt-20 solutions-container">
        {data?.map((item, index) => {
          return (
            <Link href={`/solutions/${item?.id}`} key={index}>
              <a
                role="link"
                className="solution-card flex flex-col items-start justify-end w-full rounded-3xl overflow-hidden min-h-[300px] sm:min-h-[400px] relative bg-cover bg-center transition-all duration-300 group p-7 border border-transparent hover:border-white z-0"
                style={{ backgroundImage: `url(${item?.image})` }}
              >
                <h2 className="z-10 text-white text-xl sm:text-2xl font-semibold absolute -bottom-full group-hover:bottom-7 transition-all duration-150">
                  {item?.title}
                </h2>

                <div className="w-full h-full absolute solution-card-hover bg-dark top-0 left-0 z-[-1] bg-opacity-5 backdrop-blur-sm rounded-3xl"></div>
              </a>
            </Link>
          );
        })}
      </div>
    </LampContainer>
  );
}

export const LampContainer = ({ children, className }) => {
  return (
    <div
      id="solutions"
      className={cn(
        "lamp__container relative flex flex-col items-center justify-center overflow-hidden bg-dark w-full z-0 pb-20 pt-[240px]",
        className,
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute  w-[100%] left-0 bg-dark h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute  w-40 h-[100%] left-0 bg-dark  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute  w-40 h-[100%] right-0 bg-dark  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute  w-[100%] right-0 bg-dark h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-dark blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400 "
        ></motion.div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-dark "></div>
      </div>
      <div className="relative z-50 flex -translate-y-20 flex-col items-center px-5 container">
        {children}
      </div>
    </div>
  );
};
