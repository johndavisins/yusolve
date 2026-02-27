"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/animete";
import Link from "next/link";
import { Consultation } from "..";

export default function FootBanner() {
  return (
    <LampContainer>
      <motion.h1
        // initial={{ opacity: 0, y: 100 }}
        // whileInView={{ opacity: 1, y: 0 }}
        // transition={{
        //   delay: 0.3,
        //   duration: 0.8,
        //   ease: "easeInOut",
        // }}
        className="mt-8 bg-gradient-to-br from-white to-[#4e99d2] py-4 bg-clip-text text-center text-3xl tracking-tight text-transparent md:text-5xl font-semibold z-10 relative"
      >
        Ready to Optimize <br /> Your Trucking Business ?
      </motion.h1>
      <motion.p
        // initial={{ opacity: 0, y: 100 }}
        // whileInView={{ opacity: 1, y: 0 }}
        // transition={{
        //   delay: 0.3,
        //   duration: 0.8,
        //   ease: "easeInOut",
        // }}
        className="text-gray-300 pt-3 pb-7 text-base sm:text-lg text-center"
      >
        Take the first step towards a more efficiend and profitable operation
        with YUSOLVE.
      </motion.p>
      <Consultation />
    </LampContainer>
  );
}

export const LampContainer = ({ children, className }) => {
  return (
    <div
      id="solutions"
      className={cn(
        "lamp__container relative flex flex-col items-center justify-center overflow-hidden bg-dark w-full z-0 pb-20 pt-[240px]",
        className
      )}
    >
      <div className="relative flex flex-1 scale-y-105 sm:scale-y-125 w-full items-center justify-center isolate z-0 ">
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
